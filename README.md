<div align="center">
  <img src="./assets/icon.png" width="128" height="128" alt="HUEFORM Logo" />
  <h1>HUEFORM</h1>
  <p><strong>VS Code Theme & Icon Collection</strong></p>
  <p><em>“Colour with intention.”</em></p>
  <p>
    <a href="https://marketplace.visualstudio.com/items?itemName=theaffy.hueform"><img src="https://img.shields.io/visual-studio-marketplace/v/theaffy.hueform?style=flat-square&label=Marketplace" alt="Visual Studio Marketplace Version" /></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=theaffy.hueform"><img src="https://img.shields.io/visual-studio-marketplace/i/theaffy.hueform?style=flat-square&color=blue" alt="Installs" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" /></a>
  </p>
</div>

---

A thoughtfully curated collection of **22 dark and light themes** and **22 matching themed file icon sets** for Visual Studio Code across **11 distinct colour families**. Minimal, design-focused, and engineered for extended daily coding comfort.

**Zero configuration required:** Choose any HUEFORM colour theme, and the matching file icon theme is applied automatically.

---

## ⚡ Installation

Install directly through the VS Code Extensions panel or via the command line:

```bash
ext install theaffy.hueform
```

Alternatively:
1. Open Visual Studio Code.
2. Press `Ctrl+P` (macOS: `Cmd+P`).
3. Paste `ext install theaffy.hueform` and press **Enter**.
4. Press `Ctrl+K Ctrl+T` (macOS: `Cmd+K Cmd+T`) to open the Theme Picker and choose any **HUEFORM** theme.

---

## ✦ The Collection & Automatic Icon Mapping

When you select a HUEFORM colour theme, HUEFORM automatically activates its matching icon theme. You never need to manually configure file icons.

| Family           | HUEFORM Colour Theme                                    | Automatically Applied Icon Theme                                | Appearance                                                         |
| ---------------- | ------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| **01. Abyss**    | `HUEFORM — Abyss Dark`<br>`HUEFORM — Abyss Light`       | `HUEFORM Abyss Icons Dark`<br>`HUEFORM Abyss Icons Light`       | Oceanic cyan & deep slate<br>Clean crisp teal on cool slate paper   |
| **02. Nocturne** | `HUEFORM — Nocturne Dark`<br>`HUEFORM — Nocturne Light` | `HUEFORM Nocturne Icons Dark`<br>`HUEFORM Nocturne Icons Light` | Ethereal violet & magenta<br>Rich royal purple on dusk mist        |
| **03. Sakura**   | `HUEFORM — Sakura Dark`<br>`HUEFORM — Sakura Light`     | `HUEFORM Sakura Icons Dark`<br>`HUEFORM Sakura Icons Light`     | Soft petal rose & crimson<br>Deep ruby rose on porcelain           |
| **04. Umber**    | `HUEFORM — Umber Dark`<br>`HUEFORM — Umber Light`       | `HUEFORM Umber Icons Dark`<br>`HUEFORM Umber Icons Light`       | Warm terracotta & amber<br>Grounded clay & sepia on linen          |
| **05. Midnight** | `HUEFORM — Midnight Dark`<br>`HUEFORM — Midnight Light` | `HUEFORM Midnight Icons Dark`<br>`HUEFORM Midnight Icons Light` | Electric sky & nocturnal blue<br>Deep sapphire on canvas           |
| **06. Forest**   | `HUEFORM — Forest Dark`<br>`HUEFORM — Forest Light`     | `HUEFORM Forest Icons Dark`<br>`HUEFORM Forest Icons Light`     | Luminous emerald & moss<br>Deep forest botanical green             |
| **07. Nebula**   | `HUEFORM — Nebula Dark`<br>`HUEFORM — Nebula Light`     | `HUEFORM Nebula Icons Dark`<br>`HUEFORM Nebula Icons Light`     | Atmospheric neon magenta & violet<br>Vibrant ultraviolet on frost  |
| **08. Ocean**    | `HUEFORM — Ocean Dark`<br>`HUEFORM — Ocean Light`       | `HUEFORM Ocean Icons Dark`<br>`HUEFORM Ocean Icons Light`       | Vivid cyan & marine turquoise<br>Deep marine cobalt on sea-spray   |
| **09. Ember**    | `HUEFORM — Ember Dark`<br>`HUEFORM — Ember Light`       | `HUEFORM Ember Icons Dark`<br>`HUEFORM Ember Icons Light`       | Warm blaze orange & gold<br>Deep burnt sienna & terracotta         |
| **10. Lavender** | `HUEFORM — Lavender Dark`<br>`HUEFORM — Lavender Light` | `HUEFORM Lavender Icons Dark`<br>`HUEFORM Lavender Icons Light` | Gentle periwinkle & lilac<br>Deep royal violet on periwinkle-milk  |
| **11. Blossom**  | `HUEFORM — Blossom Dark`<br>`HUEFORM — Blossom Light`   | `HUEFORM Blossom Icons Dark`<br>`HUEFORM Blossom Icons Light`   | Playful blossom pink & raspberry<br>Deep fuchsia wine on porcelain |

