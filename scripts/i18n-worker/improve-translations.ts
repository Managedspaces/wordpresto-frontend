/**
 * Translation Improvement Worker — runner.
 *
 * Refines the frontend's non-English translations with DeepL, protecting brand/taxonomy terms and each
 * locale's formality, then writes a Markdown changelog. English is the source of truth. By design it
 * only PREPARES changes — the CI workflow opens a PR so a human approves before anything ships (the
 * same "human approval before publish" gate the product itself enforces).
 *
 * Usage:
 *   npx tsx scripts/i18n-worker/improve-translations.ts [--file a,b] [--locale de,fr] [--limit N] [--dry-run]
 *
 * Requires DEEPL_API_KEY. Exits 2 with a clear message if it is missing.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { LOCALE_CODES } from '../../src/i18n/locales';
import { DEEPL_TARGET, FORMALITY, TARGET_FILES, type TargetLocale } from './config';
import { createDeeplClient, resolveEndpoint, DeeplError } from './deeplClient';
import { protectText, unprotectText } from './protect';
import { loadDictionary } from './extract';
import { buildFilePlan, type FilePlan, type TranslateFn } from './improve';
import { applyChanges, type AstChange } from './apply';
import { buildReport } from './report';

const HERE = dirname(fileURLToPath(import.meta.url));
const I18N_DIR = join(HERE, '../../src/data/i18n');
const REPORT_DIR = join(HERE, '../../i18n-changes');

const TARGET_LOCALES = LOCALE_CODES.filter((l): l is TargetLocale => l !== 'en');

interface Args { files: string[]; locales: TargetLocale[]; limit?: number; dryRun: boolean }

function parseArgs(argv: string[]): Args {
  const get = (flag: string): string | undefined => {
    const i = argv.indexOf(flag);
    return i !== -1 ? argv[i + 1] : undefined;
  };
  const csv = (v?: string): string[] => (v ? v.split(',').map((s) => s.trim()).filter(Boolean) : []);
  const files = csv(get('--file'));
  const locales = csv(get('--locale')) as TargetLocale[];
  const limit = get('--limit') ? Number(get('--limit')) : undefined;
  return {
    files: files.length ? files.filter((f) => TARGET_FILES.includes(f)) : TARGET_FILES,
    locales: locales.length ? locales.filter((l) => TARGET_LOCALES.includes(l)) : TARGET_LOCALES,
    limit: Number.isFinite(limit) ? limit : undefined,
    dryRun: argv.includes('--dry-run'),
  };
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const apiKey = process.env.DEEPL_API_KEY;

  let client;
  try {
    client = createDeeplClient(apiKey);
  } catch (err) {
    if (err instanceof DeeplError && err.code === 'deepl_missing_key') {
      console.error('DEEPL_API_KEY is not set. Set it (repo secret / local env) and re-run.');
      process.exit(2);
    }
    throw err;
  }
  const endpoint: 'free' | 'pro' = resolveEndpoint(apiKey!).includes('api-free') ? 'free' : 'pro';

  // Brand-protect on the way out, unprotect on the way back.
  const translate: TranslateFn = async (texts, locale) => {
    const out = await client.translate(texts.map(protectText), DEEPL_TARGET[locale], { formality: FORMALITY[locale] });
    return out.map(unprotectText);
  };

  const plans: FilePlan[] = [];
  const applySkipped: { file: string; path: (string | number)[]; reason: string }[] = [];

  for (const file of args.files) {
    const dict = await loadDictionary(file);
    const plan = await buildFilePlan(file, dict, args.locales, translate, args.limit);
    plans.push(plan);
    console.log(`${file}: ${plan.stats.changed} change(s) across ${plan.stats.locales.join(', ') || 'no locales'}`);

    if (!args.dryRun && plan.changes.length > 0) {
      const path = join(I18N_DIR, `${file}.ts`);
      const source = readFileSync(path, 'utf8');
      const astChanges: AstChange[] = plan.changes.map((c) => ({ path: [c.locale, ...c.path], after: c.after }));
      const result = applyChanges(source, `${file}.ts`, astChanges);
      writeFileSync(path, result.text, 'utf8');
      for (const s of result.skipped) applySkipped.push({ file, path: s.path, reason: s.reason });
      console.log(`  applied ${result.applied}, skipped ${result.skipped.length}`);
    }
  }

  const timestamp = new Date().toISOString();
  const report = buildReport(plans, { timestamp, endpoint, locales: args.locales, applySkipped });
  mkdirSync(REPORT_DIR, { recursive: true });
  const reportPath = join(REPORT_DIR, `${timestamp.replace(/[:.]/g, '-')}.md`);
  writeFileSync(reportPath, report, 'utf8');

  const totalChanged = plans.reduce((n, p) => n + p.stats.changed, 0);
  console.log(`\n${args.dryRun ? '[dry-run] ' : ''}${totalChanged} change(s); report: ${reportPath}`);
}

main().catch((err) => {
  console.error(err instanceof DeeplError ? `DeepL error [${err.code}]: ${err.message}` : err);
  process.exit(1);
});
