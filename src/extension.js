/**
 * HUEFORM VS Code Extension
 * 
 * Features:
 * 1. 22 Themed File Icon Themes: 11 families × 2 variants (Dark & Light) with Pierre-inspired geometry.
 * 2. Automatic & Authoritative Color Theme → Icon Theme Synchronization with race-condition prevention
 *    and non-HUEFORM theme preservation.
 * 3. Themed Folder Highlights: Subtle, native explorer folder badges via FileDecorationProvider.
 * 4. Smooth Cursor Glide Motion: Subtle Neovide-inspired cursor animation via TextEditorDecorationType.
 * 
 * 100% Native VS Code Public APIs only. Zero filesystem patching or installation modifications.
 */

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// HUEFORM Theme Family Semantic Accent Colors (Dark & Light)
const HUEFORM_THEME_ACCENTS = {
  // Dark Variants
  'hueform — abyss dark':     '#3EAABF',
  'hueform — nocturne dark':  '#A77DC8',
  'hueform — sakura dark':    '#F4728B',
  'hueform — umber dark':     '#DE7456',
  'hueform — midnight dark':  '#38BDF8',
  'hueform — forest dark':    '#4ADE80',
  'hueform — nebula dark':    '#C084FC',
  'hueform — ocean dark':     '#14D2E6',
  'hueform — ember dark':     '#FA741B',
  'hueform — lavender dark':  '#9B8AFB',
  'hueform — blossom dark':   '#E94090',

  // Light Variants
  'hueform — abyss light':    '#0C606E',
  'hueform — nocturne light': '#581C87',
  'hueform — sakura light':   '#B81B42',
  'hueform — umber light':    '#9E4324',
  'hueform — midnight light': '#0284C7',
  'hueform — forest light':   '#166534',
  'hueform — nebula light':   '#A21CAF',
  'hueform — ocean light':    '#0284C7',
  'hueform — ember light':    '#BD3900',
  'hueform — lavender light': '#4F46E5',
  'hueform — blossom light':  '#C41C5E',

  // Legacy SONDER compatibility
  'sonder — abyss dark':     '#3EAABF',
  'sonder — nocturne dark':  '#A77DC8',
  'sonder — sakura dark':    '#F4728B',
  'sonder — umber dark':     '#DE7456',
  'sonder — midnight dark':  '#38BDF8',
  'sonder — forest dark':    '#4ADE80',
  'sonder — nebula dark':    '#C084FC',
  'sonder — ocean dark':     '#14D2E6',
  'sonder — ember dark':     '#FA741B',
  'sonder — lavender dark':  '#9B8AFB',
  'sonder — blossom dark':   '#E94090',
  'sonder — abyss light':    '#0C606E',
  'sonder — nocturne light': '#581C87',
  'sonder — sakura light':   '#B81B42',
  'sonder — umber light':    '#9E4324',
  'sonder — midnight light': '#0284C7',
  'sonder — forest light':   '#166534',
  'sonder — nebula light':   '#A21CAF',
  'sonder — ocean light':    '#0284C7',
  'sonder — ember light':    '#BD3900',
  'sonder — lavender light': '#4F46E5',
  'sonder — blossom light':  '#C41C5E'
};

const DEFAULT_ACCENT = '#3EAABF';

const KNOWN_FAMILIES = [
  'abyss',
  'nocturne',
  'sakura',
  'umber',
  'midnight',
  'forest',
  'nebula',
  'ocean',
  'ember',
  'lavender',
  'blossom'
];

/**
 * Deterministic HUEFORM Color Theme → HUEFORM Icon Theme Mapping
 * Supports both stable theme IDs (e.g. 'hueform-ember-dark') and display labels (e.g. 'HUEFORM — Ember Dark').
 * Also provides seamless fallback mapping for legacy 'sonder-*' references.
 */
