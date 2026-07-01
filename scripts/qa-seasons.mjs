// 四季皮肤视觉验证：对首页截 4 季图，确认切换生效、无横向溢出。
// 用法：先 build，再 node scripts/qa-seasons.mjs。截图存 qa/seasons/（gitignored）。
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const PORT = 4322;
const BASE = `http://127.0.0.1:${PORT}`;
const SEASONS = ["spring", "summer", "autumn", "winter"];
const outDir = path.resolve("qa/seasons");

function startPreview() {
  return spawn("npx", ["astro", "preview", "--port", String(PORT), "--host", "127.0.0.1"], { stdio: "ignore", env: { ...process.env } });
}

async function waitForServer(timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try { if ((await fetch(BASE)).ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`preview 未就绪 @ ${PORT}`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const server = startPreview();
  try {
    await waitForServer();
    const browser = await chromium.launch();
    const failures = [];

    // 桌面：4 季各截首页，并检查横向溢出
    const desktop = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await desktop.newPage();
    for (const season of SEASONS) {
      await page.goto(BASE, { waitUntil: "domcontentloaded" });
      // 无 FOUC 脚本会按月份设默认季节；这里手动覆盖验证每季
      await page.evaluate((s) => { document.documentElement.dataset.season = s; }, season);
      await page.waitForTimeout(250); // 等 token 切换重绘
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      }));
      const ok = scrollWidth <= clientWidth + 1;
      await page.screenshot({ path: path.join(outDir, `home-${season}-desktop.png`), fullPage: false });
      console.log(`${ok ? "✓" : "✗"} ${season} 桌面 (${scrollWidth}/${clientWidth}) ${ok ? "无溢出" : "横向溢出"}`);
      if (!ok) failures.push(`${season} 桌面溢出`);
    }

    // 移动：抽验春、秋（极端色温）无溢出
    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
    const mpage = await mobile.newPage();
    for (const season of ["spring", "autumn"]) {
      await mpage.goto(BASE, { waitUntil: "domcontentloaded" });
      await mpage.evaluate((s) => { document.documentElement.dataset.season = s; }, season);
      await mpage.waitForTimeout(250);
      const { scrollWidth, clientWidth } = await mpage.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      }));
      const ok = scrollWidth <= clientWidth + 1;
      await mpage.screenshot({ path: path.join(outDir, `home-${season}-mobile.png`), fullPage: false });
      console.log(`${ok ? "✓" : "✗"} ${season} 移动 (${scrollWidth}/${clientWidth})`);
      if (!ok) failures.push(`${season} 移动溢出`);
    }

    await desktop.close();
    await mobile.close();
    await browser.close();
    console.log(`\n截图存于 ${outDir}`);
    if (failures.length) { console.log(`❌ ${failures.length} 项失败`); process.exit(1); }
    console.log("✅ 四季皮肤验证通过");
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
