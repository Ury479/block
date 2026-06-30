import { describe, expect, it } from "vitest";
import {
  PostSchema,
  TopicSchema,
  ManifestSchema,
  PostsSchema,
  TopicsSchema,
  validate,
  CONTENT_TYPES
} from "../src/lib/schema.mjs";
import posts from "../src/data/posts.json" with { type: "json" };
import topics from "../src/data/topics.json" with { type: "json" };
import manifest from "../src/data/sync-manifest.json" with { type: "json" };

// =============================================================================
// Zod schema 契约测试
//
// 验证 schema 两件事：(1) 对当前真实数据校验通过；(2) 对脏数据正确拒绝。
// 这保证 schema 不是「形同虚设」——它真能在字段漂移时早失败。
// =============================================================================

describe("schema 接受当前真实数据", () => {
  it("posts.json 全量通过 PostsSchema", () => {
    expect(() => validate(PostsSchema, posts, "posts.json")).not.toThrow();
  });
  it("topics.json 全量通过 TopicsSchema", () => {
    expect(() => validate(TopicsSchema, topics, "topics.json")).not.toThrow();
  });
  it("manifest 通过 ManifestSchema", () => {
    expect(() => validate(ManifestSchema, manifest, "manifest")).not.toThrow();
  });
});

describe("schema 正确拒绝脏数据", () => {
  const validPost = {
    title: "t", date: "2026-06-30T00:00:00.000Z", updated: "2026-06-30T00:00:00.000Z",
    type: "文稿", topic: "x", tags: [], excerpt: "e", readingMinutes: 1,
    wordCount: 10, slug: "s", sourceFolder: "f", url: "/posts/s/"
  };

  it("拒绝非三态 type（防英文残留回潮）", () => {
    expect(() => PostSchema.parse({ ...validPost, type: "weekly-review" })).toThrow();
  });
  it("拒绝空 title", () => {
    expect(() => PostSchema.parse({ ...validPost, title: "" })).toThrow();
  });
  it("拒绝非 /posts/ 开头的 url", () => {
    expect(() => PostSchema.parse({ ...validPost, url: "/wrong/s/" })).toThrow();
  });
  it("拒绝负数 wordCount", () => {
    expect(() => PostSchema.parse({ ...validPost, wordCount: -1 })).toThrow();
  });
  it("拒绝缺失字段", () => {
    const partial = { ...validPost };
    delete partial.slug;
    expect(() => PostSchema.parse(partial)).toThrow();
  });

  it("TopicSchema 拒绝负 count", () => {
    expect(() => TopicSchema.parse({ name: "x", count: -1 })).toThrow();
  });
  it("ManifestSchema 拒绝缺 syncedAt", () => {
    const m = { ...manifest };
    delete m.syncedAt;
    expect(() => ManifestSchema.parse(m)).toThrow();
  });
});

describe("validate 错误信息可定位", () => {
  it("错误信息包含 label 和字段路径", () => {
    try {
      validate(PostSchema, { ...posts[0], type: "bad-type" }, "posts.json");
      throw new Error("should have thrown");
    } catch (e) {
      expect(e.message).toContain("posts.json");
      expect(e.message).toContain("type");
    }
  });
});

describe("CONTENT_TYPES 与三态一致", () => {
  it("恰好三态", () => {
    expect([...CONTENT_TYPES].sort()).toEqual(["思考", "手记", "文稿"]);
  });
});
