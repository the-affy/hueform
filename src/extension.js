/**
 * SONDER VS Code Extension
 * 
 * Features:
 * 1. 22 Themed File Icon Themes: 11 families × 2 variants (Dark & Light) with Pierre-inspired geometry.
 * 2. Automatic & Authoritative Color Theme → Icon Theme Synchronization with race-condition prevention
 *    and non-SONDER theme preservation.
 * 3. Themed Folder Highlights: Subtle, native explorer folder badges via FileDecorationProvider.
 * 4. Smooth Cursor Glide Motion: Subtle Neovide-inspired cursor animation via TextEditorDecorationType.
 * 
 * 100% Native VS Code Public APIs only. Zero filesystem patching or installation modifications.
 */

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// SONDER Theme Family Semantic Accent Colors (Dark & Light)
const SONDER_THEME_ACCENTS = {
  // Dark Variants
  'sonder — abyss dark':     '#52C5D6',
  'sonder — nocturne dark':  '#B37DD3',
  'sonder — sakura dark':    '#FB7185',
  'sonder — umber dark':     '#E07A5F',
  'sonder — midnight dark':  '#38BDF8',
  'sonder — forest dark':    '#4ADE80',
  'sonder — nebula dark':    '#E879F9',
  'sonder — ocean dark':     '#22D3EE',
  'sonder — ember dark':     '#F97316',
  'sonder — lavender dark':  '#A78BFA',
  'sonder — blossom dark':   '#EC4899',

  // Light Variants
  'sonder — abyss light':    '#0A7D92',
  'sonder — nocturne light': '#7E22CE',
  'sonder — sakura light':   '#BE123C',
  'sonder — umber light':    '#A74B2A',
  'sonder — midnight light': '#0284C7',
  'sonder — forest light':   '#15803D',
  'sonder — nebula light':   '#9333EA',
  'sonder — ocean light':    '#0284C7',
  'sonder — ember light':    '#EA580C',
  'sonder — lavender light': '#7C3AED',
  'sonder — blossom light':  '#DB2777'
};

const DEFAULT_ACCENT = '#52C5D6';

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
 * Deterministic SONDER Color Theme → SONDER Icon Theme Mapping
 * Supports both stable theme IDs (e.g. 'sonder-ember-dark') and display labels (e.g. 'SONDER — Ember Dark').
 */
const SONDER_THEME_ID_TO_ICON_THEME = {
  // Stable Theme IDs
  'sonder-abyss-dark':       'sonder-abyss-icons-dark',
  'sonder-abyss-light':      'sonder-abyss-icons-light',
  'sonder-nocturne-dark':    'sonder-nocturne-icons-dark',
  'sonder-nocturne-light':   'sonder-nocturne-icons-light',
  'sonder-sakura-dark':      'sonder-sakura-icons-dark',
  'sonder-sakura-light':     'sonder-sakura-icons-light',
  'sonder-umber-dark':       'sonder-umber-icons-dark',
  'sonder-umber-light':      'sonder-umber-icons-light',
  'sonder-midnight-dark':    'sonder-midnight-icons-dark',
  'sonder-midnight-light':   'sonder-midnight-icons-light',
  'sonder-forest-dark':      'sonder-forest-icons-dark',
  'sonder-forest-light':     'sonder-forest-icons-light',
  'sonder-nebula-dark':      'sonder-nebula-icons-dark',
  'sonder-nebula-light':     'sonder-nebula-icons-light',
  'sonder-ocean-dark':       'sonder-ocean-icons-dark',
  'sonder-ocean-light':      'sonder-ocean-icons-light',
  'sonder-ember-dark':       'sonder-ember-icons-dark',
  'sonder-ember-light':      'sonder-ember-icons-light',
  'sonder-lavender-dark':    'sonder-lavender-icons-dark',
  'sonder-lavender-light':   'sonder-lavender-icons-light',
  'sonder-blossom-dark':     'sonder-blossom-icons-dark',
  'sonder-blossom-light':    'sonder-blossom-icons-light',

  // Display Labels (with em-dash)
  'sonder — abyss dark':     'sonder-abyss-icons-dark',
  'sonder — abyss light':    'sonder-abyss-icons-light',
  'sonder — nocturne dark':  'sonder-nocturne-icons-dark',
  'sonder — nocturne light': 'sonder-nocturne-icons-light',
  'sonder — sakura dark':    'sonder-sakura-icons-dark',
  'sonder — sakura light':   'sonder-sakura-icons-light',
  'sonder — umber dark':     'sonder-umber-icons-dark',
  'sonder — umber light':    'sonder-umber-icons-light',
  'sonder — midnight dark':  'sonder-midnight-icons-dark',
  'sonder — midnight light': 'sonder-midnight-icons-light',
  'sonder — forest dark':    'sonder-forest-icons-dark',
  'sonder — forest light':   'sonder-forest-icons-light',
  'sonder — nebula dark':    'sonder-nebula-icons-dark',
  'sonder — nebula light':   'sonder-nebula-icons-light',
  'sonder — ocean dark':     'sonder-ocean-icons-dark',
  'sonder — ocean light':    'sonder-ocean-icons-light',
  'sonder — ember dark':     'sonder-ember-icons-dark',
  'sonder — ember light':    'sonder-ember-icons-light',
  'sonder — lavender dark':  'sonder-lavender-icons-dark',
  'sonder — lavender light': 'sonder-lavender-icons-light',
  'sonder — blossom dark':   'sonder-blossom-icons-dark',
  'sonder — blossom light':  'sonder-blossom-icons-light'
};

