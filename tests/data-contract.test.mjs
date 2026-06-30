import { describe, expect, it } from "vitest";
import posts from "../src/data/posts.json" with { type: "json" };
import topics from "../src/data/topics.json" with { type: "json" };
import manifest from "../src/data/sync-manifest.json" with { type: "json" };

// =============================================================================
// 数据契约回归基线
//
// 目的：在任何重构（同步管线封装、schema 化、设计系统）之前，把「当前已上线
// 的正确数据形状」锁住。这是 AGENTS.md「回归前置」铁律的护栏：后续任何改动
// 若让这些不变量破缺，测试会立即失败，从而禁止进入下一阶段。
//
// 快照策略遵循 Vitest 社区共识——只快照「形状 + 数量」等稳定量，不快照
// 整个 332 篇文章正文（避免快照膨胀）。每篇记录的字段集用 inline 断言锁。
// =============================================================================

const REQUIRED_POST_FIELDS = [
  "title", "date", "updated", "type", "topic", "tags",
  "excerpt", "readingMinutes", "wordCount", "slug",
  "sourceFolder", "url"
];

// 三态是设计目标。阶段 2 已在同步管线加入 normalizeType，把英文残留 type
// (weekly-review / programming-daily-review / daily-review) 规范化回三态。
// 故当前 332 篇全部落位三态，不再有残留。
const CANONICAL_TYPES = ["文稿", "手记", "思考"];

describe("posts.json 数据契约", () => {
  it("文章总数 = 332（重构必须保持等价）", () => {
    expect(posts.length).toBe(332);
  });

  it("每条记录都包含完整字段集", () => {
    for (const post of posts) {
      for (const field of REQUIRED_POST_FIELDS) {
        expect(post, `post "${post.title}" 缺少字段 ${field}`).toHaveProperty(field);
      }
    }
  });

  it("type 字段全部落位三态：文稿/手记/思考（阶段 2 已规范化英文残留）", () => {
    for (const post of posts) {
      expect(CANONICAL_TYPES).toContain(post.type);
    }
  });

  it("tags 是数组", () => {
    for (const post of posts) {
      expect(Array.isArray(post.tags)).toBe(true);
    }
  });

  it("url 与 slug 一致：url === /posts/${slug}/", () => {
    for (const post of posts) {
      expect(post.url).toBe(`/posts/${post.slug}/`);
    }
  });

  it("按 date 降序排列", () => {
    for (let i = 1; i < posts.length; i += 1) {
      expect(new Date(posts[i - 1].date).getTime())
        .toBeGreaterThanOrEqual(new Date(posts[i].date).getTime());
    }
  });

  it("slug 唯一", () => {
    const slugs = posts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("字段集形状快照（仅取首条，防止结构漂移）", () => {
    const sample = posts[0];
    expect(Object.keys(sample).sort()).toMatchInlineSnapshot(`
      [
        "date",
        "excerpt",
        "readingMinutes",
        "slug",
        "sourceFolder",
        "tags",
        "title",
        "topic",
        "type",
        "updated",
        "url",
        "wordCount",
      ]
    `);
  });
});

describe("topics.json 数据契约", () => {
  it("主题数量 = 15", () => {
    expect(topics.length).toBe(15);
  });

  it("每条 { name, count } 形状", () => {
    for (const topic of topics) {
      expect(topic).toHaveProperty("name");
      expect(typeof topic.name).toBe("string");
      expect(topic).toHaveProperty("count");
      expect(typeof topic.count).toBe("number");
    }
  });

  it("count 之和等于 posts 总数", () => {
    const total = topics.reduce((sum, t) => sum + t.count, 0);
    expect(total).toBe(posts.length);
  });
});

describe("sync-manifest.json 数据契约", () => {
  it("包含核心统计字段", () => {
    for (const field of ["syncedAt", "provider", "sourceFiles", "published", "skipped", "uploadedImages", "mode"]) {
      expect(manifest).toHaveProperty(field);
    }
  });

  it("published + skipped <= sourceFiles", () => {
    expect(manifest.published + manifest.skipped).toBeLessThanOrEqual(manifest.sourceFiles);
  });

  it("skippedReasons 计数之和等于 skipped", () => {
    const reasons = manifest.skippedReasons || {};
    const sum = Object.values(reasons).reduce((a, b) => a + b, 0);
    expect(sum).toBe(manifest.skipped);
  });
});
