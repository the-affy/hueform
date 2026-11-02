# HUEFORM — Semantic Palette & Adaptive Surface Mapping

> *"Colour with intention."*

This document provides the exact source-of-truth semantic palette mapping and contrast verification for all 22 HUEFORM themes across both Dark and Light modes.

## 1. Architectural Hierarchy Principles

### Dark Themes
- **Editor Background (`editor.background`):** Assigned to `palette.darkest` — the deepest, most immersive layer.
- **Sidebar Background (`sideBar.background`):** Assigned to `palette.deep` — second deepest with clear perceptual separation.
- **Panel & Status Bar (`panel.background`, `statusBar.background`):** Assigned to `palette.surface` — third deepest supporting layer.
- **Active Tab (`tab.activeBackground`):** Harmonized active canvas derived from `palette.darkest` tinted with 12% accent.
- **Inactive Tab (`tab.inactiveBackground`):** Recedes into `palette.deep` with sidebar.

### Light Themes
- **Editor Background (`editor.background`):** Assigned to `palette.lightest` — subtle chromatic paper canvas.
- **Sidebar Background (`sideBar.background`):** Assigned to `palette.surface` — second lightest, subtle paper tone.
- **Panel & Status Bar (`panel.background`, `statusBar.background`):** Assigned to `palette.deep` — third lightest, supporting ground.
- **Active Tab (`tab.activeBackground`):** Harmonized paper canvas derived from `palette.lightest` tinted with 8% accent.
- **Inactive Tab (`tab.inactiveBackground`):** Recedes into `palette.surface` with sidebar.

---

## 2. Palette Definitions by Theme Family

### Abyss Family
*Tagline: Deep, atmospheric, restrained, and focused.*

#### HUEFORM Abyss Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#040D14` | Primary Canvas (Editor Background) |
| `palette.deep` | `#081722` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#0E2130` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#18364B` | Structural Borders, Separators |
| `palette.primary` | `#80A8B8` | Secondary Text, Types, Titles |
| `palette.lightest` | `#D5E4EC` | Primary Text (Editor Foreground) |
| `accent` | `#3EAABF` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#5296A8` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Abyss Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#EFF2F5` | Primary Canvas (Editor Background) |
| `palette.surface` | `#DFE5EB` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#CFD8E1` | Panel, Terminal, Status Bar |
| `palette.mid` | `#B6CAD6` | Structural Borders, Separators |
| `palette.primary` | `#234E6B` | Secondary Text, Types, Titles |
| `palette.darkest` | `#071720` | Primary Text (Editor Foreground) |
| `accent` | `#0C606E` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#135A7A` | Word Highlights, Links, Secondary Accent |

### Nocturne Family
*Tagline: Rich, mysterious, elegant, and contemplative.*

#### HUEFORM Nocturne Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#0A0912` | Primary Canvas (Editor Background) |
| `palette.deep` | `#121020` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#19172A` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#2B2745` | Structural Borders, Separators |
| `palette.primary` | `#B89FD6` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EFEBF7` | Primary Text (Editor Foreground) |
| `accent` | `#A77DC8` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#C88EE0` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Nocturne Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#F6F5F9` | Primary Canvas (Editor Background) |
| `palette.surface` | `#EDEAF3` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E2DEEC` | Panel, Terminal, Status Bar |
| `palette.mid` | `#CAC2DD` | Structural Borders, Separators |
| `palette.primary` | `#4F3574` | Secondary Text, Types, Titles |
| `palette.darkest` | `#1A132B` | Primary Text (Editor Foreground) |
| `accent` | `#6F26B8` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#8C279E` | Word Highlights, Links, Secondary Accent |

### Sakura Family
*Tagline: Soft, delicate, airy, and calming.*

