// Single source of truth for supported locales. See context.md for the
// full i18n plan this implements.

export type Locale = 'en' | 'pt' | 'pt-br' | 'es' | 'de' | 'fr';

export interface LocaleMeta {
  code: Locale;
  /** Language name in its own language, for the locale switcher. */
  label: string;
  /** URL path segment. Empty string for the default (unprefixed) locale. */
  path: string;
  /** Flag lookup key — see src/i18n/flags.ts. */
  countryCode: 'IE' | 'PT' | 'BR' | 'ES' | 'DE' | 'FR';
}

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALES: LocaleMeta[] = [
  { code: 'en', label: 'English', path: '', countryCode: 'IE' },
  { code: 'pt', label: 'Português', path: 'pt', countryCode: 'PT' },
  { code: 'pt-br', label: 'Português (Brasil)', path: 'pt-br', countryCode: 'BR' },
  { code: 'es', label: 'Español', path: 'es', countryCode: 'ES' },
  { code: 'de', label: 'Deutsch', path: 'de', countryCode: 'DE' },
  { code: 'fr', label: 'Français', path: 'fr', countryCode: 'FR' },
];

export const LOCALE_CODES: Locale[] = LOCALES.map((l) => l.code);

export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as string[]).includes(value);
}

export function getLocaleMeta(locale: Locale): LocaleMeta {
  return LOCALES.find((l) => l.code === locale)!;
}

/**
 * Builds a locale-aware absolute path. `path` must start with "/" and is
 * otherwise locale-agnostic (e.g. "/workers/seo/"). The default locale is
 * never prefixed.
 */
export function localeHref(locale: Locale, path: string): string {
  const meta = getLocaleMeta(locale);
  if (!meta.path) return path;
  return path === '/' ? `/${meta.path}/` : `/${meta.path}${path}`;
}