---

## 🎨 Complete Visual Ecosystem

```
HUEFORM Colour Theme
        ↓
 ┌──────┼─────────┐
 ↓      ↓         ↓
Surfaces Accent  Syntax
        ↓
   ┌────┼─────┐
   ↓    ↓     ↓
Cursor Tabs Selection
        ↓
   Icon Theme
        ↓
Matching HUEFORM file icons
```

### 1. Themed File Icon Themes (Pierre Geometry)

- **Minimalist & Geometric:** Built upon the clean vector geometry of Pierre Icons (`vscode-icons`), engineered on a crisp `16x16` pixel grid for razor-sharp legibility at standard sidebar scales.
- **Harmonically Themed:** Unlike traditional rainbow icon sets, HUEFORM file icons are strictly themed to match each palette family's chromatic DNA.
- **22 Dedicated Icon Themes:** 11 families × 2 variants (Dark & Light) = 22 standalone icon themes registered directly in `package.json`.
- **Dark Icon Themes:** Luminous, high-energy accents that pop cleanly against dark sidebar surfaces.
- **Light Icon Themes:** Deliberately adjusted darker, stronger variants of the family colors to ensure clear contrast and zero eye fatigue against light sidebar canvases.
- **Semantic Hierarchy:**
  - **Primary:** Flagship family accent for core language files (TypeScript, Rust, React, Python, Go, etc.).
  - **Secondary:** Complementary accent for web standards and scripts (JavaScript, HTML, CSS, Shell).
  - **Muted Neutral:** Subtle base tone for documentation, markdown, and generic files.
  - **Themed Folders:** Closed and open folder states with distinct badges for `src`, `components`, `pages`, `app`, `test`, `docs`, `config`, `api`, `lib`, and `assets`.

### 2. Automatic Colour Theme → Icon Theme Synchronization

- **One-Click Experience:** Select `Preferences: Color Theme` → `HUEFORM — Ember Dark`, and your file icons immediately switch to `HUEFORM Ember Icons Dark`.
- **Intelligent Non-HUEFORM Protection:** When you switch to a third-party or built-in theme (such as _Default Dark Modern_, _GitHub Dark_, or _Dracula_), HUEFORM immediately restores your previous non-HUEFORM icon theme and halts automatic icon switching.
- **One-Way Direction & Anti-Looping:** The colour theme is always the single source of truth. HUEFORM never alters your colour theme when an icon theme is changed.
- **User Controllable:** Toggle anytime via the setting `hueform.autoMatchIconTheme: true` (or Command Palette: `HUEFORM: Toggle Automatic Icon Theme Matching`).

### 3. Subtle Themed Folder Highlights (Explorer Badges)

- **Native & Cross-Platform:** Implemented 100% natively via the official `vscode.FileDecorationProvider` API.
- **Zero Hacks:** Works identically across macOS, Linux, and Windows with zero filesystem patching, zero security warnings, and zero performance impact.
- **Subtle Identification:** Prominent folders like `src`, `components`, `app`, `test`, `docs`, and `config` receive subtle badges and theme-derived accents in the file explorer.
- **Toggle Anytime:** `Cmd+Shift+P` → `HUEFORM: Toggle Themed Folder Highlights`.

### 4. Adaptive Theme Surface System

- **Dark Themes:** The deepest tone (`palette.darkest`) becomes the primary `editor.background`. The sidebar takes the second-darkest tone (`palette.deep`), and the panel/status bar forms the third-darkest supporting layer (`palette.surface`).
- **Light Themes:** Clean, glare-free canvas tones (`palette.lightest`) anchor the editor, while the sidebar and panels gently deepen in value.
- **Dynamic Theme-Aware Tabs:** Active tabs receive a subtle chromatic tint derived from the active theme's accent (`theme.accent`), bordered with an elegant accent indicator (`tab.activeBorderTop`).

### 5. Subtle Neovide-Inspired Cursor Motion

