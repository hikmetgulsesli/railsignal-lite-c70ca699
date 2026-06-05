import { gameReducer, INITIAL_STATE, type GameAction, type GameState } from '../features/railsignal-lite/railsignal-lite.store';

export interface TestBridge {
  state: GameState;
  dispatch: (action: GameAction) => void;
  getState: () => GameState;
}

export function createTestBridge(initialState?: GameState): TestBridge {
  let state = initialState ? { ...initialState } : { ...INITIAL_STATE };
  return {
    get state() {
      return { ...state };
    },
    dispatch(action: GameAction) {
      state = gameReducer(state, action);
    },
    getState() {
      return { ...state };
    },
  };
}

export function tickNTimes(bridge: TestBridge, n: number): void {
  for (let i = 0; i < n; i++) {
    bridge.dispatch({ type: 'TICK' });
  }
}
