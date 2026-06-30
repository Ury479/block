// =============================================================================
// 数据层 Schema（Zod）—— 单一真相，防双表示漂移
//
// posts.json / topics.json / sync-manifest.json 是同步管线产出、又被 siteModel.js
// 消费的「数据契约」。此前无校验，任何字段漂移（同步脚本改字段名、源笔记 frontmatter
// 异常）都要等到页面渲染才暴露。这里用 Zod 定义 schema，让 siteModel 在 import 时
// 校验、同步脚本在产出时校验，早失败、早定位。
//
// schema 与 tests/data-contract.test.mjs 的字段断言同源，互为印证。
// =============================================================================
import { z } from "zod";

/** 三态内容类型白名单（与 siteModel.contentTypes、inference.CANONICAL_TYPES 一致）。 */
export const CONTENT_TYPES = ["文稿", "手记", "思考"];

/** 单篇公开文章的 schema。字段集来自 sync/lib/pipeline.mjs#buildMetadata。 */
export const PostSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1),                  // ISO 8601
  updated: z.string().min(1),               // ISO 8601
  type: z.enum(CONTENT_TYPES),              // 三态，规范化后不再有英文残留
  topic: z.string().min(1),
  tags: z.array(z.string()),
  excerpt: z.string(),
  readingMinutes: z.number().int().positive(),
  wordCount: z.number().int().nonnegative(),
  slug: z.string().min(1),
  sourceFolder: z.string().min(1),
  url: z.string().startsWith("/posts/")
});

/** 主题 schema：{ name, count }。 */
export const TopicSchema = z.object({
  name: z.string().min(1),
  count: z.number().int().nonnegative()
});

/** 同步 manifest schema（与 sync/lib/pipeline.mjs 写出的字段一致）。 */
export const ManifestSchema = z.object({
  syncedAt: z.string().min(1),
  vaultName: z.string(),
  provider: z.string(),
  sourceFiles: z.number().int().nonnegative(),
  published: z.number().int().nonnegative(),
  skipped: z.number().int().nonnegative(),
  skippedReasons: z.record(z.string(), z.number().int().nonnegative()),
  uploadedImages: z.number().int().nonnegative(),
  mode: z.string()
});

/** 数组包装。 */
export const PostsSchema = z.array(PostSchema);
export const TopicsSchema = z.array(TopicSchema);

/**
 * 校验并返回数据；失败时抛出含路径的清晰错误（而非沉默用脏数据）。
 * @template T
 * @param {z.ZodType<T>} schema
 * @param {unknown} data
 * @param {string} label —— 用于错误信息定位（如 "posts.json"）
 * @returns {T}
 */
export function validate(schema, data, label) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  · ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    throw new Error(`数据校验失败 [${label}]:\n${issues}`);
  }
  return result.data;
}
