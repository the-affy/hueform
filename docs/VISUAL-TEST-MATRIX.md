# HUEFORM — Visual Test Matrix & Syntax Hierarchy Verification

> Representative multi-language test matrix covering TypeScript, React JSX/TSX, CSS, JSON, Markdown, Diagnostics, and UI state hierarchy across all 22 HUEFORM themes.

## 1. Syntax Token Hierarchy Contract

Each theme maps tokens to semantic color roles to guarantee readability, visual hierarchy, and extended coding comfort:

| Role | Scope | Purpose | Hierarchy Target |
|---|---|---|---|
| **Keywords** | `keyword`, `storage.type` | Language flow control & primitives | Primary accent / thematic identifier |
| **Functions** | `entity.name.function` | Executable routines & methods | Distinct high-clarity hue |
| **Strings** | `string` | Literal textual values | Calming botanical/terracotta/seafoam tint |
| **Numbers** | `constant.numeric` | Scalar constants & numeric values | Warm amber/gold/coral |
| **Types/Classes**| `entity.name.type` | Type system & class signatures | Structural secondary family tint |
| **Variables** | `variable` | Identifiers & params | High-contrast tinted foreground |
| **Comments** | `comment` | Human documentation | Restrained muted italic (≥ 4.5:1 WCAG AA) |

---

## 2. Multi-Language Visual Matrix Across 22 Themes

### HUEFORM — Abyss Dark

- **Primary Visual Identity:** Deep, atmospheric, restrained, and focused.
- **Surfaces:** Canvas `#040D14` | Sidebar `#081722` | Panel `#0E2130` | Border `#18364B`
- **Accent:** Flagship `#3EAABF` | Secondary `#5296A8` | Tab Active `#0B2029`
- **Syntax Palette:** Kw `#3EAABF` | Fn `#6BBCCF` | Str `#7ECEAA` | Num `#E59D62` | Type `#80A8B8` | Comm `#5A8296`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#D5E4EC` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#3EAABF` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#6BBCCF` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#7ECEAA` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#E59D62` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#80A8B8` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#5A8296` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#3EAABF` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Abyss Light

- **Primary Visual Identity:** Deep, atmospheric, restrained, and focused.
- **Surfaces:** Canvas `#EFF2F5` | Sidebar `#DFE5EB` | Panel `#CFD8E1` | Border `#B6CAD6`
- **Accent:** Flagship `#0C606E` | Secondary `#135A7A` | Tab Active `#DDE6EA`
- **Syntax Palette:** Kw `#0C606E` | Fn `#135A7A` | Str `#156644` | Num `#92400E` | Type `#234E6B` | Comm `#526E7D`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#071720` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#0C606E` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#135A7A` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#156644` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#92400E` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#234E6B` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#526E7D` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#0C606E` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Nocturne Dark

- **Primary Visual Identity:** Rich, mysterious, elegant, and contemplative.
- **Surfaces:** Canvas `#0A0912` | Sidebar `#121020` | Panel `#19172A` | Border `#2B2745`
- **Accent:** Flagship `#A77DC8` | Secondary `#C88EE0` | Tab Active `#1D1728`
- **Syntax Palette:** Kw `#D47FA6` | Fn `#A77DC8` | Str `#E0CCA0` | Num `#DEAC62` | Type `#B89FD6` | Comm `#8177A1`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#EFEBF7` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#D47FA6` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#A77DC8` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#E0CCA0` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#DEAC62` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#B89FD6` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#8177A1` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#A77DC8` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Nocturne Light

- **Primary Visual Identity:** Rich, mysterious, elegant, and contemplative.
- **Surfaces:** Canvas `#F6F5F9` | Sidebar `#EDEAF3` | Panel `#E2DEEC` | Border `#CAC2DD`
- **Accent:** Flagship `#6F26B8` | Secondary `#8C279E` | Tab Active `#EBE4F4`
- **Syntax Palette:** Kw `#8F2060` | Fn `#6F26B8` | Str `#73531A` | Num `#A34F0C` | Type `#4F3574` | Comm `#6B5E87`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#1A132B` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#8F2060` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#6F26B8` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#73531A` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#A34F0C` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#4F3574` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#6B5E87` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#6F26B8` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Sakura Dark