const HUEFORM_THEME_ID_TO_ICON_THEME = {
  // Stable Theme IDs
  'hueform-abyss-dark':       'hueform-abyss-icons-dark',
  'hueform-abyss-light':      'hueform-abyss-icons-light',
  'hueform-nocturne-dark':    'hueform-nocturne-icons-dark',
  'hueform-nocturne-light':   'hueform-nocturne-icons-light',
  'hueform-sakura-dark':      'hueform-sakura-icons-dark',
  'hueform-sakura-light':     'hueform-sakura-icons-light',
  'hueform-umber-dark':       'hueform-umber-icons-dark',
  'hueform-umber-light':      'hueform-umber-icons-light',
  'hueform-midnight-dark':    'hueform-midnight-icons-dark',
  'hueform-midnight-light':   'hueform-midnight-icons-light',
  'hueform-forest-dark':      'hueform-forest-icons-dark',
  'hueform-forest-light':     'hueform-forest-icons-light',
  'hueform-nebula-dark':      'hueform-nebula-icons-dark',
  'hueform-nebula-light':     'hueform-nebula-icons-light',
  'hueform-ocean-dark':       'hueform-ocean-icons-dark',
  'hueform-ocean-light':      'hueform-ocean-icons-light',
  'hueform-ember-dark':       'hueform-ember-icons-dark',
  'hueform-ember-light':      'hueform-ember-icons-light',
  'hueform-lavender-dark':    'hueform-lavender-icons-dark',
  'hueform-lavender-light':   'hueform-lavender-icons-light',
  'hueform-blossom-dark':     'hueform-blossom-icons-dark',
  'hueform-blossom-light':    'hueform-blossom-icons-light',

  // Display Labels (with em-dash)
  'hueform — abyss dark':     'hueform-abyss-icons-dark',
  'hueform — abyss light':    'hueform-abyss-icons-light',
  'hueform — nocturne dark':  'hueform-nocturne-icons-dark',
  'hueform — nocturne light': 'hueform-nocturne-icons-light',
  'hueform — sakura dark':    'hueform-sakura-icons-dark',
  'hueform — sakura light':   'hueform-sakura-icons-light',
  'hueform — umber dark':     'hueform-umber-icons-dark',
  'hueform — umber light':    'hueform-umber-icons-light',
  'hueform — midnight dark':  'hueform-midnight-icons-dark',
  'hueform — midnight light': 'hueform-midnight-icons-light',
  'hueform — forest dark':    'hueform-forest-icons-dark',
  'hueform — forest light':   'hueform-forest-icons-light',
  'hueform — nebula dark':    'hueform-nebula-icons-dark',
  'hueform — nebula light':   'hueform-nebula-icons-light',
  'hueform — ocean dark':     'hueform-ocean-icons-dark',
  'hueform — ocean light':    'hueform-ocean-icons-light',
  'hueform — ember dark':     'hueform-ember-icons-dark',
  'hueform — ember light':    'hueform-ember-icons-light',
  'hueform — lavender dark':  'hueform-lavender-icons-dark',
  'hueform — lavender light': 'hueform-lavender-icons-light',
  'hueform — blossom dark':   'hueform-blossom-icons-dark',
  'hueform — blossom light':  'hueform-blossom-icons-light',

  // Legacy SONDER mappings for seamless migration
  'sonder-abyss-dark':       'hueform-abyss-icons-dark',
  'sonder-abyss-light':      'hueform-abyss-icons-light',
  'sonder-nocturne-dark':    'hueform-nocturne-icons-dark',
  'sonder-nocturne-light':   'hueform-nocturne-icons-light',
  'sonder-sakura-dark':      'hueform-sakura-icons-dark',
  'sonder-sakura-light':     'hueform-sakura-icons-light',
  'sonder-umber-dark':       'hueform-umber-icons-dark',
  'sonder-umber-light':      'hueform-umber-icons-light',
  'sonder-midnight-dark':    'hueform-midnight-icons-dark',
  'sonder-midnight-light':   'hueform-midnight-icons-light',
  'sonder-forest-dark':      'hueform-forest-icons-dark',
  'sonder-forest-light':     'hueform-forest-icons-light',
  'sonder-nebula-dark':      'hueform-nebula-icons-dark',
  'sonder-nebula-light':     'hueform-nebula-icons-light',
  'sonder-ocean-dark':       'hueform-ocean-icons-dark',
  'sonder-ocean-light':      'hueform-ocean-icons-light',
  'sonder-ember-dark':       'hueform-ember-icons-dark',
  'sonder-ember-light':      'hueform-ember-icons-light',
  'sonder-lavender-dark':    'hueform-lavender-icons-dark',
  'sonder-lavender-light':   'hueform-lavender-icons-light',
  'sonder-blossom-dark':     'hueform-blossom-icons-dark',
  'sonder-blossom-light':    'hueform-blossom-icons-light',

  'sonder — abyss dark':     'hueform-abyss-icons-dark',
  'sonder — abyss light':    'hueform-abyss-icons-light',
  'sonder — nocturne dark':  'hueform-nocturne-icons-dark',
  'sonder — nocturne light': 'hueform-nocturne-icons-light',
  'sonder — sakura dark':    'hueform-sakura-icons-dark',
  'sonder — sakura light':   'hueform-sakura-icons-light',
  'sonder — umber dark':     'hueform-umber-icons-dark',
  'sonder — umber light':    'hueform-umber-icons-light',
  'sonder — midnight dark':  'hueform-midnight-icons-dark',
  'sonder — midnight light': 'hueform-midnight-icons-light',
  'sonder — forest dark':    'hueform-forest-icons-dark',
  'sonder — forest light':   'hueform-forest-icons-light',
  'sonder — nebula dark':    'hueform-nebula-icons-dark',
  'sonder — nebula light':   'hueform-nebula-icons-light',
  'sonder — ocean dark':     'hueform-ocean-icons-dark',
  'sonder — ocean light':    'hueform-ocean-icons-light',
  'sonder — ember dark':     'hueform-ember-icons-dark',
  'sonder — ember light':    'hueform-ember-icons-light',
  'sonder — lavender dark':  'hueform-lavender-icons-dark',
  'sonder — lavender light': 'hueform-lavender-icons-light',
  'sonder — blossom dark':   'hueform-blossom-icons-dark',
  'sonder — blossom light':  'hueform-blossom-icons-light'
};

