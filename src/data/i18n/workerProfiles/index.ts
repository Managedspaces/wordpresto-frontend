import { workerProfiles, type WorkerProfile } from '@/data/workerProfiles';
import type { Locale } from '@/i18n/locales';
import type { WorkerProfileTranslatable } from './types';

import { ptBatch1 } from './pt.batch1';
import { ptBatch2 } from './pt.batch2';
import { ptBrBatch1 } from './pt-br.batch1';
import { ptBrBatch2 } from './pt-br.batch2';
import { esBatch1 } from './es.batch1';
import { esBatch2 } from './es.batch2';
import { deBatch1 } from './de.batch1';
import { deBatch2 } from './de.batch2';
import { frBatch1 } from './fr.batch1';
import { frBatch2 } from './fr.batch2';

// Overlay of translated fields per non-English locale, keyed by worker id.
// English is not duplicated here — src/data/workerProfiles.ts is already
// the single source of truth for English, so getLocalizedProfile() below
// merges this overlay onto it for every other locale, the same pattern as
// getTeamMeta() in workerRegistry.ts.
const overlays: Partial<Record<Locale, Record<string, WorkerProfileTranslatable>>> = {
  pt: { ...ptBatch1, ...ptBatch2 },
  'pt-br': { ...ptBrBatch1, ...ptBrBatch2 },
  es: { ...esBatch1, ...esBatch2 },
  de: { ...deBatch1, ...deBatch2 },
  fr: { ...frBatch1, ...frBatch2 },
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
