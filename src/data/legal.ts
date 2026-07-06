/**
 * Content for the four legal/policy pages: Privacy, Terms, Cookies, Fair Use.
 *
 * English only for now, matching the rest-of-site i18n rollout (see
 * CLAUDE.md). Grounded in the actual data practices of wordpresto.com (the
 * marketing site, GA + Clarity analytics, the Neon-backed waitlist form) and
 * app.wordpresto.com (the App: Supabase-backed accounts, JWT auth stored in
 * browser storage rather than cookies, Stripe billing, and the third-party
 * integrations a user explicitly connects: Google Search Console/GA4, Bing
 * Webmaster Tools, DataForSEO, GitHub, WordPress, Sanity).
 *
 * These are template policies, not a substitute for legal review. Update the
 * placeholders (company number, registered address) and have a solicitor
 * review before relying on them.
 */

export type LegalBlock = { type: 'p'; text: string } | { type: 'ul'; items: string[] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalPageContent {
  slug: string;
  navLabel: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
}

const p = (text: string): LegalBlock => ({ type: 'p', text });
const ul = (items: string[]): LegalBlock => ({ type: 'ul', items });

const EFFECTIVE_DATE = '3 July 2026';
const CONTACT_EMAIL = 'hello@wordpresto.com';
const PRIVACY_EMAIL = 'privacy@wordpresto.com';
const COMPANY = 'Aestute Ltd T/A Word Presto';

export const privacyPolicy: LegalPageContent = {
  slug: 'privacy',
  navLabel: 'Privacy Policy',
  title: 'Privacy Policy',
  seoTitle: 'Privacy Policy | Word Presto',
  metaDescription:
    'How Word Presto collects, uses and protects personal data across wordpresto.com and the Word Presto application.',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `Word Presto is operated by ${COMPANY} ("Word Presto", "we", "us", "our"). This policy explains what personal data we collect, why, and how it is handled across wordpresto.com (the marketing site and waitlist) and app.wordpresto.com (the Word Presto application, "the App").`,
    `We collect only what the service needs to work, and we do not sell personal data. If anything here is unclear, contact us at ${CONTACT_EMAIL}.`,
  ],
  sections: [
    {
      heading: '1. Who this policy covers',
      blocks: [
        p('This policy applies to three groups of people: visitors to wordpresto.com, applicants to the early-access waitlist, and registered users of the App.'),
      ],
    },
    {
      heading: '2. Information we collect',
      blocks: [
        p('Site visitors (wordpresto.com). We use Google Analytics and Microsoft Clarity to understand how the site is used: pages viewed, referring site, approximate location, device and browser type, and session recordings and heatmaps from Clarity. See our Cookie Policy for the full list of cookies these tools set. We do not store your raw IP address ourselves.'),
        p('Waitlist applicants. The waitlist form collects your name, email address, company, role, intended use case and country, which we use to localise currency. A hidden field on the form is used only to detect automated spam submissions and is never shown to real visitors. We do not store your raw IP address.'),
        p('App account holders. When you create an account we hold your name, email address and a securely hashed password. As you use the App we store the project data you create or import: website or writing project details, drafts, briefs, review notes, Worker outputs and approval records.'),
        p('Connected integrations. Where you explicitly connect a third-party service, we store the data needed to use it: Google Search Console and Google Analytics 4 data (via Google OAuth), Bing Webmaster Tools data, DataForSEO keyword and SERP results (only when you trigger a specific paid action), and repository or site access for GitHub, WordPress or Sanity destinations you connect. Access tokens for these integrations are stored encrypted.'),
        p('Billing. Paid plans and credit packs are processed by Stripe. We store your billing history and subscription status; Stripe holds your card details, we do not.'),
        p('Support and communications. If you contact us, we keep a record of that correspondence to respond and to improve the service.'),
      ],
    },
    {
      heading: '3. How we use your information',
      blocks: [
        ul([
          'To provide and operate the marketing site, waitlist and App',
          'To review waitlist applications and contact you about early access',
          'To run the content workflow you initiate: planning, drafting, review, improvement, approval and publishing handoff',
          'To understand site and product usage so we can improve them',
          'To detect and prevent spam, abuse and security issues',
          'To send service messages, and product updates where you have opted in',
          'To meet our legal and accounting obligations',
        ]),
      ],
    },
    {
      heading: '4. Our legal bases for processing',
      blocks: [
        p('Where UK and EU data protection law applies, we rely on: performance of a contract (running your App account and billing), legitimate interests (analytics, waitlist follow-up, keeping the service secure), consent (non-essential cookies and marketing emails, which you can withdraw at any time), and legal obligation (accounting and tax records).'),
      ],
    },
    {
      heading: '5. AI processing of your content',
      blocks: [
        p('Drafting, review and Worker suggestions in the App are generated using third-party AI model providers, accessed under each provider’s standard API business terms. Those terms do not permit the provider to use your content to train their general-purpose models.'),
        p('AI-generated suggestions are a starting point, not a final decision. Nothing produced by a Worker is published or handed off to a destination without your explicit human review and approval.'),
      ],
    },
    {
      heading: '6. Cookies',
      blocks: [
        p('wordpresto.com uses analytics cookies from Google Analytics and Microsoft Clarity. The App does not use cookies for sign-in; it keeps your session token in your browser’s local storage instead. Full detail is in our Cookie Policy.'),
      ],
    },
    {
      heading: '7. Who we share data with',
      blocks: [
        p('We share personal data only with the service providers needed to run Word Presto, under contracts that require them to protect it:'),
        ul([
          'Supabase — database hosting for the App',
          'Neon — database hosting for the waitlist',
          'Vercel — site and application hosting',
          'Stripe — payment processing',
          'Resend — transactional and notification email',
          'Google, Microsoft Clarity, Bing Webmaster Tools, DataForSEO — analytics and, where you connect them, project intelligence data',
          'GitHub, WordPress and Sanity — only for destinations you explicitly connect for publishing handoff',
          'Third-party AI model providers — to generate drafts, suggestions and review output',
        ]),
        p('We may also disclose data where required by law, or as part of a merger, acquisition or asset sale, in which case we will tell you.'),
      ],
    },
    {
      heading: '8. International transfers',
      blocks: [
        p('Some of the providers listed above process data outside the UK and European Economic Area. Where that happens, we rely on the provider’s own compliance framework (such as the EU-U.S. Data Privacy Framework or standard contractual clauses) to keep your data protected to a UK/EU standard.'),
      ],
    },
    {
      heading: '9. How long we keep data',
      blocks: [
        p('Waitlist data is kept while your application is pending, and for a reasonable period afterwards in case you are invited to create an account, unless you ask us to delete it sooner. App account data is kept while your account is active, and for a limited period afterwards to meet legal, accounting and backup requirements. Analytics data is retained according to Google Analytics’ and Microsoft Clarity’s standard retention settings.'),
      ],
    },
    {
      heading: '10. Your rights',
      blocks: [
        p('Depending on where you live, you may have the right to access, correct, delete or restrict the personal data we hold about you, to object to or withdraw consent for certain processing, and to receive your data in a portable format. To exercise any of these rights, contact us at ' + CONTACT_EMAIL + '. If you are in the UK or EU and are not satisfied with our response, you can complain to the Information Commissioner’s Office (ico.org.uk) or your local supervisory authority.'),
      ],
    },
    {
      heading: '11. Children',
      blocks: [
        p('Word Presto is a business tool and is not directed at, or knowingly used to collect data from, children under 16.'),
      ],
    },
    {
      heading: '12. Security',
      blocks: [
        p('We use industry-standard measures to protect the data we hold, including encrypted storage of connected-integration access tokens, encrypted password hashing and access controls on our systems. No method of storage or transmission is completely secure, and we cannot guarantee absolute security.'),
      ],
    },
    {
      heading: '13. Changes to this policy',
      blocks: [
        p('We may update this policy as the product changes. We will update the effective date above, and where a change is material we will make that clear on this page.'),
      ],
    },
    {
      heading: '14. Contact us',
      blocks: [
        p(`Questions about this policy, or requests relating to your data, can be sent to ${CONTACT_EMAIL}.`),
      ],
    },
  ],
};

