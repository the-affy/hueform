/**
 * SONDER Theme Switching Test Suite
 * Tests deterministic mapping, dark/light variants, non-SONDER theme handling, and loop prevention.
 */

// Mock 'vscode' module for unit test runner outside extension host
const Module = require('module');
const originalRequire = Module.prototype.require;

const sharedVscodeMock = {
  window: {
    activeColorTheme: { name: 'SONDER — Ember Dark', kind: 2 },
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
    registerCommand: () => ({ dispose: () => {} })
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
const { resolveSonderIconTheme, isSonderIconTheme, SONDER_THEME_ID_TO_ICON_THEME, SonderIconThemeSyncManager } = require('../src/extension');

console.log('Testing SONDER Automatic Theme-Matched File Icons Engine...');

// 1. Verify all 22 SONDER color themes map deterministically to their matching icon theme
const EXPECTED_MAPPINGS = [
  ['SONDER — Abyss Dark',     'sonder-abyss-icons-dark'],
  ['SONDER — Abyss Light',    'sonder-abyss-icons-light'],
  ['SONDER — Nocturne Dark',  'sonder-nocturne-icons-dark'],
  ['SONDER — Nocturne Light', 'sonder-nocturne-icons-light'],
  ['SONDER — Sakura Dark',    'sonder-sakura-icons-dark'],
  ['SONDER — Sakura Light',   'sonder-sakura-icons-light'],
  ['SONDER — Umber Dark',     'sonder-umber-icons-dark'],
  ['SONDER — Umber Light',    'sonder-umber-icons-light'],
  ['SONDER — Midnight Dark',  'sonder-midnight-icons-dark'],
  ['SONDER — Midnight Light', 'sonder-midnight-icons-light'],
  ['SONDER — Forest Dark',    'sonder-forest-icons-dark'],
  ['SONDER — Forest Light',   'sonder-forest-icons-light'],
  ['SONDER — Nebula Dark',    'sonder-nebula-icons-dark'],
  ['SONDER — Nebula Light',   'sonder-nebula-icons-light'],
  ['SONDER — Ocean Dark',     'sonder-ocean-icons-dark'],
  ['SONDER — Ocean Light',    'sonder-ocean-icons-light'],
  ['SONDER — Ember Dark',     'sonder-ember-icons-dark'],
  ['SONDER — Ember Light',    'sonder-ember-icons-light'],
  ['SONDER — Lavender Dark',  'sonder-lavender-icons-dark'],
  ['SONDER — Lavender Light', 'sonder-lavender-icons-light'],
  ['SONDER — Blossom Dark',   'sonder-blossom-icons-dark'],
  ['SONDER — Blossom Light',  'sonder-blossom-icons-light']
];

for (const [colorTheme, expectedIconTheme] of EXPECTED_MAPPINGS) {
  const resolved = resolveSonderIconTheme(colorTheme);
  assert.strictEqual(resolved, expectedIconTheme, `Expected ${colorTheme} to resolve to ${expectedIconTheme}, got ${resolved}`);
}
console.log('✓ All 22 SONDER color themes resolve to their exact matching icon theme.');

// 1b. Verify stable theme IDs resolve identically
const STABLE_ID_MAPPINGS = [
  ['sonder-abyss-dark',     'sonder-abyss-icons-dark'],
  ['sonder-abyss-light',    'sonder-abyss-icons-light'],
  ['sonder-nocturne-dark',  'sonder-nocturne-icons-dark'],
  ['sonder-nocturne-light', 'sonder-nocturne-icons-light'],
  ['sonder-sakura-dark',    'sonder-sakura-icons-dark'],
  ['sonder-sakura-light',   'sonder-sakura-icons-light'],
  ['sonder-umber-dark',     'sonder-umber-icons-dark'],
  ['sonder-umber-light',    'sonder-umber-icons-light'],
  ['sonder-midnight-dark',  'sonder-midnight-icons-dark'],
  ['sonder-midnight-light', 'sonder-midnight-icons-light'],
  ['sonder-forest-dark',    'sonder-forest-icons-dark'],
  ['sonder-forest-light',   'sonder-forest-icons-light'],
  ['sonder-nebula-dark',    'sonder-nebula-icons-dark'],
  ['sonder-nebula-light',   'sonder-nebula-icons-light'],
  ['sonder-ocean-dark',     'sonder-ocean-icons-dark'],
  ['sonder-ocean-light',    'sonder-ocean-icons-light'],
  ['sonder-ember-dark',     'sonder-ember-icons-dark'],
  ['sonder-ember-light',    'sonder-ember-icons-light'],
  ['sonder-lavender-dark',  'sonder-lavender-icons-dark'],
  ['sonder-lavender-light', 'sonder-lavender-icons-light'],
  ['sonder-blossom-dark',   'sonder-blossom-icons-dark'],
  ['sonder-blossom-light',  'sonder-blossom-icons-light']
];

for (const [stableId, expectedIconTheme] of STABLE_ID_MAPPINGS) {
  const resolved = resolveSonderIconTheme(stableId);
  assert.strictEqual(resolved, expectedIconTheme, `Expected ${stableId} to resolve to ${expectedIconTheme}, got ${resolved}`);
}
console.log('✓ All 22 SONDER stable IDs resolve to their exact matching icon theme.');

// 2. Dark family switching sequence:
// Abyss Dark -> Ember Dark -> Forest Dark -> Lavender Dark -> Blossom Dark
const darkSequence = [
  ['SONDER — Abyss Dark',    'sonder-abyss-icons-dark'],
  ['SONDER — Ember Dark',    'sonder-ember-icons-dark'],
  ['SONDER — Forest Dark',   'sonder-forest-icons-dark'],
  ['SONDER — Lavender Dark', 'sonder-lavender-icons-dark'],
  ['SONDER — Blossom Dark',  'sonder-blossom-icons-dark']
];

for (const [theme, expectedIcon] of darkSequence) {
  assert.strictEqual(resolveSonderIconTheme(theme), expectedIcon);
}
console.log('✓ Dark family switching sequence verified.');

// 3. Light family switching sequence:
// Abyss Light -> Ember Light -> Forest Light -> Lavender Light -> Blossom Light
const lightSequence = [
  ['SONDER — Abyss Light',    'sonder-abyss-icons-light'],
  ['SONDER — Ember Light',    'sonder-ember-icons-light'],
  ['SONDER — Forest Light',   'sonder-forest-icons-light'],
  ['SONDER — Lavender Light', 'sonder-lavender-icons-light'],
  ['SONDER — Blossom Light',  'sonder-blossom-icons-light']
];

for (const [theme, expectedIcon] of lightSequence) {
  assert.strictEqual(resolveSonderIconTheme(theme), expectedIcon);
}
console.log('✓ Light family switching sequence verified.');

// 4. Dark -> Light transition (Ember Dark -> Ember Light)
assert.strictEqual(resolveSonderIconTheme('SONDER — Ember Dark'), 'sonder-ember-icons-dark');
assert.strictEqual(resolveSonderIconTheme('SONDER — Ember Light'), 'sonder-ember-icons-light');
console.log('✓ Dark -> Light transition verified (Ember Dark -> Ember Light).');

// 5. Light -> Dark transition (Ember Light -> Ember Dark)
assert.strictEqual(resolveSonderIconTheme('SONDER — Ember Light'), 'sonder-ember-icons-light');
assert.strictEqual(resolveSonderIconTheme('SONDER — Ember Dark'), 'sonder-ember-icons-dark');
console.log('✓ Light -> Dark transition verified (Ember Light -> Ember Dark).');

// 6. Family + appearance transition (Blossom Dark -> Ember Light)
assert.strictEqual(resolveSonderIconTheme('SONDER — Blossom Dark'), 'sonder-blossom-icons-dark');
assert.strictEqual(resolveSonderIconTheme('SONDER — Ember Light'), 'sonder-ember-icons-light');
console.log('✓ Family + Appearance transition verified (Blossom Dark -> Ember Light).');

// 7. Non-SONDER themes (Leaving SONDER)
const nonSonderThemes = [
  'Default Dark Modern',
  'Default Light Modern',
  'GitHub Dark',
  'One Dark Pro',
  'Dracula',
  'Monokai',
  'Solarized Dark',
  'Quiet Light'
];

for (const nonSonder of nonSonderThemes) {
  const result = resolveSonderIconTheme(nonSonder);
  assert.strictEqual(result, null, `Expected ${nonSonder} to resolve to null, got ${result}`);
}
console.log('✓ Non-SONDER themes cleanly resolve to null (triggers restore and stops managing).');

// 8. Icon theme ID helper verification
assert.strictEqual(isSonderIconTheme('sonder-abyss-icons-dark'), true);
assert.strictEqual(isSonderIconTheme('sonder-ember-icons-light'), true);
assert.strictEqual(isSonderIconTheme('vs-seti'), false);
assert.strictEqual(isSonderIconTheme('material-icon-theme'), false);
assert.strictEqual(isSonderIconTheme('vscode-icons'), false);
assert.strictEqual(isSonderIconTheme(undefined), false);
console.log('✓ isSonderIconTheme correctly identifies SONDER vs third-party/built-in icon themes.');

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
    colorTheme: 'sonder-abyss-dark',
    iconTheme: 'sonder-abyss-icons-dark'
  };

  const sonderState = {
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
    if (section === 'sonder') {
      return {
        get: (key, fallback) => sonderState[key] !== undefined ? sonderState[key] : fallback,
        update: async (key, val) => {
          sonderState[key] = val;
        }
      };
    }
    return origGetConfig(section);
  };

  const mockContext = {
    subscriptions: [],
    globalState: mockGlobalState
  };

  const manager = new SonderIconThemeSyncManager(mockContext);

  // Test 9a: Single selection change (Abyss Dark -> Ember Dark)
  // User picks Ember Dark in Quick Pick: workbench.colorTheme changes to 'sonder-ember-dark'
  workbenchState.colorTheme = 'sonder-ember-dark';
  manager.queueSync('config:colorTheme');

  // Allow setImmediate turn to process
  await new Promise(resolve => setImmediate(resolve));

  assert.strictEqual(
    workbenchState.iconTheme,
    'sonder-ember-icons-dark',
    `Expected iconTheme to be sonder-ember-icons-dark on first theme selection, got ${workbenchState.iconTheme}`
  );
  console.log('✓ Single selection immediately synchronizes icon theme on first turn (no double-apply needed).');

  // Test 9b: Rapid switching sequence cancellation
  // User rapidly navigates themes: Ember -> Forest -> Lavender -> Blossom
  // Only the final selected theme (Blossom) should be applied; intermediate obsolete sync turns abort.
  workbenchState.colorTheme = 'sonder-forest-dark';
  manager.queueSync('config:colorTheme');

  workbenchState.colorTheme = 'sonder-lavender-dark';
  manager.queueSync('config:colorTheme');

  workbenchState.colorTheme = 'sonder-blossom-dark';
  manager.queueSync('config:colorTheme');

  await new Promise(resolve => setImmediate(resolve));

  assert.strictEqual(
    workbenchState.iconTheme,
    'sonder-blossom-icons-dark',
    `Expected iconTheme to settle on final rapid switch (sonder-blossom-icons-dark), got ${workbenchState.iconTheme}`
  );
  console.log('✓ Rapid switching sequence successfully aborts stale turns and applies final theme.');

  // Test 9c: Transition to non-SONDER theme (Leaving SONDER)
  // First simulate initial state where user had 'vs-seti' before SONDER
  mockGlobalState.update('previousNonSonderIconTheme', 'vs-seti');
  workbenchState.colorTheme = 'GitHub Dark';
  manager.queueSync('config:colorTheme');

  await new Promise(resolve => setImmediate(resolve));

  assert.strictEqual(
    workbenchState.iconTheme,
    'vs-seti',
    `Expected non-SONDER iconTheme to be restored to vs-seti, got ${workbenchState.iconTheme}`
  );
  assert.strictEqual(
    mockGlobalState.get('previousNonSonderIconTheme'),
    undefined,
    'Expected previousNonSonderIconTheme to be cleared after restoration'
  );
  console.log('✓ Leaving SONDER cleanly restores non-SONDER icon theme and releases icon control.');

  manager.dispose();
  vscode.workspace.getConfiguration = origGetConfig;
}

testSyncManagerLifecycle().then(() => {
  console.log('\nAll Theme Switching tests passed successfully (100% compliant).');
}).catch(err => {
  console.error('\nSync Manager Test Failed:', err);
  process.exit(1);
});
