// Duolingo stats, fetched at build time from Duolingo's public profile endpoint.
// This endpoint is unofficial: if it fails or changes, getDuolingo() returns undefined
// and the Duolingo line is simply hidden. The site rebuilds daily, so the streak stays fresh.

export const duolingoUser = 'dwky1_';
export const duolingoProfile = `https://www.duolingo.com/profile/${duolingoUser}`;

export type Duolingo = { streak: number; totalXp: number; learning?: string };

const LANG_NAMES: Record<string, string> = {
  de: 'German', en: 'English', es: 'Spanish', pt: 'Portuguese', nl: 'Dutch', 'nl-NL': 'Dutch',
  fr: 'French', ja: 'Japanese', zh: 'Chinese', ar: 'Arabic', id: 'Indonesian',
};

let cache: Promise<Duolingo | undefined> | undefined;
export function getDuolingo(): Promise<Duolingo | undefined> {
  return (cache ??= load());
}

async function load(): Promise<Duolingo | undefined> {
  try {
    const res = await fetch(
      `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(duolingoUser)}`,
      { headers: { 'User-Agent': 'Mozilla/5.0 (personal website build)' }, signal: AbortSignal.timeout(10000) },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: { users?: { streak?: number; totalXp?: number; learningLanguage?: string }[] } = await res.json();
    const u = data.users?.[0];
    if (!u || typeof u.streak !== 'number' || typeof u.totalXp !== 'number') throw new Error('unexpected response');
    const out = { streak: u.streak, totalXp: u.totalXp, learning: u.learningLanguage && LANG_NAMES[u.learningLanguage] };
    console.log(`[duolingo] streak ${out.streak}, ${out.totalXp} XP`);
    return out;
  } catch (err) {
    console.warn('[duolingo] Could not load stats, hiding the Duolingo line:', err);
    return undefined;
  }
}