function isSonderIconTheme(iconThemeId) {
  if (!iconThemeId || typeof iconThemeId !== 'string') return false;
  return iconThemeId.startsWith('sonder-') && iconThemeId.includes('-icons-');
}

/**
 * Authoritatively resolves any SONDER color theme name or ID to its corresponding SONDER icon theme ID.
 */
function resolveSonderIconTheme(themeIdentifier) {
  if (!themeIdentifier || typeof themeIdentifier !== 'string') return null;
  const raw = themeIdentifier.trim().toLowerCase();

  // 1. Direct authoritative lookup
  if (SONDER_THEME_ID_TO_ICON_THEME[raw]) {
    return SONDER_THEME_ID_TO_ICON_THEME[raw];
  }

  // 2. Normalized dash/whitespace lookup
  const clean = raw.replace(/[—–-]/g, ' ').replace(/\s+/g, ' ').trim();
  for (const [key, iconThemeId] of Object.entries(SONDER_THEME_ID_TO_ICON_THEME)) {
    const keyClean = key.replace(/[—–-]/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean === keyClean) {
      return iconThemeId;
    }
  }

  // 3. Structured fallback by family and variant
  if (clean.includes('sonder')) {
    for (const family of KNOWN_FAMILIES) {
      if (clean.includes(family)) {
        const isLight = clean.includes('light');
        return `sonder-${family}-icons-${isLight ? 'light' : 'dark'}`;
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
  for (const [name, accent] of Object.entries(SONDER_THEME_ACCENTS)) {
    if (currentTheme.includes(name) || name.includes(currentTheme)) {
      return accent;
    }
  }
  const family = getActiveFamilyId();
  if (family && SONDER_THEME_ACCENTS[`sonder — ${family} dark`]) {
    return SONDER_THEME_ACCENTS[`sonder — ${family} dark`];
  }
  return DEFAULT_ACCENT;
}

/**
 * 1. Native API-based spring glide cursor trail
 */
class SonderNativeCursorManager {
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
        if (e.affectsConfiguration('sonder.cursor') || e.affectsConfiguration('workbench.colorTheme')) {
          this.reloadConfiguration();
          this.rebuildDecorations();
        }
      })
    ];
  }

  reloadConfiguration() {
    const config = vscode.workspace.getConfiguration('sonder.cursor');
    this.enabled = config.get('animation', true);
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
    for (const d of this.decorationTypes) {
      d.dispose();
    }
    this.decorationTypes = [];
  }

  onThemeChange() {
    this.rebuildDecorations();
  }

  clearEditorTimeouts(editorKey) {
    const timeouts = this.activeTimeouts.get(editorKey);
    if (timeouts) {
      timeouts.forEach(t => clearTimeout(t));
      this.activeTimeouts.delete(editorKey);
    }
  }

  clearEditorDecorations(editor) {
    if (!editor || this.decorationTypes.length === 0) return;
    for (const d of this.decorationTypes) {
      try {
        editor.setDecorations(d, []);
      } catch (_) {}
    }
  }

  onSelectionChange(event) {
    if (!this.enabled || !event.textEditor) return;
    if (event.selections.length === 0) return;

    const editor = event.textEditor;
    const editorKey = editor.document.uri.toString();
    const primarySelection = event.selections[0];

    if (!primarySelection.isEmpty) {
      this.clearEditorDecorations(editor);
      this.prevPositions.set(editorKey, primarySelection.active);
      return;
    }

    const currentPos = primarySelection.active;
    const prevPos = this.prevPositions.get(editorKey);
    this.prevPositions.set(editorKey, currentPos);

    if (!prevPos || prevPos.isEqual(currentPos)) {
      return;
    }

    const lineDiff = Math.abs(currentPos.line - prevPos.line);
    if (lineDiff > 50) {
      this.clearEditorDecorations(editor);
      return;
    }

    this.clearEditorTimeouts(editorKey);

    const p1 = new vscode.Position(
      Math.round(prevPos.line + (currentPos.line - prevPos.line) * 0.35),
      Math.max(0, Math.round(prevPos.character + (currentPos.character - prevPos.character) * 0.35))
    );
    const p2 = new vscode.Position(
      Math.round(prevPos.line + (currentPos.line - prevPos.line) * 0.70),
      Math.max(0, Math.round(prevPos.character + (currentPos.character - prevPos.character) * 0.70))
    );
    const p3 = new vscode.Position(
      Math.round(prevPos.line + (currentPos.line - prevPos.line) * 0.90),
      Math.max(0, Math.round(prevPos.character + (currentPos.character - prevPos.character) * 0.90))
    );

    const range1 = new vscode.Range(p1, new vscode.Position(p1.line, p1.character + 1));
    const range2 = new vscode.Range(p2, new vscode.Position(p2.line, p2.character + 1));
    const range3 = new vscode.Range(p3, new vscode.Position(p3.line, p3.character + 1));

    const timeouts = [];
    timeouts.push(setTimeout(() => {
      if (this.decStep1) editor.setDecorations(this.decStep1, [range1]);
    }, 10));

    timeouts.push(setTimeout(() => {
      if (this.decStep1) editor.setDecorations(this.decStep1, []);
      if (this.decStep2) editor.setDecorations(this.decStep2, [range2]);
    }, 35));

    timeouts.push(setTimeout(() => {
      if (this.decStep2) editor.setDecorations(this.decStep2, []);
      if (this.decStep3) editor.setDecorations(this.decStep3, [range3]);
    }, 70));

    timeouts.push(setTimeout(() => {
      this.clearEditorDecorations(editor);
      this.activeTimeouts.delete(editorKey);
    }, 115));

    this.activeTimeouts.set(editorKey, timeouts);
  }

  dispose() {
    this.disposables.forEach(d => d.dispose());
    this.disposeDecorations();
    for (const timeouts of this.activeTimeouts.values()) {
      timeouts.forEach(t => clearTimeout(t));
    }
    this.activeTimeouts.clear();
    this.prevPositions.clear();
  }
}

