/**
 * Human-readable changelog for a worker run. Pure: builds the Markdown from the plans so the diff and
 * the before→after record travel together in the PR. The runner stamps the timestamp (Date is fine in
 * a plain Node script) and writes the file.
 */

import type { FilePlan } from './improve';
import type { PathSeg } from './extract';

export interface ReportMeta {
  timestamp: string;
  endpoint: 'free' | 'pro';
  locales: string[];
  applySkipped: { file: string; path: PathSeg[]; reason: string }[];
}

const MAX_CELL = 160;

function renderPath(path: PathSeg[]): string {
  return path
    .map((seg, i) => (typeof seg === 'number' ? `[${seg}]` : i === 0 ? seg : `.${seg}`))
    .join('');
}

function cell(s: string): string {
  const flat = s.replace(/\|/g, '\\|').replace(/\n/g, ' ');
  return flat.length > MAX_CELL ? `${flat.slice(0, MAX_CELL)}…` : flat;
}

export function buildReport(plans: FilePlan[], meta: ReportMeta): string {
  const totalChanged = plans.reduce((n, p) => n + p.stats.changed, 0);
  const lines: string[] = [
    `# Translation improvements — ${meta.timestamp}`,
    '',
    `DeepL endpoint: **${meta.endpoint}** · locales: ${meta.locales.join(', ')} · **${totalChanged}** string(s) changed`,
    '',
    'English is the source of truth. Brand and fixed-taxonomy terms are protected; each locale keeps its',
    'formality. Strings where DeepL already agreed were left unchanged.',
    '',
    '## Summary',
    '',
    '| File | Leaves | Changed | Skipped (markup/entities) | Skipped (brand-only) |',
    '| --- | ---: | ---: | ---: | ---: |',
  ];
  for (const p of plans) {
    lines.push(`| ${p.file} | ${p.stats.leaves} | ${p.stats.changed} | ${p.stats.skippedUnsafe} | ${p.stats.skippedProtected} |`);
  }

  if (meta.applySkipped.length > 0) {
    lines.push('', '## Proposed but not applied', '', 'These changes could not be edited automatically (non-plain values) and need a manual look:', '', '| File | Path | Reason |', '| --- | --- | --- |');
    for (const s of meta.applySkipped) {
      lines.push(`| ${s.file} | ${cell(renderPath(s.path))} | ${s.reason} |`);
    }
  }

  lines.push('', '## Changes');
  for (const p of plans) {
    if (p.stats.changed === 0) continue;
    lines.push('', `### ${p.file}`);
    const byLocale = new Map<string, typeof p.changes>();
    for (const c of p.changes) {
      const arr = byLocale.get(c.locale) ?? [];
      arr.push(c);
      byLocale.set(c.locale, arr);
    }
    for (const [locale, changes] of byLocale) {
      lines.push('', `#### ${locale}`, '', '| Path | Before | After |', '| --- | --- | --- |');
      for (const c of changes) {
        lines.push(`| ${cell(renderPath(c.path))} | ${cell(c.before)} | ${cell(c.after)} |`);
      }
    }
  }

  return `${lines.join('\n')}\n`;
}