function isHueformIconTheme(iconThemeId) {
  if (!iconThemeId || typeof iconThemeId !== 'string') return false;
  return (iconThemeId.startsWith('hueform-') || iconThemeId.startsWith('sonder-')) && iconThemeId.includes('-icons-');
}

/**
 * Authoritatively resolves any HUEFORM color theme name or ID to its corresponding HUEFORM icon theme ID.
 */
function resolveHueformIconTheme(themeIdentifier) {
  if (!themeIdentifier || typeof themeIdentifier !== 'string') return null;
  const raw = themeIdentifier.trim().toLowerCase();

  // 1. Direct authoritative lookup
  if (HUEFORM_THEME_ID_TO_ICON_THEME[raw]) {
    return HUEFORM_THEME_ID_TO_ICON_THEME[raw];
  }

  // 2. Normalized dash/whitespace lookup
  const clean = raw.replace(/[—–-]/g, ' ').replace(/\s+/g, ' ').trim();
  for (const [key, iconThemeId] of Object.entries(HUEFORM_THEME_ID_TO_ICON_THEME)) {
    const keyClean = key.replace(/[—–-]/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean === keyClean) {
      return iconThemeId;
    }
  }

  // 3. Structured fallback by family and variant
  if (clean.includes('hueform') || clean.includes('sonder')) {
    for (const family of KNOWN_FAMILIES) {
      if (clean.includes(family)) {
        const isLight = clean.includes('light');
        return `hueform-${family}-icons-${isLight ? 'light' : 'dark'}`;
      }
    }
  }

  return null;
}

