import { DEFAULT_PREFERENCES, type GamePreferences } from './railsignal-lite.store';

const STORAGE_KEY = 'railsignal-lite-preferences';

export function loadPreferences(): GamePreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFERENCES };
    const parsed = JSON.parse(raw) as Partial<GamePreferences>;
    return {
      difficulty: parsed.difficulty ?? DEFAULT_PREFERENCES.difficulty,
      speed: parsed.speed ?? DEFAULT_PREFERENCES.speed,
      soundEnabled: parsed.soundEnabled ?? DEFAULT_PREFERENCES.soundEnabled,
      particlesEnabled: parsed.particlesEnabled ?? DEFAULT_PREFERENCES.particlesEnabled,
    };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(prefs: GamePreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore storage errors
  }
}

export function resetPreferences(): GamePreferences {
  const prefs = { ...DEFAULT_PREFERENCES };
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  return prefs;
}
