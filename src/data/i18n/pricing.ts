import type { Locale } from '@/i18n/locales';

// All visible copy for the /pricing page, keyed by locale. English only for
// now: when the page is translated, add the other locales here and a thin
// src/pages/[locale]/pricing.astro route, following the homepage pattern
// (see context.md). Plan prices, credits and top-up packs are NOT in this
// file on purpose: they come from the app's public pricing API at page load,
// so pricing changes in the app reflect on the site without a redeploy.

/**
 * A stable example workflow cost, used for the "example usage" lines on plan
 * cards and the workflow rate card. These are marketing copy, deliberately
 * embedded: they describe example workflows, not the live plan prices.
 */
export interface ExampleCost {
  /** Rate-card row label, e.g. "Article workflow". */
  label: string;
  /** Credit cost of one run of this workflow. */
  credits: number;
  /** Optional qualifier shown after the credit cost on the rate card. */
  note?: string;
  /** Singular unit for plan-card usage lines, e.g. "article workflow". */
  singular: string;
  /** Plural unit for plan-card usage lines, e.g. "article workflows". */
  plural: string;
  /** Whether this cost appears as a computed usage line on plan cards. */
  onCard: boolean;
  /**
   * Position in the plan-card usage list (lowest first). Rate-card rows keep
   * file order; card rows lead with the most representative workflow.
   */
  cardOrder?: number;
}

export interface PricingContent {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  eyebrow: string;

  /* Trial callout (data comes live from the pricing API; copy templates here) */
  trialEyebrow: string;
  /** "Start your {days}-day trial for {price}" — {days}/{price} replaced client-side. */
  trialHeadingTemplate: string;
  /** Body template — {credits}/{planLabel}/{planPrice} replaced client-side. */
  trialBodyTemplate: string;
  trialCta: string;

  /* Plans section */
  plansEyebrow: string;
  plansH2: string;
  plansBody: string;
  billingMonthly: string;
  billingAnnual: string;
  perMonth: string;
  perYear: string;
  billedMonthly: string;
  monthlyOnlyNote: string;
  oneTimeLabel: string;
  /** "{price} a month equivalent" — {price} replaced client-side. */
  annualEquivalentTemplate: string;
  /** "Save {amount} a year" — computed as 12 x monthly minus annual. */
  annualSavingTemplate: string;
  /** "{credits} credits a month" — {credits} replaced client-side. */
  creditsTemplate: string;
  usageHeading: string;
  usageOrPrefix: string;
  topUpsAvailable: string;
  planCta: string;
  loadingLabel: string;
  fallbackHeading: string;
  fallbackBody: string;
  fallbackCta: string;
  noscriptBody: string;

  /* Top-up packs section */
  packsEyebrow: string;
  packsH2: string;
  packsBody: string;
  packsTab: string;
  packCreditsSuffix: string;
  packKindLabel: string;

  /* Rate card section */
  rateEyebrow: string;
  rateH2: string;
  rateBody: string;
  rateTab: string;
  rateCreditsSuffix: string;
  rateHandNote: string;
  exampleCosts: ExampleCost[];

  /* Footnotes (required copy, rendered verbatim) */
  footnoteUsage: string;
  footnoteVat: string;

  /* CTA section */
  ctaEyebrow: string;
  ctaH2: string;
  ctaBody: string;
  ctaButton: string;
  ctaRuleText: string;
}