function getActiveThemeIdentifier() {
  const config = vscode.workspace.getConfiguration('workbench');
  const theme = config.get('colorTheme');
  if (theme && typeof theme === 'string') {
    return theme;
  }
  return '';
}

function getActiveFamilyId() {
  const currentTheme = getActiveThemeIdentifier().toLowerCase();
  for (const family of KNOWN_FAMILIES) {
    if (currentTheme.includes(family)) {
      return family;
    }
  }
  return null;
}

function getActiveAccentColor() {
  const currentTheme = getActiveThemeIdentifier().toLowerCase();
  for (const [name, accent] of Object.entries(HUEFORM_THEME_ACCENTS)) {
    if (currentTheme.includes(name) || name.includes(currentTheme)) {
      return accent;
    }
  }
  const family = getActiveFamilyId();
  if (family && HUEFORM_THEME_ACCENTS[`hueform — ${family} dark`]) {
    return HUEFORM_THEME_ACCENTS[`hueform — ${family} dark`];
  }
  return DEFAULT_ACCENT;
}

/**
 * 1. Native API-based spring glide cursor trail
 */
class HueformNativeCursorManager {
  constructor(context) {
    this.context = context;
    this.prevPositions = new Map();
    this.activeTimeouts = new Map();
    this.decorationTypes = [];
    this.enabled = true;

    this.reloadConfiguration();
    this.rebuildDecorations();

    this.disposables = [
      vscode.window.onDidChangeTextEditorSelection(e => this.onSelectionChange(e)),
      vscode.window.onDidChangeActiveColorTheme(() => this.onThemeChange()),
      vscode.workspace.onDidChangeConfiguration(e => {
        if (
          e.affectsConfiguration('hueform.cursor') ||
          e.affectsConfiguration('sonder.cursor') ||
          e.affectsConfiguration('workbench.colorTheme')
        ) {
          this.reloadConfiguration();
          this.rebuildDecorations();
        }
      })
    ];
  }

  reloadConfiguration() {
    const config = vscode.workspace.getConfiguration('hueform.cursor');
    const legacyConfig = vscode.workspace.getConfiguration('sonder.cursor');
    this.enabled = config.get('animation', legacyConfig.get('animation', true));
  }

  rebuildDecorations() {
    this.disposeDecorations();
    if (!this.enabled) return;

    const accent = getActiveAccentColor();

    this.decStep1 = vscode.window.createTextEditorDecorationType({
      backgroundColor: `${accent}33`,
      border: `1px solid ${accent}66`,
      borderRadius: '2px',
      rangeBehavior: vscode.DecorationRangeBehavior.ClosedClosed
    });

    this.decStep2 = vscode.window.createTextEditorDecorationType({
      backgroundColor: `${accent}22`,
      border: `1px solid ${accent}44`,
      borderRadius: '2px',
      rangeBehavior: vscode.DecorationRangeBehavior.ClosedClosed
    });

    this.decStep3 = vscode.window.createTextEditorDecorationType({
      backgroundColor: `${accent}11`,
      border: `1px solid ${accent}22`,
      borderRadius: '2px',
      rangeBehavior: vscode.DecorationRangeBehavior.ClosedClosed
    });

    this.decorationTypes = [this.decStep1, this.decStep2, this.decStep3];
  }

  disposeDecorations() {
    this.decorationTypes.forEach(d => {
      try { d.dispose(); } catch (_) {}
    });
    this.decorationTypes = [];
  }

  onThemeChange() {
    this.rebuildDecorations();
  }