#### HUEFORM Sakura Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#130E12` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1D151C` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#271C26` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#463243` | Structural Borders, Separators |
| `palette.primary` | `#E8A2B0` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FBF0F3` | Primary Text (Editor Foreground) |
| `accent` | `#F4728B` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#F9A8B6` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Sakura Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FAF5F6` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F4E9EC` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#EADBDF` | Panel, Terminal, Status Bar |
| `palette.mid` | `#D8BCC4` | Structural Borders, Separators |
| `palette.primary` | `#70273B` | Secondary Text, Types, Titles |
| `palette.darkest` | `#261219` | Primary Text (Editor Foreground) |
| `accent` | `#B81B42` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#981434` | Word Highlights, Links, Secondary Accent |

### Umber Family
*Tagline: Warm, earthy, natural, and grounded.*

#### HUEFORM Umber Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#130F0B` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1D1611` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#271F18` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#46382C` | Structural Borders, Separators |
| `palette.primary` | `#D4A274` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FAF3EC` | Primary Text (Editor Foreground) |
| `accent` | `#DE7456` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#E5B860` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Umber Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FAF7F2` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F0EAE0` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E5DCCE` | Panel, Terminal, Status Bar |
| `palette.mid` | `#CEC0AF` | Structural Borders, Separators |
| `palette.primary` | `#684124` | Secondary Text, Types, Titles |
| `palette.darkest` | `#24180E` | Primary Text (Editor Foreground) |
| `accent` | `#9E4324` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#8A5714` | Word Highlights, Links, Secondary Accent |

### Midnight Family
*Tagline: Deep, cinematic, precise, and nocturnal.*

#### HUEFORM Midnight Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#070B16` | Primary Canvas (Editor Background) |
| `palette.deep` | `#0D1426` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#141E38` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#23325B` | Structural Borders, Separators |
| `palette.primary` | `#87B4ED` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EBF2FC` | Primary Text (Editor Foreground) |
| `accent` | `#38BAF5` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#788AF5` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Midnight Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#F3F6FA` | Primary Canvas (Editor Background) |
| `palette.surface` | `#E5ECF4` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#D6E2EE` | Panel, Terminal, Status Bar |
| `palette.mid` | `#B5C8DC` | Structural Borders, Separators |
| `palette.primary` | `#1B4485` | Secondary Text, Types, Titles |
| `palette.darkest` | `#09162D` | Primary Text (Editor Foreground) |
| `accent` | `#1D64D8` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#1E40AF` | Word Highlights, Links, Secondary Accent |

### Forest Family
*Tagline: Organic, quiet, grounded, and refreshing.*

#### HUEFORM Forest Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#07120C` | Primary Canvas (Editor Background) |
| `palette.deep` | `#0D1E14` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#142B1D` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#244932` | Structural Borders, Separators |
| `palette.primary` | `#80C899` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EEF7F2` | Primary Text (Editor Foreground) |
| `accent` | `#3DD678` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#29C7B2` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Forest Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#F3F7F4` | Primary Canvas (Editor Background) |
| `palette.surface` | `#E6EFE9` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#D7E5DC` | Panel, Terminal, Status Bar |
| `palette.mid` | `#B5CDC0` | Structural Borders, Separators |
| `palette.primary` | `#155E32` | Secondary Text, Types, Titles |
| `palette.darkest` | `#0A2413` | Primary Text (Editor Foreground) |
| `accent` | `#15803D` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#0D6E66` | Word Highlights, Links, Secondary Accent |

### Nebula Family
*Tagline: Atmospheric, imaginative, and futuristic.*

#### HUEFORM Nebula Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#0B0618` | Primary Canvas (Editor Background) |
| `palette.deep` | `#140C2C` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#1C123D` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#39246B` | Structural Borders, Separators |
| `palette.primary` | `#CA92FA` | Secondary Text, Types, Titles |
| `palette.lightest` | `#F7EEFF` | Primary Text (Editor Foreground) |
| `accent` | `#EE62C8` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#8C7AF7` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Nebula Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#F7F4FB` | Primary Canvas (Editor Background) |
| `palette.surface` | `#EDE5F6` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#DFD2EE` | Panel, Terminal, Status Bar |
| `palette.mid` | `#C5AEDB` | Structural Borders, Separators |
| `palette.primary` | `#5E1D96` | Secondary Text, Types, Titles |
| `palette.darkest` | `#1C0A36` | Primary Text (Editor Foreground) |
| `accent` | `#9828C9` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#6D28D9` | Word Highlights, Links, Secondary Accent |

