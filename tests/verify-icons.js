/**
 * Verification test for SONDER Icon Themes
 * - Verifies all 22 icon theme JSON files exist and are valid JSON.
 * - Verifies that every single iconPath referenced in iconDefinitions exists on disk.
 * - Verifies that all mapped folderNames and fileExtensions point to existing definitions.
 * - Verifies that light overrides match definitions.
 */

const fs = require('fs');
const path = require('path');

const THEMES_DIR = path.join(__dirname, '../icons/themes');
const themeFiles = fs.readdirSync(THEMES_DIR).filter(f => f.endsWith('.json'));

if (themeFiles.length !== 22) {
  console.error(`Expected 22 theme files, found ${themeFiles.length}`);
  process.exit(1);
}

let totalIconChecks = 0;
let errors = 0;

for (const tf of themeFiles) {
  const fullPath = path.join(THEMES_DIR, tf);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  const defs = data.iconDefinitions;
  if (!defs || Object.keys(defs).length === 0) {
    console.error(`Theme ${tf} has no iconDefinitions!`);
    errors++;
  }

  // Check each file on disk
  for (const [defKey, defObj] of Object.entries(defs)) {
    totalIconChecks++;
    const resolvedPath = path.resolve(THEMES_DIR, defObj.iconPath);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`Theme ${tf}: iconPath for ${defKey} does not exist at ${resolvedPath}`);
      errors++;
    }
  }

  // Check that all folder and file mapping references exist in iconDefinitions
  const checkRef = (ref, section) => {
    if (!defs[ref]) {
      console.error(`Theme ${tf}: reference ${ref} in ${section} is not in iconDefinitions!`);
      errors++;
    }
  };

  checkRef(data.file, 'file');
  checkRef(data.folder, 'folder');
  checkRef(data.folderExpanded, 'folderExpanded');

  for (const [k, v] of Object.entries(data.folderNames || {})) {
    checkRef(v, `folderNames.${k}`);
  }
  for (const [k, v] of Object.entries(data.folderNamesExpanded || {})) {
    checkRef(v, `folderNamesExpanded.${k}`);
  }
  for (const [k, v] of Object.entries(data.fileExtensions || {})) {
    checkRef(v, `fileExtensions.${k}`);
  }
  for (const [k, v] of Object.entries(data.fileNames || {})) {
    checkRef(v, `fileNames.${k}`);
  }

  if (data.light) {
    checkRef(data.light.file, 'light.file');
    checkRef(data.light.folder, 'light.folder');
    checkRef(data.light.folderExpanded, 'light.folderExpanded');
    for (const [k, v] of Object.entries(data.light.folderNames || {})) {
      checkRef(v, `light.folderNames.${k}`);
    }
    for (const [k, v] of Object.entries(data.light.folderNamesExpanded || {})) {
      checkRef(v, `light.folderNamesExpanded.${k}`);
    }
    for (const [k, v] of Object.entries(data.light.fileExtensions || {})) {
      checkRef(v, `light.fileExtensions.${k}`);
    }
    for (const [k, v] of Object.entries(data.light.fileNames || {})) {
      checkRef(v, `light.fileNames.${k}`);
    }
  }
}

console.log(`Verified ${themeFiles.length} themes, ${totalIconChecks} icon paths.`);
if (errors > 0) {
  console.error(`Verification FAILED with ${errors} errors.`);
  process.exit(1);
} else {
  console.log(`Verification PASSED: 100% of icon paths exist across all 22 themes.`);
}