  onSelectionChange(event) {
    if (!this.enabled || !event || !event.textEditor) return;
    const editor = event.textEditor;

    // Single cursor motion handling
    if (!event.selections || event.selections.length !== 1) return;
    const selection = event.selections[0];
    if (!selection.isEmpty) return;

    const editorKey = editor.document.uri.toString();
    const prevPos = this.prevPositions.get(editorKey);
    const newPos = selection.active;

    this.prevPositions.set(editorKey, newPos);

    if (!prevPos || (prevPos.line === newPos.line && prevPos.character === newPos.character)) {
      return;
    }

    // Cancel existing animation timeouts for this editor
    const existing = this.activeTimeouts.get(editorKey);
    if (existing) {
      existing.forEach(t => clearTimeout(t));
    }

    const timeouts = [];
    const lineDelta = newPos.line - prevPos.line;
    const charDelta = newPos.character - prevPos.character;

    // Interpolate 3-step micro-motion trail
    const steps = [
      {
        ratio: 0.60,
        dec: this.decStep1,
        delay: 0,
        clearDelay: 70
      },
      {
        ratio: 0.30,
        dec: this.decStep2,
        delay: 25,
        clearDelay: 100
      },
      {
        ratio: 0.10,
        dec: this.decStep3,
        delay: 50,
        clearDelay: 130
      }
    ];

    steps.forEach(({ ratio, dec, delay, clearDelay }) => {
      if (!dec) return;

      const tApply = setTimeout(() => {
        try {
          const stepLine = Math.round(prevPos.line + lineDelta * ratio);
          const stepChar = Math.round(prevPos.character + charDelta * ratio);
          const targetLine = Math.min(stepLine, editor.document.lineCount - 1);
          const targetChar = Math.min(stepChar, editor.document.lineAt(targetLine).text.length);

          const trailRange = new vscode.Range(
            new vscode.Position(targetLine, targetChar),
            new vscode.Position(targetLine, Math.min(targetChar + 1, editor.document.lineAt(targetLine).text.length))
          );

          editor.setDecorations(dec, [trailRange]);
        } catch (_) {}
      }, delay);

      const tClear = setTimeout(() => {
        try {
          editor.setDecorations(dec, []);
        } catch (_) {}
      }, clearDelay);

      timeouts.push(tApply, tClear);
    });

    this.activeTimeouts.set(editorKey, timeouts);
  }

  dispose() {
    this.disposeDecorations();
    this.activeTimeouts.forEach(timeouts => timeouts.forEach(t => clearTimeout(t)));
    this.activeTimeouts.clear();
    this.prevPositions.clear();
    this.disposables.forEach(d => d.dispose());
  }
}

/**
 * 2. Themed Folder Highlights via FileDecorationProvider
 * Provides subtle folder badges and accents in the VS Code File Explorer
 */
const KEY_FOLDER_CONFIGS = {
  'src':           { badge: 'S',  tooltip: 'HUEFORM: Source Root' },
  'source':        { badge: 'S',  tooltip: 'HUEFORM: Source Root' },
  'components':    { badge: 'C',  tooltip: 'HUEFORM: Components Directory' },
  'cmp':           { badge: 'C',  tooltip: 'HUEFORM: Components Directory' },
  'pages':         { badge: 'P',  tooltip: 'HUEFORM: Pages & Views' },
  'views':         { badge: 'P',  tooltip: 'HUEFORM: Pages & Views' },
  'app':           { badge: 'A',  tooltip: 'HUEFORM: Application Root' },
  'test':          { badge: 'T',  tooltip: 'HUEFORM: Test Suite' },
  'tests':         { badge: 'T',  tooltip: 'HUEFORM: Test Suite' },
  '__tests__':     { badge: 'T',  tooltip: 'HUEFORM: Test Suite' },
  'spec':          { badge: 'T',  tooltip: 'HUEFORM: Test Suite' },
  'docs':          { badge: 'D',  tooltip: 'HUEFORM: Documentation' },
  'doc':           { badge: 'D',  tooltip: 'HUEFORM: Documentation' },
  'documentation': { badge: 'D',  tooltip: 'HUEFORM: Documentation' },
  'config':        { badge: '⚙', tooltip: 'HUEFORM: Configuration' },
  'configs':       { badge: '⚙', tooltip: 'HUEFORM: Configuration' },
  '.config':       { badge: '⚙', tooltip: 'HUEFORM: Configuration' },
  'api':           { badge: 'API', tooltip: 'HUEFORM: API & Endpoints' },
  'routes':        { badge: 'R',  tooltip: 'HUEFORM: Routes' },
  'lib':           { badge: 'L',  tooltip: 'HUEFORM: Library & Utilities' },
  'utils':         { badge: 'U',  tooltip: 'HUEFORM: Utility Functions' },
  'assets':        { badge: '◆',  tooltip: 'HUEFORM: Static Assets' },
  'public':        { badge: '◆',  tooltip: 'HUEFORM: Public Directory' }
};

