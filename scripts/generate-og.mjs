/**
 * Builds the social share image at public/og/wordpresto-social.png.
 * Source: public/og/Word-Presto-OG-optimized.png (the artwork, committed beside it).
 * Run: node scripts/generate-og.mjs  (or via prebuild)
 *
 * Two reasons this exists rather than pointing og:image straight at the artwork.
 *
 * 1. Weight. The source is a 602 KB PNG: already palettised to 254 colours, but
 *    the paper grain spread across that many shades is what makes it heavy.
 *    WhatsApp drops the preview thumbnail for images much over ~300 KB, so it
 *    would show no image there at all. Requantising takes it to about 197 KB
 *    with a mean channel difference of 2.3/255, which at 3x zoom on the flat
 *    paper ground — the part most at risk from palettising — is not visible:
 *    the grain and the torn edges survive intact.
 *
 * 2. A stable URL. Social platforms cache scraped cards against the image URL,
 *    so a card shared today keeps showing whatever /og/wordpresto-social.png
 *    holds. Dropping new artwork in and repointing SOURCE refreshes existing
 *    cards for free, with no new URL to propagate. That is how this file came
 *    to replace WordPresto-Aug-OG-02.png, which is left beside it unreferenced.
 *
 * The artwork should be supplied at 1200x630 (1.91:1). If it is not, it gets
 * contained on its own sampled border colour rather than cropped: link previews
 * are landscape and a centre crop of a taller piece tends to eat the logo.
 *
 * public/og/wordpresto-home.png is deliberately left in place, unreferenced —
 * same caching reason: deleting it would break previews on links already
 * shared before this changeover.
 */
import { mkdirSync, existsSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OG_DIR = join(ROOT, 'public', 'og');
const SOURCE = join(OG_DIR, 'Word-Presto-OG-optimized.png');
const OUT_FILE = join(OG_DIR, 'wordpresto-social.png');

/** Keep in step with the og:image width / height declared in BaseLayout.astro. */
const WIDTH = 1200;
const HEIGHT = 630;

mkdirSync(OG_DIR, { recursive: true });

if (!existsSync(SOURCE)) {
  console.warn(`⚠  Source OG artwork not found at ${SOURCE} — skipping.`);
  process.exit(0);
}

const { width, height } = await sharp(SOURCE).metadata();
let pipeline = sharp(SOURCE);

if (width !== WIDTH || height !== HEIGHT) {
  // Sample the artwork's own border so any mount reads as part of the piece.
  const { channels } = await sharp(SOURCE)
    .extract({ left: 4, top: 4, width: 16, height: 16 })
    .stats();
  const [r, g, b] = channels.slice(0, 3).map((c) => Math.round(c.mean));
  console.log(`  source is ${width}x${height}, containing to ${WIDTH}x${HEIGHT} on rgb(${r},${g},${b})`);
  pipeline = pipeline.resize(WIDTH, HEIGHT, { fit: 'contain', background: { r, g, b } });
}

await pipeline.png({ compressionLevel: 9, palette: true, colours: 128 }).toFile(OUT_FILE);

const kb = Math.round(statSync(OUT_FILE).size / 1024);
console.log(`✓ OG image built: ${OUT_FILE} (${WIDTH}x${HEIGHT}, ${kb} KB)`);
if (kb > 300) {
  console.warn(`⚠  ${kb} KB is over the ~300 KB WhatsApp preview threshold.`);
}
