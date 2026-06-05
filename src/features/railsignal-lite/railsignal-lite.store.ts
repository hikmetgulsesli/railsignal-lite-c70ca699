export type GameScreen = 'gameplay' | 'settings';

export interface Player {
  lane: number;
  position: number;
}

export interface Obstacle {
  lane: number;
  position: number;
}

export interface Shard {
  lane: number;
  position: number;
}

export interface GamePreferences {
  difficulty: 'easy' | 'normal' | 'hard';
  speed: number;
  soundEnabled: boolean;
  particlesEnabled: boolean;
}

export interface GameState {
  screen: GameScreen;
  player: Player;
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  level: number;
  paused: boolean;
  gameOver: boolean;
  started: boolean;
  preferences: GamePreferences;
}

export const DEFAULT_PREFERENCES: GamePreferences = {
  difficulty: 'normal',
  speed: 50,
  soundEnabled: true,
  particlesEnabled: true,
};

export const INITIAL_STATE: GameState = {
  screen: 'gameplay',
  player: { lane: 1, position: 0 },
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  level: 1,
  paused: false,
  gameOver: false,
  started: false,
  preferences: { ...DEFAULT_PREFERENCES },
};

export type GameAction =
  | { type: 'TICK'; payload?: { delta?: number } }
  | { type: 'START_GAME' }
  | { type: 'PAUSE_GAME' }
  | { type: 'RESUME_GAME' }
  | { type: 'RESTART_GAME' }
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_RIGHT' }
  | { type: 'OPEN_SETTINGS' }
  | { type: 'CLOSE_SETTINGS' }
  | { type: 'SAVE_PREFERENCES'; payload: Partial<GamePreferences> }
  | { type: 'RESET_PREFERENCES' }
  | { type: 'COLLISION' }
  | { type: 'COLLECT_SHARD'; payload: { index: number } }
  | { type: 'SET_SCREEN'; payload: GameScreen };

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'TICK': {
      if (!state.started || state.paused || state.gameOver) return state;
      const speedFactor = state.preferences.speed / 50;
      const delta = action.payload?.delta ?? 1;

      const newObstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position - 2 * speedFactor * delta }))
        .filter((o) => o.position > -10);

      const newShards = state.shards
        .map((s) => ({ ...s, position: s.position - 2 * speedFactor * delta }))
        .filter((s) => s.position > -10);

      // Spawn obstacles/shards randomly
      if (Math.random() < 0.02 * speedFactor) {
        const lane = Math.floor(Math.random() * 3);
        newObstacles.push({ lane, position: 100 });
      }
      if (Math.random() < 0.015 * speedFactor) {
        const lane = Math.floor(Math.random() * 3);
        newShards.push({ lane, position: 100 });
      }

      // Check collisions with player at position 0
      const hitObstacle = newObstacles.some(
        (o) => o.lane === state.player.lane && o.position <= 5 && o.position >= -2
      );
      const collectedShardIndex = newShards.findIndex(
        (s) => s.lane === state.player.lane && s.position <= 5 && s.position >= -2
      );

      let lives = state.lives;
      let score = state.score + Math.round(1 * speedFactor * delta);
      let energy = state.energy;
      let gameOver: boolean = state.gameOver;

      if (hitObstacle) {
        lives -= 1;
        energy = Math.max(0, energy - 20);
        if (lives <= 0) gameOver = true;
      }

      if (collectedShardIndex >= 0) {
        score += 50;
        energy = Math.min(100, energy + 10);
        newShards.splice(collectedShardIndex, 1);
      }

      return {
        ...state,
        obstacles: newObstacles,
        shards: newShards,
        score,
        energy,
        lives,
        gameOver,
      };
    }

    case 'START_GAME':
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

    case 'PAUSE_GAME':
      return { ...state, paused: true };

    case 'RESUME_GAME':
      return { ...state, paused: false };

    case 'RESTART_GAME':
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

    case 'MOVE_LEFT':
      return { ...state, player: { ...state.player, lane: Math.max(0, state.player.lane - 1) } };

    case 'MOVE_RIGHT':
      return { ...state, player: { ...state.player, lane: Math.min(2, state.player.lane + 1) } };

    case 'OPEN_SETTINGS':
      return { ...state, screen: 'settings', paused: true };

    case 'CLOSE_SETTINGS':
      return { ...state, screen: 'gameplay', paused: false };

    case 'SAVE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload },
        screen: 'gameplay',
        paused: false,
      };

    case 'RESET_PREFERENCES':
      return { ...state, preferences: { ...DEFAULT_PREFERENCES } };

    case 'SET_SCREEN':
      return { ...state, screen: action.payload };

    case 'COLLISION':
      return state;

    case 'COLLECT_SHARD':
      return state;

    default:
      return state;
  }
}
