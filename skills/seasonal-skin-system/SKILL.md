---
name: seasonal-skin-system
description: Add or tune the four-seasons skin system (春/夏/秋/冬) for this Astro blog. Documents the orthogonal data-theme × data-season model, the per-season token palette in tokens.css, the no-FOUC season bootstrap in BaseLayout, the SeasonSwitcher component, and the month-to-season auto fallback. Use when adding a new season, changing season colors, debugging theme flicker, or skin/season not applying.
---

# Seasonal Skin System（四季皮肤系统）

## 机制：两维正交

```
<html data-theme="light|dark" data-season="spring|summer|autumn|winter">
```

- **data-theme**（明暗）：light/dark —— 独占 paper/surface 的明度
- **data-season**（季节）：只改色相 token（moss/clay/gold/glow + ink 色温），绝不碰明度

两维正交叠加：任一季节都能配 light/dark。这是比"四季各自明暗混合"更优雅的解耦——季节管氛围色相，明暗管底色明度。

## 文件职责

| 文件 | 职责 |
|---|---|
| `src/lib/seasons.mjs` | 单一真相：季节顺序、元数据（label/swatch/desc）、monthToSeason 映射、currentSeason |
| `src/styles/tokens.css` | 每季 `[data-season="..."]` 块，覆盖 12 个色相 token + `--glow`（视觉单一真相） |
| `src/styles/global.css` | body 径向氛围用 `var(--glow)`；季节辨识度主载体 |
| `src/layouts/BaseLayout.astro` | 无 FOUC inline 脚本：读 localStorage.season，无则按月份自动；设 data-season + theme-color |
| `src/components/SeasonSwitcher.astro` | 4 色点切换器，点击设 data-season + 存 localStorage + season-set 标记 |
| `src/components/Header.astro` | SeasonSwitcher 与 theme-toggle 并列 |

## 自动 + 手动覆盖策略

- **首次访问**：无 localStorage.season → 按当前月份自动（3-5春/6-8夏/9-11秋/12-2冬）。
- **用户手动选**：SeasonSwitcher 点击 → 设 localStorage.season + `season-set=1`。
- **之后**：尊重用户选择，不再自动覆盖（`season-set=1` 标记区分"自动"与"手动"）。
- 月→季映射在两处保持一致：BaseLayout 的 inline 脚本（内联，因 head 不能 import）+ `seasons.mjs#monthToSeason`。改映射两处同步。

## 4 季调色板设计原则

亮色书卷气为底（AGENTS.md 约束：保留霞鹭文楷中文阅读气质）。每季：
- 主强调色 `--moss`：春嫩绿 / 夏深松 / 秋苔沉 / 冬墨青
- 暖色 `--clay`：春樱粉 / 夏珊瑚 / 秋赭石 / 冬寒梅
- 点缀 `--gold`：春嫩金 / 夏青金 / 秋琥珀 / 冬霜银
- 氛围 `--glow`：body 顶部径向晕（季节辨识度最强载体）
- ink/muted/line 色温微调（保证可读性对比度）

季节不改 paper/surface 明度（明暗模式独占），避免两维冲突。

## 扩展（开闭原则）

新增第五季：
1. `seasons.mjs` 的 SEASON_ORDER + SEASONS 加配置
2. `tokens.css` 加一个 `[data-season="..."]` 块
3. 组件零改动（SeasonSwitcher 自动渲染新色点）

## 无 FOUC（关键）

季节初始化在 `BaseLayout` head 的 `is:inline` 脚本，首帧 paint 前设好 data-season。**不能放到外部 JS 或 SeasonSwitcher 的 script**，否则会闪。

## 验证

```bash
npm run test:all          # 79 测试 + 339 页 + 默认冒烟（皮肤是纯视觉，数据契约不变）
node scripts/qa-seasons.mjs  # 4 季桌面 + 2 季移动截图，无横向溢出
```
截图存 `qa/seasons/`（gitignored）。用图像分析核对每季氛围色是否符合设计意图。

## 调研来源

`docs/blog-research/`（外部仓库）的 UI 风格指南 + 页面视觉设计蓝图。注意：调研主张"暗色为默认 + 单一定稿"，但本系统按用户决策改为"亮色为底 + 四季皮肤"——季节维度是文档之外的新增需求。
