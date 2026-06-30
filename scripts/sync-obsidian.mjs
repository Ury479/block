import crypto from "node:crypto";
import { execFile } from "node:child_process";
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fg from "fast-glob";
import readingTime from "reading-time";
import YAML from "yaml";
import config from "../blog.config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const postsDir = path.join(root, "src/pages/posts");
const dataDir = path.join(root, "src/data");
const mediaDir = path.join(root, "public/media");
const args = parseArgs(process.argv.slice(2));
const vault = path.resolve(config.obsidian.vault);
const imageExts = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg"]);

await mkdir(postsDir, { recursive: true });
await mkdir(dataDir, { recursive: true });
await mkdir(mediaDir, { recursive: true });

const startedAt = new Date();
const files = await resolveSourceFiles();
await clearGeneratedPosts();

const provider = createImageProvider();
const posts = [];
let skipped = 0;
const skippedReasons = {};
let uploadedImages = 0;

for (const sourcePath of files) {
  const raw = await readFile(sourcePath, "utf8");
  const parsed = parseMatter(raw);
  const explicitlyPublished = parsed.data?.[config.publish.frontmatterFlag] === true;
  const publishCheck = shouldPublish(sourcePath, parsed, raw, explicitlyPublished);

  if (!publishCheck.ok) {
    skipped += 1;
    skippedReasons[publishCheck.reason] = (skippedReasons[publishCheck.reason] || 0) + 1;
    continue;
  }

  const meta = await buildMetadata(sourcePath, parsed);
  const imageResult = await rewriteImages(parsed.content, sourcePath, provider);
  uploadedImages += imageResult.uploaded;
  const content = rewriteInternalLinks(imageResult.content);
  const outputPath = path.join(postsDir, `${meta.slug}.md`);
  const layoutPath = path
    .relative(path.dirname(outputPath), path.join(root, "src/layouts/PostLayout.astro"))
    .split(path.sep)
    .join("/");
  const output = stringifyMatter({
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
  }, content.trim() + "\n");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, output, "utf8");
  posts.push({
    ...meta,
    url: `/posts/${meta.slug}/`
  });
}

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const topics = Array.from(
  posts.reduce((map, post) => {
    map.set(post.topic, (map.get(post.topic) || 0) + 1);
    return map;
  }, new Map())
).map(([name, count]) => ({ name, count }));

await writeJson("posts.json", posts);
await writeJson("topics.json", topics);
await writeJson("sync-manifest.json", {
  syncedAt: startedAt.toISOString(),
  vaultName: path.basename(vault),
  provider: provider.name,
  sourceFiles: files.length,
  published: posts.length,
  skipped,
  skippedReasons,
  uploadedImages,
  mode: args.file ? "single-file" : args.publishRoots ? "publish-roots" : args.all ? "all" : args.safe ? "safe" : "default"
});

console.log(
  `Synced ${posts.length} post(s), skipped ${skipped}, processed ${uploadedImages} image(s) with ${provider.name}.`
);
if (Object.keys(skippedReasons).length) console.log(JSON.stringify(skippedReasons, null, 2));

function parseArgs(argv) {
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

function parseMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, content: raw };
  return {
    data: YAML.parse(match[1]) || {},
    content: raw.slice(match[0].length)
  };
}

function stringifyMatter(data, content) {
  return `---\n${YAML.stringify(data).trim()}\n---\n\n${content}`;
}

async function resolveSourceFiles() {
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

function shouldPublish(sourcePath, parsed, raw, explicitlyPublished) {
  if (args.file || args.all) return { ok: true };
  const rel = path.relative(vault, sourcePath);
  const plain = toPlainText(parsed.content);

  if (isDenied(rel)) return { ok: false, reason: "deny-pattern" };
  if (hasDeniedContent(raw)) return { ok: false, reason: "sensitive-content" };
  if (plain.length < (config.publish.minChars || 0)) return { ok: false, reason: "too-short" };
  if (args.publishRoots) return { ok: true };
  if (args.safe && !explicitlyPublished) return { ok: false, reason: "missing-publish-flag" };
  if (config.publish.safeByDefault && !explicitlyPublished) return { ok: false, reason: "missing-publish-flag" };
  return { ok: true };
}

function isDenied(rel) {
  return config.publish.denyPatterns.some((pattern) =>
    rel.toLowerCase().includes(String(pattern).toLowerCase())
  );
}

function hasDeniedContent(raw) {
  return (config.publish.contentDenyRegexes || []).some((pattern) => {
    const regex = new RegExp(pattern, "i");
    return regex.test(raw);
  });
}

async function clearGeneratedPosts() {
  const entries = await readdir(postsDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.name !== ".gitkeep")
      .map((entry) => rm(path.join(postsDir, entry.name), { recursive: true, force: true }))
  );
}

