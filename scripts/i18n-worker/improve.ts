/**
 * Decision layer: turn an i18n dictionary into a plan of proposed translation changes. English is the
 * source of truth. For each translatable leaf and each target locale, the injected `translate` returns
 * DeepL's (brand-protected, formality-matched) rendering of the English; where it materially differs
 * from the current translation, that becomes a proposed change. Strings where DeepL already agrees are
 * left untouched (no churn), and unsafe/fully-protected strings are skipped. Pure aside from the
 * injected translate function — the DeepL wiring lives in the runner.
 */

import {
  collectLeaves, getByPath, normalise, isUnsafeToTranslate, type Leaf, type PathSeg,
} from './extract';
import { isFullyProtected } from './protect';
import type { TargetLocale } from './config';

export interface Change {
  locale: TargetLocale;
  path: PathSeg[];
  before: string;
  after: string;
}

export interface FileStats {
  leaves: number;
  translatablePerLocale: number;
  skippedUnsafe: number;
  skippedProtected: number;
  changed: number;
  locales: TargetLocale[];
}

export interface FilePlan {
  file: string;
  changes: Change[];
  stats: FileStats;
}

/** Translate a batch of English strings into one locale, already brand-protected and unprotected. */
export type TranslateFn = (englishTexts: string[], locale: TargetLocale) => Promise<string[]>;

export async function buildFilePlan(
  file: string,
  dict: Record<string, unknown>,
  locales: TargetLocale[],
  translate: TranslateFn,
  limit?: number,
): Promise<FilePlan> {
  const enObj = dict.en;
  const leaves = collectLeaves(enObj);

  const unsafe = leaves.filter((l) => isUnsafeToTranslate(l.value));
  const afterUnsafe = leaves.filter((l) => !isUnsafeToTranslate(l.value));
  const protectedOnly = afterUnsafe.filter((l) => isFullyProtected(l.value));
  let translatable: Leaf[] = afterUnsafe.filter((l) => !isFullyProtected(l.value));
  if (limit && limit > 0) translatable = translatable.slice(0, limit);

  const changes: Change[] = [];
  const processed: TargetLocale[] = [];

  for (const locale of locales) {
    const localeObj = dict[locale];
    if (!localeObj) continue; // locale not present in this dictionary
    processed.push(locale);

    const uniqueEn = [...new Set(translatable.map((l) => l.value))];
    const translated = await translate(uniqueEn, locale);
    const byEn = new Map(uniqueEn.map((en, i) => [en, translated[i]]));

    for (const leaf of translatable) {
      const improved = (byEn.get(leaf.value) ?? '').trim();
      if (!improved) continue;
      const currentRaw = getByPath(localeObj, leaf.path);
      const current = typeof currentRaw === 'string' ? currentRaw : '';
      if (normalise(improved) === normalise(current)) continue;
      changes.push({ locale, path: leaf.path, before: current, after: improved });
    }
  }

  return {
    file,
    changes,
    stats: {
      leaves: leaves.length,
      translatablePerLocale: translatable.length,
      skippedUnsafe: unsafe.length,
      skippedProtected: protectedOnly.length,
      changed: changes.length,
      locales: processed,
    },
  };
}