- **Smooth Caret Glide:** When moving through code, the cursor smoothly springs and glides toward its new position with micro-motion easing rather than instantly teleporting.
- **Theme-Synchronized Glow:** Cursor and glide trail colors dynamically match the active HUEFORM theme's semantic accent.
- **100% Native & Safe:** Built exclusively using official VS Code APIs (`TextEditor.setDecorations`). Zero CSS injection, no Custom CSS/JS Loader, and zero file modification.

---

## 💻 Comprehensive Language & File Support

Extensively tested across contemporary languages, runtimes, and frameworks:

- **TypeScript & JavaScript** (including React JSX/TSX)
- **HTML, XML, SVG**
- **CSS, SCSS, LESS**
- **Python** (type hints, decorators, f-strings)
- **Rust, Go, Java, Kotlin, C/C++, C#, PHP, Ruby, Swift**
- **JSON & JSONC, YAML, TOML**
- **Markdown, Dockerfile, Git, Shell scripts**
- **Vue, Svelte, GraphQL**

---

## 🖼️ Theme Previews

### Abyss

| Dark                                                                                                      | Light                                                                                                       |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Abyss Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/abyss-dark.png) | ![Abyss Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/abyss-light.png) |

### Nocturne

| Dark                                                                                                            | Light                                                                                                             |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Nocturne Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/nocturne-dark.png) | ![Nocturne Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/nocturne-light.png) |

### Sakura

| Dark                                                                                                        | Light                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Sakura Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/sakura-dark.png) | ![Sakura Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/sakura-light.png) |

### Umber

| Dark                                                                                                      | Light                                                                                                       |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Umber Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/umber-dark.png) | ![Umber Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/umber-light.png) |

### Midnight

| Dark                                                                                                            | Light                                                                                                             |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Midnight Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/midnight-dark.png) | ![Midnight Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/midnight-light.png) |

### Forest

| Dark                                                                                                        | Light                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Forest Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/forest-dark.png) | ![Forest Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/forest-light.png) |

### Nebula

| Dark                                                                                                        | Light                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Nebula Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/nebula-dark.png) | ![Nebula Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/nebula-light.png) |

### Ocean

| Dark                                                                                                      | Light                                                                                                       |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Ocean Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/ocean-dark.png) | ![Ocean Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/ocean-light.png) |

### Ember

| Dark                                                                                                      | Light                                                                                                       |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Ember Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/ember-dark.png) | ![Ember Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/ember-light.png) |

### Lavender

| Dark                                                                                                            | Light                                                                                                             |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Lavender Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/lavender-dark.png) | ![Lavender Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/lavender-light.png) |

### Blossom

| Dark                                                                                                          | Light                                                                                                           |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Blossom Dark](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/blossom-dark.png) | ![Blossom Light](https://raw.githubusercontent.com/the-affy/hueform/main/assets/screenshots/blossom-light.png) |

---

## ⚙️ Configuration Settings

| Setting                            | Type      | Default | Description                                                                                        |
| ---------------------------------- | --------- | ------- | -------------------------------------------------------------------------------------------------- |
| `hueform.autoMatchIconTheme`       | `boolean` | `true`  | Automatically matches the file icon theme with the active HUEFORM colour theme family and variant. |
| `hueform.folderHighlights.enabled` | `boolean` | `true`  | Enables subtle themed folder badges (`src`, `components`, `tests`, `docs`) in the explorer tree.   |
| `hueform.cursor.animation`         | `boolean` | `true`  | Enables smooth cursor glide motion matching the active HUEFORM theme's accent.                     |

*Note: Existing installations using legacy `sonder.*` configurations will seamlessly fall back and migrate automatically.*

---

## 🚀 Commands

Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

- `HUEFORM: Match File Icons to Active Color Theme` — Manually synchronize icon theme to active color palette.
- `HUEFORM: Toggle Automatic Icon Theme Matching` — Turn automatic icon theme matching on/off.
- `HUEFORM: Toggle Themed Folder Highlights` — Turn explorer folder badges on/off.
- `HUEFORM: Toggle Cursor Glide Animation` — Turn smooth cursor motion on/off.

---

## ♿ Accessibility & Contrast

All 22 colour themes and 22 icon themes in the HUEFORM collection pass rigorous mathematical contrast checks against their respective surfaces to achieve **100% WCAG 2.2 AA / AAA** compliance.

---

## 🤝 Contributing & Support

- **Repository:** [https://github.com/the-affy/hueform](https://github.com/the-affy/hueform)
- **Issues & Feedback:** [https://github.com/the-affy/hueform/issues](https://github.com/the-affy/hueform/issues)

---

## 📄 License

MIT License — see [LICENSE](./LICENSE)
