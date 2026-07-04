import { workerProfiles, type WorkerProfile } from '@/data/workerProfiles';
import type { Locale } from '@/i18n/locales';
import type { WorkerProfileTranslatable } from './types';

import { ptBatch1 } from './pt.batch1';
import { ptBatch2 } from './pt.batch2';
import { ptBatch3 } from './pt.batch3';
import { ptBatch4 } from './pt.batch4';
import { ptBrBatch1 } from './pt-br.batch1';
import { ptBrBatch2 } from './pt-br.batch2';
import { ptBrBatch3 } from './pt-br.batch3';
import { ptBrBatch4 } from './pt-br.batch4';
import { esBatch1 } from './es.batch1';
import { esBatch2 } from './es.batch2';
import { esBatch3 } from './es.batch3';
import { esBatch4 } from './es.batch4';
import { deBatch1 } from './de.batch1';
import { deBatch2 } from './de.batch2';
import { deBatch3 } from './de.batch3';
import { deBatch4 } from './de.batch4';
import { frBatch1 } from './fr.batch1';
import { frBatch2 } from './fr.batch2';
import { frBatch3 } from './fr.batch3';
import { frBatch4 } from './fr.batch4';

// Overlay of translated fields per non-English locale, keyed by worker id.
// English is not duplicated here — src/data/workerProfiles.ts is already
// the single source of truth for English, so getLocalizedProfile() below
// merges this overlay onto it for every other locale, the same pattern as
// getTeamMeta() in workerRegistry.ts.
const overlays: Partial<Record<Locale, Record<string, WorkerProfileTranslatable>>> = {
  pt: { ...ptBatch1, ...ptBatch2, ...ptBatch3, ...ptBatch4 },
  'pt-br': { ...ptBrBatch1, ...ptBrBatch2, ...ptBrBatch3, ...ptBrBatch4 },
  es: { ...esBatch1, ...esBatch2, ...esBatch3, ...esBatch4 },
  de: { ...deBatch1, ...deBatch2, ...deBatch3, ...deBatch4 },
  fr: { ...frBatch1, ...frBatch2, ...frBatch3, ...frBatch4 },
};

export function getLocalizedProfile(profile: WorkerProfile, locale: Locale): WorkerProfile {
  if (locale === 'en') return profile;
  const overlay = overlays[locale]?.[profile.id];
  if (!overlay) return profile;
  return { ...profile, ...overlay };
}

export function getAllLocalizedProfiles(locale: Locale): WorkerProfile[] {
  return workerProfiles.map((p) => getLocalizedProfile(p, locale));
}
