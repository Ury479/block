// =============================================================================
// 季节皮肤配置 —— 单一真相（开闭原则扩展点）
//
// 四季皮肤系统：亮色书卷气为底，按季节切换氛围色（强调色 / 暖色 / 点缀金 +
// body 径向氛围晕）。季节与明暗（data-theme）正交叠加，互不耦合。
//
// 本文件只承载「JS 侧需要的逻辑常量」：
//   - 季节顺序与元数据（供 SeasonSwitcher 渲染色点 + tooltip）
//   - 月份 → 季节的映射（供无 FOUC 自动初始化）
//
// 具体的 CSS 色值定义在 src/styles/tokens.css 的 [data-season="..."] 块里，
// 那是视觉的单一真相。本文件的 swatch 字段仅用于切换器 UI 的色点预览，
// 必须与 tokens.css 对应季节的主强调色保持一致（人工同步）。
// =============================================================================

/** 四季顺序（切换器按此顺序渲染）。 */
export const SEASON_ORDER = ["spring", "summer", "autumn", "winter"];

/**
 * 季节元数据。swatch 是该季节主强调色（moss）的预览色，用于切换器色点。
 * label 是中文名，icon 是单字符号。
 */
export const SEASONS = {
  spring: { id: "spring", label: "春", icon: "芽", swatch: "#6fa05a", desc: "嫩芽初生" },
  summer: { id: "summer", label: "夏", icon: "茂", swatch: "#3f6b4a", desc: "茂盛清凉" },
  autumn: { id: "autumn", label: "秋", icon: "琥", swatch: "#b8821e", desc: "书卷琥珀" },
  winter: { id: "winter", label: "冬", icon: "霜", swatch: "#5a7068", desc: "清冷克制" }
};

/**
 * 月份 → 季节映射。
 * 3-5 春 / 6-8 夏 / 9-11 秋 / 12-2 冬（北半球）。
 * @param {number} month 1-12
 * @returns {"spring"|"summer"|"autumn"|"winter"}
 */
export function monthToSeason(month) {
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter"; // 12, 1, 2
}

/** 当前月份对应的季节（服务端渲染默认值）。 */
export function currentSeason(date = new Date()) {
  return monthToSeason(date.getMonth() + 1);
}
