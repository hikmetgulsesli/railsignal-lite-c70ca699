import type { GameState } from '../railsignal-lite/railsignal-lite.store';

export interface StartGameAction {
  type: 'START_GAME';
}

export function actStartGame(): StartGameAction {
  return { type: 'START_GAME' };
}

export function applyStartGame(state: GameState): GameState {
  return {
    ...state,
    started: true,
    paused: false,
    gameOver: false,
    score: 0,
    energy: 100,
    lives: 3,
    level: 1,
    obstacles: [],
    shards: [],
    player: { lane: 1, position: 0 },
  };
}
