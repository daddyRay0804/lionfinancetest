// Re-encode generated originals for delivery without changing their composition.
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const manifest = require("./blog-image-manifest.json");

async function main() {
  const sourceDir = process.env.BLOG_IMAGE_SOURCE_DIR;
  if (!sourceDir) throw new Error("Set BLOG_IMAGE_SOURCE_DIR to the generated originals directory.");
  for (const asset of manifest.assets) {
    fs.mkdirSync(path.dirname(asset.output), { recursive: true });
    await sharp(path.join(sourceDir, asset.source)).webp({ quality: 82 }).toFile(asset.output);
    console.log(asset.output, fs.statSync(asset.output).size);
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
