// =============================================================================
// 纯转换函数（行为等价迁移自旧 sync-obsidian.mjs）
//
// 这里集中所有无副作用（或副作用仅由注入 collaborator 决定）的转换：frontmatter
// 解析、slug 生成、图片改写、双链改写、标签归一、纯文本化、资产定位。
// 算法与旧实现逐字等价；之所以抽出来，是为了让 SyncPipeline（pipeline.mjs）能
// 注入不同的 provider/resolver，也便于阶段 0 的 tests/sync-safety.test.mjs 锁定契约。
// =============================================================================
import crypto from "node:crypto";
import { stat } from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import YAML from "yaml";

export const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg"]);

/** 解析 YAML frontmatter；无 fence 则 data 为空对象。与旧 parseMatter 等价。 */
export function parseMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, content: raw };
  return {
    data: YAML.parse(match[1]) || {},
    content: raw.slice(match[0].length)
  };
}

/** 把 data + content 重新序列化成 frontmatter 文档。与旧 stringifyMatter 等价。 */
export function stringifyMatter(data, content) {
  return `---\n${YAML.stringify(data).trim()}\n---\n\n${content}`;
}

/**
 * 生成 slug：相对路径各段做 NFKC/去符号/连字符化后用 / 拼接；空则回退 sha1 前 7 位。
 * 与旧 makeSlug 逐字等价（保留中文、保留目录层级）。
 */
export function makeSlug(rel, title) {
  const base = rel
    .replace(/\.md$/i, "")
    .split(path.sep)
    .map((part) =>
      part
        .normalize("NFKC")
        .replace(/\s+/g, "-")
        .replace(/[<>:"\\|?*#%{}^~[\]`]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    )
    .filter(Boolean)
    .join("/");
  const hash = crypto.createHash("sha1").update(`${rel}:${title}`).digest("hex").slice(0, 7);
  return base || hash;
}

/** 标签归一：数组或逗号/空格分隔字符串，去掉前导 #。与旧 normalizeTags 等价。 */
export function normalizeTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(String).map((tag) => tag.replace(/^#/, ""));
  return String(tags)
    .split(/[,\s]+/)
    .filter(Boolean)
    .map((tag) => tag.replace(/^#/, ""));
}

/** 把 Markdown 去标记成纯文本（用于摘要、字数、阅读时间）。与旧 toPlainText 等价。 */
export function toPlainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[\[[^\]]+\]\]/g, " ")
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, "$2$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#>*_`~\-\[\]()>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * 把 Obsidian 双链 [[target|label]] 改写成归档搜索链接。与旧 rewriteInternalLinks 等价。
 * 注意：必须在 rewriteImages 之后调用（图片 ![[...]] 已被先行消费）。
 */
export function rewriteInternalLinks(content) {
  return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    const text = label || target;
    return `[${text}](/archive/?q=${encodeURIComponent(target)})`;
  });
}

/**
 * 定位图片资产：依次尝试「相对笔记目录 / vault 根 / vault 根 basename」，
 * 再退回全库 glob。与旧 resolveAsset 等价（错误静默吞掉，返回 null）。
 */
export async function resolveAsset(target, sourcePath, vault, exclude) {
  const clean = target.split("#")[0];
  if (!IMAGE_EXTS.has(path.extname(clean).toLowerCase())) return null;
  const candidates = [
    path.resolve(path.dirname(sourcePath), clean),
    path.resolve(vault, clean),
    path.resolve(vault, path.basename(clean))
  ];
  for (const candidate of candidates) {
    try {
      const item = await stat(candidate);
      if (item.isFile()) return candidate;
    } catch {}
  }
  const matches = await fg(`**/${path.basename(clean)}`, {
    cwd: vault,
    absolute: true,
    onlyFiles: true,
    ignore: exclude
  });
  return matches[0] || null;
}

/**
 * 改写图片语法：Obsidian wiki 图片 ![[x]] 和 Markdown 图片 ![](x)，逐个上传到
 * provider 并替换为公开 URL。返回 { content, uploaded }。与旧 rewriteImages 等价。
 * provider 需实现 { upload(filePath, ctx?) }；ctx 携带 mediaDir 供 local provider。
 */
export async function rewriteImages(content, sourcePath, provider, vault, exclude, ctx = {}) {
  let uploaded = 0;
  let next = content;

  const wikiMatches = [...next.matchAll(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)];
  for (const match of wikiMatches) {
    const target = decodeURIComponent(match[1].trim());
    const imagePath = await resolveAsset(target, sourcePath, vault, exclude);
    if (!imagePath) continue;
    const url = await provider.upload(imagePath, ctx);
    uploaded += 1;
    next = next.replace(match[0], `![${path.basename(target)}](${url})`);
  }

  const mdMatches = [...next.matchAll(/!\[([^\]]*)\]\((?!https?:\/\/|\/|#)([^)]+)\)/g)];
  for (const match of mdMatches) {
    const target = decodeURIComponent(match[2].trim().replace(/^<|>$/g, ""));
    const imagePath = await resolveAsset(target, sourcePath, vault, exclude);
    if (!imagePath) continue;
    const url = await provider.upload(imagePath, ctx);
    uploaded += 1;
    next = next.replace(match[0], `![${match[1]}](${url})`);
  }

  return { content: next, uploaded };
}

/** Date / 字符串 → ISO；无效则当前时间。与旧 toIsoDate 等价。 */
export function toIsoDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}
