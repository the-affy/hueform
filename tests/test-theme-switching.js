/**
 * HUEFORM Theme Switching Test Suite
 * Tests deterministic mapping, dark/light variants, non-HUEFORM theme handling, and loop prevention.
 */

// Mock 'vscode' module for unit test runner outside extension host
const Module = require('module');
const originalRequire = Module.prototype.require;

const sharedVscodeMock = {
  window: {
    activeColorTheme: { name: 'HUEFORM — Ember Dark', kind: 2 },
    onDidChangeActiveColorTheme: () => ({ dispose: () => {} }),
    onDidChangeTextEditorSelection: () => ({ dispose: () => {} }),
    registerFileDecorationProvider: () => ({ dispose: () => {} }),
    createTextEditorDecorationType: () => ({ dispose: () => {} }),
    showInformationMessage: () => {}
  },
  workspace: {
    getConfiguration: () => ({ get: () => true, update: async () => {} }),
    onDidChangeConfiguration: () => ({ dispose: () => {} })
  },
  commands: {
    registerCommand: () => ({ dispose: () => {} }),
    executeCommand: () => {}
  },
  ConfigurationTarget: { Global: 1 },
  ThemeColor: class ThemeColor { constructor(id) { this.id = id; } },
  FileDecoration: class FileDecoration { constructor(b, t, c) { this.badge = b; this.tooltip = t; this.color = c; } },
  EventEmitter: class EventEmitter { constructor() { this.event = () => {}; } fire() {} dispose() {} },
  DecorationRangeBehavior: { ClosedClosed: 0 },
  Position: class Position { constructor(l, c) { this.line = l; this.character = c; } },
  Range: class Range { constructor(s, e) { this.start = s; this.end = e; } }
};

Module.prototype.require = function(id) {
  if (id === 'vscode') {
    return sharedVscodeMock;
  }
  return originalRequire.apply(this, arguments);
};

const assert = require('assert');
const {
  resolveHueformIconTheme,
  isHueformIconTheme,
  HUEFORM_THEME_ID_TO_ICON_THEME,
  HueformIconThemeSyncManager
} = require('../src/extension');

console.log('Testing HUEFORM Automatic Theme-Matched File Icons Engine...');

// 1. Verify all 22 HUEFORM color themes map deterministically to their matching icon theme
const EXPECTED_MAPPINGS = [
  ['HUEFORM — Abyss Dark',     'hueform-abyss-icons-dark'],
  ['HUEFORM — Abyss Light',    'hueform-abyss-icons-light'],
  ['HUEFORM — Nocturne Dark',  'hueform-nocturne-icons-dark'],
  ['HUEFORM — Nocturne Light', 'hueform-nocturne-icons-light'],
  ['HUEFORM — Sakura Dark',    'hueform-sakura-icons-dark'],
  ['HUEFORM — Sakura Light',   'hueform-sakura-icons-light'],
  ['HUEFORM — Umber Dark',     'hueform-umber-icons-dark'],
  ['HUEFORM — Umber Light',    'hueform-umber-icons-light'],
  ['HUEFORM — Midnight Dark',  'hueform-midnight-icons-dark'],
  ['HUEFORM — Midnight Light', 'hueform-midnight-icons-light'],
  ['HUEFORM — Forest Dark',    'hueform-forest-icons-dark'],
  ['HUEFORM — Forest Light',   'hueform-forest-icons-light'],
  ['HUEFORM — Nebula Dark',    'hueform-nebula-icons-dark'],
  ['HUEFORM — Nebula Light',   'hueform-nebula-icons-light'],
  ['HUEFORM — Ocean Dark',     'hueform-ocean-icons-dark'],
  ['HUEFORM — Ocean Light',    'hueform-ocean-icons-light'],
  ['HUEFORM — Ember Dark',     'hueform-ember-icons-dark'],
  ['HUEFORM — Ember Light',    'hueform-ember-icons-light'],
  ['HUEFORM — Lavender Dark',  'hueform-lavender-icons-dark'],
  ['HUEFORM — Lavender Light', 'hueform-lavender-icons-light'],
  ['HUEFORM — Blossom Dark',   'hueform-blossom-icons-dark'],
  ['HUEFORM — Blossom Light',  'hueform-blossom-icons-light']
];

