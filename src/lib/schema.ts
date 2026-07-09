import { localeHref, type Locale } from '@/i18n/locales';

// Shared schema.org JSON-LD builders. Keep every field grounded in real,
// verifiable site content — no fabricated ratings, reviews or offers.

export const SITE_URL = 'https://wordpresto.com';

/** Absolute, locale-aware URL for a locale-agnostic path (e.g. "/workers/"). */
export function absoluteUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localeHref(locale, path)}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Word Presto',
    url: SITE_URL,
    logo: `${SITE_URL}/brand/main-logo.png`,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Word Presto',
    url: SITE_URL,
  };
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
