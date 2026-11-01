# SONDER — Semantic Palette & Adaptive Surface Mapping

> *"Every theme has a character of its own."*

This document provides the exact source-of-truth semantic palette mapping and contrast verification for all 22 SONDER themes across both Dark and Light modes.

## 1. Architectural Hierarchy Principles

### Dark Themes
- **Editor Background (`editor.background`):** Assigned to `palette.darkest` — the deepest, most immersive layer.
- **Sidebar Background (`sideBar.background`):** Assigned to `palette.deep` — second deepest with clear perceptual separation.
- **Panel & Status Bar (`panel.background`, `statusBar.background`):** Assigned to `palette.surface` — third deepest supporting layer.
- **Active Tab (`tab.activeBackground`):** Seamlessly matches `palette.darkest` (`editor.background`).
- **Inactive Tab (`tab.inactiveBackground`):** Recedes into `palette.deep` with sidebar.

### Light Themes
- **Editor Background (`editor.background`):** Assigned to `palette.lightest` — clean, pristine canvas (`#FFFFFF`).
- **Sidebar Background (`sideBar.background`):** Assigned to `palette.surface` — second lightest, subtle paper tone.
- **Panel & Status Bar (`panel.background`, `statusBar.background`):** Assigned to `palette.deep` — third lightest, supporting ground.
- **Active Tab (`tab.activeBackground`):** Seamlessly matches `palette.lightest` (`editor.background`).
- **Inactive Tab (`tab.inactiveBackground`):** Recedes into `palette.surface` with sidebar.

---

## 2. Palette Definitions by Theme Family

### Abyss Family
*Tagline: Deep, atmospheric, restrained, and focused.*

#### SONDER Abyss Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#051017` | Primary Canvas (Editor Background) |
| `palette.deep` | `#0A1C27` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#102634` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#1E3F54` | Structural Borders, Separators |
| `palette.primary` | `#88B7C7` | Secondary Text, Types, Titles |
| `palette.lightest` | `#DCE9ED` | Primary Text (Editor Foreground) |
| `accent` | `#52C5D6` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#4E9AB5` | Word Highlights, Links, Secondary Accent |

#### SONDER Abyss Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F1F5F8` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E3ECF1` | Panel, Terminal, Status Bar |
| `palette.mid` | `#C6D7E1` | Structural Borders, Separators |
| `palette.primary` | `#23495D` | Secondary Text, Types, Titles |
| `palette.darkest` | `#0B1E29` | Primary Text (Editor Foreground) |
| `accent` | `#0A7D92` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#1B647A` | Word Highlights, Links, Secondary Accent |

### Nocturne Family
*Tagline: Rich, mysterious, elegant, and contemplative.*

#### SONDER Nocturne Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#0A0914` | Primary Canvas (Editor Background) |
| `palette.deep` | `#121024` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#1A1733` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#2E2954` | Structural Borders, Separators |
| `palette.primary` | `#C4A5E8` | Secondary Text, Types, Titles |
| `palette.lightest` | `#F2EDFB` | Primary Text (Editor Foreground) |
| `accent` | `#B37DD3` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#E879F9` | Word Highlights, Links, Secondary Accent |

#### SONDER Nocturne Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F5F3FA` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#EBE6F5` | Panel, Terminal, Status Bar |
| `palette.mid` | `#D4C8EB` | Structural Borders, Separators |
| `palette.primary` | `#4D297A` | Secondary Text, Types, Titles |
| `palette.darkest` | `#1B1231` | Primary Text (Editor Foreground) |
| `accent` | `#7E22CE` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#A21CAF` | Word Highlights, Links, Secondary Accent |

### Sakura Family
*Tagline: Soft, delicate, airy, and calming.*

#### SONDER Sakura Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#120E12` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1A141A` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#251C26` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#443245` | Structural Borders, Separators |
| `palette.primary` | `#F4A4AF` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FDF0F3` | Primary Text (Editor Foreground) |
| `accent` | `#FB7185` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#FDA4AF` | Word Highlights, Links, Secondary Accent |

