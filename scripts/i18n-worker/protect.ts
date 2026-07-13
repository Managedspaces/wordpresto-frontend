/**
 * Brand-term protection for the translation worker.
 *
 * DeepL supports XML tag handling: content inside an ignored tag is passed through untranslated. We
 * wrap each protected term in `<x>…</x>` before sending the English source, translate with
 * `tag_handling=xml` + `ignore_tags=x`, then strip the tags from the result. This keeps "Word Presto",
 * the Worker/Canvas taxonomy and the channel names verbatim even in the middle of a translated
 * sentence. Pure and deterministic.
 */

import { PROTECTED_TERMS } from './config';

// Longest first so multi-word terms are wrapped before their prefixes ("Word Presto" before "Word").
const TERMS = [...PROTECTED_TERMS].sort((a, b) => b.length - a.length);

const escapeRe = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Wrap every whole-word occurrence of a protected term in an ignore-tag. */
export function protectText(text: string): string {
  let out = text;
  for (const term of TERMS) {
    // Boundaries exclude word chars and the tag brackets, so we never match inside an existing <x>.
    const re = new RegExp(`(?<![\\w<>])${escapeRe(term)}(?![\\w<>])`, 'g');
    out = out.replace(re, `<x>${term}</x>`);
  }
  return out;
}

/** Remove the protection tags from a translated string. */
export function unprotectText(text: string): string {
  return text.replace(/<\/?x>/g, '');
}

/**
 * True when a string is ENTIRELY protected terms / punctuation (nothing left to translate once the
 * protected terms are removed). Such strings are skipped — sending them to DeepL would waste a call
 * and risk churn.
 */
export function isFullyProtected(text: string): boolean {
  // Remove the protected terms, then check whether any translatable letters remain.
  let residue = text;
  for (const term of TERMS) residue = residue.split(term).join(' ');
  return !/\p{L}/u.test(residue);
}