export const termsAndConditions: LegalPageContent = {
  slug: 'terms',
  navLabel: 'Terms & Conditions',
  title: 'Terms & Conditions',
  seoTitle: 'Terms & Conditions | Word Presto',
  metaDescription:
    'The terms that govern use of wordpresto.com and the Word Presto application.',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `These terms govern your use of wordpresto.com and app.wordpresto.com (together, "the Service"), operated by ${COMPANY} ("Word Presto", "we", "us", "our"). By using the Service you agree to these terms. If you are using the Service on behalf of an organisation, you confirm you have authority to bind that organisation.`,
  ],
  sections: [
    {
      heading: '1. The Service',
      blocks: [
        p('Word Presto is a content workflow platform. It helps plan, brief, draft, review, improve and prepare content for search, readers and CMS handoff, with human review and approval at every stage. wordpresto.com is the marketing site and early-access waitlist; app.wordpresto.com is the application where projects, Workers, the Canvas and publishing handoff live.'),
      ],
    },
    {
      heading: '2. Accounts and eligibility',
      blocks: [
        p('You must provide accurate information when applying to the waitlist or creating an App account, and keep your login credentials secure. You are responsible for activity that happens under your account. You must be legally able to enter into a contract, and if you are acting for an organisation, authorised to do so.'),
      ],
    },
    {
      heading: '3. The waitlist and early access',
      blocks: [
        p('Submitting a waitlist application does not guarantee access, or a particular access date. We may prioritise applications at our discretion.'),
      ],
    },
    {
      heading: '4. Subscriptions, credits and billing',
      blocks: [
        p('Paid plans and credit packs are billed through Stripe. Prices, applicable taxes and renewal terms are shown at the point of purchase. You can cancel a subscription at any time; cancellation takes effect at the end of the current billing period unless stated otherwise. Refunds are provided at our discretion, except where required by law.'),
      ],
    },
    {
      heading: '5. Acceptable use',
      blocks: [
        p('Use of the Service is subject to our Fair Use Policy, which forms part of these terms. We may suspend or terminate access for use that breaches it.'),
      ],
    },
    {
      heading: '6. Your content',
      blocks: [
        p('You retain ownership of the content, source material and project data you create or import into the Service ("Your Content"). You grant us a licence to host, process, transmit and display Your Content solely to provide and improve the Service, including sending it to the AI model providers and connected integrations needed to generate drafts, suggestions and publishing output. You are responsible for having the necessary rights to any content or source material you upload.'),
      ],
    },
    {
      heading: '7. AI-generated output',
      blocks: [
        p('Drafts, suggestions, reviews and other Worker output are generated with the assistance of AI and are a starting point for your judgement, not a guarantee of accuracy, completeness, search performance or ranking outcomes. The Service is built around human review: content moves to approved status only when you approve it, and edits after approval return content to draft/review before it can be published or handed off.'),
      ],
    },
    {
      heading: '8. Publishing and destination integrations',
      blocks: [
        p('Where you connect a destination such as Astro (via GitHub), Sanity or WordPress, you are authorising the Service to prepare and, where you take the explicit publish action, write content to that destination on your instruction. We are not responsible for changes made to your destination systems as a result of actions you take or approve.'),
      ],
    },
    {
      heading: '9. Third-party integrations',
      blocks: [
        p('Integrations such as Google Search Console, Google Analytics, Bing Webmaster Tools and DataForSEO are provided by third parties and are subject to their own terms and availability. We are not responsible for the accuracy, availability or performance of third-party services.'),
      ],
    },
    {
      heading: '10. Intellectual property',
      blocks: [
        p('The Word Presto platform, software, branding and Worker system remain our property or that of our licensors. These terms grant you a limited, non-exclusive right to use the Service; they do not transfer ownership of our intellectual property to you.'),
      ],
    },
    {
      heading: '11. Termination',
      blocks: [
        p('You may stop using the Service and close your account at any time. We may suspend or terminate your access if you breach these terms, the Fair Use Policy, or if fees due are not paid. On termination, your right to use the Service ends; we handle any retained data as described in our Privacy Policy.'),
      ],
    },
    {
      heading: '12. Disclaimers',
      blocks: [
        p('The Service is provided "as is" and "as available". We do not warrant that it will be uninterrupted, error-free, or that content it helps produce will achieve any particular search ranking, traffic or business outcome.'),
      ],
    },
    {
      heading: '13. Limitation of liability',
      blocks: [
        p('To the extent permitted by law, our total liability arising from these terms or the Service is limited to the fees you paid us in the 12 months before the claim arose, and we are not liable for indirect, incidental or consequential loss. Nothing in these terms limits liability that cannot be limited by law, such as liability for death, personal injury or fraud.'),
      ],
    },
    {
      heading: '14. Governing law',
      blocks: [
        p('These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute, unless mandatory local consumer protection law gives you rights to bring a claim elsewhere.'),
      ],
    },
    {
      heading: '15. Changes to these terms',
      blocks: [
        p('We may update these terms as the Service changes. We will update the effective date above, and where a change is material we will make that clear on this page.'),
      ],
    },
    {
      heading: '16. Contact us',
      blocks: [
        p(`Questions about these terms can be sent to ${CONTACT_EMAIL}.`),
      ],
    },
  ],
};

