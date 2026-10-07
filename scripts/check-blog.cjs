const assert = require("node:assert/strict");
const fs = require("node:fs");
const { blogPosts, productSlugs } = require("./blog-test-data.cjs");
const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Pacific/Auckland", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
const slugs = new Set(blogPosts.map(post => post.slug));
assert(blogPosts.length >= 20, "Do not remove the original editorial collection");
assert.equal(slugs.size, blogPosts.length);
assert.equal(new Set(blogPosts.map(post => post.image)).size, blogPosts.length);
assert.equal(new Set(blogPosts.map(post => post.date)).size, blogPosts.length);
const imageHashes = new Set();
const crypto = require("node:crypto");
const titles = new Set();
const descriptions = new Set();
let links = 0;
for (const post of blogPosts) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(post.date) && post.date >= "2026-03-01" && post.date <= today, `${post.slug}: future or invalid date`);
  assert.equal(new Date(`${post.date}T12:00:00Z`).toISOString().slice(0, 10), post.date);
  assert(fs.statSync(`public/blog/${post.image}.webp`).size < 400000, post.image);
  const hash = crypto.createHash("sha256").update(fs.readFileSync(`public/blog/${post.image}.webp`)).digest("hex");
  assert(!imageHashes.has(hash), `${post.slug}: duplicate image bytes`);
  imageHashes.add(hash);
  assert(productSlugs.includes(post.service), post.service);
  assert.equal(post.related.length, 2);
  for (const slug of post.related) assert(slugs.has(slug) && slug !== post.slug, slug);
  assert(post.sources.length >= 1);
  for (const source of post.sources) assert(source.url.startsWith("https://"));
  for (const lang of ["en", "zh", "kr"]) {
    const copy = post.copy[lang];
    assert(copy.title && copy.description && copy.alt, `${post.slug}/${lang}`);
    assert(!titles.has(copy.title), copy.title);
    assert(!descriptions.has(copy.description), copy.description);
    titles.add(copy.title); descriptions.add(copy.description);
    assert.equal((copy.body.match(/^## /gm) || []).length, 4, `${post.slug}/${lang}: headings`);
    if (lang === "en") assert(copy.body.split(/\s+/).length >= 220, `${post.slug}: short article`);
    const articleLinks = [...copy.body.matchAll(/\]\((\/[^)]+)\)/g)].map(match => match[1]);
    assert(articleLinks.length >= 2, `${post.slug}/${lang}: internal links`);
    for (const href of articleLinks) {
      assert(href.startsWith("/blog/") ? slugs.has(href.slice(6)) : href.startsWith("/products/") ? productSlugs.includes(href.slice(10)) : ["/team", "/disclosure"].includes(href), `${post.slug}: ${href}`);
      links++;
    }
  }
}
console.log(`PASS: ${blogPosts.length} posts, ${blogPosts.length * 3} complete translations, unique images/dates, ${links} inline internal links, related links, services and source references.`);