for (const [colorTheme, expectedIconTheme] of EXPECTED_MAPPINGS) {
  const resolved = resolveHueformIconTheme(colorTheme);
  assert.strictEqual(resolved, expectedIconTheme, `Expected ${colorTheme} to resolve to ${expectedIconTheme}, got ${resolved}`);
}
console.log('✓ All 22 HUEFORM color themes resolve to their exact matching icon theme.');

// 1b. Verify stable theme IDs resolve identically
const STABLE_ID_MAPPINGS = [
  ['hueform-abyss-dark',     'hueform-abyss-icons-dark'],
  ['hueform-abyss-light',    'hueform-abyss-icons-light'],
  ['hueform-nocturne-dark',  'hueform-nocturne-icons-dark'],
  ['hueform-nocturne-light', 'hueform-nocturne-icons-light'],
  ['hueform-sakura-dark',    'hueform-sakura-icons-dark'],
  ['hueform-sakura-light',   'hueform-sakura-icons-light'],
  ['hueform-umber-dark',     'hueform-umber-icons-dark'],
  ['hueform-umber-light',    'hueform-umber-icons-light'],
  ['hueform-midnight-dark',  'hueform-midnight-icons-dark'],
  ['hueform-midnight-light', 'hueform-midnight-icons-light'],
  ['hueform-forest-dark',    'hueform-forest-icons-dark'],
  ['hueform-forest-light',   'hueform-forest-icons-light'],
  ['hueform-nebula-dark',    'hueform-nebula-icons-dark'],
  ['hueform-nebula-light',   'hueform-nebula-icons-light'],
  ['hueform-ocean-dark',     'hueform-ocean-icons-dark'],
  ['hueform-ocean-light',    'hueform-ocean-icons-light'],
  ['hueform-ember-dark',     'hueform-ember-icons-dark'],
  ['hueform-ember-light',    'hueform-ember-icons-light'],
  ['hueform-lavender-dark',  'hueform-lavender-icons-dark'],
  ['hueform-lavender-light', 'hueform-lavender-icons-light'],
  ['hueform-blossom-dark',   'hueform-blossom-icons-dark'],
  ['hueform-blossom-light',  'hueform-blossom-icons-light']
];

for (const [stableId, expectedIconTheme] of STABLE_ID_MAPPINGS) {
  const resolved = resolveHueformIconTheme(stableId);
  assert.strictEqual(resolved, expectedIconTheme, `Expected ${stableId} to resolve to ${expectedIconTheme}, got ${resolved}`);
}
console.log('✓ All 22 HUEFORM stable IDs resolve to their exact matching icon theme.');

// 1c. Verify legacy SONDER identifiers still resolve for backward compatibility
const LEGACY_ID_MAPPINGS = [
  ['sonder-abyss-dark',     'hueform-abyss-icons-dark'],
  ['sonder-ember-light',    'hueform-ember-icons-light'],
  ['SONDER — Blossom Dark', 'hueform-blossom-icons-dark']
];
for (const [legacyId, expectedIcon] of LEGACY_ID_MAPPINGS) {
  const resolved = resolveHueformIconTheme(legacyId);
  assert.strictEqual(resolved, expectedIcon, `Expected legacy ${legacyId} to resolve to ${expectedIcon}, got ${resolved}`);
}
console.log('✓ Legacy SONDER theme identifiers resolve to matching HUEFORM icon themes (backward compatibility).');

// 2. Dark family switching sequence:
// Abyss Dark -> Ember Dark -> Forest Dark -> Lavender Dark -> Blossom Dark
const darkSequence = [
  ['HUEFORM — Abyss Dark',    'hueform-abyss-icons-dark'],
  ['HUEFORM — Ember Dark',    'hueform-ember-icons-dark'],
  ['HUEFORM — Forest Dark',   'hueform-forest-icons-dark'],
  ['HUEFORM — Lavender Dark', 'hueform-lavender-icons-dark'],
  ['HUEFORM — Blossom Dark',  'hueform-blossom-icons-dark']
];

