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

## 本地常用命令

```bash
npm run sync:publish-roots
npm run build
npm run dev
vercel --prod --yes
```

## 可复用抽象

- 项目上下文压缩在 `docs/context-compact.md`。
- API 说明在 `docs/api.md`。
- 项目级发布 skill 在 `skills/obsidian-blog-publisher/SKILL.md`。
- 服务、合集、内容类型、统计和 API 响应统一从 `src/lib/siteModel.js` 扩展。

## 前端设计约束

- 保留霞鹭文楷的中文阅读气质。
- 首页可以强转化，但文章页要安静，避免营销组件干扰阅读。
- 付费入口必须具体：服务对象、交付物、下一步动作，而不是空泛按钮。
- 移动端检查所有页面横向溢出，尤其是代码块和长中文标题。
