const fs = require("node:fs");
const ts = require("typescript");

// Share the actual typed content between data, browser and HTTP assertions.
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  module._compile(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, filename);
};
const { blogPosts } = require("../src/data/blog/index.ts");
const { blogLabels } = require("../src/data/blog/types.ts");
const { productSlugs, footerLegalSlugs } = require("../src/data/content.ts");
module.exports = { blogPosts, blogLabels, productSlugs };

if (require.main === module) {
  const paths = ["en", "zh", "kr"].flatMap(lang => [
    "", "/about", "/team", "/faq", "/blog",
    ...footerLegalSlugs.filter(slug => slug !== "terms" || lang === "en").map(slug => `/${slug}`),
    ...productSlugs.map(slug => `/products/${slug}`),
    ...blogPosts.map(post => `/blog/${post.slug}`),
  ].map(path => `/${lang}${path}`));
  console.log(JSON.stringify(paths));
}
