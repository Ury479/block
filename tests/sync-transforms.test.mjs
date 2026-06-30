import { describe, expect, it } from "vitest";
import {
  parseMatter,
  stringifyMatter,
  makeSlug,
  normalizeTags,
  toPlainText,
  rewriteInternalLinks,
  toIsoDate
} from "../scripts/sync/lib/transforms.mjs";
import { inferTopic, inferType, normalizeType, CANONICAL_TYPES } from "../scripts/sync/lib/inference.mjs";
import { PublishPolicy, bypassRule, denyPatternRule, lengthRule, publishFlagRule, publishRootsRule, sensitiveContentRule } from "../scripts/sync/lib/publishRules.mjs";

// =============================================================================
// 同步管线纯函数行为契约（阶段 2 重构后等价性验证）
//
// 这些测试用具体输入锁定每个纯函数的输出。它们既是「重构正确」的证据（新模块
// 实现产出与旧逻辑一致），也是未来回归护栏。算法源自旧 sync-obsidian.mjs。
// =============================================================================

describe("parseMatter / stringifyMatter", () => {
  it("解析 YAML frontmatter", () => {
    const raw = "---\ntitle: 测试\ntags: [a, b]\n---\n正文";
    const { data, content } = parseMatter(raw);
    expect(data.title).toBe("测试");
    expect(data.tags).toEqual(["a", "b"]);
    expect(content).toBe("正文");
  });

  it("无 frontmatter 时 data 为空对象、content 原样", () => {
    const { data, content } = parseMatter("纯正文");
    expect(data).toEqual({});
    expect(content).toBe("纯正文");
  });

  it("stringifyMatter 往返一致", () => {
    const out = stringifyMatter({ title: "T", date: "2026-06-30" }, "正文");
    expect(out).toBe("---\ntitle: T\ndate: 2026-06-30\n---\n\n正文");
  });
});

describe("makeSlug", () => {
  it("保留中文与目录层级，空格转连字符", () => {
    expect(makeSlug("计算机编程/编程日报/2026 年 6 月.md", "标题")).toBe("计算机编程/编程日报/2026-年-6-月");
  });

  it("去除文件系统/URL 不安全字符（<>? 直接删除，不留连字符）", () => {
    // 旧正则把 <>:?*# 等直接删除（非替换为 -），故 "a<b>c?" → "abc"
    expect(makeSlug("a<b>c?.md", "t")).toBe("abc");
  });

  it("全空时回退 sha1 前 7 位（确定性）", () => {
    const slug = makeSlug("???.md", "标题");
    expect(slug).toMatch(/^[0-9a-f]{7}$/);
  });

  it("同一输入产出同一 slug（确定性）", () => {
    const a = makeSlug("计算机编程/编程日报/x.md", "t");
    const b = makeSlug("计算机编程/编程日报/x.md", "t");
    expect(a).toBe(b);
  });
});

describe("normalizeTags", () => {
  it("数组去前导 #", () => {
    expect(normalizeTags(["#a", "b"])).toEqual(["a", "b"]);
  });
  it("字符串按逗号/空格拆分", () => {
    expect(normalizeTags("a, b c")).toEqual(["a", "b", "c"]);
  });
  it("空值返回空数组", () => {
    expect(normalizeTags(undefined)).toEqual([]);
  });
});

describe("toPlainText", () => {
  it("去除代码块、Markdown 链接（整段删除）、标记，压空白", () => {
    // 注意：旧 toPlainText 把 [文本](url) 整段替换成空（链接文本也被移除），
    // 这是历史行为，重构保持等价。`code` 的反引号被去掉，保留 code 字面。
    const md = "## 标题\n\n`code` [链](url) 正文";
    expect(toPlainText(md)).toBe("标题 code 正文");
  });
  it("双链取别名", () => {
    expect(toPlainText("[[target|别名]] 后")).toBe("别名target 后");
  });
});

describe("rewriteInternalLinks", () => {
  it("双链 → 归档搜索链接，无别名用 target 作文本", () => {
    expect(rewriteInternalLinks("[[目标]]")).toBe("[目标](/archive/?q=" + encodeURIComponent("目标") + ")");
  });
  it("有别名用别名作文本", () => {
    expect(rewriteInternalLinks("[[目标|显示]]")).toBe("[显示](/archive/?q=" + encodeURIComponent("目标") + ")");
  });
});

