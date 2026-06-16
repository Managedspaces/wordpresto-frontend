import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// Astro 5 removed the `hybrid` output mode. `output: 'static'` (the default)
// now behaves identically: all pages/routes are pre-rendered unless they
// explicitly opt out with `export const prerender = false`.
//
// The node adapter is still required so the server entry point is emitted at
// dist/server/entry.mjs to serve the /api/waitlist route at runtime.
// Start in production with: node ./dist/server/entry.mjs
//
// Pre-rendered pages land in dist/client/ as static HTML.
// Server-only routes (e.g. /api/waitlist) land in dist/server/pages/.
export default defineConfig({
  site: 'https://wordpresto.com',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap(),
  ],
});
