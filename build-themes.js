/**
 * SONDER Theme Collection Generator
 * Produces 22 production-quality VS Code themes (11 Dark, 11 Light)
 * powered by the SONDER Adaptive Theme Surface & Dynamic Tab System.
 */

const fs = require('fs');
const path = require('path');
const { PALETTE_DEFINITIONS } = require('./themes/palette-system');
const {
  adjustLightness,
  adjustSaturation,
  mix,
  withAlpha,
  contrastRatio
} = require('./themes/color-utils');

/**
 * Derive surface and tab hierarchy for a theme variant:
 * Dark:
 *   editor.background  = darkest (primary canvas)
 *   sideBar.background = deep (2nd darkest, clear boundary)
 *   panel.background   = surface (3rd darkest, bottom supporting layer)
 *   tab.activeBackground = darkest + 12% accent tint (theme-colored active tab)
 *   tab.inactiveBackground = deep (recedes with sidebar)
 * 
 * Light:
 *   editor.background  = lightest (pure canvas/paper)
 *   sideBar.background = surface (2nd lightest, subtle paper tone)
 *   panel.background   = deep (3rd lightest, supporting layer)
 *   tab.activeBackground = var(--color-accent) + 8% accent tint (soft theme-colored active tab)
 *   tab.inactiveBackground = surface (recedes with sidebar)
 */
function deriveSurfaces(themeDef, isDark) {
  const p = themeDef.palette;
  const accent = themeDef.accent;

  if (isDark) {
    const editorBg = p.darkest;
    const sidebarBg = p.deep;
    const panelBg = p.surface;
    const statusBarBg = p.surface;
    const tabsHeaderBg = p.deep;

    // Dynamic Tab Colors (Dark mode)
    const tabActiveBg = mix(p.darkest, accent, 0.12);
    const tabInactiveBg = p.deep;
    const tabHoverBg = mix(p.deep, accent, 0.16);
    const tabUnfocusedActiveBg = mix(tabActiveBg, p.darkest, 0.4);

    return {
      editorBg,
      sidebarBg,
      panelBg,
      statusBarBg,
      tabsHeaderBg,
      tabActiveBg,
      tabInactiveBg,
      tabHoverBg,
      tabUnfocusedActiveBg,
      hoverBg: mix(p.deep, p.mid, 0.4),
      activeBg: mix(p.deep, p.mid, 0.75),
      inputBg: p.deep,
      popupBg: p.surface,
      border: p.mid,
      borderSubtle: mix(p.deep, p.mid, 0.35)
    };
  } else {
    const editorBg = p.lightest;
    const sidebarBg = p.surface;
    const panelBg = p.deep;
    const statusBarBg = p.deep;
    const tabsHeaderBg = p.surface;

    // Dynamic Tab Colors (Light mode)
    const tabActiveBg = mix(p.lightest, accent, 0.08);
    const tabInactiveBg = p.surface;
    const tabHoverBg = mix(p.surface, accent, 0.14);
    const tabUnfocusedActiveBg = mix(tabActiveBg, p.surface, 0.5);

    return {
      editorBg,
      sidebarBg,
      panelBg,
      statusBarBg,
      tabsHeaderBg,
      tabActiveBg,
      tabInactiveBg,
      tabHoverBg,
      tabUnfocusedActiveBg,
      hoverBg: mix(p.surface, p.deep, 0.5),
      activeBg: mix(p.surface, p.deep, 0.9),
      inputBg: p.lightest,
      popupBg: p.surface,
      border: p.mid,
      borderSubtle: mix(p.surface, p.mid, 0.35)
    };
  }
}

/**
 * Derive accent states dynamically from the theme's core accent
 */
function deriveAccentStates(accent, accentSecondary, isDark) {
  return {
    accent,
    accentSecondary,
    accentHover: adjustLightness(accent, isDark ? 0.08 : -0.08),
    accentActive: adjustLightness(accent, isDark ? 0.15 : -0.15),
    accentMuted: adjustSaturation(accent, -0.2),
    focusBorder: withAlpha(accent, '88'),
    selectionBg: withAlpha(accent, isDark ? '38' : '2A'),
    selectionHighlightBg: withAlpha(accent, isDark ? '20' : '18'),
    wordHighlightBg: withAlpha(accentSecondary, isDark ? '26' : '1E'),
    findMatchBg: withAlpha(accent, '50'),
    findMatchHighlightBg: withAlpha(accent, '26'),
    activeItemBg: withAlpha(accent, isDark ? '2A' : '20'),
    hoverItemBg: withAlpha(accent, isDark ? '18' : '12')
  };
}