class HueformFolderDecorationProvider {
  constructor(context) {
    this.context = context;
    this.enabled = true;
    this.directoryCache = new Map();

    this._onDidChangeFileDecorations = new vscode.EventEmitter();
    this.onDidChangeFileDecorations = this._onDidChangeFileDecorations.event;

    this.reloadConfiguration();

    this.disposables = [
      vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('hueform.folderHighlights') || e.affectsConfiguration('sonder.folderHighlights')) {
          this.reloadConfiguration();
          this._onDidChangeFileDecorations.fire(undefined);
        }
      })
    ];
  }

  reloadConfiguration() {
    const config = vscode.workspace.getConfiguration('hueform.folderHighlights');
    const legacyConfig = vscode.workspace.getConfiguration('sonder.folderHighlights');
    this.enabled = config.get('enabled', legacyConfig.get('enabled', true));
  }

  provideFileDecoration(uri) {
    if (!this.enabled || !uri || uri.scheme !== 'file') return undefined;

    const baseName = path.basename(uri.fsPath).toLowerCase();
    const folderConfig = KEY_FOLDER_CONFIGS[baseName];
    if (!folderConfig) return undefined;

    const filePath = uri.fsPath;
    let isDir = this.directoryCache.get(filePath);
    if (isDir === undefined) {
      try {
        const stat = fs.statSync(filePath);
        isDir = stat.isDirectory();
        this.directoryCache.set(filePath, isDir);
      } catch (_) {
        return undefined;
      }
    }

    if (!isDir) return undefined;

    const decoration = new vscode.FileDecoration(
      folderConfig.badge,
      folderConfig.tooltip,
      new vscode.ThemeColor('list.highlightForeground')
    );
    decoration.propagate = false;
    return decoration;
  }

  dispose() {
    this.disposables.forEach(d => d.dispose());
    this._onDidChangeFileDecorations.dispose();
    this.directoryCache.clear();
  }
}

/**
 * 3. HUEFORM Icon Theme Synchronization Manager
 * Authoritative, race-condition-free synchronization engine.
 * Guarantees that single theme selection immediately activates matching icon theme.
 * Completely ceases interference when non-HUEFORM themes are selected, restoring previous icon theme.
 */
