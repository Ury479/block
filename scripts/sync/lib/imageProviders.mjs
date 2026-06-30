// =============================================================================
// 图床 Provider —— Strategy + Registry（开闭原则）
//
// 旧实现 createImageProvider() 是 if/else 工厂：新增图床（如 S3/OSS）必须改函数体，
// 违反开闭。这里把每个 provider 做成独立 Strategy，实现统一契约 ImageProvider，
// 通过 registerImageProvider(name, factory) 注册到 registry；createImageProvider
// 只查表，不再随 provider 增长而修改。
//
// 每个 provider 的配置（endpoint/token/bin 等）从 config.imageBed.providers[name]
// 块自取（Adapter：配置内聚，不再散落到 process.env 各处）。
// =============================================================================
import crypto from "node:crypto";
import { execFile } from "node:child_process";
import { copyFile, readFile } from "node:fs/promises";
import path from "node:path";

/**
 * @typedef {Object} ImageProvider
 * @property {string} name          —— 供 manifest 记录的 provider 标识
 * @property {(filePath: string) => Promise<string>} upload  —— 返回公开可访问 URL
 */

// Registry：name -> factory(env, providerConfig) => ImageProvider
const registry = new Map();

/**
 * 注册一个图床 provider 工厂。新增图床只需调用本函数，无需改动 createImageProvider。
 * @param {string} name
 * @param {(env: object, cfg: object) => ImageProvider} factory
 */
export function registerImageProvider(name, factory) {
  registry.set(name, factory);
}

/**
 * 按 config.imageBed.provider（或环境变量 IMAGE_BED_PROVIDER）创建 provider。
 * 对外接口与旧 createImageProvider 完全一致：默认 "local"。
 */
export function createImageProvider(config) {
  const name = config.imageBed.provider;
  const factory = registry.get(name);
  if (!factory) {
    throw new Error(`Unknown image provider "${name}". Registered: ${[...registry.keys()].join(", ")}.`);
  }
  return factory(process.env, config.imageBed.providers?.[name] || {});
}

// —— 内置 provider 注册（开闭：新增 provider 只追加 register 调用）——

// local：复制到 public/media/<sha1-16>.<ext>，返回 /media/<name>
registerImageProvider("local", (env, cfg) => {
  // mediaDir / localPublicPrefix 在 pipeline 注入的 cfg 里；此处保留默认。
  return {
    name: "local",
    async upload(filePath, ctx = {}) {
      const mediaDir = ctx.mediaDir || cfg.mediaDir;
      const prefix = cfg.localPublicPrefix || "/media";
      const hash = crypto.createHash("sha1").update(await readFile(filePath)).digest("hex").slice(0, 16);
      const ext = path.extname(filePath).toLowerCase();
      const name = `${hash}${ext}`;
      await copyFile(filePath, path.join(mediaDir, name));
      return `${prefix}/${name}`;
    }
  };
});

// picgo：调用本机 PicGo CLI
registerImageProvider("picgo", (env, cfg) => {
  const bin = cfg.bin || env.PICGO_BIN || "picgo";
  return {
    name: "picgo",
    async upload(filePath) {
      const stdout = await execFileText(bin, ["upload", filePath]);
      const url = stdout.match(/https?:\/\/\S+/)?.[0];
      if (!url) throw new Error("PicGo did not return a public image URL.");
      return url;
    }
  };
});

// lsky：Lsky Pro API
registerImageProvider("lsky", (env, cfg) => {
  const endpoint = cfg.endpoint || env.LSKY_ENDPOINT;
  const token = cfg.token || env.LSKY_TOKEN;
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
});

function execFileText(bin, argv) {
  return new Promise((resolve, reject) => {
    execFile(bin, argv, { encoding: "utf8" }, (error, stdout, stderr) => {
      if (error) reject(new Error(stderr || error.message));
      else resolve(stdout);
    });
  });
}
