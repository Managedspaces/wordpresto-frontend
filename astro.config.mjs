import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://wordpresto.com',
  // output defaults to 'static'; individual endpoints opt into server-side with prerender: false
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap(),
  ],
});