async function buildMetadata(sourcePath, parsed) {
  const fileStat = await stat(sourcePath);
  const rel = path.relative(vault, sourcePath);
  const firstHeading = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = String(parsed.data.title || firstHeading || path.basename(sourcePath, ".md")).trim();
  const date = toIsoDate(parsed.data.date || parsed.data.created || fileStat.birthtime);
  const updated = toIsoDate(parsed.data.updated || parsed.data.modified || fileStat.mtime);
  const plain = toPlainText(parsed.content);
  const excerpt = String(parsed.data.description || plain.slice(0, 120)).replace(/\s+/g, " ").trim();
  const tags = normalizeTags(parsed.data.tags);
  const topic = String(parsed.data.topic || tags[0] || inferTopic(rel) || config.publish.defaultTopic);
  const type = String(parsed.data.type || inferType(rel, plain));
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

function toIsoDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function normalizeTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map(String).map((tag) => tag.replace(/^#/, ""));
  return String(tags)
    .split(/[,\s]+/)
    .filter(Boolean)
    .map((tag) => tag.replace(/^#/, ""));
}

function inferType(rel, plain) {
  if (/成功日记|日报|复盘|周复盘|now|现在/i.test(rel)) return "手记";
  if (/恒洋听课笔记|听课|课程|讲座/i.test(rel)) return "文稿";
  if (/错题|报错|bug|问题|混淆点/i.test(rel)) return "思考";
  if (/日报|复盘|now|现在/i.test(rel)) return "手记";
  if (plain.length < 800) return "思考";
  return config.publish.defaultType;
}

function inferTopic(rel) {
  const parts = rel.split(path.sep);
  if (rel.includes(`个人管理${path.sep}成功日记`)) return "成功日记";
  if (rel.includes(`个人管理${path.sep}恒洋听课笔记`)) return "恒洋听课笔记";
  if (parts[0] === "计算机编程" && parts[1]) return parts[1];
  return parts[0];
}

function toPlainText(markdown) {
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

function makeSlug(rel, title) {
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

async function rewriteImages(content, sourcePath, provider) {
  let uploaded = 0;
  let next = content;
  const wikiMatches = [...next.matchAll(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)];
  for (const match of wikiMatches) {
    const target = decodeURIComponent(match[1].trim());
    const imagePath = await resolveAsset(target, sourcePath);
    if (!imagePath) continue;
    const url = await provider.upload(imagePath);
    uploaded += 1;
    next = next.replace(match[0], `![${path.basename(target)}](${url})`);
  }

  const mdMatches = [...next.matchAll(/!\[([^\]]*)\]\((?!https?:\/\/|\/|#)([^)]+)\)/g)];
  for (const match of mdMatches) {
    const target = decodeURIComponent(match[2].trim().replace(/^<|>$/g, ""));
    const imagePath = await resolveAsset(target, sourcePath);
    if (!imagePath) continue;
    const url = await provider.upload(imagePath);
    uploaded += 1;
    next = next.replace(match[0], `![${match[1]}](${url})`);
  }

  return { content: next, uploaded };
}

function rewriteInternalLinks(content) {
  return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    const text = label || target;
    return `[${text}](/archive/?q=${encodeURIComponent(target)})`;
  });
}

async function resolveAsset(target, sourcePath) {
  const clean = target.split("#")[0];
  if (!imageExts.has(path.extname(clean).toLowerCase())) return null;
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
    ignore: config.obsidian.exclude
  });
  return matches[0] || null;
}

function createImageProvider() {
  const provider = config.imageBed.provider;
  if (provider === "picgo") return createPicgoProvider();
  if (provider === "lsky") return createLskyProvider();
  return createLocalProvider();
}

function createLocalProvider() {
  return {
    name: "local",
    async upload(filePath) {
      const hash = crypto.createHash("sha1").update(await readFile(filePath)).digest("hex").slice(0, 16);
      const ext = path.extname(filePath).toLowerCase();
      const name = `${hash}${ext}`;
      await copyFile(filePath, path.join(mediaDir, name));
      return `${config.imageBed.localPublicPrefix}/${name}`;
    }
  };
}

function createPicgoProvider() {
  const bin = process.env.PICGO_BIN || "picgo";
  return {
    name: "picgo",
    async upload(filePath) {
      const stdout = await execFileText(bin, ["upload", filePath]);
      const url = stdout.match(/https?:\/\/\S+/)?.[0];
      if (!url) throw new Error("PicGo did not return a public image URL.");
      return url;
    }
  };
}

function createLskyProvider() {
  const endpoint = process.env.LSKY_ENDPOINT;
  const token = process.env.LSKY_TOKEN;
  if (!endpoint || !token) throw new Error("LSKY_ENDPOINT and LSKY_TOKEN are required.");
  return {
    name: "lsky",
    async upload(filePath) {
      const body = new FormData();
      const blob = new Blob([await readFile(filePath)]);
      body.append("file", blob, path.basename(filePath));
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body
      });
      if (!response.ok) throw new Error(`Lsky upload failed with ${response.status}.`);
      const json = await response.json();
      const url = json?.data?.links?.url || json?.data?.url;
      if (!url) throw new Error("Lsky response did not include a URL.");
      return url;
    }
  };
}

function execFileText(bin, argv) {
  return new Promise((resolve, reject) => {
    execFile(bin, argv, { encoding: "utf8" }, (error, stdout, stderr) => {
      if (error) reject(new Error(stderr || error.message));
      else resolve(stdout);
    });
  });
}

async function writeJson(file, value) {
  await writeFile(path.join(dataDir, file), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}