#### SONDER Sakura Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#FDF5F6` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#F8E9EB` | Panel, Terminal, Status Bar |
| `palette.mid` | `#E9CAD0` | Structural Borders, Separators |
| `palette.primary` | `#6E2838` | Secondary Text, Types, Titles |
| `palette.darkest` | `#241217` | Primary Text (Editor Foreground) |
| `accent` | `#BE123C` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#9F1239` | Word Highlights, Links, Secondary Accent |

### Umber Family
*Tagline: Warm, earthy, natural, and grounded.*

#### SONDER Umber Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#120E0B` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1C1510` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#271E18` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#47372D` | Structural Borders, Separators |
| `palette.primary` | `#D4A373` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FDF8F3` | Primary Text (Editor Foreground) |
| `accent` | `#E07A5F` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#E9C46A` | Word Highlights, Links, Secondary Accent |

#### SONDER Umber Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#FAF6F0` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#F2EAE0` | Panel, Terminal, Status Bar |
| `palette.mid` | `#DFCFC1` | Structural Borders, Separators |
| `palette.primary` | `#634027` | Secondary Text, Types, Titles |
| `palette.darkest` | `#26180E` | Primary Text (Editor Foreground) |
| `accent` | `#A74B2A` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#8B4513` | Word Highlights, Links, Secondary Accent |

### Midnight Family
*Tagline: Deep, cinematic, precise, and nocturnal.*

#### SONDER Midnight Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#060A13` | Primary Canvas (Editor Background) |
| `palette.deep` | `#0C1224` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#131B34` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#222E54` | Structural Borders, Separators |
| `palette.primary` | `#85B5F2` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EBF2FA` | Primary Text (Editor Foreground) |
| `accent` | `#38BDF8` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#818CF8` | Word Highlights, Links, Secondary Accent |

#### SONDER Midnight Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F2F5F9` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E4EBF4` | Panel, Terminal, Status Bar |
| `palette.mid` | `#C6D4E5` | Structural Borders, Separators |
| `palette.primary` | `#1E3A8A` | Secondary Text, Types, Titles |
| `palette.darkest` | `#0A142F` | Primary Text (Editor Foreground) |
| `accent` | `#0284C7` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#2563EB` | Word Highlights, Links, Secondary Accent |

### Forest Family
*Tagline: Organic, quiet, grounded, and refreshing.*

#### SONDER Forest Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#08120C` | Primary Canvas (Editor Background) |
| `palette.deep` | `#0E1C14` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#16281D` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#284432` | Structural Borders, Separators |
| `palette.primary` | `#88CDA0` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EDF7F1` | Primary Text (Editor Foreground) |
| `accent` | `#4ADE80` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#2DD4BF` | Word Highlights, Links, Secondary Accent |

#### SONDER Forest Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F2F7F4` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E4EFE8` | Panel, Terminal, Status Bar |
| `palette.mid` | `#C3D8CB` | Structural Borders, Separators |
| `palette.primary` | `#166534` | Secondary Text, Types, Titles |
| `palette.darkest` | `#0B2514` | Primary Text (Editor Foreground) |
| `accent` | `#15803D` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#0F766E` | Word Highlights, Links, Secondary Accent |

### Nebula Family
*Tagline: Atmospheric, imaginative, and futuristic.*

#### SONDER Nebula Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#0B0716` | Primary Canvas (Editor Background) |
| `palette.deep` | `#130D25` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#1C1336` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#372562` | Structural Borders, Separators |
| `palette.primary` | `#C58AFE` | Secondary Text, Types, Titles |
| `palette.lightest` | `#F6EEFF` | Primary Text (Editor Foreground) |
| `accent` | `#E879F9` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#818CF8` | Word Highlights, Links, Secondary Accent |

#### SONDER Nebula Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F7F3FC` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#EFE8F9` | Panel, Terminal, Status Bar |
| `palette.mid` | `#D6C5F0` | Structural Borders, Separators |
| `palette.primary` | `#581C87` | Secondary Text, Types, Titles |
| `palette.darkest` | `#1E0A3C` | Primary Text (Editor Foreground) |
| `accent` | `#9333EA` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#7C3AED` | Word Highlights, Links, Secondary Accent |

