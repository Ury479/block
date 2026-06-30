---
name: frontend-design-system
description: Extend the blog's design system and UI layer (tokens, layouts, components). Documents the token layering (tokens.css), the PageLayout/PostLayout slot architecture for open-closed extension, the shared page-shell pattern, and HTML-a11y rules. Use when adding a new page, changing colors/theme, adding head metadata (SEO/OG), adding article-aside or post-footer widgets (comments/related), or restyling components.
---

# Frontend Design System（前端设计系统）

## 设计目标

把原来「单一 global.css + 每页手写页框」的前端，重构为**可扩展、无视觉回归**的设计系统，为阶段 5（暗色模式 / SEO / 评论 / 搜索）铺好开闭扩展点。

## 分层结构

```
src/
├── styles/
│   ├── tokens.css      # 设计 token（变量、字体），单一真相 —— 暗色模式在此覆盖
│   └── global.css      # 组件样式，引用 tokens.css 的变量
├── layouts/
│   ├── BaseLayout.astro   # HTML 文档骨架 + <slot name="head">（注入 OG/canonical）
│   ├── PageLayout.astro   # 标准页框（Header+main+Footer），列表/聚合页用
│   └── PostLayout.astro   # 文章页（双栏 + <slot name="aside"> + <slot name="after-article">）
└── components/           # PostRow / Header / Footer / SyncFlow / Offer / Cockpit / …
```

## 扩展点（开闭原则）

| 需求 | 扩展方式（不改既有代码） |
|---|---|
| 新增聚合/列表页 | 用 `<PageLayout title=…>` + 填默认 slot，无需手写 Header/Footer/BaseLayout 组装 |
| 注入页面级 head 元数据（OG/Twitter/canonical） | 在页面用 `<Fragment slot="head">…</Fragment>`，走 BaseLayout 的 head slot |
| 文章页加相关文章/目录 | 用 `<Fragment slot="aside">…</Fragment>`，走 PostLayout 的 aside slot |
| 文章页加评论区 | 用 `<Fragment slot="after-article">…</Fragment>`，走 PostLayout 的 after-article slot |
| 暗色模式 | 在 `tokens.css` 的 `[data-theme="dark"]` 覆盖语义变量（阶段 5 实施） |
| 改配色/圆角/间距 | 只改 `tokens.css` 的 `:root` 变量，组件自动跟随 |

## 关键约束（AGENTS.md 前端设计约束）

- **保留霞鹭文楷的中文阅读气质**：`tokens.css` 顶部 `@import` LXGW WenKai Screen webfont。
- **首页可强转化，文章页要安静**：营销组件（OfferGrid/CockpitPanel）只在首页/offer 用，文章页（PostLayout）不加营销干扰。
- **付费入口必须具体**：服务对象、交付物、下一步动作，不要空泛按钮（见 siteModel.services 的 points/fit）。
- **移动端无横向溢出**：`npm run test:e2e` 的 390px 视口检查是硬门。

## 已修复的结构问题

- **PostRow 无效 HTML**：`<h3>` 曾嵌套在 inline `<span>` 内（块级入 inline，非法）。改为 `<div class="post-body">` 包裹。
- **页框重复**：archive/garden/now/sync/changelog 此前各手写 `BaseLayout>Header>main>Footer`，现已统一用 PageLayout（offer 因双 section 结构特殊保留原样）。
- **head 不可扩展**：BaseLayout 此前 head 写死，无法注入 OG/canonical。已加 `<slot name="head">`。

## 重构安全网

任何 UI 改动必须 `npm run test:all` 全绿，其中 Playwright 冒烟（桌面 200+标题命中、移动 390px 无横向溢出）是**视觉零回归**的硬验证。token 抽取遵循「只搬值、不改引用」原则，保证阶段 4 视觉完全等价。

## 前端设计参照（来自 docs/requirements-analysis.md）

- Innei/Shiro：文稿/手记/思考三态内容模型。
- Bonan/Fernweh：霞鹭文楷、极简中文静态博客气质。
- owenyoung/justgoidea：Now 页、数字花园结构。
