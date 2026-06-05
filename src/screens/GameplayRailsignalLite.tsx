// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - RailSignal Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, Play, RefreshCw, Settings, Train } from "lucide-react";


export type GameplayRailsignalLiteActionId = "pause-1" | "button-2-2" | "button-3-3" | "button-4-4" | "settings-5" | "start-game-6" | "restart-7";

export interface GameplayRailsignalLiteProps {
  actions?: Partial<Record<GameplayRailsignalLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayRailsignalLite({ actions, runtime }: GameplayRailsignalLiteProps) {
  const score = runtime?.score ?? 0;
  const paused = runtime?.paused ?? false;
  const level = (runtime as any)?.level ?? 1;
  return (
    <>
      {/* TopAppBar (Based on Shared Components JSON) */}
      <header className="fixed top-0 w-full h-16 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant shadow-[0_0_15px_rgba(171,214,0,0.1)] flex justify-between items-center px-margin-mobile md:px-margin-desktop z-50">
      {/* Brand */}
      <div className="flex items-center gap-4">
      <Train  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary-fixed-dim uppercase italic tracking-tighter">RAILSIGNAL LITE</h1>
      </div>
      {/* HUD Center Stats */}
      <div className="hidden md:flex items-center gap-8 bg-surface-container-high px-6 py-2 rounded border border-outline-variant">
      <div className="flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant">SCORE</span>
      <span className="font-stats-num text-stats-num text-on-background">{score.toLocaleString()}</span>
      </div>
      <div className="w-px h-8 bg-outline-variant"></div>
      <div className="flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant">LEVEL</span>
      <span className="font-stats-num text-stats-num text-primary-fixed-dim">{String(level).padStart(2, '0')}</span>
      </div>
      </div>
      {/* Trailing Action */}
      <button className="flex items-center justify-center w-10 h-10 rounded bg-surface-container-high border border-outline-variant text-primary-fixed-dim hover:border-primary-fixed-dim hover:shadow-[0_0_8px_#abd60066] active:translate-y-px transition-colors duration-200" type="button" aria-label="Pause" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 mt-16 flex relative">
      {/* Playfield Canvas */}
      <div className="flex-1 relative grid-bg bg-surface overflow-hidden" id="playfield">
      {/* Safe Zone Wrapper */}
      <div className="absolute inset-0 m-margin-mobile md:m-margin-desktop border border-outline-variant/30 rounded-lg">
      {/* Stylized Neon Rail Tracks (SVG/CSS Hybrid) */}
      {/* Main Line */}
      <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 track-line active"></div>
      {/* Branch Line Top */}
      <div className="absolute top-[20%] left-[30%] right-[10%] h-4 track-line transform -skew-x-[45deg] origin-left"></div>
      {/* Branch Line Bottom */}
      <div className="absolute bottom-[25%] left-[45%] right-0 h-4 track-line"></div>
      {/* Vertical Connector */}
      <div className="absolute top-[20%] bottom-1/2 left-[60%] w-4 track-line"></div>
      {/* Junction Nodes (Interactive) */}
      <button className="junction-node absolute top-1/2 left-[30%] w-8 h-8 -mt-4 -ml-4 rounded-full bg-surface-container-highest border-2 border-outline-variant flex items-center justify-center hover:border-primary-fixed-dim hover:bg-surface-container-high transition-colors group z-10" type="button" aria-label="Button 2" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <div className="w-3 h-3 rounded-full bg-outline-variant group-hover:bg-primary-fixed-dim transition-colors"></div>
      </button>
      <button className="junction-node glow-active absolute top-1/2 left-[60%] w-8 h-8 -mt-4 -ml-4 rounded-full bg-surface-container-high border-2 flex items-center justify-center hover:shadow-[0_0_12px_#abd600] active:scale-95 transition-colors group z-10" data-state="active" type="button" aria-label="Button 3" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <div className="w-3 h-3 rounded-full bg-primary-fixed-dim"></div>
      </button>
      <button className="junction-node glow-warning absolute top-[20%] left-[60%] w-8 h-8 -mt-4 -ml-4 rounded-full bg-surface-container-high border-2 flex items-center justify-center hover:shadow-[0_0_12px_#ffba20] active:scale-95 transition-colors group z-10" data-state="warning" type="button" aria-label="Button 4" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
      </button>
      {/* Signal Pulses (Visual Elements) */}
      <div className="absolute top-1/2 left-[10%] w-16 h-4 -mt-2 bg-gradient-to-r from-transparent via-primary-fixed-dim to-transparent opacity-80 animate-pulse"></div>
      </div>
      </div>
      {/* Right Status Panel */}
      <aside className="hidden lg:flex w-[280px] bg-surface-container-low border-l border-outline-variant flex-col py-8 px-gutter relative z-20">
      <h2 className="font-headline-md text-headline-md text-on-background tracking-tighter mb-8 border-b border-outline-variant pb-4">TELEMETRY</h2>
      <div className="flex flex-col gap-6">
      {/* Status Block */}
      <div className="bg-surface-container-highest border border-outline-variant p-4 rounded">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">SYSTEM STATUS</h3>
      <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-primary-fixed-dim shadow-[0_0_8px_#abd600]"></div>
      <span className="font-stats-num text-stats-num text-primary-fixed-dim">{paused ? 'PAUSED' : 'ACTIVE'}</span>
      </div>
      </div>
      {/* Next Pulse Timer */}
      <div className="bg-surface-container-highest border border-outline-variant p-4 rounded relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-1 bg-secondary-fixed-dim w-[60%] transition-colors duration-1000"></div>
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">NEXT PULSE</h3>
      <span className="font-stats-num text-[32px] font-bold text-on-background leading-none">2.5s</span>
      </div>
      {/* Junction Health List */}
      <div className="flex flex-col gap-2 mt-4">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">JUNCTION HEALTH</h3>
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/50">
      <span className="font-body-base text-body-base text-on-background">J-Alpha</span>
      <span className="font-stats-num text-label-caps text-primary-fixed-dim">100%</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/50">
      <span className="font-body-base text-body-base text-on-background">J-Beta</span>
      <span className="font-stats-num text-label-caps text-secondary-fixed-dim">78%</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/50">
      <span className="font-body-base text-body-base text-on-background">J-Gamma</span>
      <span className="font-stats-num text-label-caps text-primary-fixed-dim">95%</span>
      </div>
      </div>
      </div>
      {/* Terminal Log Effect */}
      <div className="mt-auto pt-8">
      <div className="h-24 bg-surface rounded border border-outline-variant p-2 font-display-lg text-[10px] text-on-surface-variant opacity-70 overflow-hidden flex flex-col justify-end">
      <div>&gt; Init sequence... OK</div>
      <div>&gt; Routing power to track 4... OK</div>
      <div className="text-primary-fixed-dim">&gt; Signal locked. Awaiting input.</div>
      </div>
      </div>
      </aside>
      </main>
      {/* Floating Bottom Controls */}
      <div className="fixed bottom-margin-mobile md:bottom-margin-desktop left-1/2 -translate-x-1/2 flex items-center gap-4 bg-surface-container-highest/90 backdrop-blur-md px-6 py-4 rounded-xl border border-outline-variant shadow-[0_4px_24px_rgba(0,0,0,0.5)] z-50">
      <button className="flex items-center gap-2 px-6 py-2 bg-surface-container-low border border-outline-variant hover:border-primary-fixed-dim hover:text-primary-fixed-dim text-on-surface-variant font-label-caps text-label-caps rounded transition-colors active:translate-y-px" type="button" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                  SETTINGS
              </button>
      <button className="flex items-center justify-center gap-2 px-10 py-3 bg-primary-fixed-dim text-on-primary-fixed font-headline-md text-[18px] rounded border border-transparent hover:shadow-[0_0_15px_#abd600] active:scale-95 transition-colors" type="button" data-action-id="start-game-6" onClick={actions?.["start-game-6"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                  START GAME
              </button>
      <button className="flex items-center gap-2 px-6 py-2 bg-surface-container-low border border-outline-variant hover:border-error hover:text-error text-on-surface-variant font-label-caps text-label-caps rounded transition-colors active:translate-y-px" type="button" data-action-id="restart-7" onClick={actions?.["restart-7"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                  RESTART
              </button>
      </div>
      
    </>
  );
}
