// =============================================================================
// SyncPipeline —— Template Method + Facade
//
// 旧 sync-obsidian.mjs 把「解析参数 / 建目录 / 取文件 / 清空 / 循环同步 / 写 JSON /
// 打日志」全写在模块顶层，无 main() 守卫 —— 任何 import 都会触发破坏性清空
// （阶段 0 已踩坑：vitest 误加载清空了 332 篇线上文章）。本模块把执行体收敛进
// runSync()，仅由入口在 import.meta.url 守卫下调用，从结构上杜绝误加载副作用。
//
// runSync 固定执行骨架（Template Method）：resolve → clear → loop(build/rewrite/write)
// → aggregate → writeManifest。骨架稳定，子步骤（policy/provider/transforms）可替换。
// 新增 per-file try/catch：单篇失败只记录并跳过，不再阻断整批同步（旧实现的缺陷）。
// =============================================================================
import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fg from "fast-glob";
import readingTime from "reading-time";

import { createImageProvider } from "./imageProviders.mjs";
import { createDefaultPolicy } from "./publishRules.mjs";
import { inferTopic, inferType, normalizeType } from "./inference.mjs";
import {
  parseMatter,
  stringifyMatter,
  makeSlug,
  normalizeTags,
  toPlainText,
  rewriteInternalLinks,
  rewriteImages,
  toIsoDate
} from "./transforms.mjs";

/**
 * 解析 CLI 参数。与旧 parseArgs 等价。
 * @returns {{safe:boolean, all:boolean, publishRoots:boolean, file:string}}
 */
export function parseArgs(argv) {
  const result = { safe: false, all: false, publishRoots: false, file: "" };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--safe") result.safe = true;
    if (arg === "--all") result.all = true;
    if (arg === "--publish-roots") result.publishRoots = true;
    if (arg === "--file") result.file = argv[i + 1] || "";
  }
  return result;
}

/**
 * 执行完整同步流程。仅应由入口脚本在 main 守卫下调用。
 * @param {object} config  —— blog.config.mjs 导出的配置
 * @param {object} args    —— parseArgs 的结果
 * @returns {Promise<object>} 同步摘要（含 posts/topics/manifest）
 */
export async function runSync(config, args) {
  // pipeline.mjs 位于 scripts/sync/lib/，需向上 3 级到项目根。
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
  const postsDir = path.join(root, "src/pages/posts");
  const dataDir = path.join(root, "src/data");
  const mediaDir = path.join(root, "public/media");
  const vault = path.resolve(config.obsidian.vault);

  await mkdir(postsDir, { recursive: true });
  await mkdir(dataDir, { recursive: true });
  await mkdir(mediaDir, { recursive: true });

  const startedAt = new Date();
  const files = await resolveSourceFiles(config, args, vault);
  await clearGeneratedPosts(postsDir);

  // 注入图床 provider；local provider 需要 mediaDir 上下文（Adapter：配置内聚）。
  const provider = createImageProvider(config);
  const policy = createDefaultPolicy(config);

  const posts = [];
  let skipped = 0;
  const skippedReasons = {};
  let uploadedImages = 0;
  const errors = [];

  for (const sourcePath of files) {
    try {
      const raw = await readFile(sourcePath, "utf8");
      const parsed = parseMatter(raw);
      const explicitlyPublished = parsed.data?.[config.publish.frontmatterFlag] === true;
      const rel = path.relative(vault, sourcePath);
      const plain = toPlainText(parsed.content);

      const verdict = policy.evaluate({
        rel,
        raw,
        plain,
        explicitlyPublished,
        args
      });

      if (!verdict.ok) {
        skipped += 1;
        skippedReasons[verdict.reason] = (skippedReasons[verdict.reason] || 0) + 1;
        continue;
      }

      const meta = await buildMetadata(sourcePath, parsed, rel, plain, vault, config);
      const imageResult = await rewriteImages(
        parsed.content, sourcePath, provider, vault, config.obsidian.exclude, { mediaDir }
      );
      uploadedImages += imageResult.uploaded;
      const content = rewriteInternalLinks(imageResult.content);

      const outputPath = path.join(postsDir, `${meta.slug}.md`);
      const layoutPath = path
        .relative(path.dirname(outputPath), path.join(root, "src/layouts/PostLayout.astro"))
        .split(path.sep)
        .join("/");
      const output = stringifyMatter(
        {
          layout: layoutPath,
          title: meta.title,
          description: meta.excerpt,
          date: meta.date,
          updated: meta.updated,
          type: meta.type,
          topic: meta.topic,
          tags: meta.tags,
          readingMinutes: meta.readingMinutes,
          sourceFolder: meta.sourceFolder
        },
        content.trim() + "\n"
      );

      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, output, "utf8");
      posts.push({ ...meta, url: `/posts/${meta.slug}/` });
    } catch (err) {
      // per-file 容错：单篇失败不阻断整批（旧实现的缺陷）。
      errors.push({ file: sourcePath, message: err.message });
    }
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const topics = Array.from(
    posts.reduce((map, post) => {
      map.set(post.topic, (map.get(post.topic) || 0) + 1);
      return map;
    }, new Map())
  ).map(([name, count]) => ({ name, count }));

  const manifestData = {
    syncedAt: startedAt.toISOString(),
    vaultName: path.basename(vault),
    provider: provider.name,
    sourceFiles: files.length,
    published: posts.length,
    skipped,
    skippedReasons,
    uploadedImages,
    mode: args.file ? "single-file" : args.publishRoots ? "publish-roots" : args.all ? "all" : args.safe ? "safe" : "default"
  };

  // 产出即校验：脏数据在写入文件前就被拦截（与 src/lib/schema.mjs 同源 schema）。
  // 复用站点的 schema，保证「同步产出」与「站点消费」契约一致。
  // pipeline.mjs 位于 scripts/sync/lib/，到 src/lib/ 需向上 3 级到项目根。
  const { PostsSchema, TopicsSchema, ManifestSchema, validate } = await import("../../../src/lib/schema.mjs");
  validate(PostsSchema, posts, "sync output posts");
  validate(TopicsSchema, topics, "sync output topics");
  validate(ManifestSchema, manifestData, "sync output manifest");

  await writeJson(dataDir, "posts.json", posts);
  await writeJson(dataDir, "topics.json", topics);
  await writeJson(dataDir, "sync-manifest.json", manifestData);

  const summary = {
    published: posts.length,
    skipped,
    uploadedImages,
    provider: provider.name,
    errors
  };
  console.log(
    `Synced ${summary.published} post(s), skipped ${summary.skipped}, processed ${summary.uploadedImages} image(s) with ${summary.provider}.`
  );
  if (Object.keys(skippedReasons).length) console.log(JSON.stringify(skippedReasons, null, 2));
  if (errors.length) console.error(`${errors.length} file(s) failed:`, JSON.stringify(errors, null, 2));
  return summary;
}