/**
 * 2. Themed Folder Highlights via FileDecorationProvider
 * Provides subtle folder badges and accents in the VS Code File Explorer
 */
const KEY_FOLDER_CONFIGS = {
  'src':           { badge: 'S',  tooltip: 'SONDER: Source Root' },
  'source':        { badge: 'S',  tooltip: 'SONDER: Source Root' },
  'components':    { badge: 'C',  tooltip: 'SONDER: Components Directory' },
  'cmp':           { badge: 'C',  tooltip: 'SONDER: Components Directory' },
  'pages':         { badge: 'P',  tooltip: 'SONDER: Pages & Views' },
  'views':         { badge: 'P',  tooltip: 'SONDER: Pages & Views' },
  'app':           { badge: 'A',  tooltip: 'SONDER: Application Root' },
  'test':          { badge: 'T',  tooltip: 'SONDER: Test Suite' },
  'tests':         { badge: 'T',  tooltip: 'SONDER: Test Suite' },
  '__tests__':     { badge: 'T',  tooltip: 'SONDER: Test Suite' },
  'spec':          { badge: 'T',  tooltip: 'SONDER: Test Suite' },
  'docs':          { badge: 'D',  tooltip: 'SONDER: Documentation' },
  'doc':           { badge: 'D',  tooltip: 'SONDER: Documentation' },
  'documentation': { badge: 'D',  tooltip: 'SONDER: Documentation' },
  'config':        { badge: '⚙', tooltip: 'SONDER: Configuration' },
  'configs':       { badge: '⚙', tooltip: 'SONDER: Configuration' },
  '.config':       { badge: '⚙', tooltip: 'SONDER: Configuration' },
  'api':           { badge: 'API', tooltip: 'SONDER: API & Endpoints' },
  'routes':        { badge: 'R',  tooltip: 'SONDER: Routes' },
  'lib':           { badge: 'L',  tooltip: 'SONDER: Library & Utilities' },
  'utils':         { badge: 'U',  tooltip: 'SONDER: Utility Functions' },
  'assets':        { badge: '◆',  tooltip: 'SONDER: Static Assets' },
  'public':        { badge: '◆',  tooltip: 'SONDER: Public Directory' }
};

