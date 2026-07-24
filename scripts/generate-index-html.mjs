/**
 * Post-build script: generates index.html for GitHub Pages deployment.
 *
 * The TanStack Start build (Nitro / cloudflare-module preset) outputs
 * client-side JS and CSS into .output/public/assets/ with content-hashed
 * filenames. Because there is no server to render HTML at request time on
 * GitHub Pages, this script inspects the assets directory, resolves the
 * hashed filenames, and writes a minimal SPA bootstrap index.html that:
 *
 *  - Loads the CSS and main JS bundle
 *  - Implements the sessionStorage redirect trick so deep-links routed
 *    through 404.html (already present in public/) reach the correct page
 */

import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const OUT_DIR = ".output/public";
const ASSETS_DIR = join(OUT_DIR, "assets");

const files = readdirSync(ASSETS_DIR);

const css = files.find((f) => /^styles-.*\.css$/.test(f));
const js = files.find((f) => /^index-.*\.js$/.test(f));

if (!css) {
  console.error("Could not find styles-*.css in", ASSETS_DIR);
  process.exit(1);
}
if (!js) {
  console.error("Could not find index-*.js in", ASSETS_DIR);
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>GAK Creations — Architectural Art &amp; Travel Collages</title>
    <meta
      name="description"
      content="The archive of Gerald Allen Knowles — architectural drawings and travel collages from Europe and the Atlantic islands, available as fine art prints."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Karla:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/assets/${css}" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <script>
      // Consume redirect stored by 404.html (SPA deep-link support on GitHub Pages)
      var r = sessionStorage.getItem("redirect");
      if (r) {
        sessionStorage.removeItem("redirect");
        history.replaceState(null, null, r);
      }
    </script>
  </head>
  <body>
    <script type="module" src="/assets/${js}"></script>
  </body>
</html>
`;

writeFileSync(join(OUT_DIR, "index.html"), html, "utf-8");
console.log(`Generated ${OUT_DIR}/index.html  (css: ${css}  js: ${js})`);
