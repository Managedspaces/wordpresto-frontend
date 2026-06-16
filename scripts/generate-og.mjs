/**
 * Generates the OG image at public/og/wordpresto-home.png
 * Uses a self-contained SVG rendered to PNG via sharp.
 * Run: node scripts/generate-og.mjs
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'og');
const OUT_FILE = join(OUT_DIR, 'wordpresto-home.png');

mkdirSync(OUT_DIR, { recursive: true });

/* ------------------------------------------------------------------ */
/*  SVG composition — 1200 × 630, paper-and-ink direction             */
/* ------------------------------------------------------------------ */
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow-brief">
      <feDropShadow dx="0" dy="4" stdDeviation="16" flood-color="#111318" flood-opacity="0.14"/>
    </filter>
    <filter id="shadow-draft">
      <feDropShadow dx="0" dy="3" stdDeviation="12" flood-color="#111318" flood-opacity="0.10"/>
    </filter>
    <filter id="shadow-slip">
      <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#111318" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Background: warm paper -->
  <rect width="1200" height="630" fill="#FAF7F0"/>

  <!-- Subtle horizontal rule across the full width -->
  <line x1="0" y1="580" x2="1200" y2="580" stroke="#DCDDD8" stroke-width="1"/>

  <!-- =================== LEFT: LOGOTYPE + COPY =================== -->

  <!-- Word Presto logotype -->
  <text x="72" y="148"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="82"
    font-weight="700"
    fill="#111318"
    letter-spacing="-3">Word Presto</text>

  <!-- Underline rule under logotype -->
  <line x1="72" y1="164" x2="540" y2="164" stroke="#111318" stroke-width="2.5"/>

  <!-- Main description -->
  <text x="72" y="214"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="28"
    fill="#4E5662"
    letter-spacing="-0.5">The content engine behind</text>
  <text x="72" y="250"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="28"
    fill="#4E5662"
    letter-spacing="-0.5">better publishing workflows.</text>

  <!-- Tagline -->
  <text x="72" y="316"
    font-family="'Courier New', Courier, monospace"
    font-size="16"
    fill="#9AA1AA"
    letter-spacing="3">PLAN · BRIEF · REVIEW · APPROVE</text>

  <!-- Separator -->
  <line x1="72" y1="348" x2="340" y2="348" stroke="#DCDDD8" stroke-width="1"/>

  <!-- Footer wordmark area -->
  <text x="72" y="574"
    font-family="'Courier New', Courier, monospace"
    font-size="13"
    fill="#9AA1AA"
    letter-spacing="2">wordpresto.com</text>

  <!-- =================== RIGHT: PAPER MOCKUP =================== -->

  <!-- BACK CARD: Draft sheet, rotated slightly left -->
  <g transform="translate(670, 80) rotate(-2.5)" filter="url(#shadow-draft)">
    <rect width="304" height="320" fill="#FFFFFF" stroke="#DCDDD8" stroke-width="1"/>
    <!-- Folded corner -->
    <polygon points="304,0 280,0 304,24" fill="#EFE7D6"/>
    <line x1="280" y1="0" x2="304" y2="24" stroke="#DCDDD8" stroke-width="1"/>
    <!-- Red margin line -->
    <line x1="36" y1="0" x2="36" y2="320" stroke="rgba(194,65,58,0.35)" stroke-width="1"/>
    <!-- Header row -->
    <rect width="304" height="44" fill="#FAF7F0" y="0"/>
    <line x1="0" y1="44" x2="304" y2="44" stroke="#DCDDD8" stroke-width="1"/>
    <text x="48" y="28" font-family="'Courier New', monospace" font-size="11" fill="#9AA1AA" letter-spacing="2">02 · DRAFT</text>
    <!-- Status tag -->
    <rect x="200" y="14" width="84" height="18" rx="3" fill="rgba(196,122,28,0.12)" stroke="#C47A1C" stroke-width="1.5"/>
    <text x="242" y="27" font-family="'Courier New', monospace" font-size="9" fill="#C47A1C" letter-spacing="1.5" text-anchor="middle">IN REVIEW</text>
    <!-- Content lines -->
    <text x="52" y="82" font-family="Georgia, serif" font-size="14" font-weight="700" fill="#111318">Why a structured brief</text>
    <text x="52" y="100" font-family="Georgia, serif" font-size="14" font-weight="700" fill="#111318">beats a blank page</text>
    <!-- Body lines -->
    <text x="52" y="130" font-family="Georgia, serif" font-size="12" fill="#4E5662">A clear brief gives every writer the</text>
    <text x="52" y="148" font-family="Georgia, serif" font-size="12" fill="#4E5662">same starting point: goal, audience</text>
    <text x="52" y="166" font-family="Georgia, serif" font-size="12" fill="#4E5662">and intent.</text>
    <!-- Handwritten note -->
    <text x="200" y="296" font-family="Georgia, serif" font-size="20" fill="#C47A1C" transform="rotate(-8, 200, 280)">tighten intro</text>
  </g>

  <!-- FRONT CARD: Content Brief, rotated right -->
  <g transform="translate(780, 46) rotate(1.8)" filter="url(#shadow-brief)">
    <!-- Folder tab -->
    <rect x="22" y="-17" width="68" height="19" rx="5" fill="#E3D6B9" stroke="#C7B488" stroke-width="1"/>
    <text x="56" y="-4" font-family="'Courier New', monospace" font-size="10" fill="#5E4F2E" letter-spacing="2" text-anchor="middle">BRIEF</text>
    <!-- Card body -->
    <rect width="300" height="296" fill="#FFFFFF" stroke="#DCDDD8" stroke-width="1"/>
    <!-- Folded corner -->
    <polygon points="300,0 274,0 300,26" fill="#EFE7D6"/>
    <line x1="274" y1="0" x2="300" y2="26" stroke="#DCDDD8" stroke-width="1"/>
    <!-- Brief contents -->
    <text x="22" y="36" font-family="'Courier New', monospace" font-size="10" fill="#9AA1AA" letter-spacing="2">01 · BRIEF · launch-guide</text>
    <text x="22" y="72" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#111318" letter-spacing="-0.5">Content brief</text>
    <line x1="22" y1="86" x2="278" y2="86" stroke="#DCDDD8" stroke-width="1"/>
    <!-- Brief fields -->
    <text x="22" y="116" font-family="'Courier New', monospace" font-size="10" fill="#9AA1AA" letter-spacing="1.5">GOAL</text>
    <text x="110" y="116" font-family="Georgia, serif" font-size="14" fill="#111318">Convert trial sign-ups</text>
    <text x="22" y="144" font-family="'Courier New', monospace" font-size="10" fill="#9AA1AA" letter-spacing="1.5">AUDIENCE</text>
    <text x="110" y="144" font-family="Georgia, serif" font-size="14" fill="#111318">Website and content leads</text>
    <text x="22" y="172" font-family="'Courier New', monospace" font-size="10" fill="#9AA1AA" letter-spacing="1.5">INTENT</text>
    <text x="110" y="172" font-family="Georgia, serif" font-size="14" fill="#111318">Commercial</text>
    <text x="22" y="200" font-family="'Courier New', monospace" font-size="10" fill="#9AA1AA" letter-spacing="1.5">SECTIONS</text>
    <text x="110" y="200" font-family="Georgia, serif" font-size="14" fill="#111318">Intro · Proof · CTA</text>
    <!-- Footer row -->
    <line x1="0" y1="236" x2="300" y2="236" stroke="#DCDDD8" stroke-width="1"/>
    <rect x="0" y="236" width="300" height="60" fill="#FAF7F0"/>
    <circle cx="22" cy="266" r="4" fill="#7A5C2E"/>
    <text x="32" y="270" font-family="'Courier New', monospace" font-size="11" fill="#737B87">Iris · Strategist</text>
    <!-- Approved stamp -->
    <rect x="172" y="248" width="106" height="28" rx="4" fill="none" stroke="#16A36A" stroke-width="2" transform="rotate(-5, 225, 262)"/>
    <text x="225" y="267" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#16A36A" letter-spacing="2" text-anchor="middle" transform="rotate(-5, 225, 262)">APPROVED</text>
  </g>

  <!-- REVIEW SLIP (smaller card, taped) -->
  <g transform="translate(668, 368) rotate(2.8)" filter="url(#shadow-slip)">
    <!-- Tape piece -->
    <rect x="60" y="-10" width="52" height="14" rx="1" fill="rgba(122,140,120,0.22)" stroke="rgba(17,19,24,0.06)" stroke-width="1"/>
    <!-- Card -->
    <rect width="190" height="120" fill="#FFFFFF" stroke="#DCDDD8" stroke-width="1"/>
    <text x="14" y="26" font-family="'Courier New', monospace" font-size="10" fill="#9AA1AA" letter-spacing="2">03 · REVIEW</text>
    <!-- Review items -->
    <rect x="14" y="42" width="9" height="9" rx="2" fill="#C47A1C"/>
    <text x="30" y="52" font-family="Georgia, serif" font-size="13" fill="#4E5662">Needs support — §3</text>
    <rect x="14" y="66" width="9" height="9" rx="2" fill="#0891B2"/>
    <text x="30" y="76" font-family="Georgia, serif" font-size="13" fill="#4E5662">Add supporting page</text>
    <!-- Approval note -->
    <rect x="14" y="90" width="9" height="9" rx="2" fill="#16A36A"/>
    <text x="30" y="100" font-family="Georgia, serif" font-size="13" fill="#4E5662">Brief: ready to proceed</text>
  </g>

  <!-- WORKER PROFILE SLIP -->
  <g transform="translate(882, 370) rotate(-1.4)" filter="url(#shadow-slip)">
    <rect width="196" height="82" fill="#FFFFFF" stroke="#DCDDD8" stroke-width="1"/>
    <!-- Folded corner -->
    <polygon points="196,0 178,0 196,18" fill="#EFE7D6"/>
    <!-- Worker info -->
    <rect x="14" y="12" width="48" height="48" rx="3" fill="#F1F2F0" stroke="#CACBC5" stroke-width="1"/>
    <text x="38" y="42" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#4E5662" text-anchor="middle">A</text>
    <circle cx="14" cy="16" r="4" fill="#2F855A"/>
    <text x="24" y="20" font-family="'Courier New', monospace" font-size="8" fill="#9AA1AA" letter-spacing="1">WORKER · REVIEW</text>
    <text x="70" y="36" font-family="Georgia, serif" font-size="17" font-weight="700" fill="#111318">Audrey</text>
    <text x="70" y="52" font-family="Georgia, serif" font-size="11" fill="#737B87">Draft Quality Reviewer</text>
  </g>

</svg>`;

const svgBuffer = Buffer.from(svg, 'utf8');

await sharp(svgBuffer)
  .png()
  .resize(1200, 630)
  .toFile(OUT_FILE);

console.log(`✓ OG image generated: ${OUT_FILE}`);