class SonderFolderDecorationProvider {
  constructor(context) {
    this.context = context;
    this.enabled = true;
    this.directoryCache = new Map();

    this._onDidChangeFileDecorations = new vscode.EventEmitter();
    this.onDidChangeFileDecorations = this._onDidChangeFileDecorations.event;

    this.reloadConfiguration();

    this.disposables = [
      vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('sonder.folderHighlights')) {
          this.reloadConfiguration();
          this._onDidChangeFileDecorations.fire(undefined);
        }
      })
    ];
  }

  reloadConfiguration() {
    const config = vscode.workspace.getConfiguration('sonder.folderHighlights');
    this.enabled = config.get('enabled', true);
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
 * 3. SONDER Icon Theme Synchronization Manager
 * Authoritative, race-condition-free synchronization engine.
 * Guarantees that single theme selection immediately activates matching icon theme.
 * Completely ceases interference when non-SONDER themes are selected, restoring previous icon theme.
 */
class SonderIconThemeSyncManager {
  constructor(context) {
    this.context = context;
    this.enabled = true;
    this._isUpdating = false;
    this._syncSeq = 0;

    this.reloadConfiguration();

    this.disposables = [
      // 1. Authoritative configuration listener for workbench.colorTheme and sonder settings
      vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('workbench.colorTheme')) {
          this.queueSync('config:colorTheme');
        } else if (e.affectsConfiguration('sonder.autoMatchIconTheme') || e.affectsConfiguration('sonder.syncIconTheme')) {
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
    const config = vscode.workspace.getConfiguration('sonder');
    this.enabled = config.get('autoMatchIconTheme', config.get('syncIconTheme', true));
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
    const targetIconThemeId = resolveSonderIconTheme(activeColorTheme);
    const currentIconTheme = workbenchConfig.get('iconTheme');

    // Confirm that this run is still the latest requested sync
    if (seq !== this._syncSeq) {
      return;
    }

    if (targetIconThemeId) {
      // Case A: A SONDER color theme is active
      // Save user's non-SONDER icon theme to restore when leaving SONDER
      if (!isSonderIconTheme(currentIconTheme) && currentIconTheme !== undefined) {
        await this.context.globalState.update('previousNonSonderIconTheme', currentIconTheme);
      }

      // Only update if current icon theme is not already the target
      if (currentIconTheme !== targetIconThemeId) {
        this._isUpdating = true;
        try {
          await workbenchConfig.update('iconTheme', targetIconThemeId, vscode.ConfigurationTarget.Global);
        } catch (err) {
          console.warn(`[SONDER] Could not update iconTheme: ${err.message}`);
        } finally {
          this._isUpdating = false;
        }
      }
    } else {
      // Case B: Non-SONDER color theme is active (e.g. GitHub Dark, Default Dark Modern)
      // If currently using a SONDER icon theme, restore the previously saved non-SONDER icon theme
      if (isSonderIconTheme(currentIconTheme)) {
        const savedNonSonder = this.context.globalState.get('previousNonSonderIconTheme');
        this._isUpdating = true;
        try {
          await workbenchConfig.update('iconTheme', savedNonSonder || undefined, vscode.ConfigurationTarget.Global);
          await this.context.globalState.update('previousNonSonderIconTheme', undefined);
        } catch (err) {
          console.warn(`[SONDER] Could not restore non-SONDER iconTheme: ${err.message}`);
        } finally {
          this._isUpdating = false;
        }
      }
      // Outside SONDER: stop managing icons completely.
    }
  }

  async forceSync() {
    const workbenchConfig = vscode.workspace.getConfiguration('workbench');
    const activeColorTheme = workbenchConfig.get('colorTheme');
    const targetIconThemeId = resolveSonderIconTheme(activeColorTheme);
    if (!targetIconThemeId) {
      vscode.window.showInformationMessage('SONDER: Active color theme is not a SONDER theme family.');
      return;
    }

    this._isUpdating = true;
    try {
      await workbenchConfig.update('iconTheme', targetIconThemeId, vscode.ConfigurationTarget.Global);
      vscode.window.showInformationMessage(
        `SONDER: Applied matching file icon theme (${targetIconThemeId}).`
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
  const nativeCursor = new SonderNativeCursorManager(context);
  context.subscriptions.push(nativeCursor);

  // 2. Themed folder highlights via FileDecorationProvider
  const folderProvider = new SonderFolderDecorationProvider(context);
  const folderReg = vscode.window.registerFileDecorationProvider(folderProvider);
  context.subscriptions.push(folderProvider, folderReg);

  // 3. Authoritative Icon Theme synchronization
  const iconSyncManager = new SonderIconThemeSyncManager(context);
  context.subscriptions.push(iconSyncManager);

  // Commands
  const toggleMotionCmd = vscode.commands.registerCommand('sonder.toggleCursorAnimation', async () => {
    const config = vscode.workspace.getConfiguration('sonder.cursor');
    const current = config.get('animation', true);
    await config.update('animation', !current, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(
      `SONDER Cursor Motion: ${!current ? 'Enabled' : 'Disabled'}`
    );
  });

  const toggleFolderCmd = vscode.commands.registerCommand('sonder.toggleFolderHighlights', async () => {
    const config = vscode.workspace.getConfiguration('sonder.folderHighlights');
    const current = config.get('enabled', true);
    await config.update('enabled', !current, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(
      `SONDER Folder Highlights: ${!current ? 'Enabled' : 'Disabled'}`
    );
  });

  const toggleAutoMatchCmd = vscode.commands.registerCommand('sonder.toggleAutoMatchIconTheme', async () => {
    const config = vscode.workspace.getConfiguration('sonder');
    const current = config.get('autoMatchIconTheme', true);
    await config.update('autoMatchIconTheme', !current, vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage(
      `SONDER Automatic Icon Matching: ${!current ? 'Enabled' : 'Disabled'}`
    );
  });

  const syncIconCmd = vscode.commands.registerCommand('sonder.syncActiveIconTheme', () => {
    iconSyncManager.forceSync();
  });

  context.subscriptions.push(toggleMotionCmd, toggleFolderCmd, toggleAutoMatchCmd, syncIconCmd);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
  resolveSonderIconTheme,
  isSonderIconTheme,
  SONDER_THEME_ID_TO_ICON_THEME,
  SonderIconThemeSyncManager
};