class HueformIconThemeSyncManager {
  constructor(context) {
    this.context = context;
    this.enabled = true;
    this._isUpdating = false;
    this._syncSeq = 0;

    this.reloadConfiguration();

    this.disposables = [
      // 1. Authoritative configuration listener for workbench.colorTheme and hueform settings
      vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('workbench.colorTheme')) {
          this.queueSync('config:colorTheme');
        } else if (
          e.affectsConfiguration('hueform.autoMatchIconTheme') ||
          e.affectsConfiguration('hueform.syncIconTheme') ||
          e.affectsConfiguration('sonder.autoMatchIconTheme') ||
          e.affectsConfiguration('sonder.syncIconTheme')
        ) {
          this.reloadConfiguration();
          this.queueSync('config:autoMatchIconTheme');
        }
      }),

      // 2. Active color theme window event
      vscode.window.onDidChangeActiveColorTheme(() => {
        this.queueSync('window:activeColorTheme');
      })
    ];

    // Initial check on activation / startup
    this.queueSync('startup');
  }

  reloadConfiguration() {
    const config = vscode.workspace.getConfiguration('hueform');
    const legacyConfig = vscode.workspace.getConfiguration('sonder');
    this.enabled = config.get(
      'autoMatchIconTheme',
      config.get('syncIconTheme', legacyConfig.get('autoMatchIconTheme', legacyConfig.get('syncIconTheme', true)))
    );
  }

  /**
   * Schedules synchronization with atomic sequence checking.
   * Uses setImmediate (zero-delay event-loop deferral) to guarantee that any
   * pending configuration IPC from the VS Code main thread has settled before evaluation.
   */
  queueSync(triggerSource) {
    if (!this.enabled) return;
    const seq = ++this._syncSeq;

    setImmediate(async () => {
      // Discard stale sync request if a newer one arrived during the turn
      if (seq !== this._syncSeq) {
        return;
      }
      await this.runSync(seq, triggerSource);
    });
  }

  async runSync(seq, triggerSource) {
    if (this._isUpdating || !this.enabled) return;

    // Read the authoritative, current color theme from VS Code
    const workbenchConfig = vscode.workspace.getConfiguration('workbench');
    const activeColorTheme = workbenchConfig.get('colorTheme');
    const targetIconThemeId = resolveHueformIconTheme(activeColorTheme);
    const currentIconTheme = workbenchConfig.get('iconTheme');

    // Confirm that this run is still the latest requested sync
    if (seq !== this._syncSeq) {
      return;
    }

    if (targetIconThemeId) {
      // Case A: A HUEFORM color theme is active
      // Save user's non-HUEFORM icon theme to restore when leaving HUEFORM
      if (!isHueformIconTheme(currentIconTheme) && currentIconTheme !== undefined) {
        await this.context.globalState.update('previousNonHueformIconTheme', currentIconTheme);
      }

      // Only update if current icon theme is not already the target
      if (currentIconTheme !== targetIconThemeId) {
        this._isUpdating = true;
        try {
          await workbenchConfig.update('iconTheme', targetIconThemeId, vscode.ConfigurationTarget.Global);
        } catch (err) {
          console.warn(`[HUEFORM] Could not update iconTheme: ${err.message}`);
        } finally {
          this._isUpdating = false;
        }
      }
    } else {
      // Case B: Non-HUEFORM color theme is active (e.g. GitHub Dark, Default Dark Modern)
      // If currently using a HUEFORM icon theme, restore the previously saved non-HUEFORM icon theme
      if (isHueformIconTheme(currentIconTheme)) {
        const savedNonHueform =
          this.context.globalState.get('previousNonHueformIconTheme') ||
          this.context.globalState.get('previousNonSonderIconTheme');
        this._isUpdating = true;
        try {
          await workbenchConfig.update('iconTheme', savedNonHueform || undefined, vscode.ConfigurationTarget.Global);
          await this.context.globalState.update('previousNonHueformIconTheme', undefined);
          await this.context.globalState.update('previousNonSonderIconTheme', undefined);
        } catch (err) {
          console.warn(`[HUEFORM] Could not restore non-HUEFORM iconTheme: ${err.message}`);
        } finally {
          this._isUpdating = false;
        }
      }
      // Outside HUEFORM: stop managing icons completely.
    }
  }

  async forceSync() {
    const workbenchConfig = vscode.workspace.getConfiguration('workbench');
    const activeColorTheme = workbenchConfig.get('colorTheme');
    const targetIconThemeId = resolveHueformIconTheme(activeColorTheme);
    if (!targetIconThemeId) {
      vscode.window.showInformationMessage('HUEFORM: Active color theme is not a HUEFORM theme family.');
      return;
    }

    this._isUpdating = true;
    try {
      await workbenchConfig.update('iconTheme', targetIconThemeId, vscode.ConfigurationTarget.Global);
      vscode.window.showInformationMessage(
        `HUEFORM: Applied matching file icon theme (${targetIconThemeId}).`
      );
    } finally {
      this._isUpdating = false;
    }
  }

  dispose() {
    this.disposables.forEach(d => d.dispose());
  }
}

