---
name: regression-testing
description: Establish and run the regression baseline for this Astro blog before any refactor or new feature. Covers Vitest data-contract/safety tests, Playwright page smoke + mobile overflow checks, and the hard rule that no new feature ships until existing behavior is locked green. Use before refactoring the sync pipeline, changing siteModel.js, touching global.css, or deploying.
---

# Regression Testing（回归前置）

## 核心铁律

**新功能的开发必须建立在原有功能稳定的基础之上。** 在没有对旧功能进行完整的回归测试和 bug 修复之前，禁止开发新的功能。

每次回归必须全绿，才能进入下一个阶段。

## 何时使用

- 任何重构（同步管线封装、schema 化、设计系统）之前。
- 修改 `src/lib/siteModel.js`、`scripts/sync-obsidian.mjs`、`src/styles/global.css` 之前。
- 修复 bug 之后，确认未引入回归。
- 部署到 Vercel 之前。

## 命令

```bash
# 完整回归（最快确认整体健康）
npm run test:all        # = vitest + build + playwright 冒烟

# 分步
npm test                # 仅 Vitest（数据契约 + siteModel + 同步安全）
npm run build           # Astro 构建
npm run test:e2e        # Playwright 冒烟（需先 build）
```

前置：使用 Node ≥ 22.12（Astro 7 要求）。用 `nvm use 22` 切换。

## 测试分层

| 层 | 工具 | 文件 | 锁定什么 |
|---|---|---|---|
| 数据契约 | Vitest | `tests/data-contract.test.mjs` | 332 篇文章字段集、15 主题、manifest 不变量；已知 bug 的真实分布 |
| Facade | Vitest | `tests/siteModel.test.mjs` | `getRecentPosts`/`getStats`/`getCollections`/`apiResponse` 等选择器返回形状 |
| 同步安全 | Vitest | `tests/sync-safety.test.mjs` | 同步脚本结构契约（防误加载清空）+ 纯函数清单 |
| 页面冒烟 | Playwright | `scripts/qa-smoke.mjs` | 关键页 200 + 标题命中 + 移动端无横向溢出 |

## 设计原则

1. **锁定真实状态，而非理想状态**：对已知 bug（如 10 篇英文残留 type、generatedAt 字段名），测试如实断言「当前真实值」，并在注释标明「阶段 X 修复后需更新」。这样 bug 修复会让测试变红，强制人工审查确认「我知道我改了什么」。
2. **聚焦快照，避免快照膨胀**：只快照形状和数量等稳定量，不快照 332 篇正文（Vitest 社区共识）。
3. **静态分析高危脚本**：`sync-obsidian.mjs` 顶层命令式执行 + 破坏性清空，绝不能用 `import` 测试，否则会清空线上内容（见下方血泪教训）。改用正则静态分析锁定其结构。

## 血泪教训：脚本误加载清空线上内容

阶段 0 建立基线时，Vitest 的 include 模式 `scripts/**/*.{test,mjs,js}` 误匹配了 `sync-obsidian.mjs`，导致其顶层代码在测试加载时执行 —— `clearGeneratedPosts()` 清空了已上线的 332 篇 `src/pages/posts/`，并把 `posts.json` 写成 `[]`。幸而内容已提交 git 才得以恢复。

**根因**：同步脚本是「顶层命令式执行 + 破坏性清空」，任何误加载都会摧毁线上内容。

**防护**：
- Vitest include 只匹配 `*.test.mjs` 后缀。
- `tests/sync-safety.test.mjs` 用静态分析锁定「脚本顶层存在破坏性调用」这一缺陷，作为阶段 2 必须修复的前置条件。
- 阶段 2 必须把执行体包进 `main()` 并加 `import.meta.url` 守卫。

## 已知 bug（阶段 0 锁定，后续阶段修复）

| Bug | 当前状态 | 修复阶段 |
|---|---|---|
| 10 篇 type 为英文残留（weekly-review 等） | 测试锁定 322 三态 + 10 残留 | 阶段 2 同步管线规范化 |
| 同步脚本顶层破坏性执行、无 main 守卫 | 测试锁定缺陷存在 | 阶段 2 封装 |

## 修复 bug 的工作流（TDD）

1. 测试先锁定当前【错误】行为（绿）。
2. 改代码修 bug。
3. 把测试断言改为期望【正确】值。
4. 跑回归确认全绿。

例：BUG 2（generatedAt 字段名）—— `siteModel.test.mjs` 先 `expect(...).toBeNull()`，修 `siteModel.js:96` 后改为 `expect(...).toBe(manifest.syncedAt)`。

## 验证清单

- [ ] `nvm use 22`
- [ ] `npm test` → 38 通过
- [ ] `npm run build` → 339 页无错误
- [ ] `npm run test:e2e` → 桌面 8 页 + 移动 7 页无溢出
- [ ] 工作区 `src/data/*.json`、`src/pages/posts/` 未被误清空（`git status` 核对）
