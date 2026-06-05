import { INITIAL_STATE, type GameState } from '../features/railsignal-lite/railsignal-lite.store';

export function createFixture(overrides?: Partial<GameState>): GameState {
  return {
    ...INITIAL_STATE,
    ...overrides,
    preferences: { ...INITIAL_STATE.preferences, ...overrides?.preferences },
    player: { ...INITIAL_STATE.player, ...overrides?.player },
  };
}

export const runningGameFixture: GameState = createFixture({
  started: true,
  paused: false,
  score: 120,
  energy: 80,
  lives: 2,
  level: 1,
  obstacles: [{ lane: 0, position: 60 }],
  shards: [{ lane: 2, position: 40 }],
});

export const pausedGameFixture: GameState = createFixture({
  started: true,
  paused: true,
  score: 300,
  energy: 50,
  lives: 1,
});

export const gameOverFixture: GameState = createFixture({
  started: true,
  gameOver: true,
  score: 500,
  energy: 0,
  lives: 0,
});
