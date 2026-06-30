import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import config from "./blog.config.mjs";

// 站点 URL 的唯一权威来源是 blog.config.mjs#site.url（由 SITE_URL 覆盖）。
// 此前 astro.config 与 blog.config 各有一个默认值（example.com vs ury-blog.vercel.app），
// 导致 sitemap/canonical（走 astro site）与 RSS（走 blog.config）绝对 URL 不一致。
export default defineConfig({
  site: config.site.url,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
