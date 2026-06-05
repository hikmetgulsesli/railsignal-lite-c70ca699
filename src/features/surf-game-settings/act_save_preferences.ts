import type { GameState, GamePreferences } from '../railsignal-lite/railsignal-lite.store';

export interface SavePreferencesAction {
  type: 'SAVE_PREFERENCES';
  payload: Partial<GamePreferences>;
}

export function actSavePreferences(payload: Partial<GamePreferences>): SavePreferencesAction {
  return { type: 'SAVE_PREFERENCES', payload };
}

export function applySavePreferences(state: GameState, payload: Partial<GamePreferences>): GameState {
  return {
    ...state,
    preferences: { ...state.preferences, ...payload },
    screen: 'gameplay',
    paused: false,
  };
}