describe("toIsoDate", () => {
  it("合法日期转 ISO", () => {
    expect(toIsoDate("2026-06-30")).toMatch(/^2026-06-30/);
  });
  it("非法日期回退为当前时间（不抛错）", () => {
    expect(toIsoDate("not-a-date")).toMatch(/^\d{4}-\d{2}-\d{2}/);
  });
});

describe("inference（topic/type 推断 + 规范化）", () => {
  it("inferTopic：成功日记路径 → 成功日记", () => {
    expect(inferTopic("个人管理/成功日记/x.md")).toBe("成功日记");
  });
  it("inferTopic：恒洋听课笔记 → 恒洋听课笔记", () => {
    expect(inferTopic("个人管理/恒洋听课笔记/x.md")).toBe("恒洋听课笔记");
  });
  it("inferTopic：计算机编程取二级目录", () => {
    expect(inferTopic("计算机编程/编程日报/x.md")).toBe("编程日报");
  });
  it("inferTopic：其他取一级目录", () => {
    expect(inferTopic("随笔/x.md")).toBe("随笔");
  });

  it("inferType：日报/复盘 → 手记", () => {
    expect(inferType("编程日报/复盘.md", "x".repeat(1000))).toBe("手记");
  });
  it("inferType：错题/报错 → 思考", () => {
    expect(inferType("错题集/bug.md", "x".repeat(1000))).toBe("思考");
  });
  it("inferType：短文 <800 字 → 思考", () => {
    expect(inferType("普通/x.md", "x".repeat(100))).toBe("思考");
  });

  // —— 阶段 2 修复：英文残留 type 规范化 ——
  it("normalizeType：weekly-review → 手记（修复 10 篇残留 bug）", () => {
    expect(normalizeType("weekly-review")).toBe("手记");
    expect(normalizeType("programming-daily-review")).toBe("手记");
    expect(normalizeType("daily-review")).toBe("手记");
  });
  it("normalizeType：三态原样返回；未知值降级", () => {
    expect(normalizeType("文稿")).toBe("文稿");
    expect(normalizeType("手记")).toBe("手记");
    expect(normalizeType("思考")).toBe("思考");
    expect(normalizeType("未知xyz", "文稿")).toBe("文稿");
  });
  it("CANONICAL_TYPES 恰好三态", () => {
    expect([...CANONICAL_TYPES].sort()).toEqual(["思考", "手记", "文稿"]);
  });
});

describe("PublishPolicy 责任链", () => {
  function policy() {
    return new PublishPolicy()
      .add(bypassRule())
      .add(denyPatternRule(["密钥", "token"]))
      .add(sensitiveContentRule(["sk-[A-Za-z0-9]{20,}"]))
      .add(lengthRule(40))
      .add(publishRootsRule())
      .add(publishFlagRule(true));
  }
  const baseCtx = { rel: "a/b.md", raw: "x".repeat(100), plain: "x".repeat(100), explicitlyPublished: false, args: { file: "", all: false, publishRoots: false, safe: false } };

  it("--file 模式无条件放行", () => {
    expect(policy().evaluate({ ...baseCtx, args: { ...baseCtx.args, file: "x.md" } }).ok).toBe(true);
  });
  it("路径命中 denyPatterns → deny-pattern", () => {
    expect(policy().evaluate({ ...baseCtx, rel: "密钥/x.md" })).toEqual({ ok: false, reason: "deny-pattern" });
  });
  it("内容命中敏感正则 → sensitive-content", () => {
    expect(policy().evaluate({ ...baseCtx, raw: "sk-" + "a".repeat(25) })).toEqual({ ok: false, reason: "sensitive-content" });
  });
  it("过短 → too-short", () => {
    expect(policy().evaluate({ ...baseCtx, plain: "短" })).toEqual({ ok: false, reason: "too-short" });
  });
  it("publishRoots 模式放行", () => {
    expect(policy().evaluate({ ...baseCtx, args: { ...baseCtx.args, publishRoots: true } }).ok).toBe(true);
  });
  it("safeByDefault 且无 publish 标记 → missing-publish-flag", () => {
    expect(policy().evaluate(baseCtx)).toEqual({ ok: false, reason: "missing-publish-flag" });
  });
  it("有 publish 标记 → 放行", () => {
    expect(policy().evaluate({ ...baseCtx, explicitlyPublished: true }).ok).toBe(true);
  });
});