/**
 * Extension entry point
 */
function activate(context) {
  // 1. Native API-based cursor motion
  const nativeCursor = new HueformNativeCursorManager(context);
  context.subscriptions.push(nativeCursor);

  // 2. Themed folder highlights via FileDecorationProvider
  const folderProvider = new HueformFolderDecorationProvider(context);
  const folderReg = vscode.window.registerFileDecorationProvider(folderProvider);
  context.subscriptions.push(folderProvider, folderReg);

  // 3. Authoritative Icon Theme synchronization
  const iconSyncManager = new HueformIconThemeSyncManager(context);
  context.subscriptions.push(iconSyncManager);

  // Primary HUEFORM Commands
  const toggleMotionCmd = vscode.commands.registerCommand('hueform.toggleCursorAnimation', async () => {
    const config = vscode.workspace.getConfiguration('hueform.cursor');
    const current = config.get('animation', true);
    await config.update('animation', !current, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(
      `HUEFORM Cursor Motion: ${!current ? 'Enabled' : 'Disabled'}`
    );
  });

  const toggleFolderCmd = vscode.commands.registerCommand('hueform.toggleFolderHighlights', async () => {
    const config = vscode.workspace.getConfiguration('hueform.folderHighlights');
    const current = config.get('enabled', true);
    await config.update('enabled', !current, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(
      `HUEFORM Folder Highlights: ${!current ? 'Enabled' : 'Disabled'}`
    );
  });

  const toggleAutoMatchCmd = vscode.commands.registerCommand('hueform.toggleAutoMatchIconTheme', async () => {
    const config = vscode.workspace.getConfiguration('hueform');
    const current = config.get('autoMatchIconTheme', true);
    await config.update('autoMatchIconTheme', !current, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(
      `HUEFORM Automatic Icon Matching: ${!current ? 'Enabled' : 'Disabled'}`
    );
  });

  const syncIconCmd = vscode.commands.registerCommand('hueform.syncActiveIconTheme', () => {
    iconSyncManager.forceSync();
  });

  // Legacy Command Aliases for backward compatibility
  const legacyToggleMotionCmd = vscode.commands.registerCommand('sonder.toggleCursorAnimation', () => {
    vscode.commands.executeCommand('hueform.toggleCursorAnimation');
  });
  const legacyToggleFolderCmd = vscode.commands.registerCommand('sonder.toggleFolderHighlights', () => {
    vscode.commands.executeCommand('hueform.toggleFolderHighlights');
  });
  const legacyToggleAutoMatchCmd = vscode.commands.registerCommand('sonder.toggleAutoMatchIconTheme', () => {
    vscode.commands.executeCommand('hueform.toggleAutoMatchIconTheme');
  });
  const legacySyncIconCmd = vscode.commands.registerCommand('sonder.syncActiveIconTheme', () => {
    vscode.commands.executeCommand('hueform.syncActiveIconTheme');
  });

  context.subscriptions.push(
    toggleMotionCmd,
    toggleFolderCmd,
    toggleAutoMatchCmd,
    syncIconCmd,
    legacyToggleMotionCmd,
    legacyToggleFolderCmd,
    legacyToggleAutoMatchCmd,
    legacySyncIconCmd
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
  resolveHueformIconTheme,
  isHueformIconTheme,
  HUEFORM_THEME_ID_TO_ICON_THEME,
  HueformIconThemeSyncManager,
  // Backward-compatibility aliases
  resolveSonderIconTheme: resolveHueformIconTheme,
  isSonderIconTheme: isHueformIconTheme,
  SONDER_THEME_ID_TO_ICON_THEME: HUEFORM_THEME_ID_TO_ICON_THEME,
  SonderIconThemeSyncManager: HueformIconThemeSyncManager
};
