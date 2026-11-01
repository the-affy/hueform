/**
 * SONDER Icon Theme Generator
 * Automates:
 * 1. Loading source SVG templates from icons/source/
 * 2. Applying semantic color transformations for each of the 11 SONDER families across Dark & Light
 * 3. Auditing and optimizing contrast against respective family sidebar and explorer surfaces
 * 4. Generating dark and light SVGs in icons/generated/<family>/{dark,light}/
 * 5. Emitting 22 distinct VS Code icon theme JSONs in icons/themes/sonder-<family>-icons-{dark,light}.json
 */

const fs = require('fs');
const path = require('path');
const { PALETTE_DEFINITIONS } = require('../themes/palette-system');
const { contrastRatio, adjustLightness } = require('../themes/color-utils');

const SOURCE_DIR = path.join(__dirname, '../icons/source');
const GENERATED_DIR = path.join(__dirname, '../icons/generated');
const THEMES_DIR = path.join(__dirname, '../icons/themes');

[GENERATED_DIR, THEMES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Clean existing icon theme JSON files in THEMES_DIR
const existingThemeFiles = fs.readdirSync(THEMES_DIR).filter(f => f.endsWith('.json'));
for (const f of existingThemeFiles) {
  fs.unlinkSync(path.join(THEMES_DIR, f));
}

// Read all master SVG templates
const templateFiles = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.svg'));
const templates = {};
for (const file of templateFiles) {
  templates[file] = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
}

console.log(`Loaded ${Object.keys(templates).length} source SVG templates.`);

// Define icon mappings
const FOLDER_NAMES = {
  'src': 'folder-src',
  'source': 'folder-src',
  'components': 'folder-components',
  'cmp': 'folder-components',
  'pages': 'folder-pages',
  'views': 'folder-pages',
  'app': 'folder-app',
  'assets': 'folder-assets',
  'static': 'folder-assets',
  'images': 'folder-assets',
  'img': 'folder-assets',
  'public': 'folder-public',
  'test': 'folder-test',
  'tests': 'folder-test',
  '__tests__': 'folder-test',
  'spec': 'folder-test',
  'specs': 'folder-test',
  'docs': 'folder-docs',
  'doc': 'folder-docs',
  'documentation': 'folder-docs',
  'config': 'folder-config',
  'configs': 'folder-config',
  '.config': 'folder-config',
  'api': 'folder-api',
  'routes': 'folder-api',
  'endpoints': 'folder-api',
  'lib': 'folder-lib',
  'library': 'folder-lib',
  'utils': 'folder-lib',
  'helpers': 'folder-lib',
  '.github': 'folder-github',
  '.vscode': 'folder-vscode',
  'node_modules': 'folder-node',
  'dist': 'folder-dist',
  'build': 'folder-dist',
  'out': 'folder-dist',
  '.next': 'folder-dist',
  '.nuxt': 'folder-dist'
};

const FILE_EXTENSIONS = {
  'js': 'file-js',
  'mjs': 'file-js',
  'cjs': 'file-js',
  'ts': 'file-ts',
  'mts': 'file-ts',
  'cts': 'file-ts',
  'jsx': 'file-react',
  'tsx': 'file-react-ts',
  'html': 'file-html',
  'htm': 'file-html',
  'css': 'file-css',
  'scss': 'file-sass',
  'sass': 'file-sass',
  'less': 'file-sass',
  'json': 'file-json',
  'jsonc': 'file-json',
  'md': 'file-markdown',
  'mdx': 'file-markdown',
  'markdown': 'file-markdown',
  'py': 'file-python',
  'pyw': 'file-python',
  'ipynb': 'file-python',
  'rs': 'file-rust',
  'go': 'file-go',
  'java': 'file-java',
  'kt': 'file-java',
  'kts': 'file-java',
  'c': 'file-cpp',
  'cpp': 'file-cpp',
  'cc': 'file-cpp',
  'cxx': 'file-cpp',
  'h': 'file-cpp',
  'hpp': 'file-cpp',
  'cs': 'file-cpp',
  'php': 'file-php',
  'rb': 'file-ruby',
  'swift': 'file-swift',
  'sh': 'file-shell',
  'bash': 'file-shell',
  'zsh': 'file-shell',
  'fish': 'file-shell',
  'yaml': 'file-yaml',
  'yml': 'file-yaml',
  'toml': 'file-toml',
  'xml': 'file-xml',
  'svg': 'file-xml',
  'sql': 'file-sql',
  'db': 'file-sql',
  'sqlite': 'file-sql',
  'png': 'file-image',
  'jpg': 'file-image',
  'jpeg': 'file-image',
  'gif': 'file-image',
  'ico': 'file-image',
  'webp': 'file-image',
  'avif': 'file-image',
  'mp3': 'file-media',
  'mp4': 'file-media',
  'wav': 'file-media',
  'ogg': 'file-media',
  'webm': 'file-media',
  'woff': 'file-font',
  'woff2': 'file-font',
  'ttf': 'file-font',
  'otf': 'file-font',
  'pem': 'file-lock',
  'key': 'file-lock',
  'cert': 'file-lock',
  'crt': 'file-lock',
  'pdf': 'file-document',
  'vue': 'file-vue',
  'svelte': 'file-svelte',
  'graphql': 'file-graphql',
  'gql': 'file-graphql'
};

const FILE_NAMES = {
  'dockerfile': 'file-docker',
  'Dockerfile': 'file-docker',
  'docker-compose.yml': 'file-docker',
  'docker-compose.yaml': 'file-docker',
  '.dockerignore': 'file-docker',
  '.gitignore': 'file-git',
  '.gitattributes': 'file-git',
  '.gitmodules': 'file-git',
  'package.json': 'file-package',
  'package-lock.json': 'file-package',
  'pnpm-lock.yaml': 'file-package',
  'yarn.lock': 'file-package',
  'tsconfig.json': 'file-settings',
  'tsconfig.node.json': 'file-settings',
  'jsconfig.json': 'file-settings',
  '.eslintrc': 'file-settings',
  '.eslintrc.json': 'file-settings',
  '.eslintrc.js': 'file-settings',
  'eslint.config.js': 'file-settings',
  'eslint.config.mjs': 'file-settings',
  '.prettierrc': 'file-settings',
  '.prettierrc.json': 'file-settings',
  'prettier.config.js': 'file-settings',
  'vite.config.js': 'file-settings',
  'vite.config.ts': 'file-settings',
  'webpack.config.js': 'file-settings',
  'next.config.js': 'file-settings',
  'tailwind.config.js': 'file-settings',
  '.env': 'file-env',
  '.env.local': 'file-env',
  '.env.development': 'file-env',
  '.env.production': 'file-env',
  '.env.example': 'file-env',
  'README.md': 'file-document',
  'readme.md': 'file-document',
  'CHANGELOG.md': 'file-document',
  'changelog.md': 'file-document',
  'LICENSE': 'file-document',
  'license': 'file-document'
};

function ensureContrast(color, background, minRatio = 3.5, isDarkBackground = true) {
  let adjusted = color;
  let ratio = contrastRatio(adjusted, background);
  let step = isDarkBackground ? 0.03 : -0.03;
  let attempts = 0;
  while (ratio < minRatio && attempts < 15) {
    adjusted = adjustLightness(adjusted, step);
    ratio = contrastRatio(adjusted, background);
    attempts++;
  }
  return adjusted;
}

const generatedThemes = [];

// Process each family
for (const family of PALETTE_DEFINITIONS) {
  const familyId = family.id;
  const familyDir = path.join(GENERATED_DIR, familyId);
  const darkDir = path.join(familyDir, 'dark');
  const lightDir = path.join(familyDir, 'light');

  [darkDir, lightDir].forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  const darkSidebarBg = family.dark.palette.deep;
  const lightSidebarBg = family.light.palette.surface;

  // Dark Tokens
  const darkTokens = {
    '__PRIMARY__': ensureContrast(family.dark.accent, darkSidebarBg, 3.5, true),
    '__SECONDARY__': ensureContrast(family.dark.accentSecondary, darkSidebarBg, 3.5, true),
    '__FOLDER__': ensureContrast(family.dark.accent, darkSidebarBg, 3.5, true),
    '__MUTED__': ensureContrast(family.dark.palette.primary, darkSidebarBg, 3.5, true),
    '__ALT__': ensureContrast(family.dark.syntax.str, darkSidebarBg, 3.5, true)
  };

  // Light Tokens (Deliberately darker and stronger variants of family colors)
  const lightTokens = {
    '__PRIMARY__': ensureContrast(family.light.accent, lightSidebarBg, 3.8, false),
    '__SECONDARY__': ensureContrast(family.light.accentSecondary, lightSidebarBg, 3.8, false),
    '__FOLDER__': ensureContrast(family.light.accent, lightSidebarBg, 3.8, false),
    '__MUTED__': ensureContrast(family.light.palette.primary, lightSidebarBg, 3.8, false),
    '__ALT__': ensureContrast(family.light.syntax.str, lightSidebarBg, 3.8, false)
  };

  // Generate SVGs
  for (const [filename, content] of Object.entries(templates)) {
    let darkContent = content;
    for (const [token, val] of Object.entries(darkTokens)) {
      darkContent = darkContent.split(token).join(val);
    }
    fs.writeFileSync(path.join(darkDir, filename), darkContent, 'utf8');

    let lightContent = content;
    for (const [token, val] of Object.entries(lightTokens)) {
      lightContent = lightContent.split(token).join(val);
    }
    fs.writeFileSync(path.join(lightDir, filename), lightContent, 'utf8');
  }

  // Helper to construct theme JSON for a specific variant ('dark' or 'light')
  function createVariantThemeJson(variant) {
    const iconDefinitions = {};

    for (const templateName of Object.keys(templates)) {
      const baseId = templateName.replace('.svg', '');
      iconDefinitions[`_${baseId}`] = {
        iconPath: `../generated/${familyId}/${variant}/${templateName}`
      };
    }

    const folderNames = {};
    const folderNamesExpanded = {};
    for (const [folderName, baseIcon] of Object.entries(FOLDER_NAMES)) {
      folderNames[folderName] = `_${baseIcon}`;
      folderNamesExpanded[folderName] = `_${baseIcon}-open`;
    }

    const fileExts = {};
    for (const [ext, baseIcon] of Object.entries(FILE_EXTENSIONS)) {
      fileExts[ext] = `_${baseIcon}`;
    }

    const fileNames = {};
    for (const [fname, baseIcon] of Object.entries(FILE_NAMES)) {
      fileNames[fname] = `_${baseIcon}`;
    }

    return {
      iconDefinitions,
      file: '_file',
      folder: '_folder',
      folderExpanded: '_folder-open',
      folderNames,
      folderNamesExpanded,
      fileExtensions: fileExts,
      fileNames,
      light: {
        file: '_file',
        folder: '_folder',
        folderExpanded: '_folder-open',
        folderNames,
        folderNamesExpanded,
        fileExtensions: fileExts,
        fileNames
      }
    };
  }

  // 1. Dark Theme JSON
  const darkThemeJson = createVariantThemeJson('dark');
  const darkThemeFileName = `sonder-${familyId}-icons-dark.json`;
  fs.writeFileSync(path.join(THEMES_DIR, darkThemeFileName), JSON.stringify(darkThemeJson, null, 2), 'utf8');
  generatedThemes.push({
    id: `sonder-${familyId}-icons-dark`,
    label: `SONDER ${family.name} Icons Dark`,
    path: `./icons/themes/${darkThemeFileName}`
  });

  // 2. Light Theme JSON
  const lightThemeJson = createVariantThemeJson('light');
  const lightThemeFileName = `sonder-${familyId}-icons-light.json`;
  fs.writeFileSync(path.join(THEMES_DIR, lightThemeFileName), JSON.stringify(lightThemeJson, null, 2), 'utf8');
  generatedThemes.push({
    id: `sonder-${familyId}-icons-light`,
    label: `SONDER ${family.name} Icons Light`,
    path: `./icons/themes/${lightThemeFileName}`
  });
}

console.log(`Successfully generated ${generatedThemes.length} SONDER Icon Themes in icons/themes/`);

module.exports = { generatedThemes };
