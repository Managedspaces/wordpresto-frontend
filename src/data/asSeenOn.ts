/**
 * The directories and communities Word Presto is listed on — the "As seen on" strip's single source of
 * truth. The component renders it, and the Markdown mirror lists it, so the page and the mirror can never
 * disagree about which outlets are claimed.
 *
 * `slug` is both the image filename stem and the React-free key. Images live at
 * `/as-seen-on/<slug>-<ASN_LOGO_PX>.webp`, following the site's existing pre-sized-WebP convention
 * (`/editors/emma-192.webp`), rather than shipping the 600px source PNGs to the browser.
 */

export interface AsSeenOnOutlet {
  slug: string;
  /** The outlet's own name — a proper noun, so it is NOT translated per locale. */
  name: string;
  /** The live listing this logo links to. Rendered nofollow — see AsSeenOn.astro. */
  url: string;
}

/**
 * Rendered width of a logo disc at the largest breakpoint, in CSS pixels. Deliberately modest: the strip is
 * a quiet trust signal at the head of the operating-model band, not a section of its own competing with the
 * letter above it. The exported constant is what the
 * stylesheet's `--wp-asn-disc` and the `<img width/height>` attributes both read, so the intrinsic size,
 * the layout box and the generated asset can never drift apart.
 */
export const ASN_DISC_PX = 96;

/** The pixel width the WebP assets were generated at: 2× the largest disc, for retina. */
export const ASN_LOGO_PX = ASN_DISC_PX * 2;

export const AS_SEEN_ON: AsSeenOnOutlet[] = [
  { slug: 'product-hunt', name: 'Product Hunt', url: 'https://www.producthunt.com/products/word-presto' },
  { slug: 'capterra', name: 'Capterra', url: 'https://www.capterra.com/p/10052606/Word-Presto/' },
  { slug: 'getapp', name: 'GetApp', url: 'https://www.getapp.com/all-software/a/word-presto/' },
  {
    slug: 'software-advice',
    name: 'Software Advice',
    url: 'https://www.softwareadvice.com/product/560160-Word-Presto/',
  },
  { slug: 'sourceforge', name: 'SourceForge', url: 'https://sourceforge.net/software/product/Word-Presto/' },
  { slug: 'slashdot', name: 'Slashdot', url: 'https://slashdot.org/software/p/Word-Presto/' },
  { slug: 'saashub', name: 'SaaSHub', url: 'https://www.saashub.com/word-presto' },
  {
    slug: 'peerpush',
    name: 'PeerPush',
    url: 'https://peerpush.com/p/word-presto?sq=cmtft6t3905e1072govnnk2vh&pos=0',
  },
  { slug: 'future-tools', name: 'Future Tools', url: 'https://futuretools.io/tools/word-presto-lp3d25' },
  { slug: 'crunchbase', name: 'Crunchbase', url: 'https://www.crunchbase.com/organization/word-presto' },
];
