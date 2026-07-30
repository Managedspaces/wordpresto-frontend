/**
 * Pillar pages: long-form, authoritative articles that the footer links through.
 *
 * This file is the single source of truth for pillar *metadata*. The prose for
 * each article lives in `src/content/pillars/{slug}.md` and nowhere else, so
 * there is never a second copy of the body to keep in sync.
 *
 * Everything downstream reads from here:
 *   - the shared footer's pillar column   (src/components/Footer.astro)
 *   - the page itself                      (src/components/PillarPage.astro)
 *   - the XML + HTML sitemaps              (src/data/siteRoutes.ts)
 *   - the Markdown mirror + llms.txt       (scripts/generate-page-markdown.ts)
 *
 * To add a pillar page:
 *   1. write the body in `src/content/pillars/{slug}.md` (start at `##`, the
 *      H1 comes from `title` below)
 *   2. add an entry to the category below
 *   3. add `src/pages/{slug}/index.astro` (five lines, copy /presto-labs/)
 *
 * Kept free of `astro:content` and other Astro-only imports on purpose: the
 * Markdown-mirror generator imports this module through tsx, outside Astro.
 *
 * English only for now, like /pricing/ and /sitemap/. The footer links pillar
 * pages from every locale because there is only one version to link to; see
 * context.md when the translation pass reaches them.
 */

export interface PillarArticle {
  /** URL slug, rendered at `/{slug}/`. Also the Markdown filename. */
  slug: string;
  /** Footer link text. Short, this is a nav label, not the headline. */
  navLabel: string;
  /** Mono eyebrow above the H1, and the article's series name. */
  eyebrow: string;
  /** Visible H1 (kept identical to the Markdown mirror's first heading). */
  title: string;
  /** Browser <title> / search-intent title. */
  seoTitle: string;
  /** Meta description. */
  metaDescription: string;
  /** Standfirst under the H1, and the mirror's opening paragraph. */
  summary: string;
  /** Byline. */
  author: string;
  /** ISO date, shown on the page and used for schema.org datePublished. */
  published: string;
  /** ISO date, when the piece has been revised since publication. */
  updated?: string;
  /** Rounded reading time, in minutes. */
  readingMinutes: number;
}

export interface PillarCategory {
  id: string;
  /**
   * Footer column heading. "Word Presto" is the brand wordmark, so it reads the
   * same in every locale and is deliberately not translated.
   */
  heading: string;
  articles: PillarArticle[];
}

export const pillarCategories: PillarCategory[] = [
  {
    id: 'word-presto',
    heading: 'Word Presto',
    articles: [
      {
        slug: 'presto-labs',
        navLabel: 'Presto Labs',
        eyebrow: 'Presto Labs · Foundation story',
        title: 'Presto: the word behind the workflow',
        seoTitle: 'Why it is called Word Presto, the story behind the name | Word Presto',
        metaDescription:
          'An Italian word, a fast tempo, a magician’s flourish and a distributed query engine. The story behind the Word Presto name, and the standard it commits us to.',
        summary:
          'Four hundred years of a word that means complex work done quickly, without the difficulty showing. This is where the name came from, and what it obliges us to build.',
        author: 'Patrick',
        published: '2026-07-30',
        readingMinutes: 6,
      },
    ],
  },
];

/** Every pillar article, flattened, in footer order. */
export const pillarArticles: PillarArticle[] = pillarCategories.flatMap((c) => c.articles);

/** Site-root-relative path for a pillar article. */
export function pillarPath(article: PillarArticle): string {
  return `/${article.slug}/`;
}

/** Markdown mirror path for a pillar article (public/{slug}/index.md). */
export function pillarMarkdownPath(article: PillarArticle): string {
  return `/${article.slug}/index.md`;
}

export function getPillar(slug: string): PillarArticle {
  const article = pillarArticles.find((a) => a.slug === slug);
  if (!article) throw new Error(`Unknown pillar page: ${slug}`);
  return article;
}
