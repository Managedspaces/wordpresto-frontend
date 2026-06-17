/**
 * Copies the source OG image to public/og/wordpresto-home.png.
 * Source: wordpresto-og.png in the project root.
 * Run: node scripts/generate-og.mjs  (or via prebuild)
 */
import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'og');
const OUT_FILE = join(OUT_DIR, 'wordpresto-home.png');
const SOURCE = join(ROOT, 'wordpresto-og.png');

mkdirSync(OUT_DIR, { recursive: true });

if (!existsSync(SOURCE)) {
  console.warn(`⚠  Source OG image not found at ${SOURCE} — skipping copy.`);
  process.exit(0);
}

copyFileSync(SOURCE, OUT_FILE);
console.log(`✓ OG image copied: ${OUT_FILE}`);