/**
 * Generate full VS Code Theme JSON for a specific family and variant
 */
function generateThemeJson(family, variant) {
  const isDark = variant === 'dark';
  const themeDef = isDark ? family.dark : family.light;
  const p = themeDef.palette;
  const s = deriveSurfaces(themeDef, isDark);
  const a = deriveAccentStates(themeDef.accent, themeDef.accentSecondary, isDark);
  const syn = themeDef.syntax;
  const term = themeDef.terminal;

  const fg = isDark ? p.lightest : p.darkest;
  const fgMuted = p.primary;
  const fgSubtle = isDark ? adjustLightness(p.primary, -0.2) : adjustLightness(p.primary, 0.2);

  const fullName = `SONDER — ${family.name} ${isDark ? 'Dark' : 'Light'}`;

  return {
    name: fullName,
    $schema: 'vscode://schemas/color-theme',
    type: isDark ? 'dark' : 'light',
    semanticHighlighting: true,
    semanticTokenColors: {
      variable: syn.var,
      'variable.readonly': syn.const,
      'variable.defaultLibrary': syn.kw,
      parameter: syn.var,
      property: syn.prop,
      'property.readonly': syn.const,
      enumMember: syn.const,
      function: syn.fn,
      method: syn.fn,
      class: syn.type,
      interface: syn.type,
      type: syn.type,
      typeParameter: syn.type,
      namespace: syn.type,
      enum: syn.type,
      struct: syn.type,
      decorator: syn.fn,
      event: syn.kw,
      keyword: syn.kw,
      modifier: syn.kw,
      string: syn.str,
      number: syn.num,
      regexp: syn.str,
      operator: syn.op,
      comment: syn.comm,
      macro: syn.fn
    },
    colors: {
      // Base
      focusBorder: a.focusBorder,
      foreground: fg,
      disabledForeground: withAlpha(fgSubtle, '99'),
      'widget.shadow': isDark ? 'var(--color-accent)66' : '#00000018',
      'widget.border': s.border,
      'selection.background': a.selectionBg,
      descriptionForeground: fgMuted,
      errorForeground: isDark ? '#F87171' : '#DC2626',
      'icon.foreground': fgMuted,

      // Window & TitleBar
      'window.activeBorder': s.border,
      'window.inactiveBorder': s.borderSubtle,
      'titleBar.activeBackground': s.sidebarBg,
      'titleBar.activeForeground': fg,
      'titleBar.inactiveBackground': s.sidebarBg,
      'titleBar.inactiveForeground': fgMuted,
      'titleBar.border': s.border,

      // Activity Bar
      'activityBar.background': s.sidebarBg,
      'activityBar.foreground': a.accent,
      'activityBar.inactiveForeground': withAlpha(fgMuted, '88'),
      'activityBar.border': s.border,
      'activityBar.activeBorder': a.accent,
      'activityBarBadge.background': a.accent,
      'activityBarBadge.foreground': isDark ? '#000000' : '#FFFFFF',

      // Side Bar
      'sideBar.background': s.sidebarBg,
      'sideBar.foreground': fg,
      'sideBar.border': s.border,
      'sideBarTitle.foreground': fgMuted,
      'sideBarSectionHeader.background': s.sidebarBg,
      'sideBarSectionHeader.foreground': fg,
      'sideBarSectionHeader.border': s.border,

      // Lists & Trees
      'list.activeSelectionBackground': a.activeItemBg,
      'list.activeSelectionForeground': fg,
      'list.inactiveSelectionBackground': a.hoverItemBg,
      'list.inactiveSelectionForeground': fg,
      'list.hoverBackground': s.hoverBg,
      'list.hoverForeground': fg,
      'list.focusBackground': a.activeItemBg,
      'list.focusForeground': fg,
      'list.highlightForeground': a.accent,
      'list.dropBackground': withAlpha(a.accent, '22'),
      'tree.indentGuidesStroke': s.borderSubtle,

      // Editor (Darkest in Dark, Lightest in Light)
      'editor.background': s.editorBg,
      'editor.foreground': fg,
      'editorCursor.foreground': a.accent,
      'editorCursor.background': s.editorBg,
      'editor.lineHighlightBackground': isDark ? withAlpha(s.sidebarBg, '55') : withAlpha(s.sidebarBg, '66'),
      'editor.lineHighlightBorder': '#00000000',
      'editor.selectionBackground': a.selectionBg,
      'editor.selectionHighlightBackground': a.selectionHighlightBg,
      'editor.wordHighlightBackground': a.wordHighlightBg,
      'editor.wordHighlightBorder': withAlpha(a.accentSecondary, '66'),
      'editor.findMatchBackground': a.findMatchBg,
      'editor.findMatchHighlightBackground': a.findMatchHighlightBg,
      'editorLineNumber.foreground': withAlpha(fgSubtle, '88'),
      'editorLineNumber.activeForeground': a.accent,
      'editorIndentGuide.background1': s.borderSubtle,
      'editorIndentGuide.activeBackground1': withAlpha(a.accent, '66'),
      'editorWhitespace.foreground': s.borderSubtle,
      'editorRuler.foreground': s.borderSubtle,

      // Bracket Pair Colorization (Theme-driven)
      'editorBracketHighlight.foreground1': a.accent,
      'editorBracketHighlight.foreground2': a.accentSecondary,
      'editorBracketHighlight.foreground3': syn.num,
      'editorBracketHighlight.foreground4': syn.str,
      'editorBracketHighlight.foreground5': syn.kw,
      'editorBracketHighlight.foreground6': syn.type,

      // NEW: Dynamic Theme-Aware Tabs & Editor Groups
      'editorGroupHeader.tabsBackground': s.tabsHeaderBg,
      'editorGroupHeader.tabsBorder': s.border,
      'editorGroupHeader.noTabsBackground': s.tabsHeaderBg,
      'editorGroup.border': s.border,
      'tab.activeBackground': s.tabActiveBg,
      'tab.activeForeground': fg,
      'tab.activeBorderTop': a.accent,
      'tab.activeBorder': '#00000000',
      'tab.inactiveBackground': s.tabInactiveBg,
      'tab.inactiveForeground': fgMuted,
      'tab.border': s.border,
      'tab.hoverBackground': s.tabHoverBg,
      'tab.hoverForeground': fg,
      'tab.selectedBackground': a.selectionBg,
      'tab.selectedForeground': fg,
      'tab.unfocusedActiveBackground': s.tabUnfocusedActiveBg,
      'tab.unfocusedActiveForeground': withAlpha(fg, 'D9'),
      'tab.unfocusedActiveBorderTop': withAlpha(a.accent, '88'),
      'tab.unfocusedActiveBorder': '#00000000',
      'tab.unfocusedInactiveBackground': s.tabInactiveBg,
      'tab.unfocusedInactiveForeground': withAlpha(fgMuted, 'B3'),
      'tab.unfocusedHoverBackground': s.tabHoverBg,
      'tab.unfocusedHoverForeground': fg,
      'tab.lastPinnedBorder': s.border,

      // Panel & Terminal (Supporting layer)
      'panel.background': s.panelBg,
      'panel.border': s.border,
      'panelTitle.activeBorder': a.accent,
      'panelTitle.activeForeground': fg,
      'panelTitle.inactiveForeground': fgMuted,
      'terminal.background': s.panelBg,
      'terminal.foreground': fg,
      'terminal.border': s.border,
      'terminal.ansiBlack': term.black,
      'terminal.ansiRed': term.red,
      'terminal.ansiGreen': term.green,
      'terminal.ansiYellow': term.yellow,
      'terminal.ansiBlue': term.blue,
      'terminal.ansiMagenta': term.magenta,
      'terminal.ansiCyan': term.cyan,
      'terminal.ansiWhite': term.white,

      // Status Bar (Supporting layer)
      'statusBar.background': s.statusBarBg,
      'statusBar.foreground': fgMuted,
      'statusBar.border': s.border,
      'statusBar.debuggingBackground': a.activeItemBg,
      'statusBar.debuggingForeground': fg,
      'statusBar.noFolderBackground': s.statusBarBg,
      'statusBarItem.hoverBackground': a.hoverItemBg,
      'statusBarItem.activeBackground': a.activeItemBg,
      'statusBarItem.prominentBackground': a.accent,
      'statusBarItem.prominentForeground': isDark ? '#000000' : '#FFFFFF',

      // Git Decorations
      'gitDecoration.addedResourceForeground': isDark ? '#4ADE80' : '#16A34A',
      'gitDecoration.modifiedResourceForeground': a.accent,
      'gitDecoration.deletedResourceForeground': isDark ? '#F87171' : '#DC2626',
      'gitDecoration.untrackedResourceForeground': isDark ? '#A7F3D0' : '#059669',
      'gitDecoration.ignoredResourceForeground': withAlpha(fgSubtle, '88'),

      // Diff Editor
      'diffEditor.insertedTextBackground': isDark ? '#4ADE8020' : '#16A34A18',
      'diffEditor.removedTextBackground': isDark ? '#F8717120' : '#DC262618',

      // Inputs, Dropdowns & Quick Pick
      'input.background': s.inputBg,
      'input.foreground': fg,
      'input.border': s.border,
      'input.placeholderForeground': withAlpha(fgSubtle, '99'),
      'dropdown.background': s.popupBg,
      'dropdown.foreground': fg,
      'dropdown.border': s.border,
      'quickInput.background': s.popupBg,
      'quickInput.foreground': fg,
      'pickerGroup.border': s.border,
      'pickerGroup.foreground': a.accent,

      // Notifications & Badges
      'notificationCenter.border': s.border,
      'notificationCenterHeader.background': s.sidebarBg,
      'notificationCenterHeader.foreground': fg,
      'notifications.background': s.popupBg,
      'notifications.foreground': fg,
      'notifications.border': s.border,
      'badge.background': a.accent,
      'badge.foreground': isDark ? '#000000' : '#FFFFFF',

      // Breadcrumbs
      'breadcrumb.background': s.editorBg,
      'breadcrumb.foreground': fgMuted,
      'breadcrumb.focusForeground': fg,
      'breadcrumb.activeSelectionForeground': a.accent
    },
    tokenColors: [
      {
        name: 'Comments',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: { foreground: syn.comm, fontStyle: 'italic' }
      },
      {
        name: 'Keywords & Storage',
        scope: [
          'keyword',
          'storage.type',
          'storage.modifier',
          'keyword.control',
          'keyword.operator.new',
          'keyword.operator.expression'
        ],
        settings: { foreground: syn.kw }
      },
      {
        name: 'Functions & Methods',
        scope: [
          'entity.name.function',
          'meta.function-call',
          'support.function',
          'keyword.other.special-method'
        ],
        settings: { foreground: syn.fn }
      },
      {
        name: 'Strings & Regular Expressions',
        scope: [
          'string',
          'string.quoted',
          'string.template',
          'constant.character.escape',
          'string.regexp'
        ],
        settings: { foreground: syn.str }
      },
      {
        name: 'Numbers & Constants',
        scope: [
          'constant.numeric',
          'constant.language',
          'constant.other',
          'variable.other.constant'
        ],
        settings: { foreground: syn.num }
      },
      {
        name: 'Types, Classes & Interfaces',
        scope: [
          'entity.name.type',
          'entity.name.class',
          'support.class',
          'support.type',
          'entity.other.inherited-class'
        ],
        settings: { foreground: syn.type }
      },
      {
        name: 'Variables & Parameters',
        scope: [
          'variable',
          'variable.parameter',
          'variable.other.readwrite'
        ],
        settings: { foreground: syn.var }
      },
      {
        name: 'Object Properties & Keys',
        scope: [
          'variable.other.property',
          'meta.object-literal.key',
          'support.type.property-name'
        ],
        settings: { foreground: syn.prop }
      },
      {
        name: 'Operators & Punctuation',
        scope: [
          'keyword.operator',
          'punctuation.accessor',
          'punctuation.separator.key-value'
        ],
        settings: { foreground: syn.op }
      },
      {
        name: 'HTML & JSX Tags',
        scope: ['entity.name.tag', 'support.class.component'],
        settings: { foreground: syn.tag }
      },
      {
        name: 'HTML & JSX Attributes',
        scope: ['entity.other.attribute-name'],
        settings: { foreground: syn.attr }
      },
      {
        name: 'CSS Selectors',
        scope: ['entity.name.tag.css', 'entity.other.attribute-name.class.css'],
        settings: { foreground: syn.kw }
      },
      {
        name: 'CSS Properties',
        scope: ['support.type.property-name.css'],
        settings: { foreground: syn.fn }
      },
      {
        name: 'CSS Values',
        scope: ['support.constant.property-value.css'],
        settings: { foreground: syn.str }
      },
      {
        name: 'Markdown Headings',
        scope: ['markup.heading', 'entity.name.section.markdown'],
        settings: { foreground: a.accent, fontStyle: 'bold' }
      },
      {
        name: 'Markdown Code',
        scope: ['markup.inline.raw', 'markup.fenced_code.block.markdown'],
        settings: { foreground: syn.str }
      },
      {
        name: 'Markdown Links',
        scope: ['markup.underline.link'],
        settings: { foreground: a.accentSecondary }
      }
    ]
  };
}

