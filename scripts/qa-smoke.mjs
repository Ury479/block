// =============================================================================
// Playwright 页面冒烟 + 移动溢出回归基线
//
// 目的（AGENTS.md「移动端检查所有页面横向溢出」）：在重构前锁住关键页面的
// 可达性与无横向溢出契约。每次回归跑这个脚本，任何破坏页面渲染或引入移动端
// 横向滚动的改动都会失败。
//
// 用法：先 npm run build，再 node scripts/qa-smoke.mjs
// 它会自动启动 astro preview（127.0.0.1:4321），跑完关闭。
// =============================================================================
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const PORT = 4321;
const BASE = `http://127.0.0.1:${PORT}`;

// 关键页面 + 期望标题片段（首页/归档/offer/同步/一篇真实文章/RSS）。
// 文章 URL 取自 posts.json 第一篇，确保冒烟覆盖真实生成内容。
import postsJson from "../src/data/posts.json" with { type: "json" };
const samplePost = postsJson[0];

const routes = [
  { path: "/", titleContains: "知识花园" },
  { path: "/archive/", titleContains: "归档" },
  { path: "/offer/", titleContains: "课程陪跑" },
  { path: "/now/", titleContains: "现在" },
  { path: "/garden/", titleContains: "知识地图" },
  { path: "/sync/", titleContains: "同步" },
  { path: samplePost.url, titleContains: samplePost.title.slice(0, 6) },
  { path: "/rss.xml", isRss: true }
];

const MOBILE_WIDTH = 390; // iPhone 14 宽度

function startPreview() {
  const proc = spawn("npx", ["astro", "preview", "--port", String(PORT), "--host", "127.0.0.1"], {
    stdio: "ignore",
    env: { ...process.env }
  });
  return proc;
}

async function waitForServer(timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {
      // 还没起来
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`preview server 未在 ${timeoutMs}ms 内就绪`);
}

// 检测横向溢出：比较 scrollWidth 与 clientWidth。
async function horizontalOverflow(page) {
  return page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth
  }));
}

// 带 1 次重试的 goto。preview 冷启动时长中文 URL 首次路由可能偶发超时，
// 用 domcontentloaded（而非 load）避免被翻译脚本等第三方资源拖延，超时再重试 1 次。
async function gotoWithRetry(page, url) {
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      return await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    } catch (e) {
      if (attempt === 2) throw e;
      await new Promise((r) => setTimeout(r, 500));
    }
  }
}

const failures = [];
const pass = (msg) => console.log(`  ✓ ${msg}`);
const fail = (msg) => {
  console.log(`  ✗ ${msg}`);
  failures.push(msg);
};

async function run() {
  console.log("启动 astro preview…");
  const server = startPreview();
  try {
    await waitForServer();
    console.log(`preview 就绪 @ ${BASE}`);

    const browser = await chromium.launch();

    // —— 桌面冒烟 ——
    console.log("\n[桌面 1280px] 页面可达性与标题:");
    const desktop = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const dpage = await desktop.newPage();
    for (const route of routes) {
      try {
        const res = await gotoWithRetry(dpage, `${BASE}${route.path}`);
        if (route.isRss) {
          if (res.status() === 200) pass(`${route.path} RSS 200`);
          else fail(`${route.path} RSS 期望 200，实际 ${res.status()}`);
          continue;
        }
        if (res.status() !== 200) {
          fail(`${route.path} 期望 200，实际 ${res.status()}`);
          continue;
        }
        const title = await dpage.title();
        if (title.includes(route.titleContains)) pass(`${route.path} 200 · 标题命中`);
        else fail(`${route.path} 200 · 标题未命中「${route.titleContains}」(实际: ${title})`);
      } catch (e) {
        fail(`${route.path} 访问异常: ${e.message}`);
      }
    }
    await desktop.close();

    // —— 移动端横向溢出检测（AGENTS.md 硬要求）——
    console.log(`\n[移动 ${MOBILE_WIDTH}px] 横向溢出检测:`);
    const mobile = await browser.newContext({
      viewport: { width: MOBILE_WIDTH, height: 844 },
      deviceScaleFactor: 3,
      isMobile: true
    });
    const mpage = await mobile.newPage();
    for (const route of routes) {
      if (route.isRss) continue;
      try {
        await gotoWithRetry(mpage, `${BASE}${route.path}`);
        const { scrollWidth, clientWidth } = await horizontalOverflow(mpage);
        // 允许 1px 抖动余量
        if (scrollWidth > clientWidth + 1) {
          fail(`${route.path} 横向溢出 ${scrollWidth} > ${clientWidth}`);
        } else {
          pass(`${route.path} 无横向溢出 (${scrollWidth}/${clientWidth})`);
        }
      } catch (e) {
        fail(`${route.path} 溢出检测异常: ${e.message}`);
      }
    }
    await mobile.close();
    await browser.close();
  } finally {
    server.kill("SIGTERM");
  }

  console.log(`\n结果: ${failures.length === 0 ? "全部通过 ✅" : `${failures.length} 项失败 ❌`}`);
  if (failures.length > 0) process.exit(1);
}

run().catch((e) => {
  console.error("冒烟测试崩溃:", e);
  process.exit(1);
});
