import type { GameState } from '../railsignal-lite/railsignal-lite.store';

export interface PauseGameAction {
  type: 'PAUSE_GAME';
}

export function actPauseGame(): PauseGameAction {
  return { type: 'PAUSE_GAME' };
}

export function applyPauseGame(state: GameState): GameState {
  return { ...state, paused: true };
}
