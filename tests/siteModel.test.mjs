import { describe, expect, it } from "vitest";
import {
  services,
  collectionDefinitions,
  contentTypes,
  getRecentPosts,
  getTypeCounts,
  getCollections,
  getStats,
  getProofItems,
  getApiMeta,
  apiResponse,
  posts,
  topics,
  manifest
} from "../src/lib/siteModel.js";

// =============================================================================
// siteModel Facade 回归基线
//
// siteModel.js 是 codex 既有的 OCP Facade：首页、offer 页、API v1 全部经它取数。
// 重构（schema 化、组件化）不得改变这些函数的返回形状，否则首页统计/付费卡/
// API 会连带回归。本组锁定每个公开选择器的契约。
// =============================================================================

describe("数据再导出", () => {
  it("posts/topics/manifest 与 src/data 一致", () => {
    expect(posts.length).toBe(332);
    expect(topics.length).toBe(15);
    expect(manifest.syncedAt).toBeTruthy();
  });
});

describe("静态配置块（OCP 扩展点）", () => {
  it("services 至少 3 项，每项有 id/title/price/desc/points", () => {
    expect(services.length).toBeGreaterThanOrEqual(3);
    for (const s of services) {
      expect(s).toHaveProperty("id");
      expect(s).toHaveProperty("title");
      expect(s).toHaveProperty("price");
      expect(s).toHaveProperty("desc");
      expect(Array.isArray(s.points)).toBe(true);
    }
  });

  it("collectionDefinitions 每项有 id/name/sourceNeedle/desc/href", () => {
    for (const c of collectionDefinitions) {
      expect(c).toHaveProperty("id");
      expect(c).toHaveProperty("name");
      expect(c).toHaveProperty("sourceNeedle");
      expect(c).toHaveProperty("href");
    }
  });

  it("contentTypes 恰好三态：文稿/手记/思考（顺序无关）", () => {
    expect([...contentTypes.map((c) => c.type)].sort()).toEqual(["思考", "手记", "文稿"]);
  });
});

describe("选择器函数", () => {
  it("getRecentPosts 默认返回 5 篇，且与 posts 前缀一致", () => {
    const r = getRecentPosts();
    expect(r).toHaveLength(5);
    expect(r[0].url).toBe(posts[0].url);
  });

  it("getRecentPosts(limit) 尊重 limit", () => {
    expect(getRecentPosts(3)).toHaveLength(3);
  });

  it("getTypeCounts 返回三态且带 count + href（阶段 2 规范化后三态合计 = 332）", () => {
    const counts = getTypeCounts();
    expect(counts).toHaveLength(3);
    for (const c of counts) {
      expect(typeof c.count).toBe("number");
      expect(c.href).toMatch(/^\/archive\/\?type=/);
    }
    const total = counts.reduce((s, c) => s + c.count, 0);
    expect(total).toBe(posts.length);
  });

  it("getCollections 每项带 count（来自 sourceNeedle 匹配）", () => {
    const cols = getCollections();
    expect(cols.length).toBe(collectionDefinitions.length);
    for (const c of cols) {
      expect(typeof c.count).toBe("number");
    }
  });

  it("getProofItems 返回 3 个 {value,label}", () => {
    const items = getProofItems();
    expect(items).toHaveLength(3);
    for (const it of items) {
      expect(it).toHaveProperty("value");
      expect(it).toHaveProperty("label");
    }
  });
});

describe("getStats（BUG 2 已修复：generatedAt 对齐 syncedAt）", () => {
  const stats = getStats();

  it("posts/topics/images 数字字段存在", () => {
    expect(stats).toHaveProperty("posts");
    expect(stats).toHaveProperty("topics");
    expect(stats).toHaveProperty("images");
    expect(stats).toHaveProperty("skipped");
  });

  it("generatedAt 反映 manifest.syncedAt（BUG 2 修复后回归正常）", () => {
    expect(stats.generatedAt).toBe(manifest.syncedAt);
  });
});

describe("API 响应封装", () => {
  it("getApiMeta 带 resource/version/generatedAt/source", () => {
    const meta = getApiMeta("stats");
    expect(meta.resource).toBe("stats");
    expect(meta.version).toBe("v1");
    expect(meta).toHaveProperty("generatedAt");
    expect(meta).toHaveProperty("source");
  });

  it("apiResponse 返回 { meta, data, links } 形状（AGENTS.md：不破坏 v1 结构）", async () => {
    const res = apiResponse("posts", { hello: "world" });
    const json = await res.json();
    expect(json).toHaveProperty("meta");
    expect(json).toHaveProperty("data");
    expect(json).toHaveProperty("links");
    expect(json.links.self).toBe("/api/v1/posts.json");
    expect(json.links.docs).toBe("/api/v1/openapi.json");
  });
});
