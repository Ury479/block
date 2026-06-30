export default {
  site: {
    title: "Ury 的知识花园",
    description: "把 400+ 篇学习笔记，变成可阅读、可复用、可陪跑的成长系统。",
    author: "Ury",
    url: process.env.SITE_URL || "https://ury-blog.vercel.app"
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
    defaultTopic: "未分类",
    publicRoots: [
      "个人管理/成功日记",
      "计算机编程",
      "个人管理/恒洋听课笔记"
    ],
    minChars: 40,
    denyPatterns: [
      "密钥",
      "私钥",
      "token",
      "tocken",
      "password",
      "passwd",
      "secret",
      "credential",
      "AWS 密钥",
      "账号",
      "登录凭据",
      ".env",
      "模板",
      "Templater",
      "template"
    ],
    contentDenyRegexes: [
      "AKIA[0-9A-Z]{16}",
      "-----BEGIN (RSA|OPENSSH|PRIVATE) KEY-----",
      "sk-[A-Za-z0-9]{20,}",
      "ghp_[A-Za-z0-9]{20,}",
      "xox[baprs]-[A-Za-z0-9-]{10,}",
      "AIza[0-9A-Za-z_-]{20,}",
      "spring\\.datasource\\.password\\s*=",
      "IDENTIFIED\\s+(WITH\\s+\\w+\\s+)?BY\\s+['\\\"]",
      "password:\\s*\\.\\.\\.",
      "secrets\\.SSH_KEY",
      "-----BEGIN RSA PRIVATE KEY-----"
    ]
  },
  imageBed: {
    provider: process.env.IMAGE_BED_PROVIDER || "local",
    localPublicPrefix: "/media"
  }
};