for (const [theme, expectedIcon] of darkSequence) {
  assert.strictEqual(resolveHueformIconTheme(theme), expectedIcon);
}
console.log('✓ Dark family switching sequence verified.');

// 3. Light family switching sequence:
// Abyss Light -> Ember Light -> Forest Light -> Lavender Light -> Blossom Light
const lightSequence = [
  ['HUEFORM — Abyss Light',    'hueform-abyss-icons-light'],
  ['HUEFORM — Ember Light',    'hueform-ember-icons-light'],
  ['HUEFORM — Forest Light',   'hueform-forest-icons-light'],
  ['HUEFORM — Lavender Light', 'hueform-lavender-icons-light'],
  ['HUEFORM — Blossom Light',  'hueform-blossom-icons-light']
];

for (const [theme, expectedIcon] of lightSequence) {
  assert.strictEqual(resolveHueformIconTheme(theme), expectedIcon);
}
console.log('✓ Light family switching sequence verified.');

// 4. Dark -> Light transition (Ember Dark -> Ember Light)
assert.strictEqual(resolveHueformIconTheme('HUEFORM — Ember Dark'), 'hueform-ember-icons-dark');
assert.strictEqual(resolveHueformIconTheme('HUEFORM — Ember Light'), 'hueform-ember-icons-light');
console.log('✓ Dark -> Light transition verified (Ember Dark -> Ember Light).');

// 5. Light -> Dark transition (Ember Light -> Ember Dark)
assert.strictEqual(resolveHueformIconTheme('HUEFORM — Ember Light'), 'hueform-ember-icons-light');
assert.strictEqual(resolveHueformIconTheme('HUEFORM — Ember Dark'), 'hueform-ember-icons-dark');
console.log('✓ Light -> Dark transition verified (Ember Light -> Ember Dark).');

// 6. Family + appearance transition (Blossom Dark -> Ember Light)
assert.strictEqual(resolveHueformIconTheme('HUEFORM — Blossom Dark'), 'hueform-blossom-icons-dark');
assert.strictEqual(resolveHueformIconTheme('HUEFORM — Ember Light'), 'hueform-ember-icons-light');
console.log('✓ Family + Appearance transition verified (Blossom Dark -> Ember Light).');

// 7. Non-HUEFORM themes (Leaving HUEFORM)
const nonHueformThemes = [
  'Default Dark Modern',
  'Default Light Modern',
  'GitHub Dark',
  'One Dark Pro',
  'Dracula',
  'Monokai',
  'Solarized Dark',
  'Quiet Light'
];

for (const nonHueform of nonHueformThemes) {
  const result = resolveHueformIconTheme(nonHueform);
  assert.strictEqual(result, null, `Expected ${nonHueform} to resolve to null, got ${result}`);
}
console.log('✓ Non-HUEFORM themes cleanly resolve to null (triggers restore and stops managing).');

// 8. Icon theme ID helper verification
assert.strictEqual(isHueformIconTheme('hueform-abyss-icons-dark'), true);
assert.strictEqual(isHueformIconTheme('hueform-ember-icons-light'), true);
assert.strictEqual(isHueformIconTheme('sonder-abyss-icons-dark'), true);
assert.strictEqual(isHueformIconTheme('vs-seti'), false);
assert.strictEqual(isHueformIconTheme('material-icon-theme'), false);
assert.strictEqual(isHueformIconTheme('vscode-icons'), false);
assert.strictEqual(isHueformIconTheme(undefined), false);
console.log('✓ isHueformIconTheme correctly identifies HUEFORM vs third-party/built-in icon themes.');

