---
title: "WordPrestoBot, the Word Presto web crawler | Word Presto"
description: "What WordPrestoBot is, why it visited your site, and how to control it with robots.txt. The read-only web crawler operated by Word Presto."
canonical: "https://wordpresto.com/prestobot/"
focus: "WordPrestoBot web crawler"
---

# WordPrestoBot, our web crawler

If you found this page from a line in your server logs, hello, and thanks for checking. WordPrestoBot is the web crawler operated by Word Presto, an agentic content and SEO workflow tool. It reads public HTML to extract SEO and content signals on behalf of a Word Presto user, and nothing more.

You will have seen something like this in your access logs:

```
Mozilla/5.0 (compatible; WordPrestoBot/1.0; +https://wordpresto.com/prestobot)
```

## Why it visited your site

WordPrestoBot only fetches pages on behalf of a Word Presto user. In almost every case that is one of two things:

- A site owner analysing their own site, running an SEO or content review of pages they control.
- A read-only competitive or research check, a user looking at publicly available pages to understand how a topic is covered.

It reads public HTML to extract SEO and content signals: titles, headings, metadata, links and structured data. That is it.

## What it does, and does not, do

WordPrestoBot does:

- request publicly accessible pages over normal HTTPS,
- identify itself honestly in the User-Agent on every request,
- respect robots.txt,
- crawl gently, with modest request rates, timeouts and response-size limits.

WordPrestoBot does not:

- log in, submit forms, or interact with your site,
- make any changes, post content, or place orders,
- attempt to access private, gated, or admin areas,
- collect personal data or bypass access controls.

## How to control it

One robots.txt rule controls every Word Presto crawl, because all of our crawlers share the single token WordPrestoBot.

Block it entirely:

```
User-agent: WordPrestoBot
Disallow: /
```

Block only specific areas:

```
User-agent: WordPrestoBot
Disallow: /private/
Disallow: /checkout/
```

Or set a crawl delay:

```
User-agent: WordPrestoBot
Crawl-delay: 10
```

Changes take effect on our next visit. We honour robots.txt, so a disallow is respected without any need to contact us.

## How to recognise it

- User-Agent token: WordPrestoBot
- Every request links back here: +https://wordpresto.com/prestobot
- Some fetches add a short note describing the specific action, for example "read-only single page" or "sitemap and llms.txt only". Same token, same rules.

If a request claims to be WordPrestoBot but does not link to this page, treat it as spoofed and feel free to block it.

## Questions or concerns?

If WordPrestoBot is causing problems, or you would like it to stop visiting, the fastest fix is the robots.txt rule above. You can also reach us at hello@wordpresto.com. Tell us the domain and we will help.
