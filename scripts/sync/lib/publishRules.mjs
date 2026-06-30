// =============================================================================
// 发布策略 —— Chain of Responsibility（开闭原则）
//
// 旧 shouldPublish() 是一个长布尔链，把「CLI 模式短路 / 路径黑名单 / 内容黑名单 /
// 最短字数 / publish 标记」混在一个函数体里。新增规则必须改函数体，违反开闭。
//
// 这里把每条规则做成独立 Rule 对象：{ name, check(ctx) => {ok, reason?} }。
// PublishPolicy 按注册顺序执行，遇到第一条 {ok:false} 即返回（责任链短路）。
// 新增规则只需 policy.add(rule)，无需改动既有规则。
// =============================================================================
import path from "node:path";

/**
 * @typedef {Object} PublishContext
 * @property {string} rel           —— 相对 vault 的路径
 * @property {string} raw           —— 原始文件内容
 * @property {string} plain         —— 去标记后的纯文本
 * @property {boolean} explicitlyPublished —— frontmatter publish: true
 * @property {object} args          —— CLI 模式 {file, all, publishRoots, safe}
 */

/**
 * @typedef {Object} PublishRule
 * @property {string} name
 * @property {(ctx: PublishContext) => ({ok: boolean, reason?: string} | null)}
 *           check  —— 返回 null 表示「本规则不适用，交给下一条」
 */

export class PublishPolicy {
  constructor() {
    /** @type {PublishRule[]} */
    this.rules = [];
  }

  /** 注册一条规则（追加到链尾）。开闭：新增规则只调用本方法。 */
  add(rule) {
    this.rules.push(rule);
    return this;
  }

  /**
   * 按顺序评估规则，返回第一个明确决策；全部放行则 {ok:true}。
   * 与旧 shouldPublish 等价：返回 {ok, reason?}。
   */
  evaluate(ctx) {
    for (const rule of this.rules) {
      const verdict = rule.check(ctx);
      if (verdict !== null) return verdict;
    }
    return { ok: true };
  }
}

// —— 内置规则（顺序敏感，对应旧 shouldPublish 的短路顺序）——

/** CLI 显式模式（--file / --all）无条件放行，跳过一切过滤。 */
export function bypassRule() {
  return {
    name: "cli-bypass",
    check: ({ args }) => (args.file || args.all ? { ok: true } : null)
  };
}

/** 路径黑名单：命中 denyPatterns（大小写不敏感）即拒绝。 */
export function denyPatternRule(denyPatterns) {
  const patterns = (denyPatterns || []).map(String);
  return {
    name: "deny-pattern",
    check: ({ rel }) =>
      patterns.some((p) => rel.toLowerCase().includes(p.toLowerCase()))
        ? { ok: false, reason: "deny-pattern" }
        : null
  };
}

/** 内容黑名单：命中密钥/私钥/token 等正则即拒绝（AGENTS.md 内容安全红线）。 */
export function sensitiveContentRule(contentDenyRegexes) {
  const regexes = (contentDenyRegexes || []).map((p) => new RegExp(p, "i"));
  return {
    name: "sensitive-content",
    check: ({ raw }) =>
      regexes.some((re) => re.test(raw)) ? { ok: false, reason: "sensitive-content" } : null
  };
}

/** 过短内容过滤：纯文本长度 < minChars 即拒绝。 */
export function lengthRule(minChars = 0) {
  return {
    name: "too-short",
    check: ({ plain }) => (plain.length < minChars ? { ok: false, reason: "too-short" } : null)
  };
}

/** --publish-roots 模式：命中 publicRoots 即放行（不做 publish 标记检查）。 */
export function publishRootsRule() {
  return {
    name: "publish-roots",
    check: ({ args }) => (args.publishRoots ? { ok: true } : null)
  };
}

/** publish 标记：safe 模式或 safeByDefault 时，无 publish:true 即拒绝。 */
export function publishFlagRule(safeByDefault) {
  return {
    name: "missing-publish-flag",
    check: ({ args, explicitlyPublished }) =>
      (args.safe || safeByDefault) && !explicitlyPublished
        ? { ok: false, reason: "missing-publish-flag" }
        : null
  };
}

/**
 * 用 config 构建默认策略链（顺序与旧 shouldPublish 严格一致）。
 */
export function createDefaultPolicy(config) {
  const p = config.publish;
  return new PublishPolicy()
    .add(bypassRule())
    .add(denyPatternRule(p.denyPatterns))
    .add(sensitiveContentRule(p.contentDenyRegexes))
    .add(lengthRule(p.minChars || 0))
    .add(publishRootsRule())
    .add(publishFlagRule(p.safeByDefault));
}