### Ocean Family
*Tagline: Clear, cool, modern, and expansive.*

#### HUEFORM Ocean Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#041322` | Primary Canvas (Editor Background) |
| `palette.deep` | `#081F33` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#0E2B45` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#1A4970` | Structural Borders, Separators |
| `palette.primary` | `#52C2F8` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EBF6FC` | Primary Text (Editor Foreground) |
| `accent` | `#14D2E6` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#38BDF8` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Ocean Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#EBF7F9` | Primary Canvas (Editor Background) |
| `palette.surface` | `#D8EDF2` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#C6E3EB` | Panel, Terminal, Status Bar |
| `palette.mid` | `#A4CDD2` | Structural Borders, Separators |
| `palette.primary` | `#02677E` | Secondary Text, Types, Titles |
| `palette.darkest` | `#021A26` | Primary Text (Editor Foreground) |
| `accent` | `#0284C7` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#047A8A` | Word Highlights, Links, Secondary Accent |

### Ember Family
*Tagline: Warm, energetic, bold, and focused.*

#### HUEFORM Ember Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#140A06` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1F0F09` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#2A160D` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#4B2718` | Structural Borders, Separators |
| `palette.primary` | `#FDB56C` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FFF3EB` | Primary Text (Editor Foreground) |
| `accent` | `#FA741B` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#F59E0B` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Ember Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FAF3EC` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F2E6DA` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E7D6C6` | Panel, Terminal, Status Bar |
| `palette.mid` | `#CFB7A0` | Structural Borders, Separators |
| `palette.primary` | `#8F3008` | Secondary Text, Types, Titles |
| `palette.darkest` | `#2B0F05` | Primary Text (Editor Foreground) |
| `accent` | `#BD3900` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#9E2E02` | Word Highlights, Links, Secondary Accent |

### Lavender Family
*Tagline: Elegant, gentle, creative, and soothing.*

#### HUEFORM Lavender Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#0B0819` | Primary Canvas (Editor Background) |
| `palette.deep` | `#120E25` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#191433` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#30275C` | Structural Borders, Separators |
| `palette.primary` | `#B8A8F8` | Secondary Text, Types, Titles |
| `palette.lightest` | `#F6F4FD` | Primary Text (Editor Foreground) |
| `accent` | `#9B8AFB` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#C4B5FD` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Lavender Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#F4F5FB` | Primary Canvas (Editor Background) |
| `palette.surface` | `#E6E8F6` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#D7DAED` | Panel, Terminal, Status Bar |
| `palette.mid` | `#B6BCDF` | Structural Borders, Separators |
| `palette.primary` | `#4338CA` | Secondary Text, Types, Titles |
| `palette.darkest` | `#121636` | Primary Text (Editor Foreground) |
| `accent` | `#4F46E5` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#4338CA` | Word Highlights, Links, Secondary Accent |

### Blossom Family
*Tagline: Vibrant, floral, playful, and harmonious.*

#### HUEFORM Blossom Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#140711` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1E0C1B` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#291125` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#4D2045` | Structural Borders, Separators |
| `palette.primary` | `#F8A4CE` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FDF1F6` | Primary Text (Editor Foreground) |
| `accent` | `#E94090` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#FB7185` | Word Highlights, Links, Secondary Accent |

#### HUEFORM Blossom Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FCF3F2` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F6E6E3` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#ECD6D1` | Panel, Terminal, Status Bar |
| `palette.mid` | `#DAB9B2` | Structural Borders, Separators |
| `palette.primary` | `#7A1A40` | Secondary Text, Types, Titles |
| `palette.darkest` | `#2B0D18` | Primary Text (Editor Foreground) |
| `accent` | `#C41C5E` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#A3164D` | Word Highlights, Links, Secondary Accent |

