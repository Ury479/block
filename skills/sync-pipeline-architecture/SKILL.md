---
name: sync-pipeline-architecture
description: Refactor or extend the Obsidian-to-blog sync pipeline (scripts/sync/lib). Documents the Strategy/Registry image providers, Chain-of-Responsibility publish rules, rule-table topic/type inference, Template-Method pipeline, and the thin entry + main guard that prevents accidental destructive imports. Use when adding a new image provider, a new publish rule, a new type/topic keyword, or changing how posts are generated.
---

# Sync Pipeline Architecture（同步管线架构）

## 设计目标

把原来 398 行的单文件 `sync-obsidian.mjs`（顶层命令式 + 破坏性清空，违反开闭）重构为**遵循开闭原则**的模块化管线，同时**行为完全等价**（重跑同步：slug/url/topic 零变化）。

## 模块结构

```
scripts/
├── sync-obsidian.mjs          # 薄入口：仅 main 守卫 + parseArgs + 调用 runSync
└── sync/lib/
    ├── imageProviders.mjs     # Strategy + Registry（图床）
    ├── publishRules.mjs       # Chain of Responsibility（发布策略）
    ├── inference.mjs          # 规则表（topic/type 推断 + normalizeType 规范化）
    ├── transforms.mjs         # 纯函数（parseMatter/makeSlug/rewriteImages…）
    └── pipeline.mjs           # Template Method Facade（runSync 主流程）
```

## 设计模式与开闭体现

| 模式 | 位置 | 如何扩展（不改既有代码） |
|---|---|---|
| **Strategy + Registry** | `imageProviders.mjs` | 新增图床：`registerImageProvider("s3", factory)`，无需改 `createImageProvider` |
| **Chain of Responsibility** | `publishRules.mjs` | 新增发布规则：`policy.add(rule)`，无需改 `shouldPublish`（已不存在） |
| **规则表** | `inference.mjs` | 新增 topic/type 关键词：往 `TOPIC_RULES`/`TYPE_RULES` 追加表项 |
| **Template Method** | `pipeline.mjs#runSync` | 流程骨架固定，子步骤（policy/provider/transforms）可注入替换 |
| **Facade** | `sync-obsidian.mjs` | 外部只调用 `npm run sync*`，内部组合各协作器 |
| **main 守卫** | `sync-obsidian.mjs` | `if (isMain)` 保证 import 无副作用，杜绝误加载清空 |

## 关键安全修复

**薄入口 + main 守卫**：旧版执行体在模块顶层，任何 import 都会触发 `clearGeneratedPosts()` 清空线上文章（阶段 0 已踩坑）。现在所有破坏性操作封在 `runSync()` 内，入口用 `import.meta.url === process.argv[1]` 守卫，import 完全无副作用。

**per-file try/catch**：单篇文件失败只记录到 `errors[]` 并跳过，不再阻断整批同步（旧实现的缺陷——一篇上传失败会中断全部）。

## 已修复的数据 bug

**英文残留 type 规范化**：10 篇文章的 type 曾是 `weekly-review`/`programming-daily-review`/`daily-review`（源自 Obsidian 源 frontmatter 的英文值）。AGENTS.md 约束源库只读，故在 `inference.mjs#normalizeType` 加映射表，同步时自动归回三态。三态合计从 322 回到 332。

## 扩展指南

### 新增图床（如 S3）
```js
// scripts/sync/lib/imageProviders.mjs 末尾追加：
registerImageProvider("s3", (env, cfg) => ({
  name: "s3",
  async upload(filePath) { /* ... 返回公开 URL ... */ }
}));
```
然后在 `blog.config.mjs#imageBed.provider` 设为 `"s3"`。无需改任何其他文件。

### 新增发布规则
```js
// publishRules.mjs 定义规则后，在 createDefaultPolicy 链中 .add()：
policy.add(myCustomRule());
```

### 新增 type 推断关键词
```js
// inference.mjs 的 TYPE_RULES 追加：
{ re: /你的关键词/i, type: "思考" }
```

## 等价性验证方法

任何改动同步管线的 PR，必须执行：
```bash
git show HEAD:src/data/posts.json > /tmp/baseline.json   # 改动前基线
npm run sync:publish-roots                                 # 改动后重跑
diff /tmp/baseline.json src/data/posts.json                # 核对差异
```
预期：`slug`/`url`/`topic` 零变化；仅允许 `type`（规范化）、`updated`（源 mtime）、`syncedAt`（时间戳）的预期变化。

## 测试

- `tests/sync-transforms.test.mjs`：33 个纯函数行为契约（parseMatter/makeSlug/rewriteInternalLinks/inferTopic/normalizeType/PublishPolicy…）
- `tests/sync-safety.test.mjs`：薄入口契约（main 守卫、无破坏性词、模块导出）

`npm test` 必须 67 测试全绿，`npm run test:all` 必须全绿，才允许合并。
