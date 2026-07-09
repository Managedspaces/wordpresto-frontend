import type { Locale } from '@/i18n/locales';

// Destinations for the account CTAs that leave this marketing site for the
// WordPresto app (app.wordpresto.com). Clicking "Join now" should lead straight
// into the app's real signup workflow, and "Sign in" into the app login — not
// the early-access waitlist form. These are the primary-funnel links, so they
// live in one place rather than being hardcoded across every page component.
//
// The app origin is env-configurable so it can be pointed at a preview/staging
// app without a code change. It falls back to PUBLIC_APP_API_BASE (already used
// by the pricing page) and then the production domain, so no new Vercel var is
// required for it to work in production.
//
// The visitor's locale is carried across as `?lang=<locale>` for non-English:
// the app reads that querystring (see the app's i18n `lookupQuerystring: 'lang'`)
// and stamps it onto the new account, so a German visitor lands on a German
// signup. English is the app default and is left unparameterised.

const APP_BASE = (
  import.meta.env.PUBLIC_APP_BASE ||
  import.meta.env.PUBLIC_APP_API_BASE ||
  'https://app.wordpresto.com'
).replace(/\/+$/, '');

function appUrl(path: string, locale: Locale): string {
  const url = `${APP_BASE}${path}`;
  return locale === 'en' ? url : `${url}?lang=${locale}`;
}

/** "Join now" / primary CTAs → the app's real signup workflow. */
export function registerUrl(locale: Locale = 'en'): string {
  return appUrl('/register', locale);
}

/** "Sign in" → the app's login. */
export function loginUrl(locale: Locale = 'en'): string {
  return appUrl('/login', locale);
}
