// =============================================================================
// 同步入口（薄入口 + main 守卫）
//
// 真正的同步逻辑在 scripts/sync/lib/pipeline.mjs 的 runSync()。本文件只负责：
// 1. 判断是否作为脚本直接运行（import.meta.url 守卫）—— 杜绝被误 import 时触发副作用；
// 2. 解析 CLI 参数；
// 3. 调用 runSync。
//
// 历史教训（见 skills/regression-testing/SKILL.md）：旧版本把全部执行体写在模块顶层，
// 测试误加载时触发了破坏性清空，删光了 332 篇线上文章。现在 import 本文件是完全
// 无副作用的 —— 所有破坏性操作都封在 lib/pipeline.mjs 的 runSync() 内，仅 main 守卫下执行。
// =============================================================================
import { fileURLToPath } from "node:url";
import config from "../blog.config.mjs";
import { parseArgs, runSync } from "./sync/lib/pipeline.mjs";

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

// 仅当作为脚本直接运行时执行（node scripts/sync-obsidian.mjs ...）。
// 被 import 时不产生任何副作用。
if (isMain) {
  const args = parseArgs(process.argv.slice(2));
  runSync(config, args).catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
}

export { parseArgs, runSync };
