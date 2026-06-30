# 压缩上下文

## 当前目标

把 Obsidian 指定目录安全同步到个人博客，并把博客升级成可持续扩展的公开知识库 + 付费陪跑站点。

## 已完成状态

- GitHub: `https://github.com/Ury479/block`
- Vercel: `https://ury-blog.vercel.app`
- 已同步 `332` 篇公开文章、`103` 张图文资产。
- 已跳过 `68` 个文件：过短、路径黑名单、敏感内容规则。
- 已新增付费转化首页、课程陪跑页、归档页筛选、同步说明页。
- 已使用浏览器访问对标站和生产站做验证。

## 核心约束

- Obsidian 源库只读，不在源库写入、移动、删除文件。
- Vercel 云端只运行 `npm run build`，不访问本地 Obsidian。
- 本地发布内容时运行 `npm run sync:publish-roots`，生成 `src/pages/posts/` 和 `public/media/` 后提交。
- 生成内容提交前必须做敏感扫描。

## 主要扩展点

- 内容同步规则：`blog.config.mjs`
- 站点内容模型：`src/lib/siteModel.js`
- 首页复用组件：`src/components/ProofGrid.astro`、`CockpitPanel.astro`、`OfferGrid.astro`、`TypeRail.astro`、`CollectionGrid.astro`
- 开放 API：`src/pages/api/v1/*.json.js`
- 项目 skill：`skills/obsidian-blog-publisher/SKILL.md`

## 常用命令

```bash
npm run sync:publish-roots
npm run build
npm audit --audit-level=low
vercel --prod --yes
```

## 后续最可能的需求

- 替换真实咨询邮箱、微信二维码或支付链接。
- 给 API 增加搜索或分页时，需要切到 Astro server/hybrid 输出，或新增构建期分片 JSON。
- 新增付费服务时优先改 `src/lib/siteModel.js` 的 `services`，不要直接改页面。
