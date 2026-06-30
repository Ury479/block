// =============================================================================
// Topic / Type 推断 —— Strategy 规则表（开闭原则）
//
// 旧 inferType/inferTopic 是正则堆，新增关键词必须改函数体；且不规范化英文 type，
// 导致 10 篇文章 type 残留 weekly-review / programming-daily-review / daily-review
// （源自 Obsidian 源笔记 frontmatter 的英文值，AGENTS.md 约束源库只读，须在同步层规范化）。
//
// 这里把推断做成有序规则表（TopicInferenceRule / TypeInferenceRule），按优先级匹配，
// 新增规则只追加表项。同时加 normalizeType 把英文残留映射回三态。
// =============================================================================
import path from "node:path";

/**
 * @typedef {("文稿"|"手记"|"思考")} ContentType
 */

/** 三态白名单（与 siteModel.contentTypes 一致）。 */
export const CANONICAL_TYPES = ["文稿", "手记", "思考"];

/**
 * 英文/非标准 type → 三态的规范化映射。修复「10 篇英文残留 type」bug。
 * 源笔记 frontmatter 自带的英文值在这里被映射回三态，无需改 Obsidian 源库。
 */
const TYPE_NORMALIZATION = {
  "weekly-review": "手记",
  "programming-daily-review": "手记",
  "daily-review": "手记",
  "weekly": "手记",
  "daily": "手记",
  "review": "手记",
  "article": "文稿",
  "post": "文稿",
  "note": "思考",
  "thought": "思考"
};

/**
 * 把任意 type 规范化到三态；未命中映射且本就是三态则原样返回；
 * 其余未知值降级为默认（避免再产生残留）。
 */
export function normalizeType(type, fallback = "文稿") {
  const v = String(type || "").trim();
  if (CANONICAL_TYPES.includes(v)) return v;
  if (TYPE_NORMALIZATION[v]) return TYPE_NORMALIZATION[v];
  // 兜底：未知英文/中文值统一降级，不再让非三态值进入 posts.json
  return fallback;
}

// —— Type 推断规则表（顺序即优先级，对应旧 inferType 的短路顺序）——
// 注意：旧 inferType 第 230 行是死代码（227 已匹配「日报|复盘」），此处已剔除。
const TYPE_RULES = [
  { re: /成功日记|日报|复盘|周复盘|now|现在/i, type: "手记" },
  { re: /恒洋听课笔记|听课|课程|讲座/i, type: "文稿" },
  { re: /错题|报错|bug|问题|混淆点/i, type: "思考" },
  // 短文归思考（与旧逻辑一致：plain.length < 800 由调用方判断后传入 isShort）
];

/**
 * 推断 type。rel 是相对 vault 路径。isShort 表示正文是否过短（<800 字）。
 * 与旧 inferType 行为等价，但返回值经 normalizeType 规范化。
 */
export function inferType(rel, plain) {
  for (const rule of TYPE_RULES) {
    if (rule.re.test(rel)) return rule.type;
  }
  if (plain.length < 800) return "思考";
  return "文稿"; // config.publish.defaultType，由调用方覆盖
}

// —— Topic 推断规则表（对应旧 inferTopic）——
const TOPIC_RULES = [
  { match: (rel) => rel.includes(`个人管理${path.sep}成功日记`), topic: "成功日记" },
  { match: (rel) => rel.includes(`个人管理${path.sep}恒洋听课笔记`), topic: "恒洋听课笔记" },
  // 计算机编程取二级目录作为 topic（避免大目录压扁知识地图）
  { match: (rel) => rel.split(path.sep)[0] === "计算机编程", topic: (rel) => rel.split(path.sep)[1] }
];

/**
 * 推断 topic。与旧 inferTopic 行为等价。
 */
export function inferTopic(rel, defaultTopic = "未分类") {
  const parts = rel.split(path.sep);
  for (const rule of TOPIC_RULES) {
    if (rule.match(rel)) {
      const value = typeof rule.topic === "function" ? rule.topic(rel) : rule.topic;
      if (value) return value;
    }
  }
  return parts[0] || defaultTopic;
}
