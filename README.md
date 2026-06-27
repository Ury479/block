# Ury 的知识花园

一个静态优先的个人博客：公开页面由 Astro 生成，内容从本地 Obsidian 库单向同步，图片通过可插拔图床 provider 改写。

## 设计参照

- Innei / Shiro：文稿、手记、思考三态内容模型与轻微交互感。
- Bonan / Fernweh：霞鹭文楷、极简静态博客、giscus/darkmode 一类现代静态博客配方。
- owenyoung / justgoidea：数字花园、Now 页、可持续维护的公开知识库。
- tailwind-nextjs-starter-blog：Markdown、RSS、标签与归档的基础能力。

## 本地运行

```bash
npm install
npm run sync:safe
npm run dev
```

`sync:safe` 只导入 frontmatter 中带有 `publish: true` 的 Obsidian 笔记。

## 发布单篇 Obsidian 文档

```bash
npm run sync -- --file "/Users/ury/Documents/Obsidian Vault/路径/文章.md"
npm run build
```

同步脚本只读取源文件，并在 `src/pages/posts/` 里生成公开副本，不写回 Obsidian。

## 图片与图床

默认 provider 是 `local`，会把图片复制到 `public/media/`，适合本地预览和静态部署。

```bash
IMAGE_BED_PROVIDER=picgo npm run sync:safe
IMAGE_BED_PROVIDER=lsky LSKY_ENDPOINT="https://example.com/api/v1/upload" LSKY_TOKEN="***" npm run sync:safe
```

支持：

- `local`：复制到站点静态资源目录。
- `picgo`：调用本机已配置好的 PicGo CLI。
- `lsky`：调用 Lsky Pro API，需要 endpoint 和 token。

## 上线

Netlify 和 Vercel 都已配置：

- Netlify：构建命令 `npm run build`，发布目录 `dist`。
- Vercel：框架选择 Astro，输出目录 `dist`。

上线前建议在部署平台配置：

- `SITE_URL`
- `OBSIDIAN_VAULT`，仅本地构建时需要；云端部署通常不挂本地库。
- 图床相关变量，如 `IMAGE_BED_PROVIDER`、`LSKY_ENDPOINT`、`LSKY_TOKEN`。

更推荐的生产流程：本地运行同步生成公开 Markdown 副本，提交站点仓库，再由 Netlify/Vercel 构建上线。这样云端不需要访问你的本地 Obsidian。
