# Changelog

All notable changes to the HUEFORM VS Code theme and icon collection will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-11-02

### Initial Public Release — HUEFORM — VS Code Theme & Icon Collection

- **Brand Identity Launch:** Rebranded from SONDER to HUEFORM (*Colour with intention.*).
- **22 Curated VS Code Themes (11 Colour Families × 2 Variants):**
  - **11 Families:** Abyss, Nocturne, Sakura, Umber, Midnight, Forest, Nebula, Ocean, Ember, Lavender, Blossom.
  - **Dark & Light Variants:** Each family features an immersive Dark theme and an independently crafted Light theme designed from canvas and paper fundamentals for zero glare.
  - **Adaptive Theme Surface System:** Architectural depth hierarchy mapping `palette.darkest`, `palette.deep`, and `palette.surface` to editor, sidebar, and panels.
  - **Dynamic Theme-Aware Tabs:** Active tabs dynamically adapt with theme-colored backgrounds and signature accent indicators (`tab.activeBorderTop`).
  - **100% WCAG 2.2 AA / AAA Contrast Compliance:** Every token pair mathematically audited across all 22 themes.
  - **CIELAB Perceptual Distinctiveness Guarantee:** Rigorous CIELAB $\Delta E^*_{ab}$ multi-token composite model ensuring all 110 theme pairs maintain clear chromatic separation.

- **22 Matching Themed File Icon Themes (Pierre-Inspired Vector Geometry):**
  - 22 dedicated, distinct icon themes contributed directly in `package.json` (`hueform-${family}-icons-dark` and `hueform-${family}-icons-light`).
  - Clean geometric SVG iconography engineered on a crisp `16x16` pixel grid for sharp legibility at all UI scales.
  - **Themed, Not Rainbow:** File icons strictly adhere to each family's chromatic identity across 4 semantic tiers (Primary accent, Secondary accent, Muted neutral base, and Themed folders).
  - Dark variants feature luminous, high-energy strokes; Light variants feature deliberately darker, richer variants for maximum contrast on light canvases.
  - Full support for 60+ contemporary programming languages, runtimes, configurations, and folders.

- **Automatic Theme-Matched Icon Synchronization:**
  - Selecting any HUEFORM colour theme automatically activates its matching file icon theme with zero manual configuration.
  - **Non-HUEFORM Protection:** When switching to an external theme (such as *Default Dark Modern*, *GitHub Dark*, *Dracula*, or *One Dark Pro*), HUEFORM automatically restores your previous icon theme and halts icon management.
  - **One-Way Direction & Anti-Looping Engine:** Strict one-way synchronization (Color Theme → Icon Theme) with re-entrancy locks.
  - Fully configurable via `hueform.autoMatchIconTheme` (default `true`) or Command Palette (`HUEFORM: Toggle Automatic Icon Theme Matching`).

- **Subtle Themed Folder Highlights:**
  - 100% native explorer folder badges via `vscode.FileDecorationProvider` for prominent directories (`src`, `components`, `app`, `test`, `docs`, `config`, `api`, `lib`, `assets`).
  - Cross-platform support (macOS, Windows, Linux) with zero filesystem modification.

- **Subtle Neovide-Inspired Cursor Motion:**
  - 100% native API-based smooth cursor spring glide trail via `TextEditorDecorationType`.
  - Cursor glow dynamically synchronizes with active theme accent.
  - Zero idle CPU overhead; toggle anytime via `hueform.cursor.animation`.
