/**
 * prerender.mjs
 *
 * Generates static HTML for every route in the app by running the TanStack
 * Start SSR server (built to dist/server/) against each known URL. The
 * resulting HTML files are written into dist/client/ so that the GitHub Pages
 * upload step can serve them directly (no server runtime required).
 *
 * Run after `vite build` (which sets nitro:false in vite.config.ts and
 * produces dist/client/ + dist/server/).
 *
 * Usage:
 *   node scripts/prerender.mjs
 */

import { promises as fs } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const CLIENT_DIR = join(ROOT, "dist", "client");
const SERVER_ENTRY = join(ROOT, "dist", "server", "server.js");

// All routes that should be pre-rendered as standalone HTML pages.
const ROUTES = [
  "/",
  "/privacy-policy",
  "/refund-policy",
  "/shipping-policy",
  "/terms",
];

async function main() {
  // Verify build output exists.
  try {
    await fs.access(SERVER_ENTRY);
  } catch {
    console.error("ERROR: dist/server/server.js not found. Run `vite build` first.");
    process.exit(1);
  }

  // Import the SSR handler produced by the build.
  const { default: server } = await import(SERVER_ENTRY);

  for (const route of ROUTES) {
    const url = `http://localhost${route}`;
    let response;
    try {
      response = await server.fetch(new Request(url, { method: "GET" }), {}, {});
    } catch (err) {
      console.error(`FAILED to render ${route}:`, err);
      process.exit(1);
    }

    if (response.status !== 200) {
      console.error(`FAILED: ${route} returned HTTP ${response.status}`);
      process.exit(1);
    }

    const html = await response.text();

    // /  →  dist/client/index.html
    // /privacy-policy  →  dist/client/privacy-policy/index.html
    const relPath =
      route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;
    const outputPath = join(CLIENT_DIR, relPath);

    await fs.mkdir(dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html, "utf8");
    console.log(`  ✓ ${route}  →  dist/client/${relPath}`);
  }

  console.log(`\nPre-rendered ${ROUTES.length} routes into dist/client/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
