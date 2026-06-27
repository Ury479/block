export default {
  site: {
    title: "Ury 的知识花园",
    description: "把 Obsidian 里的长期思考整理成可阅读、可订阅、可迁移的个人博客。",
    author: "Ury",
    url: process.env.SITE_URL || "https://example.com"
  },
  obsidian: {
    vault: process.env.OBSIDIAN_VAULT || "/Users/ury/Documents/Obsidian Vault",
    include: ["**/*.md"],
    exclude: [
      ".obsidian/**",
      ".git/**",
      "历史文件夹/**",
      "**/Templater/**",
      "**/模板库/**",
      "**/.trash/**"
    ]
  },
  publish: {
    safeByDefault: true,
    frontmatterFlag: "publish",
    defaultType: "文稿",
    defaultTopic: "未分类"
  },
  imageBed: {
    provider: process.env.IMAGE_BED_PROVIDER || "local",
    localPublicPrefix: "/media"
  }
};