export const cookiePolicy: LegalPageContent = {
  slug: 'cookies',
  navLabel: 'Cookie Policy',
  title: 'Cookie Policy',
  seoTitle: 'Cookie Policy | Word Presto',
  metaDescription: 'What cookies wordpresto.com uses, why, and how to control them.',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    'This policy explains the cookies and similar technologies used on wordpresto.com, and how sign-in works on app.wordpresto.com.',
  ],
  sections: [
    {
      heading: '1. What cookies are',
      blocks: [
        p('Cookies are small text files a website stores in your browser. They can be used to remember information about your visit, such as how you found the site or how you use it.'),
      ],
    },
    {
      heading: '2. Cookies used on wordpresto.com',
      blocks: [
        p('We use two analytics tools, both of which set their own cookies:'),
        ul([
          'Google Analytics — cookies such as _ga and _gid, used to measure page views, referrers and general usage patterns.',
          'Microsoft Clarity — cookies such as _clck and _clsk, used for anonymised session recordings and heatmaps that show how visitors use the site.',
        ]),
        p('We do not currently run a cookie-consent banner. If you are visiting from a region where consent is required before non-essential cookies are set, you can prevent them using the browser controls below.'),
      ],
    },
    {
      heading: '3. Sign-in on app.wordpresto.com',
      blocks: [
        p('The App does not use cookies to keep you signed in. Instead, your session token is stored in your browser’s local storage. Clearing your browser’s site data for app.wordpresto.com will sign you out.'),
      ],
    },
    {
      heading: '4. How to control cookies',
      blocks: [
        p('You can block or delete cookies through your browser settings at any time. Google provides a browser add-on to opt out of Google Analytics at tools.google.com/dlpage/gaoptout. Microsoft Clarity respects the "Do Not Track" browser setting where supported. Blocking analytics cookies does not affect your ability to use the site.'),
      ],
    },
    {
      heading: '5. Changes to this policy',
      blocks: [
        p('We may update this policy if the cookies we use change. We will update the effective date above when we do.'),
      ],
    },
  ],
};

