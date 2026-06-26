import type { APIRoute } from 'astro';
import { workerProfiles } from '../data/workerProfiles';
import { xmlRoutes } from '../data/siteRoutes';

export const prerender = true;

const BASE = 'https://wordpresto.com';

function urlEntry(path: string, changefreq: string, priority: number): string {
  return [
    '  <url>',
    `    <loc>${BASE}${path}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n');
}

export const GET: APIRoute = () => {
  // Top-level pages come from the shared route registry; Worker profiles are
  // appended from their data source so new Workers appear automatically.
  const staticUrls = xmlRoutes.map((r) =>
    urlEntry(r.path, r.changefreq ?? 'monthly', r.priority ?? 0.5),
  );

  const workerUrls = workerProfiles.map((p) =>
    urlEntry(`/workers/${p.slug}/`, 'monthly', 0.7),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...workerUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