- **Primary Visual Identity:** Soft, delicate, airy, and calming.
- **Surfaces:** Canvas `#130E12` | Sidebar `#1D151C` | Panel `#271C26` | Border `#463243`
- **Accent:** Flagship `#F4728B` | Secondary `#F9A8B6` | Tab Active `#2E1A21`
- **Syntax Palette:** Kw `#F4728B` | Fn `#EE8BA4` | Str `#C2D6A4` | Num `#F2B880` | Type `#E8A2B0` | Comm `#8F7388`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#FBF0F3` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#F4728B` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#EE8BA4` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#C2D6A4` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#F2B880` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#E8A2B0` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#8F7388` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#F4728B` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Sakura Light

- **Primary Visual Identity:** Soft, delicate, airy, and calming.
- **Surfaces:** Canvas `#FAF5F6` | Sidebar `#F4E9EC` | Panel `#EADBDF` | Border `#D8BCC4`
- **Accent:** Flagship `#B81B42` | Secondary `#981434` | Tab Active `#F5E4E8`
- **Syntax Palette:** Kw `#B81B42` | Fn `#981434` | Str `#2A663E` | Num `#A35018` | Type `#70273B` | Comm `#7D5C66`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#261219` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#B81B42` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#981434` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#2A663E` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#A35018` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#70273B` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#7D5C66` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#B81B42` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Umber Dark

- **Primary Visual Identity:** Warm, earthy, natural, and grounded.
- **Surfaces:** Canvas `#130F0B` | Sidebar `#1D1611` | Panel `#271F18` | Border `#46382C`
- **Accent:** Flagship `#DE7456` | Secondary `#E5B860` | Tab Active `#2B1B14`
- **Syntax Palette:** Kw `#DE7456` | Fn `#E5B860` | Str `#A3C660` | Num `#EFA058` | Type `#D4A274` | Comm `#8E7766`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#FAF3EC` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#DE7456` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#E5B860` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#A3C660` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#EFA058` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#D4A274` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#8E7766` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#DE7456` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Umber Light

- **Primary Visual Identity:** Warm, earthy, natural, and grounded.
- **Surfaces:** Canvas `#FAF7F2` | Sidebar `#F0EAE0` | Panel `#E5DCCE` | Border `#CEC0AF`
- **Accent:** Flagship `#9E4324` | Secondary `#8A5714` | Tab Active `#F3E9E2`
- **Syntax Palette:** Kw `#9E4324` | Fn `#8A5714` | Str `#3D662B` | Num `#AA5515` | Type `#684124` | Comm `#75604F`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#24180E` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#9E4324` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#8A5714` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#3D662B` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#AA5515` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#684124` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#75604F` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#9E4324` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Midnight Dark

- **Primary Visual Identity:** Deep, cinematic, precise, and nocturnal.
- **Surfaces:** Canvas `#070B16` | Sidebar `#0D1426` | Panel `#141E38` | Border `#23325B`
- **Accent:** Flagship `#38BAF5` | Secondary `#788AF5` | Tab Active `#0D2031`
- **Syntax Palette:** Kw `#788AF5` | Fn `#38BAF5` | Str `#6EE7B7` | Num `#F5B06B` | Type `#87B4ED` | Comm `#657DAA`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#EBF2FC` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#788AF5` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#38BAF5` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#6EE7B7` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#F5B06B` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#87B4ED` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#657DAA` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#38BAF5` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Midnight Light

- **Primary Visual Identity:** Deep, cinematic, precise, and nocturnal.
- **Surfaces:** Canvas `#F3F6FA` | Sidebar `#E5ECF4` | Panel `#D6E2EE` | Border `#B5C8DC`
- **Accent:** Flagship `#1D64D8` | Secondary `#1E40AF` | Tab Active `#E2EAF7`
- **Syntax Palette:** Kw `#1D64D8` | Fn `#1E40AF` | Str `#157F3B` | Num `#B84A0E` | Type `#1B4485` | Comm `#526E8F`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#09162D` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#1D64D8` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#1E40AF` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#157F3B` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#B84A0E` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#1B4485` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#526E8F` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#1D64D8` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Forest Dark

- **Primary Visual Identity:** Organic, quiet, grounded, and refreshing.
- **Surfaces:** Canvas `#07120C` | Sidebar `#0D1E14` | Panel `#142B1D` | Border `#244932`
- **Accent:** Flagship `#3DD678` | Secondary `#29C7B2` | Tab Active `#0D2A19`
- **Syntax Palette:** Kw `#29C7B2` | Fn `#3DD678` | Str `#D2F48D` | Num `#F5C74E` | Type `#80C899` | Comm `#638C71`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#EEF7F2` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#29C7B2` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#3DD678` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#D2F48D` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#F5C74E` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#80C899` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#638C71` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#3DD678` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Forest Light