### Ocean Family
*Tagline: Clear, cool, modern, and expansive.*

#### SONDER Ocean Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#05121D` | Primary Canvas (Editor Background) |
| `palette.deep` | `#0A1C2B` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#10283D` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#1D4262` | Structural Borders, Separators |
| `palette.primary` | `#60C5F8` | Secondary Text, Types, Titles |
| `palette.lightest` | `#EBF5FA` | Primary Text (Editor Foreground) |
| `accent` | `#22D3EE` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#38BDF8` | Word Highlights, Links, Secondary Accent |

#### SONDER Ocean Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F0F6FA` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#E2EFF6` | Panel, Terminal, Status Bar |
| `palette.mid` | `#BFDCEB` | Structural Borders, Separators |
| `palette.primary` | `#0369A1` | Secondary Text, Types, Titles |
| `palette.darkest` | `#06253B` | Primary Text (Editor Foreground) |
| `accent` | `#0284C7` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#0891B2` | Word Highlights, Links, Secondary Accent |

### Ember Family
*Tagline: Warm, energetic, bold, and focused.*

#### SONDER Ember Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#140A07` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1C0F0A` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#271610` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#48281C` | Structural Borders, Separators |
| `palette.primary` | `#FDBA74` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FFF3ED` | Primary Text (Editor Foreground) |
| `accent` | `#F97316` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#FBBF24` | Word Highlights, Links, Secondary Accent |

#### SONDER Ember Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#FCF6F2` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#F7ECE4` | Panel, Terminal, Status Bar |
| `palette.mid` | `#E8D2C2` | Structural Borders, Separators |
| `palette.primary` | `#9A3412` | Secondary Text, Types, Titles |
| `palette.darkest` | `#2E1208` | Primary Text (Editor Foreground) |
| `accent` | `#EA580C` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#C2410C` | Word Highlights, Links, Secondary Accent |

### Lavender Family
*Tagline: Elegant, gentle, creative, and soothing.*

#### SONDER Lavender Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#0C081A` | Primary Canvas (Editor Background) |
| `palette.deep` | `#130D29` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#1B1339` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#322366` | Structural Borders, Separators |
| `palette.primary` | `#C9BAFE` | Secondary Text, Types, Titles |
| `palette.lightest` | `#F6F3FE` | Primary Text (Editor Foreground) |
| `accent` | `#A78BFA` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#DDD6FE` | Word Highlights, Links, Secondary Accent |

#### SONDER Lavender Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#F6F4FB` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#EEE9F7` | Panel, Terminal, Status Bar |
| `palette.mid` | `#D4C9EB` | Structural Borders, Separators |
| `palette.primary` | `#5B21B6` | Secondary Text, Types, Titles |
| `palette.darkest` | `#1D0B38` | Primary Text (Editor Foreground) |
| `accent` | `#7C3AED` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#6D28D9` | Word Highlights, Links, Secondary Accent |

### Blossom Family
*Tagline: Vibrant, floral, playful, and harmonious.*

#### SONDER Blossom Dark

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.darkest` | `#130810` | Primary Canvas (Editor Background) |
| `palette.deep` | `#1C0D18` | Sidebar, Inactive Tabs, Input Box |
| `palette.surface` | `#271322` | Panel, Terminal, Status Bar, Popups |
| `palette.mid` | `#4A203F` | Structural Borders, Separators |
| `palette.primary` | `#F9A8D4` | Secondary Text, Types, Titles |
| `palette.lightest` | `#FDF2F7` | Primary Text (Editor Foreground) |
| `accent` | `#EC4899` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#F43F5E` | Word Highlights, Links, Secondary Accent |

#### SONDER Blossom Light

