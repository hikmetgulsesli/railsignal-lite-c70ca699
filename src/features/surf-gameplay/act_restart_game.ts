import type { GameState } from '../railsignal-lite/railsignal-lite.store';
import { applyStartGame } from './act_start_game';

export interface RestartGameAction {
  type: 'RESTART_GAME';
}

export function actRestartGame(): RestartGameAction {
  return { type: 'RESTART_GAME' };
}

export function applyRestartGame(state: GameState): GameState {
  return applyStartGame(state);
}
