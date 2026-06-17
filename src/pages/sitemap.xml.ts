import type { APIRoute } from 'astro';
import { workerProfiles } from '../data/workerProfiles';

export const prerender = true;

const BASE = 'https://wordpresto.com';

export const GET: APIRoute = () => {
  const workerUrls = workerProfiles.map(p =>
    `  <url>\n    <loc>${BASE}/workers/${p.slug}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE}/workers/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${workerUrls.join('\n')}
  <url>
    <loc>${BASE}/waitlist/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
