import rss from "@astrojs/rss";
import posts from "../data/posts.json";
import config from "../../blog.config.mjs";

// =============================================================================
// RSS —— 迁移到 @astrojs/rss（阶段 5）
//
// 旧版手写 XML 字符串；@astrojs/rss 内置 XML 转义，满足 AGENTS.md 教训
// （title/description/link/guid 必须转义，否则路径里的 & 会导致浏览器 parse error）。
// 但 @astrojs/rss 不剥离非法 XML 1.0 控制字符，故保留 sanitizeXml 作为预处理，
// 双保险（旧版踩过的坑：源笔记正文里偶有非法字符会让 RSS 解析器报错）。
// 数据源仍是 src/data/posts.json（同步管线产出，经 schema 校验）。
// =============================================================================

export async function GET(context) {
  const site = context.site || new URL(config.site.url);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site,
    items: posts.map((post) => ({
      title: post.title,
      description: sanitizeXml(post.excerpt || ""),
      pubDate: new Date(post.date),
      link: post.url,
      categories: [post.type, post.topic].filter(Boolean)
    })),
    customData: `<language>zh-cn</language>`,
    stylesheet: false
  });
}

/** 剥离非法 XML 1.0 字符（控制字符等），避免 RSS 解析器报错。 */
function sanitizeXml(value) {
  return String(value).replace(/[^\u0009\u000A\u000D\u0020-\uD7FF\uE000-\uFFFD]/g, "");
}
