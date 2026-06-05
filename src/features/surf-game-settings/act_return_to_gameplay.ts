import type { GameState } from '../railsignal-lite/railsignal-lite.store';

export interface ReturnToGameplayAction {
  type: 'CLOSE_SETTINGS';
}

export function actReturnToGameplay(): ReturnToGameplayAction {
  return { type: 'CLOSE_SETTINGS' };
}

export function applyReturnToGameplay(state: GameState): GameState {
  return {
    ...state,
    screen: 'gameplay',
    paused: false,
  };
}