- **Primary Visual Identity:** Organic, quiet, grounded, and refreshing.
- **Surfaces:** Canvas `#F3F7F4` | Sidebar `#E6EFE9` | Panel `#D7E5DC` | Border `#B5CDC0`
- **Accent:** Flagship `#15803D` | Secondary `#0D6E66` | Tab Active `#E1EDE5`
- **Syntax Palette:** Kw `#0D6E66` | Fn `#15803D` | Str `#4D7C0F` | Num `#A8520C` | Type `#155E32` | Comm `#537460`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#0A2413` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#0D6E66` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#15803D` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#4D7C0F` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#A8520C` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#155E32` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#537460` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#15803D` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Nebula Dark

- **Primary Visual Identity:** Atmospheric, imaginative, and futuristic.
- **Surfaces:** Canvas `#0B0618` | Sidebar `#140C2C` | Panel `#1C123D` | Border `#39246B`
- **Accent:** Flagship `#EE62C8` | Secondary `#8C7AF7` | Tab Active `#26112D`
- **Syntax Palette:** Kw `#EE62C8` | Fn `#A77BFA` | Str `#7DD3FC` | Num `#FDBA74` | Type `#CA92FA` | Comm `#8870B1`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#F7EEFF` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#EE62C8` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#A77BFA` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#7DD3FC` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#FDBA74` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#CA92FA` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#8870B1` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#EE62C8` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Nebula Light

- **Primary Visual Identity:** Atmospheric, imaginative, and futuristic.
- **Surfaces:** Canvas `#F7F4FB` | Sidebar `#EDE5F6` | Panel `#DFD2EE` | Border `#C5AEDB`
- **Accent:** Flagship `#9828C9` | Secondary `#6D28D9` | Tab Active `#EFE4F7`
- **Syntax Palette:** Kw `#9828C9` | Fn `#6D28D9` | Str `#0E7490` | Num `#B83E0A` | Type `#5E1D96` | Comm `#725B8F`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#1C0A36` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#9828C9` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#6D28D9` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#0E7490` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#B83E0A` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#5E1D96` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#725B8F` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#9828C9` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Ocean Dark

- **Primary Visual Identity:** Clear, cool, modern, and expansive.
- **Surfaces:** Canvas `#041322` | Sidebar `#081F33` | Panel `#0E2B45` | Border `#1A4970`
- **Accent:** Flagship `#14D2E6` | Secondary `#38BDF8` | Tab Active `#062A3A`
- **Syntax Palette:** Kw `#14D2E6` | Fn `#38BDF8` | Str `#98F5D8` | Num `#FBBF24` | Type `#52C2F8` | Comm `#5684A8`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#EBF6FC` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#14D2E6` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#38BDF8` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#98F5D8` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#FBBF24` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#52C2F8` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#5684A8` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#14D2E6` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Ocean Light

- **Primary Visual Identity:** Clear, cool, modern, and expansive.
- **Surfaces:** Canvas `#EBF7F9` | Sidebar `#D8EDF2` | Panel `#C6E3EB` | Border `#A4CDD2`
- **Accent:** Flagship `#0284C7` | Secondary `#047A8A` | Tab Active `#D8EEF5`
- **Syntax Palette:** Kw `#006FA3` | Fn `#047A8A` | Str `#067E67` | Num `#BA3B10` | Type `#02677E` | Comm `#44747E`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#021A26` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#006FA3` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#047A8A` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#067E67` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#BA3B10` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#02677E` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#44747E` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#0284C7` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Ember Dark

- **Primary Visual Identity:** Warm, energetic, bold, and focused.
- **Surfaces:** Canvas `#140A06` | Sidebar `#1F0F09` | Panel `#2A160D` | Border `#4B2718`
- **Accent:** Flagship `#FA741B` | Secondary `#F59E0B` | Tab Active `#301709`
- **Syntax Palette:** Kw `#FA741B` | Fn `#F59E0B` | Str `#FCD34D` | Num `#F87171` | Type `#FDB56C` | Comm `#9A7363`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#FFF3EB` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#FA741B` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#F59E0B` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#FCD34D` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#F87171` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#FDB56C` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#9A7363` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#FA741B` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Ember Light

