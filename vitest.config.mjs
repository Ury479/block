import { defineConfig } from "vitest/config";

// 回归测试基线配置。
// 本项目是纯静态 Astro 站点 + Node 同步脚本，没有前端框架运行时，
// 因此测试策略是「数据契约快照 + 纯函数单测」，而不是组件渲染测试。
// 见 docs/architecture.md「回归测试策略」与 AGENTS.md「回归前置」。
export default defineConfig({
  test: {
    // 测试文件统一用 .test.mjs 后缀；只匹配该后缀，避免把 scripts/ 下的
    // 顶层命令式脚本（sync-obsidian.mjs）误当测试文件执行。
    include: ["tests/**/*.test.mjs", "scripts/**/*.test.mjs"],
    environment: "node",
    // posts.json / topics.json 形状稳定后才允许更新快照，
    // 避免不经审查地覆盖回归基线。
    globals: false
  }
});