---

## 3. WCAG AA Contrast Audit Summary

| Theme Name | Editor Bg | Editor Fg | Ratio | WCAG Grade | Sidebar Ratio | Panel Ratio |
|---|---|---|---|---|---|---|
| **HUEFORM — Abyss Dark** | `#040D14` | `#D5E4EC` | **15.04:1** | AAA | 13.96:1 | 12.62:1 |
| **HUEFORM — Abyss Light** | `#EFF2F5` | `#071720` | **16.22:1** | AAA | 14.36:1 | 12.64:1 |
| **HUEFORM — Nocturne Dark** | `#0A0912` | `#EFEBF7` | **16.87:1** | AAA | 15.97:1 | 14.95:1 |
| **HUEFORM — Nocturne Light** | `#F6F5F9` | `#1A132B` | **16.51:1** | AAA | 15.07:1 | 13.56:1 |
| **HUEFORM — Sakura Dark** | `#130E12` | `#FBF0F3` | **17.16:1** | AAA | 16.03:1 | 14.73:1 |
| **HUEFORM — Sakura Light** | `#FAF5F6` | `#261219` | **16.45:1** | AAA | 14.97:1 | 13.27:1 |
| **HUEFORM — Umber Dark** | `#130F0B` | `#FAF3EC` | **17.35:1** | AAA | 16.25:1 | 14.74:1 |
| **HUEFORM — Umber Light** | `#FAF7F2` | `#24180E` | **16.21:1** | AAA | 14.48:1 | 12.76:1 |
| **HUEFORM — Midnight Dark** | `#070B16` | `#EBF2FC` | **17.44:1** | AAA | 16.28:1 | 14.65:1 |
| **HUEFORM — Midnight Light** | `#F3F6FA` | `#09162D` | **16.64:1** | AAA | 15.15:1 | 13.72:1 |
| **HUEFORM — Forest Dark** | `#07120C` | `#EEF7F2` | **17.46:1** | AAA | 15.85:1 | 13.80:1 |
| **HUEFORM — Forest Light** | `#F3F7F4` | `#0A2413` | **15.24:1** | AAA | 14.03:1 | 12.65:1 |
| **HUEFORM — Nebula Dark** | `#0B0618` | `#F7EEFF` | **17.68:1** | AAA | 16.65:1 | 15.48:1 |
| **HUEFORM — Nebula Light** | `#F7F4FB` | `#1C0A36` | **16.83:1** | AAA | 14.96:1 | 12.73:1 |
| **HUEFORM — Ocean Dark** | `#041322` | `#EBF6FC` | **17.05:1** | AAA | 15.25:1 | 13.19:1 |
| **HUEFORM — Ocean Light** | `#EBF7F9` | `#021A26` | **16.30:1** | AAA | 14.70:1 | 13.23:1 |
| **HUEFORM — Ember Dark** | `#140A06` | `#FFF3EB` | **17.91:1** | AAA | 17.05:1 | 15.81:1 |
| **HUEFORM — Ember Light** | `#FAF3EC` | `#2B0F05` | **16.28:1** | AAA | 14.58:1 | 12.64:1 |
| **HUEFORM — Lavender Dark** | `#0B0819` | `#F6F4FD` | **18.13:1** | AAA | 17.29:1 | 16.21:1 |
| **HUEFORM — Lavender Light** | `#F4F5FB` | `#121636` | **16.17:1** | AAA | 14.44:1 | 12.68:1 |
| **HUEFORM — Blossom Dark** | `#140711` | `#FDF1F6` | **17.87:1** | AAA | 16.99:1 | 15.89:1 |
| **HUEFORM — Blossom Light** | `#FCF3F2` | `#2B0D18` | **16.40:1** | AAA | 14.78:1 | 12.87:1 |
