/**
 * DeepL provider client for the translation worker (the provider layer, kept separate from the
 * improvement orchestration). Honest, typed error states; auto-detects the free vs pro endpoint from
 * the key; batches within DeepL's per-request limit; protects brand terms via XML ignore-tags.
 *
 * https://developers.deepl.com/docs
 */

export type DeeplErrorCode =
  | 'deepl_missing_key'
  | 'deepl_auth_failed'
  | 'deepl_quota_exceeded'
  | 'deepl_rate_limited'
  | 'deepl_error';

export class DeeplError extends Error {
  constructor(public code: DeeplErrorCode, message: string) {
    super(message);
    this.name = 'DeeplError';
  }
}

export interface TranslateOptions {
  /** DeepL formality hint ('prefer_more' | 'prefer_less'); omitted when not applicable. */
  formality?: string;
}

export interface DeeplClient {
  translate(texts: string[], targetLang: string, opts?: TranslateOptions): Promise<string[]>;
}

// DeepL accepts up to 50 texts per request; stay just under.
const MAX_BATCH = 45;

/** Free API keys end in ':fx' and use the free host; everything else is pro. */
export function resolveEndpoint(apiKey: string): string {
  return apiKey.trim().endsWith(':fx')
    ? 'https://api-free.deepl.com/v2'
    : 'https://api.deepl.com/v2';
}

function mapError(status: number, detail: string): DeeplError {
  if (status === 403) return new DeeplError('deepl_auth_failed', `DeepL rejected the key (403). ${detail}`);
  if (status === 456) return new DeeplError('deepl_quota_exceeded', `DeepL quota exceeded (456). ${detail}`);
  if (status === 429) return new DeeplError('deepl_rate_limited', `DeepL rate limited (429). ${detail}`);
  return new DeeplError('deepl_error', `DeepL request failed (${status}). ${detail}`);
}

async function safeText(res: Response): Promise<string> {
  try { return (await res.text()).slice(0, 300); } catch { return ''; }
}

/**
 * Build a DeepL client. Throws `deepl_missing_key` immediately when no key is available, so callers
 * fail loudly rather than silently producing no changes.
 */
export function createDeeplClient(apiKey: string | undefined = process.env.DEEPL_API_KEY): DeeplClient {
  if (!apiKey || !apiKey.trim()) {
    throw new DeeplError('deepl_missing_key', 'DEEPL_API_KEY is not set');
  }
  const base = resolveEndpoint(apiKey);
  return {
    async translate(texts, targetLang, opts) {
      if (texts.length === 0) return [];
      const out: string[] = [];
      for (let i = 0; i < texts.length; i += MAX_BATCH) {
        const chunk = texts.slice(i, i + MAX_BATCH);
        const body: Record<string, unknown> = {
          text: chunk,
          source_lang: 'EN',
          target_lang: targetLang,
          tag_handling: 'xml',
          ignore_tags: ['x'],
          preserve_formatting: true,
        };
        if (opts?.formality) body.formality = opts.formality;
        const res = await fetch(`${base}/translate`, {
          method: 'POST',
          headers: {
            Authorization: `DeepL-Auth-Key ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw mapError(res.status, await safeText(res));
        const json = (await res.json()) as { translations?: { text: string }[] };
        if (!json.translations || json.translations.length !== chunk.length) {
          throw new DeeplError('deepl_error', 'DeepL returned an unexpected translation count');
        }
        out.push(...json.translations.map((t) => t.text));
      }
      return out;
    },
  };
}
