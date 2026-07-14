/**
 * Translation Improvement Worker — configuration.
 *
 * English is the source of truth; every other locale is a translation this worker refines with DeepL.
 * These constants encode the two things DeepL cannot infer on its own: which terms are brand/product
 * names that must survive verbatim, and which formality each locale's copy is written in.
 */

import type { Locale } from '../../src/i18n/locales';

/** Non-English site locales. */
export type TargetLocale = Exclude<Locale, 'en'>;

/** DeepL target-language code per site locale (source is always EN). */
export const DEEPL_TARGET: Record<TargetLocale, string> = {
  pt: 'PT-PT',
  'pt-br': 'PT-BR',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
};

/**
 * Formality per locale, matched to the voice the site is already written in: de/pt/fr address the
 * reader formally, es informally. DeepL's `prefer_*` variants are safe no-ops where a language does
 * not support formality, so this never errors.
 */
export const FORMALITY: Record<TargetLocale, 'prefer_more' | 'prefer_less'> = {
  pt: 'prefer_more',
  'pt-br': 'prefer_more',
  es: 'prefer_less',
  de: 'prefer_more',
  fr: 'prefer_more',
};

/**
 * Brand and fixed-taxonomy terms that must NOT be localised. They are wrapped in DeepL ignore-tags so
 * they pass through verbatim even mid-sentence. Only genuine proper nouns / product names belong here
 * — not ordinary words that happen to be capitalised. Longest-first matching is applied at wrap time
 * so "Word Presto" is protected before "Word".
 */
export const PROTECTED_TERMS = [
  'Word Presto', 'WordPresto', 'Emma', 'Canvas', 'Workers', 'Worker',
  'LinkedIn', 'Facebook', 'Instagram', 'WordPress', 'Sanity', 'Astro',
  'GA4', 'Search Console', 'DeepL', 'Neon', 'Vercel',
];

/**
 * i18n dictionary files this worker edits. Each exports a single `Record<Locale, ...>` object literal.
 * `workerProfiles/` is intentionally excluded: it is split into per-locale batch files merged at
 * runtime, not one editable dictionary, so it needs a different (later) approach.
 */
export const TARGET_FILES = [
  'common', 'home', 'pricing', 'waitlist',
  'specialists', 'workersDirectory', 'prestobot', 'workerProfilePage',
];
