# Translation Improvement Worker

A specialised, agentic worker that refines the frontend's non-English translations with **DeepL**.
Built to the same discipline as a backend WordPresto worker (typed provider client, separated
concerns, honest error states, tests) but deployed here, where the translations live.

**English is the source of truth.** Every other locale (`pt`, `pt-br`, `es`, `de`, `fr`) is a
translation the worker improves. It **prepares** changes and opens a PR — it never writes to `main`
directly, so a human approves before anything ships. That's WordPresto's own "human approval before
publish" gate, applied to itself.

## What it does

For each translatable string in each i18n dictionary:

1. Sends the **English** source to DeepL, translated into the locale, with:
   - **Brand/taxonomy protection** — `Word Presto`, `Emma`, `Canvas`, `Workers`, the channel names
     (`LinkedIn`, `WordPress`, `Sanity`, `Astro`, …) pass through verbatim via DeepL ignore-tags, so
     they're never localised (`config.ts` → `PROTECTED_TERMS`).
   - **Formality per locale** — `de`/`pt`/`fr` formal, `es` informal, matching the existing voice
     (`config.ts` → `FORMALITY`).
2. Compares DeepL's rendering to the current translation. If they **materially differ**, it proposes
   the change; where DeepL already agrees, the human copy is left untouched (no churn).
3. Applies the accepted changes back into the `.ts` dictionaries via the **TypeScript compiler API**
   (only plain string / no-substitution template literals are edited; anything else is reported, not
   risked).
4. Writes a Markdown changelog to `i18n-changes/<timestamp>.md` (summary + per-locale before→after),
   committed alongside the diff.

### Scope and skips (honest states)

- **Files** (`config.ts` → `TARGET_FILES`): the flat `Record<Locale, …>` dictionaries in
  `src/data/i18n/`. `workerProfiles/` is excluded — it's split into per-locale batch files merged at
  runtime, not one editable dictionary. `pricing.ts` is English-only today, so it yields no changes
  until it's translated.
- **Unsafe strings are skipped** (and counted in the report): empty, containing HTML entities/tags,
  or template `${…}` interpolation. These need careful handling and are left for a human.

## Run it

Requires `DEEPL_API_KEY` (free or pro — the endpoint is auto-detected from the `:fx` suffix).

```bash
# whole run (opens no PR locally — just edits files + writes the changelog)
DEEPL_API_KEY=... npm run i18n:improve

# scope it
DEEPL_API_KEY=... npm run i18n:improve -- --file home,common --locale de,fr --limit 20

# see what it would change without touching files
DEEPL_API_KEY=... npm run i18n:improve -- --dry-run
```

Flags: `--file a,b` · `--locale de,fr` · `--limit N` (cap strings/locale) · `--dry-run`.

Without a key it exits `2` with a clear message — it never silently produces nothing.

## CI (the agentic path)

`.github/workflows/improve-translations.yml` is a `workflow_dispatch` job: it runs the worker with the
`DEEPL_API_KEY` secret and, if anything changed, opens a PR with the edits + changelog for review.
Set `DEEPL_API_KEY` as a repository secret to enable it.

## Tests

```bash
npm run test:i18n
```

Covers endpoint detection, brand protection, leaf extraction, the refine decision, the AST apply
(including array indices, `pt-br` string keys, quote escaping, and skipping unsupported nodes) and the
report.

## Layout

| File | Role |
| --- | --- |
| `config.ts` | DeepL targets, formality, protected terms, target files |
| `deeplClient.ts` | Typed DeepL provider (auto free/pro, batching, honest errors) |
| `protect.ts` | Brand-term ignore-tag wrap/unwrap |
| `extract.ts` | Load a dictionary, flatten to leaves, safety checks |
| `improve.ts` | Refine decision → plan of proposed changes (pure; DeepL injected) |
| `apply.ts` | Apply changes to `.ts` source via the TypeScript compiler API |
| `report.ts` | Build the Markdown changelog |
| `improve-translations.ts` | Runner (args, IO, wiring) |
