import { defineConfig } from 'astro/config';
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
  // English stays unprefixed at "/"; other locales are served from their own
  // "/pt/", "/pt-br/", "/es/", "/de/", "/fr/" dynamic route trees
  // (src/pages/[locale]/...) rather than Astro's automatic per-locale folder
  // convention, so every page keeps a single template/data source instead of
  // being duplicated per language. `routing: 'manual'` disables Astro's own
  // i18n middleware and folder convention accordingly; see src/i18n/locales.ts
  // and context.md for the full plan.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'pt-br', 'es', 'de', 'fr'],
    routing: 'manual',
  },
  adapter: vercel({
    // Deploy Astro middleware as a true Vercel Edge Function.
    // This runs BEFORE Vercel's "handle: filesystem" routing, so
    // it can intercept Accept: text/markdown on prerendered static pages.
    edgeMiddleware: true,
  }),
  integrations: [],
});
