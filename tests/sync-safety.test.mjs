import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// =============================================================================
// 同步脚本安全契约
//
// 触发原因：阶段 0 建立回归基线时，vitest 误把 scripts/sync-obsidian.mjs 当测试
// 文件 import 执行，导致其顶层命令式代码运行 —— clearGeneratedPosts() 清空了
// 已上线的 332 篇 src/pages/posts/，并把 posts.json 写成 []。幸而已提交到 git
// 才得以恢复。这暴露了一个高危缺陷：
//
//   「同步脚本是顶层命令式执行 + 破坏性清空，任何误加载都会摧毁线上内容」
//
// 本组用【静态分析】锁定脚本结构契约（不实际 import，避免再次触发副作用），
// 作为阶段 2「同步管线封装」必须满足的安全前置条件。阶段 2 把执行体包进
// main() 并加守卫后，这里的相关断言需相应更新。
// =============================================================================

const here = path.dirname(fileURLToPath(import.meta.url));
const scriptPath = path.resolve(here, "../scripts/sync-obsidian.mjs");
const source = readFileSync(scriptPath, "utf8");

describe("同步脚本结构安全契约（静态分析）", () => {
  it("脚本存在且非空", () => {
    expect(source.length).toBeGreaterThan(0);
  });

  // —— 防误加载：阶段 2 已修复 —— 入口现在用 import.meta.url 守卫，import 无副作用。
  it("入口脚本包含 main 守卫（import 时无副作用）", () => {
    expect(source).toMatch(/process\.argv\[1\]/);
    expect(source).toMatch(/import\.meta\.url/);
  });

  it("入口脚本是薄入口：不含破坏性函数名（清空/遍历已移入 lib/pipeline）", () => {
    // 阶段 2 后，clearGeneratedPosts / resolveSourceFiles 等只在 lib/pipeline.mjs 内。
    // 入口若再次出现这些词，说明执行体又泄漏回了顶层 —— 必须失败。
    for (const dangerous of ["clearGeneratedPosts", "resolveSourceFiles"]) {
      expect(source, `入口不应含 ${dangerous}`).not.toContain(dangerous);
    }
  });
});

describe("同步管线模块导出契约（阶段 2 重构后能力保留）", () => {
  // 阶段 2 把纯函数拆到 lib/ 模块。这里验证新模块导出了全部原有能力符号，
  // 确保行为等价重构不会悄悄删除函数。import 这些模块是安全的（无顶层副作用）。
  it("入口 re-export parseArgs / runSync", async () => {
    const mod = await import("../scripts/sync-obsidian.mjs");
    expect(mod.parseArgs).toBeTypeOf("function");
    expect(mod.runSync).toBeTypeOf("function");
  });

  it("transforms 模块导出全部纯转换函数", async () => {
    const mod = await import("../scripts/sync/lib/transforms.mjs");
    for (const name of ["parseMatter", "stringifyMatter", "makeSlug", "rewriteInternalLinks", "rewriteImages", "normalizeTags", "toPlainText", "resolveAsset", "toIsoDate"]) {
      expect(mod[name], `transforms.${name} 缺失`).toBeTypeOf("function");
    }
  });

  it("publishRules 导出策略链与默认 policy 构造器", async () => {
    const mod = await import("../scripts/sync/lib/publishRules.mjs");
    expect(mod.PublishPolicy).toBeTypeOf("function");
    expect(mod.createDefaultPolicy).toBeTypeOf("function");
  });

  it("imageProviders 导出 registry 与 createImageProvider", async () => {
    const mod = await import("../scripts/sync/lib/imageProviders.mjs");
    expect(mod.createImageProvider).toBeTypeOf("function");
    expect(mod.registerImageProvider).toBeTypeOf("function");
  });
});