/**
 * Perform a rigorous audit on all critical color combinations
 */
function auditTheme(themeObj, family, variant) {
  const c = themeObj.colors;
  const isDark = variant === 'dark';

  const checks = [
    // Editor
    { scope: 'Editor', item: 'Primary Text', fg: c['editor.foreground'], bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Cursor', fg: c['editorCursor.foreground'], bg: c['editor.background'], min: 3.0 },
    { scope: 'Editor', item: 'Comment', fg: themeObj.semanticTokenColors.comment, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Keyword', fg: themeObj.semanticTokenColors.keyword, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Function', fg: themeObj.semanticTokenColors.function, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Variable', fg: themeObj.semanticTokenColors.variable, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'String', fg: themeObj.semanticTokenColors.string, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Number', fg: themeObj.semanticTokenColors.number, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Type', fg: themeObj.semanticTokenColors.type, bg: c['editor.background'], min: 4.5 },
    { scope: 'Editor', item: 'Operator', fg: themeObj.semanticTokenColors.operator, bg: c['editor.background'], min: 4.5 },
    // Sidebar
    { scope: 'Sidebar', item: 'Primary Text', fg: c['sideBar.foreground'], bg: c['sideBar.background'], min: 4.5 },
    { scope: 'Sidebar', item: 'Title Text', fg: c['sideBarTitle.foreground'], bg: c['sideBar.background'], min: 4.5 },
    { scope: 'Sidebar', item: 'Active Selection', fg: c['list.activeSelectionForeground'], bg: c['sideBar.background'], min: 4.5 },
    { scope: 'Sidebar', item: 'Hover Item', fg: c['list.hoverForeground'], bg: c['list.hoverBackground'], min: 4.5 },
    // Dynamic Tabs
    { scope: 'Tabs', item: 'Active Tab Text', fg: c['tab.activeForeground'], bg: c['tab.activeBackground'], min: 4.5 },
    { scope: 'Tabs', item: 'Inactive Tab Text', fg: c['tab.inactiveForeground'], bg: c['tab.inactiveBackground'], min: 4.5 },
    { scope: 'Tabs', item: 'Tab Hover Text', fg: c['tab.hoverForeground'], bg: c['tab.hoverBackground'], min: 4.5 },
    { scope: 'Tabs', item: 'Active Tab Indicator', fg: c['tab.activeBorderTop'], bg: c['tab.activeBackground'], min: 3.0 },
    // Bottom Panel & Terminal
    { scope: 'Panel', item: 'Panel Active Title', fg: c['panelTitle.activeForeground'], bg: c['panel.background'], min: 4.5 },
    { scope: 'Panel', item: 'Terminal Text', fg: c['terminal.foreground'], bg: c['terminal.background'], min: 4.5 },
    { scope: 'Terminal', item: 'ANSI Red', fg: c['terminal.ansiRed'], bg: c['terminal.background'], min: 4.0 },
    { scope: 'Terminal', item: 'ANSI Green', fg: c['terminal.ansiGreen'], bg: c['terminal.background'], min: 4.0 },
    { scope: 'Terminal', item: 'ANSI Blue', fg: c['terminal.ansiBlue'], bg: c['terminal.background'], min: 4.0 },
    // Status Bar
    { scope: 'Status Bar', item: 'Status Text', fg: c['statusBar.foreground'], bg: c['statusBar.background'], min: 4.5 },
    // Interactive UI
    { scope: 'Interactive', item: 'Input Text', fg: c['input.foreground'], bg: c['input.background'], min: 4.5 },
    { scope: 'Interactive', item: 'Dropdown Text', fg: c['dropdown.foreground'], bg: c['dropdown.background'], min: 4.5 },
    { scope: 'Interactive', item: 'Notification Text', fg: c['notifications.foreground'], bg: c['notifications.background'], min: 4.5 },
    { scope: 'Interactive', item: 'Badge Indicator', fg: c['badge.foreground'], bg: c['badge.background'], min: 3.0 }
  ];

  const results = checks.map(chk => {
    const cleanFg = chk.fg ? chk.fg.slice(0, 7) : '#FFFFFF';
    const cleanBg = chk.bg ? chk.bg.slice(0, 7) : '#000000';
    const ratio = contrastRatio(cleanFg, cleanBg);
    const pass = ratio >= chk.min;
    return {
      scope: chk.scope,
      item: chk.item,
      fg: cleanFg,
      bg: cleanBg,
      ratio: Number(ratio.toFixed(2)),
      minRequired: chk.min,
      status: pass ? 'PASS' : 'FAIL',
      grade: ratio >= 7.0 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3.0 ? 'AA Large' : 'FAIL'
    };
  });

  const allPassed = results.every(r => r.status === 'PASS');
  return {
    themeName: themeObj.name,
    family: family.name,
    variant,
    allPassed,
    results
  };
}

/**
 * Generate human-readable markdown contrast report
 */
function generateMarkdownReport(auditList) {
  let md = `# SONDER — Contrast & Accessibility Verification Report\n\n`;
  md += `> *"Every theme has a character of its own."*\n\n`;
  md += `**Standard:** WCAG 2.2 AA (Normal text ≥ 4.5:1, Large text & UI indicators ≥ 3.0:1)\n\n`;
  md += `**Scope:** All 22 themes across 11 families audited across Editor, Sidebar, Tabs, Bottom Panel, Terminal, Status Bar, and Interactive UI controls.\n\n`;
  md += `## 1. Executive Summary Table\n\n`;
  md += `| Theme Name | Editor | Sidebar | Dynamic Tabs | Panel | Terminal | Status Bar | Overall Status |\n`;
  md += `|---|---|---|---|---|---|---|---|\n`;

  auditList.forEach(a => {
    const edPass = a.results.filter(r => r.scope === 'Editor').every(r => r.status === 'PASS');
    const sbPass = a.results.filter(r => r.scope === 'Sidebar').every(r => r.status === 'PASS');
    const tabPass = a.results.filter(r => r.scope === 'Tabs').every(r => r.status === 'PASS');
    const panPass = a.results.filter(r => r.scope === 'Panel').every(r => r.status === 'PASS');
    const termPass = a.results.filter(r => r.scope === 'Terminal').every(r => r.status === 'PASS');
    const stPass = a.results.filter(r => r.scope === 'Status Bar').every(r => r.status === 'PASS');

    md += `| **${a.themeName}** | ${edPass ? '✅ PASS' : '❌ FAIL'} | ${sbPass ? '✅ PASS' : '❌ FAIL'} | ${tabPass ? '✅ PASS' : '❌ FAIL'} | ${panPass ? '✅ PASS' : '❌ FAIL'} | ${termPass ? '✅ PASS' : '❌ FAIL'} | ${stPass ? '✅ PASS' : '❌ FAIL'} | **${a.allPassed ? '✅ PASS [AA/AAA]' : '❌ FAIL'}** |\n`;
  });

  md += `\n---\n\n`;
  md += `## 2. Granular Token Audit by Theme\n\n`;

  auditList.forEach(a => {
    md += `### ${a.themeName}\n\n`;
    md += `| Scope | UI Element / Token | Foreground | Background | Contrast Ratio | WCAG Grade | Status |\n`;
    md += `|---|---|---|---|---|---|---|\n`;
    a.results.forEach(r => {
      md += `| ${r.scope} | ${r.item} | \`${r.fg}\` | \`${r.bg}\` | **${r.ratio}:1** | ${r.grade} | ${r.status === 'PASS' ? '✅ PASS' : '❌ FAIL'} |\n`;
    });
    md += `\n`;
  });

  return md;
}

/**
 * Generate human-readable palette mapping documentation
 */
function generatePaletteMappingMarkdown(paletteDefs) {
  let md = `# SONDER — Semantic Palette & Adaptive Surface Mapping\n\n`;
  md += `> *"Every theme has a character of its own."*\n\n`;
  md += `This document provides the exact source-of-truth semantic palette mapping and contrast verification for all 22 SONDER themes across both Dark and Light modes.\n\n`;
  md += `## 1. Architectural Hierarchy Principles\n\n`;
  md += `### Dark Themes\n`;
  md += `- **Editor Background (\`editor.background\`):** Assigned to \`palette.darkest\` — the deepest, most immersive layer.\n`;
  md += `- **Sidebar Background (\`sideBar.background\`):** Assigned to \`palette.deep\` — second deepest with clear perceptual separation.\n`;
  md += `- **Panel & Status Bar (\`panel.background\`, \`statusBar.background\`):** Assigned to \`palette.surface\` — third deepest supporting layer.\n`;
  md += `- **Active Tab (\`tab.activeBackground\`):** Harmonized active canvas derived from \`palette.darkest\` tinted with 12% accent.\n`;
  md += `- **Inactive Tab (\`tab.inactiveBackground\`):** Recedes into \`palette.deep\` with sidebar.\n\n`;
  md += `### Light Themes\n`;
  md += `- **Editor Background (\`editor.background\`):** Assigned to \`palette.lightest\` — subtle chromatic paper canvas.\n`;
  md += `- **Sidebar Background (\`sideBar.background\`):** Assigned to \`palette.surface\` — second lightest, subtle paper tone.\n`;
  md += `- **Panel & Status Bar (\`panel.background\`, \`statusBar.background\`):** Assigned to \`palette.deep\` — third lightest, supporting ground.\n`;
  md += `- **Active Tab (\`tab.activeBackground\`):** Harmonized paper canvas derived from \`palette.lightest\` tinted with 8% accent.\n`;
  md += `- **Inactive Tab (\`tab.inactiveBackground\`):** Recedes into \`palette.surface\` with sidebar.\n\n`;
  md += `---\n\n`;
  md += `## 2. Palette Definitions by Theme Family\n\n`;

  paletteDefs.forEach(fam => {
    md += `### ${fam.name} Family\n`;
    md += `*Tagline: ${fam.tagline}*\n\n`;

    // Dark
    md += `#### SONDER ${fam.name} Dark\n\n`;
    md += `| Semantic Role | Hex | Intended Purpose |\n`;
    md += `|---|---|---|\n`;
    md += `| \`palette.darkest\` | \`${fam.dark.palette.darkest}\` | Primary Canvas (Editor Background) |\n`;
    md += `| \`palette.deep\` | \`${fam.dark.palette.deep}\` | Sidebar, Inactive Tabs, Input Box |\n`;
    md += `| \`palette.surface\` | \`${fam.dark.palette.surface}\` | Panel, Terminal, Status Bar, Popups |\n`;
    md += `| \`palette.mid\` | \`${fam.dark.palette.mid}\` | Structural Borders, Separators |\n`;
    md += `| \`palette.primary\` | \`${fam.dark.palette.primary}\` | Secondary Text, Types, Titles |\n`;
    md += `| \`palette.lightest\` | \`${fam.dark.palette.lightest}\` | Primary Text (Editor Foreground) |\n`;
    md += `| \`accent\` | \`${fam.dark.accent}\` | Primary Accent, Cursor, Active Indicators |\n`;
    md += `| \`accentSecondary\` | \`${fam.dark.accentSecondary}\` | Word Highlights, Links, Secondary Accent |\n\n`;

    // Light
    md += `#### SONDER ${fam.name} Light\n\n`;
    md += `| Semantic Role | Hex | Intended Purpose |\n`;
    md += `|---|---|---|\n`;
    md += `| \`palette.lightest\` | \`${fam.light.palette.lightest}\` | Primary Canvas (Editor Background) |\n`;
    md += `| \`palette.surface\` | \`${fam.light.palette.surface}\` | Sidebar, Inactive Tabs, Popups |\n`;
    md += `| \`palette.deep\` | \`${fam.light.palette.deep}\` | Panel, Terminal, Status Bar |\n`;
    md += `| \`palette.mid\` | \`${fam.light.palette.mid}\` | Structural Borders, Separators |\n`;
    md += `| \`palette.primary\` | \`${fam.light.palette.primary}\` | Secondary Text, Types, Titles |\n`;
    md += `| \`palette.darkest\` | \`${fam.light.palette.darkest}\` | Primary Text (Editor Foreground) |\n`;
    md += `| \`accent\` | \`${fam.light.accent}\` | Primary Accent, Cursor, Active Indicators |\n`;
    md += `| \`accentSecondary\` | \`${fam.light.accentSecondary}\` | Word Highlights, Links, Secondary Accent |\n\n`;
  });

  md += `---\n\n`;
  md += `## 3. WCAG AA Contrast Audit Summary\n\n`;
  md += `| Theme Name | Editor Bg | Editor Fg | Ratio | WCAG Grade | Sidebar Ratio | Panel Ratio |\n`;
  md += `|---|---|---|---|---|---|---|\n`;

  paletteDefs.forEach(fam => {
    ['dark', 'light'].forEach(v => {
      const isDark = v === 'dark';
      const def = fam[v];
      const p = def.palette;
      const edBg = isDark ? p.darkest : p.lightest;
      const edFg = isDark ? p.lightest : p.darkest;
      const sbBg = isDark ? p.deep : p.surface;
      const panBg = isDark ? p.surface : p.deep;

      const edRatio = contrastRatio(edFg, edBg);
      const sbRatio = contrastRatio(edFg, sbBg);
      const panRatio = contrastRatio(edFg, panBg);

      const grade = edRatio >= 7.0 ? 'AAA' : edRatio >= 4.5 ? 'AA' : 'FAIL';
      md += `| **SONDER — ${fam.name} ${isDark ? 'Dark' : 'Light'}** | \`${edBg}\` | \`${edFg}\` | **${edRatio.toFixed(2)}:1** | ${grade} | ${sbRatio.toFixed(2)}:1 | ${panRatio.toFixed(2)}:1 |\n`;
    });
  });

  return md;
}

// CLI Execution Block
if (require.main === module) {
  const themesDir = path.join(__dirname, 'themes');
  const docsDir = path.join(__dirname, 'docs');
  const reportsDir = path.join(__dirname, 'reports');
  if (!fs.existsSync(themesDir)) fs.mkdirSync(themesDir, { recursive: true });
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  console.log('Building SONDER 22-Theme Collection with Dynamic Tab & Surface System...\n');

  let totalThemes = 0;
  const auditList = [];

  PALETTE_DEFINITIONS.forEach(family => {
    ['dark', 'light'].forEach(variant => {
      const themeObj = generateThemeJson(family, variant);
      const fileName = `sonder-${family.id}-${variant}-color-theme.json`;
      const filePath = path.join(themesDir, fileName);
      fs.writeFileSync(filePath, JSON.stringify(themeObj, null, 2) + '\n');
      totalThemes++;

      const audit = auditTheme(themeObj, family, variant);
      auditList.push(audit);

      const edRatio = audit.results.find(r => r.item === 'Primary Text').ratio;
      const tabRatio = audit.results.find(r => r.item === 'Active Tab Text').ratio;

      console.log(`✓ ${themeObj.name}`);
      console.log(`    Editor Text: ${edRatio}:1 | Active Tab Text: ${tabRatio}:1 | All Checks Pass: ${audit.allPassed}`);
    });
  });

  // Write Machine-Readable JSON Report
  const jsonReportPath = path.join(reportsDir, 'contrast-report.json');
  fs.writeFileSync(jsonReportPath, JSON.stringify(auditList, null, 2));
  console.log(`\n✓ Generated machine-readable report: ${jsonReportPath}`);

  // Write Human-Readable Markdown Report
  const mdReport = generateMarkdownReport(auditList);
  const mdReportPath = path.join(docsDir, 'CONTRAST-REPORT.md');
  fs.writeFileSync(mdReportPath, mdReport);
  console.log(`✓ Generated human-readable report: ${mdReportPath}`);

  // Write Palette Mapping Markdown
  const palMappingMd = generatePaletteMappingMarkdown(PALETTE_DEFINITIONS);
  const palMappingPath = path.join(docsDir, 'PALETTE-MAPPING.md');
  fs.writeFileSync(palMappingPath, palMappingMd);
  console.log(`✓ Generated palette mapping doc: ${palMappingPath}`);

  const allThemesPass = auditList.every(a => a.allPassed);
  console.log(`\nBuild complete. All ${totalThemes} themes generated. 100% WCAG AA/AAA compliance: ${allThemesPass}`);
}

module.exports = {
  generateThemeJson,
  deriveSurfaces,
  deriveAccentStates,
  auditTheme
};