export const pricingContent: Partial<Record<Locale, PricingContent>> & {
  en: PricingContent;
} = {
  en: {
    seoTitle: 'Word Presto pricing, credit plans and top-up packs for content teams',
    metaDescription:
      'Plans and top-up packs for writers, editors and publishing teams. One pool of credits covers planning, writing, review, SEO research, site analysis and publishing preparation.',
    h1: 'One pool of credits for the whole workflow.',
    intro:
      'Pick a monthly or annual plan, spend credits across planning, writing, review, SEO research, site analysis and publishing, and top up when a busy month needs more.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Pricing',
    eyebrow: 'Pricing',

    trialEyebrow: 'Trial',
    trialHeadingTemplate: 'Start your {days}-day trial for {price}',
    trialBodyTemplate:
      'Full platform access with {credits} credits. A card is required, and the trial converts to {planLabel} at {planPrice} a month when it ends. Cancel anytime before then.',
    trialCta: 'Start your trial',

    plansEyebrow: 'Plans',
    plansH2: 'Plans that grow with the publishing calendar.',
    plansBody:
      'Every plan draws from the same pool of credits. Nothing is locked behind a mode or a module: the whole workflow is available on every plan.',
    billingMonthly: 'Monthly',
    billingAnnual: 'Annual',
    perMonth: 'a month',
    perYear: 'a year',
    billedMonthly: 'Billed monthly',
    monthlyOnlyNote: 'Monthly billing only',
    oneTimeLabel: 'one-time',
    annualEquivalentTemplate: '{price} a month equivalent',
    annualSavingTemplate: 'Save {amount} a year',
    creditsTemplate: '{credits} credits a month',
    usageHeading: 'Example usage',
    usageOrPrefix: 'or',
    topUpsAvailable: 'Top-up packs available',
    planCta: 'Join now',
    loadingLabel: 'Loading live pricing',
    fallbackHeading: 'Live pricing is not available right now.',
    fallbackBody:
      "Pricing is being finalised. Join now and we'll share it with you first.",
    fallbackCta: 'Join now',
    noscriptBody:
      'Plan prices load live from the Word Presto app and need JavaScript to display. Join now and we will share current pricing with you directly.',

    packsEyebrow: 'Top-ups',
    packsH2: 'Top-up packs for the heavier months.',
    packsBody:
      'Buy extra credits when a launch, a migration or a busy publishing month needs more than the plan includes. Top-ups are one-time purchases, not a second subscription.',
    packsTab: 'TOP-UP',
    packCreditsSuffix: 'credits',
    packKindLabel: 'ONE-TIME TOP-UP',

    rateEyebrow: 'How credits work',
    rateH2: 'What a credit buys.',
    rateBody:
      'Credits are the one currency across the workflow. Here is what typical work costs, so the plan sizes above make practical sense.',
    rateTab: 'RATE CARD',
    rateCreditsSuffix: 'credits',
    rateHandNote: 'mix them however the month needs',
    exampleCosts: [
      {
        label: 'X post',
        credits: 500,
        note: '1,500 with a link',
        singular: 'X post',
        plural: 'X posts',
        onCard: true,
        cardOrder: 2,
      },
      {
        label: 'LinkedIn, Facebook or Instagram post',
        credits: 300,
        singular: 'LinkedIn, Facebook or Instagram post',
        plural: 'LinkedIn, Facebook or Instagram posts',
        onCard: true,
        cardOrder: 3,
      },
      {
        label: 'Keyword analysis run',
        credits: 250,
        singular: 'keyword analysis run',
        plural: 'keyword analysis runs',
        onCard: false,
      },
      {
        label: 'Article workflow',
        credits: 3000,
        singular: 'article workflow',
        plural: 'article workflows',
        onCard: true,
        cardOrder: 1,
      },
      {
        label: 'SEO audit',
        credits: 6000,
        singular: 'SEO audit',
        plural: 'SEO audits',
        onCard: true,
        cardOrder: 4,
      },
      {
        label: 'Site crawl and analysis pack',
        credits: 1500,
        singular: 'site crawl and analysis pack',
        plural: 'site crawl and analysis packs',
        onCard: false,
      },
    ],

    // Required footnote copy. Rendered verbatim: do not reword.
    footnoteUsage:
      'Example usage is illustrative. Credits can be mixed across writing, editing, SEO research, site analysis, crawling and social publishing. External data and publishing actions may use premium credits because they rely on third-party API costs.',
    footnoteVat: 'All prices include VAT.',

    ctaEyebrow: 'Early access',
    ctaH2: 'Start with the plan that fits the work.',
    ctaBody:
      'Word Presto is in early access. Join now and we will be in touch when your place is ready, with current pricing included.',
    ctaButton: 'Join now',
    ctaRuleText: 'REVIEW-LED · HUMAN APPROVAL',
  },
};
