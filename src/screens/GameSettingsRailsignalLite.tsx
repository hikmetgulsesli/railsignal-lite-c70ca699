// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - RailSignal Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronDown, CircleHelp, Music, RotateCcw, Save, Volume2 } from "lucide-react";


export type GameSettingsRailsignalLiteActionId = "reset-preferences-1" | "save-and-resume-2";

export interface GameSettingsRailsignalLiteProps {
  actions?: Partial<Record<GameSettingsRailsignalLiteActionId, () => void>>;

}

export function GameSettingsRailsignalLite({ actions }: GameSettingsRailsignalLiteProps) {
  return (
    <>
      {/* Gameplay Background Context Overlay */}
      <div className="absolute inset-0 bg-surface/80 mix-blend-multiply z-0"></div>
      <div className="scanline"></div>
      {/* Main Settings Modal */}
      <main className="glass-panel w-full max-w-4xl mx-margin-mobile md:mx-margin-desktop rounded z-10 relative flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-outline-variant overflow-hidden">
      {/* Left Column: Controls & Toggles */}
      <section className="flex-1 p-gutter md:p-8 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-outline-variant">
      <header className="mb-4">
      <h1 className="font-display-lg-mobile md:font-display-lg text-primary-fixed-dim uppercase tracking-tighter shadow-primary-fixed-dim drop-shadow-[0_0_8px_rgba(171,214,0,0.3)]">
                          System Parameters
                      </h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">CONFIGURE CONTROL ROOM HUD</p>
      </header>
      <div className="space-y-8">
      {/* Sliders */}
      <div className="space-y-6">
      <div>
      <div className="flex justify-between items-center mb-2">
      <label className="font-label-caps text-label-caps text-on-surface tracking-widest">SIGNAL SPEED</label>
      <span className="font-stats-num text-stats-num text-primary-fixed-dim" id="speed-val">1.0x</span>
      </div>
      <input max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      </div>
      <div>
      <div className="flex justify-between items-center mb-2">
      <label className="font-label-caps text-label-caps text-on-surface tracking-widest">DIFFICULTY MULTIPLIER</label>
      <span className="font-stats-num text-stats-num text-secondary-fixed-dim" id="diff-val">NORMAL</span>
      </div>
      <input max="3" min="1" step="1" type="range" defaultValue="2" />
      </div>
      </div>
      {/* Toggles */}
      <div className="grid grid-cols-2 gap-4">
      <div className="bg-surface-container-low p-4 border border-surface-container-high rounded flex justify-between items-center">
      <label className="font-label-caps text-label-caps text-on-surface flex items-center gap-2">
      <Volume2  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
                                  SFX
                              </label>
      <input defaultChecked={true} className="industrial-toggle" type="checkbox" />
      </div>
      <div className="bg-surface-container-low p-4 border border-surface-container-high rounded flex justify-between items-center">
      <label className="font-label-caps text-label-caps text-on-surface flex items-center gap-2">
      <Music  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
                                  MUSIC
                              </label>
      <input defaultChecked={true} className="industrial-toggle" type="checkbox" />
      </div>
      </div>
      {/* Dropdown */}
      <div className="bg-surface-container-low p-4 border border-surface-container-high rounded">
      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">CONTROL SCHEME</label>
      <div className="relative">
      <select className="w-full bg-surface text-on-surface font-body-base text-body-base border border-outline-variant p-3 appearance-none focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-colors rounded-none">
      <option>Mouse &amp; Keyboard (Precision)</option>
      <option>Controller (Gamepad)</option>
      <option>Touch (Tablet Mode)</option>
      </select>
      <ChevronDown className="absolute right-3 top-3 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* Right Column: How to Play & Actions */}
      <section className="w-full md:w-80 bg-surface-container-lowest/50 p-gutter md:p-8 flex flex-col justify-between">
      {/* How to Play */}
      <div className="mb-8">
      <h2 className="font-headline-md text-headline-md text-on-surface border-b border-surface-container-high pb-2 mb-4 flex items-center gap-2">
      <CircleHelp className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
                          HOW TO PLAY
                      </h2>
      <ul className="space-y-4">
      <li className="flex items-start gap-3">
      <span className="font-stats-num text-stats-num text-surface-variant leading-none mt-1">01</span>
      <p className="font-body-base text-body-base text-on-surface-variant text-sm">Click junctions to switch tracks and alter routing.</p>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-stats-num text-stats-num text-surface-variant leading-none mt-1">02</span>
      <p className="font-body-base text-body-base text-on-surface-variant text-sm">Route incoming pulses to matching designated signals.</p>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-stats-num text-stats-num text-error leading-none mt-1">03</span>
      <p className="font-body-base text-body-base text-on-surface-variant text-sm">Avoid collisions at all costs. Maintain sector integrity.</p>
      </li>
      </ul>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-3 mt-auto">
      <button className="w-full bg-surface-container-high border border-outline-variant text-on-surface font-label-caps text-label-caps py-4 px-6 hover:bg-surface-container-highest hover:text-primary-fixed-dim transition-colors flex items-center justify-center gap-2" type="button" data-action-id="reset-preferences-1" onClick={actions?.["reset-preferences-1"]}>
      <RotateCcw className="text-sm" aria-hidden={true} focusable="false" />
                          RESET PREFERENCES
                      </button>
      <button className="w-full bg-surface-container-high border border-surface-container-high text-primary-fixed-dim font-label-caps text-label-caps py-4 px-6 hover:border-primary-fixed-dim hover:shadow-[0_0_15px_rgba(171,214,0,0.2)] active:translate-y-px transition-colors flex items-center justify-center gap-2 group" type="button" data-action-id="save-and-resume-2" onClick={actions?.["save-and-resume-2"]}>
      <Save className="group-hover:animate-pulse" aria-hidden={true} focusable="false" />
                          SAVE &amp; RESUME
                      </button>
      </div>
      </section>
      </main>
      
    </>
  );
}
