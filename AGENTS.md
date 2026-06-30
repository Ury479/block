# Project Agent Guide

## 发布原则

- Obsidian 源库永远只读；同步脚本只能向站点目录写公开副本。
- 云端构建不得访问本地 Obsidian。Vercel 使用 `npm run build`，本地内容发布使用 `npm run sync:publish-roots` 后提交生成文件。
- 生成的 `src/pages/posts/` 和 `public/media/` 必须提交到仓库，否则 Vercel 无法部署文章和图片。

## 内容安全

- 批量发布前必须运行同步器内置过滤：路径黑名单、内容黑名单、过短内容过滤。
- 不发布包含密钥、私钥、token、password、`.env`、登录凭据、模板的文件。
- 敏感扫描只报告路径和数量，不打印疑似密钥值。
- 若发现真实密码、私钥、API key，先阻断发布，再让用户在源库中轮换/清理。

## 重复开发教训

- 不要把 `build` 绑定到本地同步；这会让 Vercel 云端构建失败。
- 不要只生成文章而忽略 `.gitignore`；文章和媒体如果被忽略，线上仍然是空博客。
- 不要只按一级目录生成主题；大目录会把知识地图压扁，应该按业务栏目推导 topic。
- 不要先追求全量公开；先做安全过滤，再做视觉升级和部署。
- 不要用一次性命令散落发布规则；公开目录、黑名单、最小字数必须沉淀到 `blog.config.mjs`。
- 不要在页面里重复写服务卡、合集和统计；新增可售服务或公开合集时优先扩展 `src/lib/siteModel.js`。
- 不要破坏 `/api/v1` 响应结构；需要动态查询或分页时新增 `/api/v2`。
- RSS 里的 title、description、link、guid 都必须走 XML 转义；路径中出现 `&` 会直接导致浏览器 XML parse error。
- RSS 还必须 sanitize 非法 XML 1.0 控制字符；`@astrojs/rss` 不剥离它们，源笔记正文偶含此类字符会让 RSS 解析器报错，故保留 `sanitizeXml()` 预处理。
- RSS 站点 URL 必须用 `context.site`（astro.config），不要再 `config.site.url.replace(/\/$/,"")`，避免尾斜杠不一致导致 link/guid 漂移。
- 暗色模式用「直接覆盖原始 token」策略（`[data-theme="dark"]` 改 `--paper`/`--ink` 等），组件样式零改动；主题初始化必须放在 `BaseLayout` head 的 `is:inline` 脚本里，否则会 FOUC 闪白。
- 翻译能力优先复用 `i18n-jsautotranslate`，不要手写大段中英词典或自建翻译引擎。
- 不要用 `import` 加载 `scripts/sync-obsidian.mjs`；它是顶层命令式执行 + 破坏性清空，误加载会清空已上线的 `src/pages/posts/` 和 `src/data/posts.json`。测试只能用静态分析，详见 `skills/regression-testing/SKILL.md`。
- 不要给同步脚本写 Vitest include 通配模式（如 `scripts/**/*.mjs`）；只匹配 `*.test.mjs` 后缀。
- 不要让 Node 版本漂移；Astro 7 要求 `>=22.12`，`package.json#engines` 和 `netlify.toml` 已声明 22，本地须 `nvm use 22`。
- 不要留两个站点 URL 默认值；站点 URL 唯一权威来源是 `blog.config.mjs#site.url`，`astro.config.mjs` 必须从它导入，否则 RSS 与 sitemap/canonical 的绝对 URL 会不一致。

## 回归前置（硬铁律）

- 新功能的开发必须建立在原有功能稳定的基础之上；没有对旧功能做完整回归测试和 bug 修复之前，禁止开发新功能。
- 每个阶段收尾必须 `npm run test:all` 全绿，并沉淀相应 skill 与 AGENTS.md 条目。
- 修 bug 用 TDD：测试先锁定当前【错误】行为（绿）→ 改代码 → 把断言改为期望【正确】值 → 全绿。
- 回归基线见 `tests/`（Vitest 数据契约 + siteModel + 同步安全）和 `scripts/qa-smoke.mjs`（Playwright 页面冒烟 + 移动溢出）。

## 本地常用命令

```bash
nvm use 22                         # Astro 7 要求 Node >=22.12
npm run test:all                   # 回归铁律：改动前/后必跑（vitest+build+e2e）
npm test                           # 仅 Vitest
npm run test:e2e                   # 仅 Playwright 冒烟（需先 build）
npm run sync:publish-roots
npm run build
npm run dev
vercel --prod --yes
```

## 可复用抽象

- 项目上下文压缩在 `docs/context-compact.md`。
- API 说明在 `docs/api.md`。
- 回归测试方法论在 `skills/regression-testing/SKILL.md`。
- 同步管线架构在 `skills/sync-pipeline-architecture/SKILL.md`。
- 前端设计系统在 `skills/frontend-design-system/SKILL.md`。
- 暗色/SEO/RSS/sitemap 在 `skills/dark-mode-seo-rss/SKILL.md`。
- 项目级发布 skill 在 `skills/obsidian-blog-publisher/SKILL.md`。
- 服务、合集、内容类型、统计和 API 响应统一从 `src/lib/siteModel.js` 扩展。
- 数据形状契约（posts/topics/manifest）定义在 `src/lib/schema.mjs`（Zod）；`siteModel.js` import 时校验，同步脚本产出时校验，两端同源防漂移。改字段时三处同步：schema.mjs → siteModel.js → sync/lib/pipeline.mjs。

## 同步管线扩展点（阶段 2 重构后）

同步管线已模块化到 `scripts/sync/lib/`，遵循开闭原则。新增能力只追加注册/表项，不改既有函数体：

- 新增图床：在 `scripts/sync/lib/imageProviders.mjs` 调用 `registerImageProvider(name, factory)`，再把 `blog.config.mjs#imageBed.provider` 设为该 name。
- 新增发布规则：在 `scripts/sync/lib/publishRules.mjs` 定义 Rule 后，在 `createDefaultPolicy` 链中 `.add()`。
- 新增 type/topic 关键词：往 `scripts/sync/lib/inference.mjs` 的 `TYPE_RULES` / `TOPIC_RULES` 追加表项。
- 改同步主流程：编辑 `scripts/sync/lib/pipeline.mjs#runSync`（Template Method 骨架）。
- 入口 `scripts/sync-obsidian.mjs` 是薄入口 + main 守卫，import 无副作用；不要再把执行体写回顶层。

## 前端设计约束

- 保留霞鹭文楷的中文阅读气质。
- 首页可以强转化，但文章页要安静，避免营销组件干扰阅读。
- 付费入口必须具体：服务对象、交付物、下一步动作，而不是空泛按钮。
- 移动端检查所有页面横向溢出，尤其是代码块和长中文标题。

## 前端扩展点（阶段 4 重构后）

- 新增聚合/列表页用 `src/layouts/PageLayout.astro`（已封装 Header+main+Footer），不要手写页框。
- 页面级 head 元数据（OG/Twitter/canonical）走 `BaseLayout` 的 `<slot name="head">`。
- 文章页侧栏内容走 `PostLayout` 的 `<slot name="aside">`；评论/相关文章走 `<slot name="after-article">`。
- 配色/圆角/间距只改 `src/styles/tokens.css` 的 `:root`；暗色模式在 `[data-theme="dark"]` 覆盖（阶段 5）。
- 详见 `skills/frontend-design-system/SKILL.md`。
