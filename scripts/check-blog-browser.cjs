const assert = require("node:assert/strict");
const fs = require("node:fs");
const { chromium } = require("playwright");
const { blogPosts, blogLabels } = require("./blog-test-data.cjs");
const latestSlug = blogPosts[0].slug;
const base = process.env.QA_BASE_URL || "http://localhost:3105";
const output = process.env.QA_OUTPUT || "/tmp/lionfinance-blog-qa";

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  const report = { articleChecks: 0, layouts: [], accessibility: [], screenshots: [] };
  async function layout(label) {
    const overflow = await page.locator("main").evaluate(main => {
      const width = document.documentElement.clientWidth;
      return [...main.querySelectorAll("*")].filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.right > width + 2 || r.left < -2) && getComputedStyle(el).position !== "absolute";
      }).map(el => `${el.tagName}.${el.className}`).slice(0, 10);
    });
    assert.deepEqual(overflow, [], `${label}: overflow`);
    const headerOverflows = await page.locator("body > div > header").evaluateAll(headers => headers.flatMap(header => [...header.querySelectorAll("a, button")].filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && (r.right > innerWidth + 2 || r.left < -2); }).map(el => el.textContent)));
    assert.deepEqual(headerOverflows, [], `${label}: header overflow`);
    report.layouts.push(label);
  }
  async function shot(label, fullPage = false) {
    if (fullPage) {
      for (const img of await page.locator("main img").all()) await img.scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    }
    await page.waitForFunction(() => [...document.querySelectorAll("main img")].filter(img => { const r = img.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }).every(img => img.complete && img.naturalWidth > 0));
    const path = `${output}/${label}.png`;
    await page.screenshot({ path, fullPage }); report.screenshots.push(path);
  }
  async function axe(label) {
    await page.addScriptTag({ path: require.resolve("axe-core") });
    const result = await page.evaluate(async () => window.axe.run(document.querySelector("main"), { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] } }));
    report.accessibility.push({ label, violations: result.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })) });
    assert.equal(result.violations.length, 0, `${label}: ${JSON.stringify(report.accessibility.at(-1))}`);
  }
  try {
    for (const lang of ["en", "zh", "kr"]) {
      await page.goto(`${base}/${lang}/blog`);
      await page.locator(".blog-card").first().waitFor();
      assert.equal(await page.locator(".blog-card").count(), blogPosts.length);
      await layout(`${lang}-desktop-list`); await shot(`${lang}-desktop-list`); await axe(`${lang}-desktop-list`);
      const links = await page.locator(".blog-card > a").evaluateAll(nodes => nodes.map(n => n.getAttribute("href")));
      for (const href of links) {
        assert.equal((await page.goto(base + href)).status(), 200);
        const schema = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(n => JSON.parse(n.textContent)));
        const article = schema.find(s => s["@type"] === "BlogPosting");
        assert.equal(article.author.name, "Eric Huang");
        assert(!("dateModified" in article));
        assert.equal(await page.locator("h1").count(), 1);
        assert.equal(await page.locator(".blog-prose h2").count(), 4);
        assert.equal(await page.locator(".blog-prose a").evaluateAll(nodes => nodes.every(n => n.getAttribute("href").startsWith(`/${document.documentElement.lang === "ko" ? "kr" : document.documentElement.lang === "zh-CN" ? "zh" : "en"}/`))), true);
        await page.locator("article > header figure img").evaluate(async image => { if (!image.complete) await new Promise((resolve, reject) => { image.onload = resolve; image.onerror = reject; }); });
        assert(await page.locator("article > header figure img").evaluate(image => image.naturalWidth > 0));
        await layout(`${href}-desktop`);
        await page.setViewportSize({ width: 390, height: 844 });
        await layout(`${href}-mobile`);
        await page.setViewportSize({ width: 1440, height: 1000 });
        report.articleChecks++;
      }
      await page.goto(`${base}/${lang}/blog/${latestSlug}`);
      await shot(`${lang}-desktop-article`); await axe(`${lang}-desktop-article`);
      await page.setViewportSize({ width: 390, height: 844 });
      await shot(`${lang}-mobile-article`, true); await axe(`${lang}-mobile-article`);
      const toc = page.locator("aside a").first();
      await toc.click();
      await page.waitForTimeout(500);
      assert.equal(new URL(page.url()).hash, "#section-1");
      const headingY = await page.locator("#section-1").evaluate(el => el.getBoundingClientRect().top);
      assert(headingY >= 64 && headingY < 200, `${lang}: sticky header obscures TOC`);
      await page.locator('a[rel="author"]').click();
      await page.locator("#eric").waitFor();
      assert.equal(await page.locator("main h2").nth(2).textContent().then(x => x.trim()), "Eric Huang");
      await page.goto(`${base}/${lang}/blog`);
      await layout(`${lang}-mobile-list`); await shot(`${lang}-mobile-list`);
      await page.locator('[role="group"] button').last().click();
      assert.equal(await page.locator(".blog-card").count(), blogPosts.filter(post => post.category === "business").length);
      await page.locator("#blog-search").fill("zzzz-no-such-article");
      assert.equal(await page.locator(".blog-card").count(), 0);
      await page.locator('main section > div.text-center button').click();
      assert.equal(await page.locator(".blog-card").count(), blogPosts.length);
      await page.locator("#blog-search").fill("KiwiSaver");
      assert.equal(await page.locator(".blog-card").count(), blogPosts.filter(post => `${post.copy[lang].title} ${post.copy[lang].description} ${blogLabels[lang].categories[post.category]}`.normalize("NFKC").toLocaleLowerCase().includes("kiwisaver")).length);
      await page.locator("#blog-search").fill("");
      await page.getByRole("button", { name: "Open menu", exact: true }).click();
      const nav = page.locator("#mobile-navigation");
      await nav.getByRole("link", { name: { en: "Blog", zh: "贷款专栏", kr: "블로그" }[lang], exact: true }).click();
      assert.equal(await nav.count(), 0);
      await page.setViewportSize({ width: 1440, height: 1000 });
    }
    for (const width of [320, 768, 1024]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/en/blog`); await layout(`en-list-${width}`);
      await page.goto(`${base}/kr/blog/${latestSlug}`); await layout(`kr-article-${width}`);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`${base}/en/blog/${latestSlug}`);
    await page.getByRole("link", { name: "中文", exact: true }).click();
    await page.waitForURL(`**/zh/blog/${latestSlug}`);
    assert.equal(await page.locator("html").getAttribute("lang"), "zh-CN");
    await page.getByRole("link", { name: "한국어", exact: true }).click();
    await page.waitForURL(`**/kr/blog/${latestSlug}`);
    assert.equal(await page.locator("html").getAttribute("lang"), "ko");
    const noJs = await browser.newContext({ javaScriptEnabled: false });
    const crawler = await noJs.newPage();
    for (const lang of ["en", "zh", "kr"]) {
      await crawler.goto(`${base}/${lang}/blog`);
      assert.equal(await crawler.locator(".blog-card > a").count(), blogPosts.length);
      await crawler.goto(`${base}/${lang}/blog/${latestSlug}`);
      assert((await crawler.locator(".blog-prose").textContent()).length > 400);
    }
    await noJs.close();
    assert.deepEqual(errors, []);
    console.log(`PASS: ${report.articleChecks} articles; ${report.layouts.length} layout checks; ${report.accessibility.length} accessibility scans; filters, search, mobile menu, author, TOC, language switch and no-JavaScript content.`);
  } finally {
    fs.writeFileSync(`${output}/report.json`, JSON.stringify({ ...report, errors }, null, 2));
    await browser.close();
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