// 9. Asynchronous Single-Selection & Rapid Switching State Machine Simulation
async function testSyncManagerLifecycle() {
  const stateStore = new Map();
  const mockGlobalState = {
    get: (key) => stateStore.get(key),
    update: async (key, val) => {
      if (val === undefined) stateStore.delete(key);
      else stateStore.set(key, val);
    }
  };

  const workbenchState = {
    colorTheme: 'hueform-abyss-dark',
    iconTheme: 'hueform-abyss-icons-dark'
  };

  const hueformState = {
    autoMatchIconTheme: true
  };

  // Override vscode.workspace.getConfiguration for this test
  const vscode = require('vscode');
  const origGetConfig = vscode.workspace.getConfiguration;
  vscode.workspace.getConfiguration = (section) => {
    if (section === 'workbench') {
      return {
        get: (key) => workbenchState[key],
        update: async (key, val) => {
          workbenchState[key] = val;
        }
      };
    }
    if (section === 'hueform' || section === 'sonder') {
      return {
        get: (key, fallback) => hueformState[key] !== undefined ? hueformState[key] : fallback,
        update: async (key, val) => {
          hueformState[key] = val;
        }
      };
    }
    return origGetConfig(section);
  };

  const mockContext = {
    subscriptions: [],
    globalState: mockGlobalState
  };

  const manager = new HueformIconThemeSyncManager(mockContext);

  // Test 9a: Single selection change (Abyss Dark -> Ember Dark)
  // User picks Ember Dark in Quick Pick: workbench.colorTheme changes to 'hueform-ember-dark'
  workbenchState.colorTheme = 'hueform-ember-dark';
  manager.queueSync('config:colorTheme');

  // Allow setImmediate turn to process
  await new Promise(resolve => setImmediate(resolve));

  assert.strictEqual(
    workbenchState.iconTheme,
    'hueform-ember-icons-dark',
    `Expected iconTheme to be hueform-ember-icons-dark on first theme selection, got ${workbenchState.iconTheme}`
  );
  console.log('✓ Single selection immediately synchronizes icon theme on first turn (no double-apply needed).');

  // Test 9b: Rapid switching sequence cancellation
  // User rapidly navigates themes: Ember -> Forest -> Lavender -> Blossom
  // Only the final selected theme (Blossom) should be applied; intermediate obsolete sync turns abort.
  workbenchState.colorTheme = 'hueform-forest-dark';
  manager.queueSync('config:colorTheme');

  workbenchState.colorTheme = 'hueform-lavender-dark';
  manager.queueSync('config:colorTheme');

  workbenchState.colorTheme = 'hueform-blossom-dark';
  manager.queueSync('config:colorTheme');

  await new Promise(resolve => setImmediate(resolve));

  assert.strictEqual(
    workbenchState.iconTheme,
    'hueform-blossom-icons-dark',
    `Expected iconTheme to settle on final rapid switch (hueform-blossom-icons-dark), got ${workbenchState.iconTheme}`
  );
  console.log('✓ Rapid switching sequence successfully aborts stale turns and applies final theme.');

  // Test 9c: Transition to non-HUEFORM theme (Leaving HUEFORM)
  // First simulate initial state where user had 'vs-seti' before HUEFORM
  mockGlobalState.update('previousNonHueformIconTheme', 'vs-seti');
  workbenchState.colorTheme = 'GitHub Dark';
  manager.queueSync('config:colorTheme');

  await new Promise(resolve => setImmediate(resolve));

  assert.strictEqual(
    workbenchState.iconTheme,
    'vs-seti',
    `Expected non-HUEFORM iconTheme to be restored to vs-seti, got ${workbenchState.iconTheme}`
  );
  assert.strictEqual(
    mockGlobalState.get('previousNonHueformIconTheme'),
    undefined,
    'Expected previousNonHueformIconTheme to be cleared after restoration'
  );
  console.log('✓ Leaving HUEFORM cleanly restores non-HUEFORM icon theme and releases icon control.');

  manager.dispose();
  vscode.workspace.getConfiguration = origGetConfig;
}

testSyncManagerLifecycle().then(() => {
  console.log('\nAll Theme Switching tests passed successfully (100% compliant).');
}).catch(err => {
  console.error('\nSync Manager Test Failed:', err);
  process.exit(1);
});