export const fairUsePolicy: LegalPageContent = {
  slug: 'fair-use',
  navLabel: 'Fair Use Policy',
  title: 'Fair Use Policy',
  seoTitle: 'Fair Use Policy | Word Presto',
  metaDescription: 'What is and is not acceptable use of the Word Presto content workflow platform.',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    'This Fair Use Policy sets out how the Word Presto Service is meant to be used, and forms part of our Terms & Conditions. It exists so the Service stays reliable, safe and lawful for everyone.',
  ],
  sections: [
    {
      heading: '1. Not permitted',
      blocks: [
        p('When using wordpresto.com or app.wordpresto.com, you must not:'),
        ul([
          'Use the Service to generate or publish content that is unlawful, defamatory, infringing, hateful or deliberately deceptive',
          'Publish AI-drafted content to a live destination without the human review and approval step the workflow requires',
          'Scrape, reverse-engineer or use the Service to build a competing product',
          'Use the crawler or site-analysis Workers against a domain you are not authorised to analyse',
          'Circumvent usage limits, rate limits or credit and billing mechanisms',
          'Share account credentials, or resell or sublicense access without our written agreement',
          'Use a connected third-party account (Google, Bing, GitHub, WordPress, Sanity) beyond the access you are authorised to use',
          'Upload malware, or attempt to disrupt, overload or gain unauthorised access to the Service',
          'Send automated or bulk traffic to the Service beyond normal individual or team usage in a way that degrades it for other users',
          'Impersonate another person or organisation',
        ]),
      ],
    },
    {
      heading: '2. Consequences',
      blocks: [
        p('Breaching this policy may result in a warning, suspension or termination of your access to the Service, and, where the law requires it, may be reported to the relevant authorities. We aim to act proportionately and will normally warn you first, except where we reasonably believe there is a security risk or unlawful activity.'),
      ],
    },
    {
      heading: '3. Reporting a concern',
      blocks: [
        p(`If you believe someone is misusing the Service, contact us at ${CONTACT_EMAIL}.`),
      ],
    },
  ],
};