async function resolveSourceFiles(config, args, vault) {
  if (args.file) {
    const requested = path.resolve(args.file);
    const relative = path.relative(vault, requested);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      throw new Error("--file must point to a Markdown file inside the configured Obsidian vault.");
    }
    return [requested];
  }
  const include = args.publishRoots
    ? config.publish.publicRoots.map((rootPath) => `${rootPath.replace(/\/$/, "")}/**/*.md`)
    : config.obsidian.include;
  const entries = await fg(include, {
    cwd: vault,
    absolute: true,
    onlyFiles: true,
    ignore: config.obsidian.exclude
  });
  return entries.sort();
}

async function clearGeneratedPosts(postsDir) {
  const entries = await readdir(postsDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.name !== ".gitkeep")
      .map((entry) => rm(path.join(postsDir, entry.name), { recursive: true, force: true }))
  );
}

async function buildMetadata(sourcePath, parsed, rel, plain, vault, config) {
  const fileStat = await stat(sourcePath);
  const firstHeading = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = String(parsed.data.title || firstHeading || path.basename(sourcePath, ".md")).trim();
  const date = toIsoDate(parsed.data.date || parsed.data.created || fileStat.birthtime);
  const updated = toIsoDate(parsed.data.updated || parsed.data.modified || fileStat.mtime);
  const excerpt = String(parsed.data.description || plain.slice(0, 120)).replace(/\s+/g, " ").trim();
  const tags = normalizeTags(parsed.data.tags);
  const topic = String(parsed.data.topic || tags[0] || inferTopic(rel, config.publish.defaultTopic));
  // type：frontmatter 优先，否则推断；统一经 normalizeType 规范化到三态（修复英文残留 bug）。
  const rawType = parsed.data.type || inferType(rel, plain);
  const type = normalizeType(rawType, config.publish.defaultType);
  const stats = readingTime(plain);
  return {
    title,
    date,
    updated,
    type,
    topic,
    tags,
    excerpt,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    wordCount: plain.length,
    slug: makeSlug(rel, title),
    sourceFolder: path.dirname(rel) === "." ? "Vault 根目录" : path.dirname(rel)
  };
}

async function writeJson(dataDir, file, value) {
  await writeFile(path.join(dataDir, file), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}
