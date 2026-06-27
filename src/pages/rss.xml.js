import posts from "../data/posts.json";
import config from "../../blog.config.mjs";

export function GET() {
  const site = config.site.url.replace(/\/$/, "");
  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${site}${post.url}</link>
      <guid>${site}${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt || "")}</description>
    </item>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(config.site.title)}</title>
    <link>${site}</link>
    <description>${escapeXml(config.site.description)}</description>
    ${items}
  </channel>
</rss>`, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" }
  });
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
