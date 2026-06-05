---
name: Signal Flow
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#ffffff'
  on-tertiary: '#690003'
  tertiary-container: '#ffdad5'
  on-tertiary-container: '#ca0a0f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4aa'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930005'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  stats-num:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  grid-cols: '12'
---

## Brand & Style
The brand personality is high-precision, industrial, and hyper-focused. It targets users who appreciate technical accuracy and the rhythmic, high-stakes nature of rail logistics. The UI must evoke a sense of being in a control room—authoritative, dark, and reactive.

The design style is **Industrial Minimalism with HUD (Heads-Up Display) accents**. It utilizes a deep charcoal foundation to eliminate visual noise, allowing vibrant neon signal pulses and glassmorphic overlays to direct the user's focus. The aesthetic balances the raw, geometric nature of heavy industry with the sleek, digital precision of modern timing software.

## Colors
This design system utilizes a high-contrast, functional palette designed for immediate status recognition in low-light environments.

- **Background (Neutral):** #121212 (Deep Charcoal). Used for the base canvas to ensure neon elements "pop" without eye strain.
- **Status - Go (Primary):** #CCFF00 (Cyber Lime). Used for active rail paths, successful switches, and "proceed" states.
- **Status - Caution (Secondary):** #FFB800 (Warning Amber). Used for approaching trains, timed sequences, and secondary UI warnings.
- **Status - Stop (Tertiary):** #FF3B30 (Signal Red). Used for blocked paths, collisions, and critical errors.
- **Accents:** #2A2A2A (Brushed Steel). Used for track geometry and inactive UI containers.

## Typography
Typography is treated as a telemetry tool. **JetBrains Mono** is utilized for all headlines, numeric data, and technical labels to reinforce the "industrial-code" aesthetic and ensure character distinctness. **Inter** is used for body text and settings descriptions to maintain legibility during extended play sessions.

Numeric displays (scores, timers, level indicators) should always be monospaced to prevent "jumping" layouts during rapid updates. All technical labels should use the `label-caps` style for a military-spec appearance.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Every element is aligned to a 4px baseline grid to reflect industrial precision. 

- **Playfield:** Centered with a generous "safe zone" (64px on desktop) to keep the user's periphery clear of distractions.
- **HUD Elements:** Anchored to the corners of the viewport with 24px internal padding.
- **Sidebars:** Fixed-width 280px panels for technical data or level selection, utilizing heavy internal gutters (16px) to separate distinct data modules.

## Elevation & Depth
This design system avoids traditional drop shadows in favor of **Tonal Layering** and **Luminance**.

1.  **Base Layer:** #121212 (The Void).
2.  **Mid Layer:** #1A1A1A (Track Beds/Panels) with a 1px solid border of #2A2A2A.
3.  **Overlay Layer:** Glassmorphism is used for pause menus and settings. Use a `backdrop-filter: blur(12px)` with a 10% white tint and a thin #FFFFFF20 border.
4.  **Signal Glow:** Interactive elements use an `outer-glow` (box-shadow) that matches their status color (e.g., #CCFF00 at 40% opacity) but only when active or hovered.

## Shapes
The shape language is strictly **Soft-Industrial**. We use a 0.25rem (4px) base radius for standard containers to prevent the UI from feeling "sharp" or hostile, while maintaining a structural, machined look.

- **Buttons/Inputs:** 4px radius.
- **Status Chips:** 2px radius (near-sharp).
- **HUD Overlays:** 8px radius for larger glass panels to differentiate them from the mechanical track elements.
- **Track Geometry:** 0px radius (sharp) to indicate rigid steel.

## Components

- **Tactile Buttons:** High-contrast containers with #2A2A2A background. On hover, the border changes to Cyber Lime (#CCFF00) with a subtle 4px glow. On press, the element shifts 1px down to simulate physical engagement.
- **Linear Progress Indicators:** 4px tall tracks using #2A2A2A (background) and #CCFF00 (fill). For timed events, the fill color transitions from Lime to Amber to Red as the deadline approaches.
- **Glassmorphic Cards:** Used for modal overlays. They must feature a 1px top-light border to simulate the edge of a glass pane.
- **Signal Nodes:** Circular indicators for switching points. These use a 2px stroke. When toggled, the stroke pulses with a "glow" effect.
- **Data Tables:** Minimalist, no horizontal borders. Uses `label-caps` for headers and `stats-num` for data values to ensure rapid scanning of rail telemetry.