export const dataDeletionInstructions: LegalPageContent = {
  slug: 'data-deletion',
  navLabel: 'Data Deletion',
  title: 'Data Deletion Instructions',
  seoTitle: 'Data Deletion Instructions | Word Presto',
  metaDescription:
    'How to request deletion of the personal data Word Presto holds about you, including data linked to a connected Meta (Facebook) account.',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `This page explains how to request deletion of the personal data ${COMPANY} ("Word Presto", "we", "us", "our") holds about you across wordpresto.com and app.wordpresto.com, and applies to anyone who has used the waitlist, created an App account, or connected a third-party account such as Meta (Facebook) to the Service.`,
  ],
  sections: [
    {
      heading: '1. How to request deletion',
      blocks: [
        p(`Send a deletion request to ${PRIVACY_EMAIL} from the email address associated with your account or waitlist application. Include your name and, if you have one, your App account email, so we can locate your data.`),
      ],
    },
    {
      heading: '2. What we delete',
      blocks: [
        p('On a verified request, we delete or anonymise the personal data we hold about you, including:'),
        ul([
          'Waitlist application details (name, email, company, role, use case, country)',
          'App account details (name, email, hashed password) and the project data associated with your account',
          'Access tokens and data for any third-party integration you connected, including Meta (Facebook), Google, Bing Webmaster Tools, DataForSEO, GitHub, WordPress or Sanity',
          'Support correspondence linked to your account',
        ]),
        p('Some information may be retained for a limited period where we are required to keep it for legal, tax or accounting reasons, or to prevent fraud, as described in our Privacy Policy.'),
      ],
    },
    {
      heading: '3. Deleting data from a connected Meta account',
      blocks: [
        p('If you connected a Meta (Facebook) account to Word Presto, deleting your Word Presto account or sending a request as above removes the data we hold from that connection, including any access token and any data retrieved through it. This does not delete your Meta account itself; manage that directly with Meta.'),
      ],
    },
    {
      heading: '4. Response time',
      blocks: [
        p('We aim to complete verified deletion requests within 30 days and will confirm by email once your data has been deleted.'),
      ],
    },
    {
      heading: '5. Contact us',
      blocks: [
        p(`Questions about this page, or a deletion request, can be sent to ${PRIVACY_EMAIL}.`),
      ],
    },
  ],
};

export const legalPages: LegalPageContent[] = [
  privacyPolicy,
  termsAndConditions,
  cookiePolicy,
  fairUsePolicy,
  dataDeletionInstructions,
];