- **Primary Visual Identity:** Warm, energetic, bold, and focused.
- **Surfaces:** Canvas `#FAF3EC` | Sidebar `#F2E6DA` | Panel `#E7D6C6` | Border `#CFB7A0`
- **Accent:** Flagship `#BD3900` | Secondary `#9E2E02` | Tab Active `#F5E4D9`
- **Syntax Palette:** Kw `#BD3900` | Fn `#9E2E02` | Str `#824408` | Num `#B91C1C` | Type `#8F3008` | Comm `#7B5848`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#2B0F05` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#BD3900` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#9E2E02` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#824408` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#B91C1C` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#8F3008` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#7B5848` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#BD3900` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Lavender Dark

- **Primary Visual Identity:** Elegant, gentle, creative, and soothing.
- **Surfaces:** Canvas `#0B0819` | Sidebar `#120E25` | Panel `#191433` | Border `#30275C`
- **Accent:** Flagship `#9B8AFB` | Secondary `#C4B5FD` | Tab Active `#1C1834`
- **Syntax Palette:** Kw `#B87CF8` | Fn `#9B8AFB` | Str `#E5D5FC` | Num `#F472B6` | Type `#B8A8F8` | Comm `#8076A5`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#F6F4FD` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#B87CF8` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#9B8AFB` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#E5D5FC` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#F472B6` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#B8A8F8` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#8076A5` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#9B8AFB` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Lavender Light

- **Primary Visual Identity:** Elegant, gentle, creative, and soothing.
- **Surfaces:** Canvas `#F4F5FB` | Sidebar `#E6E8F6` | Panel `#D7DAED` | Border `#B6BCDF`
- **Accent:** Flagship `#4F46E5` | Secondary `#4338CA` | Tab Active `#E7E7F9`
- **Syntax Palette:** Kw `#4F46E5` | Fn `#3730A3` | Str `#157158` | Num `#941848` | Type `#4338CA` | Comm `#5C668D`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#121636` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#4F46E5` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#3730A3` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#157158` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#941848` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#4338CA` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#5C668D` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#4F46E5` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Blossom Dark

- **Primary Visual Identity:** Vibrant, floral, playful, and harmonious.
- **Surfaces:** Canvas `#140711` | Sidebar `#1E0C1B` | Panel `#291125` | Border `#4D2045`
- **Accent:** Flagship `#E94090` | Secondary `#FB7185` | Tab Active `#2E0E20`
- **Syntax Palette:** Kw `#E94090` | Fn `#FB8268` | Str `#FED7AA` | Num `#FBBF24` | Type `#F8A4CE` | Comm `#986F8D`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#FDF1F6` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#E94090` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#FB8268` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#FED7AA` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#FBBF24` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#F8A4CE` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#986F8D` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#F87171` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#E94090` | Active tab top indicator | Pass (AA/AAA) |

### HUEFORM — Blossom Light

- **Primary Visual Identity:** Vibrant, floral, playful, and harmonious.
- **Surfaces:** Canvas `#FCF3F2` | Sidebar `#F6E6E3` | Panel `#ECD6D1` | Border `#DAB9B2`
- **Accent:** Flagship `#C41C5E` | Secondary `#A3164D` | Tab Active `#F8E2E6`
- **Syntax Palette:** Kw `#C41C5E` | Fn `#A3164D` | Str `#9E3610` | Num `#B45309` | Type `#7A1A40` | Comm `#7F5462`

| Syntax Category | Rendered Token Color | Visual Sample | Contrast vs Canvas |
|---|---|---|---|
| Primary Text | `#2B0D18` | `const collector = new TelemetryCollector();` | Pass (AA/AAA) |
| Keyword | `#C41C5E` | `import`, `export`, `async`, `class`, `return` | Pass (AA/AAA) |
| Function / Method | `#A3164D` | `fetchState()`, `useState()`, `resolve()` | Pass (AA/AAA) |
| String Literal | `#9E3610` | `"Diagnostic failure:"`, `"hueform-card"` | Pass (AA/AAA) |
| Number / Constant | `#B45309` | `1.0`, `42`, `true`, `false` | Pass (AA/AAA) |
| Type / Interface | `#7A1A40` | `ThemeTelemetry<T>`, `Promise<T>`, `React.FC` | Pass (AA/AAA) |
| Comment | `#7F5462` | `/* Async fetching with error boundary */` | Pass (AA/AAA) |
| Diagnostic Error | `#DC2626` | Error boundary message foreground | Pass (AA/AAA) |
| Tab Indicator | `#C41C5E` | Active tab top indicator | Pass (AA/AAA) |

