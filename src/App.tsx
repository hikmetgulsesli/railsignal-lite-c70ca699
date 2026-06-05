import { useState, useEffect, useCallback } from 'react';
import { GameplayRailsignalLite, GameSettingsRailsignalLite } from './screens';
import { useGameRuntime } from './game/game-runtime';
import type { GameplayRailsignalLiteActionId, GameSettingsRailsignalLiteActionId } from './screens';

export default function App() {
  const runtime = useGameRuntime();
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 50);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') runtime.moveLeft();
      if (e.key === 'ArrowRight') runtime.moveRight();
      if (e.key === 'p' || e.key === 'P') {
        if (runtime.state.paused) runtime.resume();
        else runtime.pause();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [runtime]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as Record<string, unknown>).app = {
        state: runtime.state,
        actions: {
          start: runtime.start,
          pause: runtime.pause,
          resume: runtime.resume,
          restart: runtime.restart,
          moveLeft: runtime.moveLeft,
          moveRight: runtime.moveRight,
          openSettings: runtime.openSettings,
          closeSettings: runtime.closeSettings,
          savePreferences: runtime.savePreferences,
          resetPreferences: runtime.resetPreferences,
        },
      };
    }
  }, [runtime]);

  const gameplayActions: Partial<Record<GameplayRailsignalLiteActionId, () => void>> = {
    'pause-1': () => {
      if (runtime.state.paused) runtime.resume();
      else runtime.pause();
    },
    'button-2-2': () => runtime.moveLeft(),
    'button-3-3': () => runtime.moveRight(),
    'button-4-4': () => {},
    'settings-5': () => runtime.openSettings(),
    'start-game-6': () => runtime.start(),
    'restart-7': () => runtime.restart(),
  };

  const settingsActions: Partial<Record<GameSettingsRailsignalLiteActionId, () => void>> = {
    'reset-preferences-1': () => runtime.resetPreferences(),
    'save-and-resume-2': () => runtime.closeSettings(),
  };

  const runtimeSnapshot = {
    player: runtime.state.player,
    obstacles: runtime.state.obstacles,
    shards: runtime.state.shards,
    score: runtime.state.score,
    energy: runtime.state.energy,
    lives: runtime.state.lives,
    paused: runtime.state.paused,
  };

  return (
    <div
      data-setfarm-root="railsignal-lite"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden"
    >
      {runtime.state.screen === 'gameplay' && (
        <GameplayRailsignalLite actions={gameplayActions} runtime={runtimeSnapshot} />
      )}
      {runtime.state.screen === 'settings' && (
        <GameSettingsRailsignalLite actions={settingsActions} />
      )}
    </div>
  );
}
