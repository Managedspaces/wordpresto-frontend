/**
 * Unit tests for the translation worker's pure parts. Run: npm run test:i18n
 * (node --test via the tsx loader). No network — DeepL is faked.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';

import { resolveEndpoint } from './deeplClient';
import { protectText, unprotectText, isFullyProtected } from './protect';
import { collectLeaves, getByPath, isUnsafeToTranslate, normalise } from './extract';
import { applyChanges } from './apply';
import { buildFilePlan } from './improve';
import { buildReport } from './report';

test('resolveEndpoint picks free vs pro from the key suffix', () => {
  assert.ok(resolveEndpoint('key-123:fx').includes('api-free.deepl.com'));
  assert.ok(!resolveEndpoint('key-123').includes('api-free.deepl.com'));
});

test('protect wraps brand terms and unprotect is the inverse', () => {
  const p = protectText('Use Word Presto and the Canvas with WordPress');
  assert.equal(p, 'Use <x>Word Presto</x> and the <x>Canvas</x> with <x>WordPress</x>');
  assert.equal(unprotectText(p), 'Use Word Presto and the Canvas with WordPress');
});

test('isFullyProtected only for strings with no translatable words', () => {
  assert.equal(isFullyProtected('Word Presto'), true);
  assert.equal(isFullyProtected('LinkedIn · X'), false); // "X" is not a protected term, but has a letter
  assert.equal(isFullyProtected('Publish everywhere'), false);
});

test('isUnsafeToTranslate flags markup, entities and interpolation', () => {
  for (const s of ['a &amp; b', 'Join ${name}', '<strong>hi</strong>', '']) {
    assert.equal(isUnsafeToTranslate(s), true, s);
  }
  assert.equal(isUnsafeToTranslate('Plain sentence.'), false);
});

test('collectLeaves + getByPath walk objects and arrays', () => {
  const obj = { hero: { h2: 'Hi' }, list: ['a', 'b'] };
  const leaves = collectLeaves(obj);
  assert.deepEqual(
    leaves.map((l) => [l.path, l.value]),
    [[['hero', 'h2'], 'Hi'], [['list', 0], 'a'], [['list', 1], 'b']],
  );
  assert.equal(getByPath(obj, ['list', 1]), 'b');
  assert.equal(getByPath(obj, ['nope', 'x']), undefined);
});

test('applyChanges edits the right locale/array node and skips unsupported', () => {
  const src = [
    'export const demoContent = {',
    "  en: { hero: { h2: 'Hello' }, list: ['a', 'b'] },",
    "  de: { hero: { h2: 'Hallo' }, list: ['a', 'b'], cta: `Join ${x}` },",
    "  'pt-br': { hero: { h2: 'Ola' }, list: ['a', 'b'] },",
    '};',
    '',
  ].join('\n');

  const res = applyChanges(src, 'demo.ts', [
    { path: ['de', 'hero', 'h2'], after: 'Guten Tag' },
    { path: ['pt-br', 'list', 1], after: 'c' },
    { path: ['de', 'cta'], after: 'nope' }, // template with ${} -> skipped
  ]);

  assert.equal(res.applied, 2);
  assert.match(res.text, /de: \{ hero: \{ h2: 'Guten Tag' \}/);
  assert.match(res.text, /'pt-br': \{ hero: \{ h2: 'Ola' \}, list: \['a', 'c'\]/);
  // de's h2 changed but en/pt-br 'Hallo'/'Ola' untouched; en list still a,b
  assert.match(res.text, /en: \{ hero: \{ h2: 'Hello' \}, list: \['a', 'b'\]/);
  assert.equal(res.skipped.length, 1);
  assert.equal(res.skipped[0].reason.startsWith('unsupported-node'), true);
});

test('applyChanges escapes quotes in replacements', () => {
  const src = "export const d = { en: { a: 'x' }, fr: { a: 'y' } };";
  const res = applyChanges(src, 'd.ts', [{ path: ['fr', 'a'], after: "l'idée" }]);
  assert.match(res.text, /fr: \{ a: 'l\\'idée' \}/);
});

test('buildFilePlan proposes changes, protects brand-only, respects agreement', async () => {
  const dict = {
    en: { a: 'Hello', brand: 'Word Presto', same: 'Keep' },
    de: { a: 'Hallo alt', brand: 'Word Presto', same: '[de] Keep' },
  };
  // Fake translate: prefix the English so it differs from current, except 'Keep' which we make agree.
  const translate = async (texts: string[]) => texts.map((t) => (t === 'Keep' ? '[de] Keep' : `[de] ${t}`));
  const plan = await buildFilePlan('demo', dict as any, ['de'], translate);

  assert.equal(plan.stats.skippedProtected, 1); // 'Word Presto'
  const paths = plan.changes.map((c) => c.path.join('.'));
  assert.ok(paths.includes('a')); // changed
  assert.ok(!paths.includes('same')); // DeepL agreed -> no churn
  assert.ok(!paths.includes('brand')); // protected -> never sent
  assert.equal(plan.changes.find((c) => c.path[0] === 'a')?.after, '[de] Hello');
});

test('buildReport renders a header, summary and change tables', () => {
  const plan = {
    file: 'home',
    changes: [{ locale: 'de' as const, path: ['a'], before: 'Hallo alt', after: '[de] Hello' }],
    stats: { leaves: 3, translatablePerLocale: 2, skippedUnsafe: 0, skippedProtected: 1, changed: 1, locales: ['de' as const] },
  };
  const md = buildReport([plan], { timestamp: '2026-01-01T00:00:00Z', endpoint: 'free', locales: ['de'], applySkipped: [] });
  assert.match(md, /# Translation improvements — 2026-01-01/);
  assert.match(md, /\| home \| 3 \| 1 \| 0 \| 1 \|/);
  assert.match(md, /#### de/);
  assert.match(md, /\[de\] Hello/);
});

test('normalise collapses whitespace for equality', () => {
  assert.equal(normalise('  a   b  '), 'a b');
});