| Semantic Role | Hex | Intended Purpose |
|---|---|---|
| `palette.lightest` | `#FFFFFF` | Primary Canvas (Editor Background) |
| `palette.surface` | `#FDF4F8` | Sidebar, Inactive Tabs, Popups |
| `palette.deep` | `#F8E7F0` | Panel, Terminal, Status Bar |
| `palette.mid` | `#EBC8DD` | Structural Borders, Separators |
| `palette.primary` | `#831843` | Secondary Text, Types, Titles |
| `palette.darkest` | `#2C081E` | Primary Text (Editor Foreground) |
| `accent` | `#DB2777` | Primary Accent, Cursor, Active Indicators |
| `accentSecondary` | `#BE185D` | Word Highlights, Links, Secondary Accent |

---

## 3. WCAG AA Contrast Audit Summary

| Theme Name | Editor Bg | Editor Fg | Ratio | WCAG Grade | Sidebar Ratio | Panel Ratio |
|---|---|---|---|---|---|---|
| **SONDER — Abyss Dark** | `#051017` | `#DCE9ED` | **15.48:1** | AAA | 14.00:1 | 12.55:1 |
| **SONDER — Abyss Light** | `#FFFFFF` | `#0B1E29` | **17.05:1** | AAA | 15.55:1 | 14.23:1 |
| **SONDER — Nocturne Dark** | `#0A0914` | `#F2EDFB` | **17.21:1** | AAA | 16.25:1 | 15.06:1 |
| **SONDER — Nocturne Light** | `#FFFFFF` | `#1B1231` | **17.83:1** | AAA | 16.21:1 | 14.58:1 |
| **SONDER — Sakura Dark** | `#120E12` | `#FDF0F3` | **17.26:1** | AAA | 16.34:1 | 14.88:1 |
| **SONDER — Sakura Light** | `#FFFFFF` | `#241217` | **17.89:1** | AAA | 16.67:1 | 15.20:1 |
| **SONDER — Umber Dark** | `#120E0B` | `#FDF8F3` | **18.20:1** | AAA | 17.09:1 | 15.48:1 |
| **SONDER — Umber Light** | `#FFFFFF` | `#26180E` | **17.22:1** | AAA | 16.00:1 | 14.45:1 |
| **SONDER — Midnight Dark** | `#060A13` | `#EBF2FA` | **17.55:1** | AAA | 16.51:1 | 15.08:1 |
| **SONDER — Midnight Light** | `#FFFFFF` | `#0A142F` | **18.20:1** | AAA | 16.64:1 | 15.15:1 |
| **SONDER — Forest Dark** | `#08120C` | `#EDF7F1` | **17.40:1** | AAA | 16.05:1 | 14.15:1 |
| **SONDER — Forest Light** | `#FFFFFF` | `#0B2514` | **16.29:1** | AAA | 15.04:1 | 13.82:1 |
| **SONDER — Nebula Dark** | `#0B0716` | `#F6EEFF` | **17.60:1** | AAA | 16.72:1 | 15.55:1 |
| **SONDER — Nebula Light** | `#FFFFFF` | `#1E0A3C` | **18.04:1** | AAA | 16.48:1 | 15.11:1 |
| **SONDER — Ocean Dark** | `#05121D` | `#EBF5FA` | **17.08:1** | AAA | 15.63:1 | 13.62:1 |
| **SONDER — Ocean Light** | `#FFFFFF` | `#06253B` | **15.72:1** | AAA | 14.43:1 | 13.41:1 |
| **SONDER — Ember Dark** | `#140A07` | `#FFF3ED` | **17.93:1** | AAA | 17.20:1 | 15.97:1 |
| **SONDER — Ember Light** | `#FFFFFF` | `#2E1208` | **17.41:1** | AAA | 16.25:1 | 14.98:1 |
| **SONDER — Lavender Dark** | `#0C081A` | `#F6F3FE` | **18.00:1** | AAA | 17.16:1 | 15.99:1 |
| **SONDER — Lavender Light** | `#FFFFFF` | `#1D0B38` | **18.15:1** | AAA | 16.64:1 | 15.24:1 |
| **SONDER — Blossom Dark** | `#130810` | `#FDF2F7` | **17.96:1** | AAA | 17.16:1 | 15.98:1 |
| **SONDER — Blossom Light** | `#FFFFFF` | `#2C081E` | **18.09:1** | AAA | 16.78:1 | 15.23:1 |
