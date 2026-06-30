---
name: dark-mode-seo-rss
description: Add or maintain the blog's Stage-3 capabilities — dark mode, SEO/OG metadata, RSS feed, sitemap. Documents the no-FOUC theme bootstrap, the token-override dark mode strategy, the head-slot SEO injection, and the @astrojs/rss migration with XML sanitization. Use when theming breaks, OG previews are wrong, RSS fails to parse, or sitemap is missing.
---

# Dark Mode / SEO / RSS / Sitemap（阶段 5 Stage 3 能力）

## 能力清单（已落地）

| 能力 | 实现 | 验证 |
|---|---|---|
| 暗色模式 | `tokens.css` 的 `[data-theme="dark"]` 覆盖原始 token；无 FOUC inline 脚本 + Header 切换按钮 | test:all 默认 light 零回归 |
| SEO/OG | `src/components/Seo.astro` 走 BaseLayout head slot；PostLayout 自动注入 article OG | 构建后文章页含 og:title/canonical |
| RSS | `src/pages/rss.xml.js` 用 `@astrojs/rss`；保留 sanitizeXml 预处理非法字符 | dist/rss.xml ~300KB, 332 items |
| Sitemap | `@astrojs/sitemap` 集成；用统一站点 URL | dist/sitemap-index.xml + sitemap-0.xml |

## 暗色模式策略（开闭原则）

**直接覆盖原始 token，组件样式零改动**：所有组件都引用 `tokens.css` 的 `--paper`/`--ink` 等变量，`[data-theme="dark"]` 整体替换为暗色调。body 的多层 gradient 因基于 `--paper`/`--gold` 也自动适配。

- 亮色 token 在 `:root`；暗色覆盖在 `:root[data-theme="dark"]`。
- 暗岛元素（`--dark`/`--dark-2`：cockpit/offer/button.primary）保持深色不变，其上浅色文字在暗色下仍可读。
- 新增颜色只往这两块加变量，组件引用变量名即可自动双主题。

### 无 FOUC（关键）
`BaseLayout.astro` 的 head 最前面有 `is:inline` 脚本，在首帧 paint 前读 `localStorage.theme` / `prefers-color-scheme` 设 `data-theme`。**任何主题初始化必须在此脚本里，不能放在外部 JS**，否则会闪白。

## SEO 注入路径

- `BaseLayout` 提供 `<slot name="head">`。
- `PostLayout` 内放 `<Seo slot="head" type="article" />`，自动为每篇文章注入 OG/Twitter/canonical。
- 站点 URL 来自 `Astro.site`（= `blog.config.site.url`，阶段 0 已统一，勿再分裂）。

## RSS 教训（来自 AGENTS.md + 本次迁移）

1. **必须转义**：title/description/link/guid 里的 `&`/`<`/`>` 会让浏览器 RSS 解析器报错。`@astrojs/rss` 内置 escapeXML，满足此教训。
2. **必须 sanitize 非法 XML 字符**：`@astrojs/rss` **不**剥离 XML 1.0 非法控制字符（`\u0000`-`\u0008` 等），源笔记正文里偶有这些字符会让 RSS 解析器报错。故保留 `sanitizeXml()` 作为 description 预处理。
3. 站点 URL 必须用 `context.site`（来自 astro.config），不要另起 `config.site.url.replace(...)`，避免尾斜杠不一致。

## 仍在 TODO（需用户配置，已留扩展点）

- **giscus 评论**：PostLayout 已有 `<slot name="after-article">`，接入 `<Giscus>` 组件即可。需用户：repo 启用 GitHub Discussions + 用 https://giscus.app 生成 repoId/categoryId + 填环境变量。
- **Pagefind 站内搜索**：替换 archive 的 naive textContent 匹配。需在 build 后跑 `pagefind --site dist`，再加 UI。archive 的 a11y（aria-label）阶段 0 已修。
- **隐私优先统计**：Vercel Analytics（零配置）或 Umami（自托管），按需启用。

## 测试与验证

- `npm run test:all` 必须全绿（79 vitest + 339 页构建 + Playwright 15 检查）。
- 暗色视觉 QA：Playwright 默认 light，暗色需手动切换截图核对（qa-smoke 未覆盖暗色渲染，未来可加）。
- RSS：构建后 `head dist/rss.xml` 应是合法 XML，含 `<language>zh-cn</language>`。
- sitemap：`dist/sitemap-index.xml` 应存在。

## 流程教训（本次记录）

- 工具 `Write` 报「File has been modified since read」时，应**立即重读该文件再 Write**，不要在思考里反复纠结——会陷入无效循环浪费上下文。
- Linter/formatter 可能改文件，Write 前若长时间未读，先 Read 确认当前内容。
