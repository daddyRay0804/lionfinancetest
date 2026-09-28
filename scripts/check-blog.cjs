const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");

// Load the typed editorial data without adding a runtime dependency to the site.
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  module._compile(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, filename);
};
const { blogPosts } = require("../src/data/blog/index.ts");
const { productSlugs } = require("../src/data/content.ts");
const slugs = new Set(blogPosts.map(post => post.slug));
assert.equal(blogPosts.length, 20);
assert.equal(slugs.size, 20);
assert.equal(new Set(blogPosts.map(post => post.image)).size, 20);
assert.equal(new Set(blogPosts.map(post => post.date)).size, 20);
const titles = new Set();
const descriptions = new Set();
let links = 0;
for (const post of blogPosts) {
  assert(post.date >= "2026-03-01" && post.date <= "2026-09-29", post.slug);
  assert.equal(new Date(`${post.date}T12:00:00Z`).toISOString().slice(0, 10), post.date);
  assert(fs.statSync(`public/blog/${post.image}.webp`).size < 400000, post.image);
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
console.log(`PASS: 20 posts, 60 complete translations, 20 unique images/dates, ${links} inline internal links, related links, services and source references.`);
