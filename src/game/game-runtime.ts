import { useEffect, useRef, useCallback } from 'react';
import { gameReducer, INITIAL_STATE, type GameAction, type GameState } from '../features/railsignal-lite/railsignal-lite.store';
import { loadPreferences, savePreferences } from '../features/railsignal-lite/railsignal-lite.repo';

export interface RuntimeAPI {
  state: GameState;
  dispatch: (action: GameAction) => void;
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  savePreferences: (prefs: Partial<GameState['preferences']>) => void;
  resetPreferences: () => void;
}

export function createRuntime(): RuntimeAPI {
  let state: GameState = { ...INITIAL_STATE, preferences: loadPreferences() };
  const listeners = new Set<() => void>();

  function dispatch(action: GameAction) {
    state = gameReducer(state, action);
    listeners.forEach((fn) => fn());
  }

  function notify() {
    listeners.forEach((fn) => fn());
  }

  return {
    get state() {
      return state;
    },
    dispatch,
    start() {
      dispatch({ type: 'START_GAME' });
    },
    pause() {
      dispatch({ type: 'PAUSE_GAME' });
    },
    resume() {
      dispatch({ type: 'RESUME_GAME' });
    },
    restart() {
      dispatch({ type: 'RESTART_GAME' });
    },
    moveLeft() {
      dispatch({ type: 'MOVE_LEFT' });
    },
    moveRight() {
      dispatch({ type: 'MOVE_RIGHT' });
    },
    openSettings() {
      dispatch({ type: 'OPEN_SETTINGS' });
    },
    closeSettings() {
      dispatch({ type: 'CLOSE_SETTINGS' });
    },
    savePreferences(prefs) {
      dispatch({ type: 'SAVE_PREFERENCES', payload: prefs });
      savePreferences(state.preferences);
    },
    resetPreferences() {
      dispatch({ type: 'RESET_PREFERENCES' });
      savePreferences(state.preferences);
    },
  };
}

export function useGameRuntime(): RuntimeAPI {
  const runtimeRef = useRef<RuntimeAPI | null>(null);
  const tickRef = useRef<number | null>(null);

  if (!runtimeRef.current) {
    runtimeRef.current = createRuntime();
  }

  const runtime = runtimeRef.current;

  useEffect(() => {
    const interval = window.setInterval(() => {
      runtime.dispatch({ type: 'TICK' });
    }, 100);

    tickRef.current = interval;

    return () => {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
      }
    };
  }, [runtime]);

  return runtime;
}
