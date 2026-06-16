import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Deployed to Vercel. The Vercel adapter handles both:
//   - prerendered static pages (index, waitlist) via CDN
//   - server-rendered API routes (/api/waitlist) via Vercel Serverless Functions
//
// Astro 5 note: output: 'hybrid' was removed. output: 'static' (the default)
// is now equivalent — all pages prerender unless they set prerender = false.
// The adapter is still required to emit serverless functions for those routes.
export default defineConfig({
  site: 'https://wordpresto.com',
  adapter: vercel(),
  integrations: [
    sitemap(),
  ],
});
