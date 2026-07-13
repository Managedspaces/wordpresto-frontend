/**
 * Read side of the translation worker: load an i18n dictionary and flatten it into translatable
 * leaves. Pure walking logic; the module load is the only IO. Paths are arrays of segments (object
 * keys or numeric array indices) so keys like 'pt-br' and array entries are handled without ambiguity.
 */

import { LOCALE_CODES } from '../../src/i18n/locales';

export type PathSeg = string | number;

export interface Leaf {
  path: PathSeg[];
  value: string;
}

/** Recursively collect every string leaf with its path. Numbers/booleans/null are ignored. */
export function collectLeaves(node: unknown, path: PathSeg[] = []): Leaf[] {
  if (typeof node === 'string') return [{ path, value: node }];
  if (Array.isArray(node)) return node.flatMap((v, i) => collectLeaves(v, [...path, i]));
  if (node && typeof node === 'object') {
    return Object.entries(node as Record<string, unknown>).flatMap(([k, v]) => collectLeaves(v, [...path, k]));
  }
  return [];
}

/** Read a value out of an object by path (undefined if any segment is missing). */
export function getByPath(obj: unknown, path: PathSeg[]): unknown {
  return path.reduce<unknown>((acc, seg) => {
    if (acc == null || typeof acc !== 'object') return undefined;
    return (acc as Record<PathSeg, unknown>)[seg];
  }, obj);
}

/**
 * Load the single `Record<Locale, …>` dictionary a file exports, by structure rather than by name:
 * the export whose value is an object keyed by locale codes (has `en` plus at least one other).
 */
export async function loadDictionary(file: string): Promise<Record<string, unknown>> {
  const mod = (await import(`../../src/data/i18n/${file}.ts`)) as Record<string, unknown>;
  const localeCodes = new Set<string>(LOCALE_CODES);
  for (const val of Object.values(mod)) {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      const keys = Object.keys(val as Record<string, unknown>);
      // A locale dictionary: has `en` and every key is a valid locale code (partial dicts are fine —
      // an English-only file just yields no existing translations to improve).
      if (keys.includes('en') && keys.every((k) => localeCodes.has(k))) {
        return val as Record<string, unknown>;
      }
    }
  }
  throw new Error(`No Record<Locale> dictionary export found in src/data/i18n/${file}.ts`);
}

/** Normalise for equality comparison: trim and collapse internal whitespace. */
export function normalise(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Strings the worker will not touch in v1: empty, containing HTML entities or tags, or template
 * substitutions. These need careful handling (entity re-encoding, interpolation) and are reported as
 * skipped rather than risked.
 */
export function isUnsafeToTranslate(s: string): boolean {
  return s.trim() === '' || /&[a-zA-Z#0-9]+;|[<>]|\$\{/.test(s);
}
