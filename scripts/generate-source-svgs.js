/**
 * Generates the clean Pierre-inspired master source SVGs
 * with semantic placeholder color tokens:
 * - __PRIMARY__
 * - __SECONDARY__
 * - __FOLDER__
 * - __MUTED__
 * - __ALT__
 */

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../icons/source');
if (!fs.existsSync(SOURCE_DIR)) {
  fs.mkdirSync(SOURCE_DIR, { recursive: true });
}

const svgs = {
  // Generic File
  'file.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__MUTED__" fill-opacity="0.12" stroke="__MUTED__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M9 1.5v3.5h3.5" fill="none" stroke="__MUTED__" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // Default Folder (Closed)
  'folder.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
</svg>`,

  // Default Folder (Open)
  'folder-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
</svg>`,

  // Folder: SRC (Code brackets badge)
  'folder-src.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6 8l-1.5 1.5L6 11M10 8l1.5 1.5L10 11" fill="none" stroke="__PRIMARY__" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  'folder-src-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6.2 9l-1.2 1.2 1.2 1.2M9.8 9l1.2 1.2-1.2 1.2" fill="none" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // Folder: Components (Grid/Puzzle badge)
  'folder-components.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="5.5" y="7.5" width="2.2" height="2.2" rx="0.5" fill="__PRIMARY__"/>
  <rect x="8.3" y="7.5" width="2.2" height="2.2" rx="0.5" fill="__PRIMARY__"/>
  <rect x="5.5" y="10.3" width="2.2" height="2.2" rx="0.5" fill="__PRIMARY__"/>
  <rect x="8.3" y="10.3" width="2.2" height="2.2" rx="0.5" fill="__PRIMARY__" fill-opacity="0.5"/>
</svg>`,

  'folder-components-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="5.8" y="8.8" width="2" height="2" rx="0.4" fill="__PRIMARY__"/>
  <rect x="8.2" y="8.8" width="2" height="2" rx="0.4" fill="__PRIMARY__"/>
  <rect x="7" y="11" width="2" height="2" rx="0.4" fill="__PRIMARY__" fill-opacity="0.6"/>
</svg>`,

  // Folder: Pages/Views
  'folder-pages.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="5.5" y="7.5" width="5" height="4" rx="0.8" fill="none" stroke="__PRIMARY__" stroke-width="1.1"/>
  <line x1="5.5" y1="9" x2="10.5" y2="9" stroke="__PRIMARY__" stroke-width="0.9"/>
</svg>`,

  'folder-pages-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="6" y="9" width="4" height="3.2" rx="0.6" fill="none" stroke="__PRIMARY__" stroke-width="1"/>
</svg>`,

  // Folder: App
  'folder-app.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="9.5" r="2" fill="none" stroke="__PRIMARY__" stroke-width="1.1"/>
  <path d="M8 6.5v1M8 11.5v1M5 9.5h1M10 9.5h1" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  'folder-app-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="10.5" r="1.5" fill="none" stroke="__PRIMARY__" stroke-width="1"/>
</svg>`,

  // Folder: Assets/Images
  'folder-assets.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M5.5 11.5l2-2.5 1.5 1.8 1.5-2 1.5 2.7H4.5" fill="none" stroke="__PRIMARY__" stroke-width="1" stroke-linejoin="round"/>
  <circle cx="6" cy="7.8" r="0.8" fill="__PRIMARY__"/>
</svg>`,

  'folder-assets-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6 12l1.8-2 1.2 1.4 1.5-1.8 1.5 2.4" fill="none" stroke="__PRIMARY__" stroke-width="0.9" stroke-linejoin="round"/>
</svg>`,

  // Folder: Public (Globe)
  'folder-public.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="9.5" r="2.3" fill="none" stroke="__PRIMARY__" stroke-width="1.1"/>
  <line x1="5.7" y1="9.5" x2="10.3" y2="9.5" stroke="__PRIMARY__" stroke-width="0.9"/>
  <ellipse cx="8" cy="9.5" rx="1.1" ry="2.3" fill="none" stroke="__PRIMARY__" stroke-width="0.9"/>
</svg>`,

  'folder-public-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="10.5" r="1.7" fill="none" stroke="__PRIMARY__" stroke-width="0.9"/>
</svg>`,

  // Folder: Tests (Flask)
  'folder-test.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M7.2 7h1.6M8 7v2l1.6 2.5a.8.8 0 01-.7 1.2H7.1a.8.8 0 01-.7-1.2L8 9" fill="none" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  'folder-test-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M7.3 8.8h1.4M8 8.8v1.5l1.3 2a.6.6 0 01-.5 1H7.2a.6.6 0 01-.5-1L8 10.3" fill="none" stroke="__PRIMARY__" stroke-width="1" stroke-linecap="round"/>
</svg>`,

  // Folder: Docs (Open Book)
  'folder-docs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M8 8c-.8-.5-1.8-.6-2.5-.2v3.7c.7-.4 1.7-.3 2.5.2M8 8c.8-.5 1.8-.6 2.5-.2v3.7c-.7-.4-1.7-.3-2.5.2" fill="none" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
</svg>`,

  'folder-docs-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M8 9.5c-.6-.4-1.4-.4-2 0v2.8c.6-.4 1.4-.4 2 0M8 9.5c.6-.4 1.4-.4 2 0v2.8c-.6-.4-1.4-.4-2 0" fill="none" stroke="__PRIMARY__" stroke-width="1" stroke-linejoin="round"/>
</svg>`,

  // Folder: Config (Gear)
  'folder-config.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="9.5" r="1.3" fill="none" stroke="__PRIMARY__" stroke-width="1.1"/>
  <path d="M8 7.3v.7M8 11v.7M5.8 9.5h.7M9.5 9.5h.7M6.5 8l.5.5M9 10.5l.5.5M6.5 11l.5-.5M9 8.5l.5-.5" stroke="__PRIMARY__" stroke-width="1" stroke-linecap="round"/>
</svg>`,

  'folder-config-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="10.5" r="1.1" fill="none" stroke="__PRIMARY__" stroke-width="1"/>
</svg>`,

  // Folder: API
  'folder-api.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M5.5 10.5h5M7 8.5l-1.5 2 1.5 2M9 8.5l1.5 2-1.5 2" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  'folder-api-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6 10.5h4" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  // Folder: Lib/Utils
  'folder-lib.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="5.5" y="7.5" width="1.5" height="4.5" rx="0.3" fill="__PRIMARY__"/>
  <rect x="7.3" y="7.5" width="1.5" height="4.5" rx="0.3" fill="__PRIMARY__"/>
  <path d="M9.8 7.6l1.2 4.4" stroke="__PRIMARY__" stroke-width="1.4" stroke-linecap="round"/>
</svg>`,

  'folder-lib-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="6.5" y="9" width="1.3" height="3.5" rx="0.3" fill="__PRIMARY__"/>
  <rect x="8.2" y="9" width="1.3" height="3.5" rx="0.3" fill="__PRIMARY__"/>
</svg>`,

  // Folder: GitHub
  'folder-github.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="6" cy="11.5" r="1" fill="__PRIMARY__"/>
  <circle cx="6" cy="7.5" r="1" fill="__PRIMARY__"/>
  <circle cx="10" cy="8.5" r="1" fill="__PRIMARY__"/>
  <path d="M6 8.5v2M6 10.5c1 0 2.5-.5 3.5-1.5" fill="none" stroke="__PRIMARY__" stroke-width="1" stroke-linecap="round"/>
</svg>`,

  'folder-github-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="6.5" cy="11.5" r="0.8" fill="__PRIMARY__"/>
  <circle cx="9.5" cy="9.5" r="0.8" fill="__PRIMARY__"/>
  <path d="M6.5 11.5c1 0 2-.8 3-2" fill="none" stroke="__PRIMARY__" stroke-width="0.9"/>
</svg>`,

  // Folder: VS Code (.vscode)
  'folder-vscode.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M10.8 7.2l-4.5 3.3L5 9.5l4-3 1.8.7z" fill="none" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M10.8 7.2v4.6l-1.8.7" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  'folder-vscode-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M10 8.5l-3.5 2.5L5.5 10l3-2.2 1.5.7z" fill="none" stroke="__PRIMARY__" stroke-width="1"/>
</svg>`,

  // Folder: Node Modules (Cube)
  'folder-node.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M8 7l2.8 1.5v3L8 13l-2.8-1.5v-3L8 7z" fill="none" stroke="__MUTED__" stroke-width="1" stroke-linejoin="round"/>
  <path d="M8 7v6M5.2 8.5L8 10l2.8-1.5" stroke="__MUTED__" stroke-width="0.9"/>
</svg>`,

  'folder-node-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M8 8.5l2.2 1.2v2.4L8 13.3l-2.2-1.2V9.7L8 8.5z" fill="none" stroke="__MUTED__" stroke-width="0.9" stroke-linejoin="round"/>
</svg>`,

  // Folder: Dist/Build (Shipping box)
  'folder-dist.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v6.8a1.3 1.3 0 01-1.3 1.3h-10.4a1.3 1.3 0 01-1.3-1.3v-8.7z" fill="__FOLDER__" fill-opacity="0.2" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="5.5" y="8" width="5" height="4" rx="0.5" fill="none" stroke="__ALT__" stroke-width="1.1"/>
  <path d="M7 8v2h2V8" stroke="__ALT__" stroke-width="0.9" fill="none"/>
</svg>`,

  'folder-dist-open.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 3.5a1 1 0 011-1h3.4a1 1 0 01.7.3l1.3 1.3a1 1 0 00.7.3h4.9a1 1 0 011 1v1.5h-11v-4.4z" fill="none" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M1 7h14l-1.5 5.8a1.2 1.2 0 01-1.15.85H3.65a1.2 1.2 0 01-1.15-.85L1 7z" fill="__FOLDER__" fill-opacity="0.28" stroke="__FOLDER__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="6" y="9.5" width="4" height="3" rx="0.4" fill="none" stroke="__ALT__" stroke-width="1"/>
</svg>`,

  // TypeScript (.ts, .mts, .cts)
  'file-ts.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" fill="__PRIMARY__" fill-opacity="0.14" stroke="__PRIMARY__" stroke-width="1.2"/>
  <path d="M3.8 5.5h3.8M5.7 5.5v5.8" stroke="__PRIMARY__" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M12.2 6.5c-.4-.6-1.1-.9-1.8-.7-.6.2-.9.7-.7 1.3.2.5.7.8 1.4 1 .7.2 1.2.6 1.1 1.3-.1.7-.7 1.2-1.5 1.2-.7 0-1.3-.4-1.6-.9" fill="none" stroke="__PRIMARY__" stroke-width="1.4" stroke-linecap="round"/>
</svg>`,

  // JavaScript (.js, .mjs, .cjs)
  'file-js.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" fill="__SECONDARY__" fill-opacity="0.14" stroke="__SECONDARY__" stroke-width="1.2"/>
  <path d="M6 6v4.3c0 .8-.5 1.4-1.3 1.4-.7 0-1.1-.4-1.2-.8" fill="none" stroke="__SECONDARY__" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M12.2 6.5c-.4-.6-1.1-.9-1.8-.7-.6.2-.9.7-.7 1.3.2.5.7.8 1.4 1 .7.2 1.2.6 1.1 1.3-.1.7-.7 1.2-1.5 1.2-.7 0-1.3-.4-1.6-.9" fill="none" stroke="__SECONDARY__" stroke-width="1.4" stroke-linecap="round"/>
</svg>`,

  // React JSX (.jsx)
  'file-react.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <ellipse cx="8" cy="8" rx="6.5" ry="2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.1" transform="rotate(30 8 8)"/>
  <ellipse cx="8" cy="8" rx="6.5" ry="2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.1" transform="rotate(90 8 8)"/>
  <ellipse cx="8" cy="8" rx="6.5" ry="2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.1" transform="rotate(150 8 8)"/>
  <circle cx="8" cy="8" r="1.2" fill="__PRIMARY__"/>
</svg>`,

  // React TSX (.tsx)
  'file-react-ts.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <ellipse cx="8" cy="8" rx="6.5" ry="2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.1" transform="rotate(30 8 8)"/>
  <ellipse cx="8" cy="8" rx="6.5" ry="2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.1" transform="rotate(90 8 8)"/>
  <ellipse cx="8" cy="8" rx="6.5" ry="2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.1" transform="rotate(150 8 8)"/>
  <circle cx="8" cy="8" r="1.3" fill="__PRIMARY__"/>
  <circle cx="12.5" cy="12.5" r="2.3" fill="__SECONDARY__"/>
  <path d="M12.5 11v3M11 12.5h3" stroke="__PRIMARY__" stroke-width="0.8" stroke-linecap="round"/>
</svg>`,

  // HTML (.html, .htm)
  'file-html.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__SECONDARY__" fill-opacity="0.12" stroke="__SECONDARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6 7.5L4.5 9 6 10.5M10 7.5l1.5 1.5-1.5 1.5M8.5 7l-1 4" fill="none" stroke="__SECONDARY__" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // CSS (.css)
  'file-css.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__PRIMARY__" fill-opacity="0.12" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6 7.5h4M5.5 10h4M7 6.5l-.8 4.8M9.8 6.5l-.8 4.8" stroke="__PRIMARY__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  // SASS/SCSS (.scss, .sass, .less)
  'file-sass.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__PRIMARY__" fill-opacity="0.12" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M8 6.5c-1.5 0-2.5 1-2.5 2s1.5 1.5 2.5 1.8c1 .3 1.5.8 1.5 1.4 0 .8-.8 1.3-1.8 1.3-1 0-1.8-.4-2.2-.9" fill="none" stroke="__PRIMARY__" stroke-width="1.2" stroke-linecap="round"/>
</svg>`,

  // JSON (.json, .jsonc)
  'file-json.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__ALT__" fill-opacity="0.12" stroke="__ALT__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M6 7c-.6 0-1 .4-1 1v.5c0 .4-.3.7-.7.7.4 0 .7.3.7.7V10c0 .6.4 1 1 1M10 7c.6 0 1 .4 1 1v.5c0 .4.3.7.7.7-.4 0-.7.3-.7.7V10c0 .6-.4 1-1 1" fill="none" stroke="__ALT__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  // Markdown (.md, .mdx)
  'file-markdown.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect x="2" y="3" width="12" height="10" rx="1.5" fill="__MUTED__" fill-opacity="0.14" stroke="__MUTED__" stroke-width="1.1"/>
  <path d="M4 10.5V6.8l1.7 2.1 1.7-2.1v3.7M11 6.8v3.7M9.8 9.2l1.2 1.3 1.2-1.3" fill="none" stroke="__MUTED__" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // Python (.py, .pyw, .ipynb)
  'file-python.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M8 1.8c-2.3 0-2.2 1-2.2 1v1.1h4.4v.5H5.8c-1.5 0-2.8.9-2.8 2.4 0 1.6 1.1 2.4 2.5 2.4h.8v-1.1c0-1.4 1.2-2.4 2.5-2.4h2.2V4.4c0-1.3-1.2-2.6-3-2.6zm-1.2.9a.5.5 0 110 1 .5.5 0 010-1z" fill="__PRIMARY__"/>
  <path d="M8 14.2c2.3 0 2.2-1 2.2-1v-1.1H5.8v-.5h4.4c1.5 0 2.8-.9 2.8-2.4 0-1.6-1.1-2.4-2.5-2.4h-.8v1.1c0 1.4-1.2 2.4-2.5 2.4H5V11.6c0 1.3 1.2 2.6 3 2.6zm1.2-.9a.5.5 0 110-1 .5.5 0 010 1z" fill="__SECONDARY__"/>
</svg>`,

  // Rust (.rs)
  'file-rust.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <circle cx="8" cy="8" r="6" fill="none" stroke="__PRIMARY__" stroke-width="1.2"/>
  <path d="M5.5 11.5V5.5h2.8c1.3 0 2 .7 2 1.8 0 1-.7 1.7-1.8 1.7H5.5M8.2 9l2.3 2.5" fill="none" stroke="__PRIMARY__" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // Go (.go)
  'file-go.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M6.8 6.5C6.4 5.9 5.6 5.5 4.7 5.5 3.2 5.5 2 6.6 2 8.2s1.2 2.7 2.7 2.7c1.2 0 2.1-.7 2.3-1.7H4.8" fill="none" stroke="__PRIMARY__" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.5" cy="8.2" r="2.7" fill="none" stroke="__PRIMARY__" stroke-width="1.3"/>
</svg>`,

  // Java / Kotlin (.java, .kt)
  'file-java.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__ALT__" fill-opacity="0.12" stroke="__ALT__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M5 8.5h4.5a1.5 1.5 0 011.5 1.5v.5a2 2 0 01-2 2H6.5a2 2 0 01-2-2V8.5z" fill="none" stroke="__ALT__" stroke-width="1.1"/>
  <path d="M11 9.2a1 1 0 011 1v0a1 1 0 01-1 1M6.5 6.5c.5-.7 1-.7 1.5 0M8 5c.5-.7 1-.7 1.5 0" stroke="__ALT__" stroke-width="0.9" stroke-linecap="round"/>
</svg>`,

  // C / C++ / C# (.c, .cpp, .cs)
  'file-cpp.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__PRIMARY__" fill-opacity="0.12" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M7.5 7.8c-.4-.5-1-.8-1.7-.8-1.3 0-2.3 1-2.3 2.5s1 2.5 2.3 2.5c.7 0 1.3-.3 1.7-.8" fill="none" stroke="__PRIMARY__" stroke-width="1.3" stroke-linecap="round"/>
  <path d="M9.5 8.5v2M8.5 9.5h2M12.5 8.5v2M11.5 9.5h2" stroke="__PRIMARY__" stroke-width="1" stroke-linecap="round"/>
</svg>`,

  // PHP (.php)
  'file-php.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <ellipse cx="8" cy="8" rx="6.5" ry="4" fill="__PRIMARY__" fill-opacity="0.14" stroke="__PRIMARY__" stroke-width="1.2"/>
  <path d="M4 9.5V6.5h1.8c.8 0 1.2.4 1.2 1s-.4 1-1.2 1H4M8 6.5v3M8 8h1.5a1 1 0 011 1v.5M12 9.5V6.5h1.8c.8 0 1.2.4 1.2 1s-.4 1-1.2 1H12" stroke="__PRIMARY__" stroke-width="0.9" stroke-linecap="round"/>
</svg>`,

  // Ruby (.rb)
  'file-ruby.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M4 4.5l8-2 2 3-6 7.5-6-5.5 2-3z" fill="__PRIMARY__" fill-opacity="0.16" stroke="__PRIMARY__" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M4 4.5l4 8.5 6-7.5M4 4.5h10" stroke="__PRIMARY__" stroke-width="0.9" stroke-linejoin="round"/>
</svg>`,

  // Swift (.swift)
  'file-swift.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M13.5 12.5C12 14 9.2 14 7 13c-2.3-1-3.8-3.2-4.5-5.5 1.5 1.2 3.5 1.8 5.5 1.5-1.5-.9-2.7-2.3-3.2-3.8C6.5 7 8.8 8.2 11 8c-1.5-1.2-2.5-3-2.8-5 3.5 2.5 5.8 6.2 5.3 9.5z" fill="__PRIMARY__" fill-opacity="0.2" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
</svg>`,

  // Shell / Bash (.sh, .bash, .zsh)
  'file-shell.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect x="2" y="3" width="12" height="10" rx="1.5" fill="__MUTED__" fill-opacity="0.12" stroke="__MUTED__" stroke-width="1.1"/>
  <path d="M4.5 6.5l2 1.5-2 1.5M7.5 10.5h3.5" fill="none" stroke="__PRIMARY__" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // YAML (.yaml, .yml)
  'file-yaml.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__ALT__" fill-opacity="0.12" stroke="__ALT__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M5.5 6.8l1.8 2.5v2.2M9.2 6.8L7.3 9.3" fill="none" stroke="__ALT__" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // TOML (.toml)
  'file-toml.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__MUTED__" fill-opacity="0.12" stroke="__MUTED__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M5 7h4M7 7v4.5" stroke="__MUTED__" stroke-width="1.3" stroke-linecap="round"/>
</svg>`,

  // XML / SVG (.xml, .svg)
  'file-xml.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__PRIMARY__" fill-opacity="0.12" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="9.5" r="2.2" fill="none" stroke="__PRIMARY__" stroke-width="1.1"/>
  <circle cx="8" cy="7.3" r="0.8" fill="__PRIMARY__"/>
  <circle cx="9.9" cy="10.6" r="0.8" fill="__PRIMARY__"/>
  <circle cx="6.1" cy="10.6" r="0.8" fill="__PRIMARY__"/>
</svg>`,

  // SQL / DB (.sql, .db, .sqlite)
  'file-sql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <ellipse cx="8" cy="4.5" rx="4.5" ry="1.8" fill="none" stroke="__ALT__" stroke-width="1.1"/>
  <path d="M3.5 4.5v7c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8v-7M3.5 8c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8" fill="none" stroke="__ALT__" stroke-width="1.1"/>
</svg>`,

  // Docker (Dockerfile, docker-compose)
  'file-docker.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M1.5 8.5C2.5 6 5 6 5 6V4h2v2h2V4h2v4.5c1.8 0 3.5.8 4 2.5-1.5 1.5-4 1.5-6.5 1-2.5-.5-4.5 0-5.5 1-.6-.6-1-1.8-1-4.5z" fill="__PRIMARY__" fill-opacity="0.18" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <rect x="4" y="6.8" width="1.2" height="1.2" fill="__PRIMARY__"/>
  <rect x="6" y="6.8" width="1.2" height="1.2" fill="__PRIMARY__"/>
  <rect x="8" y="6.8" width="1.2" height="1.2" fill="__PRIMARY__"/>
</svg>`,

  // Git (.gitignore, .gitattributes)
  'file-git.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M14.2 7.2l-5.4-5.4a1.2 1.2 0 00-1.7 0L1.8 7.2a1.2 1.2 0 000 1.7l5.4 5.4a1.2 1.2 0 001.7 0l5.3-5.4a1.2 1.2 0 000-1.7z" fill="__ALT__" fill-opacity="0.15" stroke="__ALT__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="5.5" r="1" fill="__ALT__"/>
  <circle cx="8" cy="10.5" r="1" fill="__ALT__"/>
  <circle cx="10.5" cy="8" r="1" fill="__ALT__"/>
  <path d="M8 6.5v3M8 8.5c.8 0 1.5-.2 2-.5" fill="none" stroke="__ALT__" stroke-width="0.9"/>
</svg>`,

  // Package / NPM (package.json, lockfiles)
  'file-package.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M8 2.2l5 2.8v6l-5 2.8-5-2.8v-6l5-2.8z" fill="__PRIMARY__" fill-opacity="0.15" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M8 2.2v11.6M3 5l5 2.8 5-2.8" stroke="__PRIMARY__" stroke-width="1" stroke-linejoin="round"/>
</svg>`,

  // Settings / Config (tsconfig, etc.)
  'file-settings.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__MUTED__" fill-opacity="0.12" stroke="__MUTED__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="8" cy="9.5" r="1.5" fill="none" stroke="__MUTED__" stroke-width="1.1"/>
  <path d="M8 7v1M8 11v1M5.5 9.5h1M9.5 9.5h1" stroke="__MUTED__" stroke-width="1" stroke-linecap="round"/>
</svg>`,

  // Environment (.env)
  'file-env.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__ALT__" fill-opacity="0.12" stroke="__ALT__" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="7" cy="9.5" r="1.5" fill="none" stroke="__ALT__" stroke-width="1.1"/>
  <path d="M8.5 9.5h3v1.5h-1v1h-1" stroke="__ALT__" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // Images (png, jpg, etc.)
  'file-image.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect x="2" y="2.5" width="12" height="11" rx="1.5" fill="__PRIMARY__" fill-opacity="0.12" stroke="__PRIMARY__" stroke-width="1.1"/>
  <circle cx="5.5" cy="5.8" r="1" fill="__PRIMARY__"/>
  <path d="M3 11.5l3-3.5 2.5 2.5 2.5-3 3 4" fill="none" stroke="__PRIMARY__" stroke-width="1" stroke-linejoin="round"/>
</svg>`,

  // Media / Audio / Video (.mp3, .mp4, etc.)
  'file-media.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <circle cx="8" cy="8" r="6" fill="__SECONDARY__" fill-opacity="0.14" stroke="__SECONDARY__" stroke-width="1.1"/>
  <path d="M7 5.5l4 2.5-4 2.5V5.5z" fill="__SECONDARY__"/>
</svg>`,

  // Fonts (.woff, .woff2, .ttf)
  'file-font.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__MUTED__" fill-opacity="0.12" stroke="__MUTED__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M5.5 11.5l2.5-5.5 2.5 5.5M6.2 10h3.6" fill="none" stroke="__MUTED__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  // Security / Keys / Lock (.pem, .key)
  'file-lock.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect x="3.5" y="6.5" width="9" height="7" rx="1.5" fill="__ALT__" fill-opacity="0.15" stroke="__ALT__" stroke-width="1.1"/>
  <path d="M5.5 6.5V4.5a2.5 2.5 0 015 0v2" fill="none" stroke="__ALT__" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="8" cy="10" r="1" fill="__ALT__"/>
</svg>`,

  // General Document (.pdf, .txt)
  'file-document.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__MUTED__" fill-opacity="0.12" stroke="__MUTED__" stroke-width="1.1" stroke-linejoin="round"/>
  <line x1="5.5" y1="7.5" x2="10.5" y2="7.5" stroke="__MUTED__" stroke-width="1.1" stroke-linecap="round"/>
  <line x1="5.5" y1="9.5" x2="9.5" y2="9.5" stroke="__MUTED__" stroke-width="1.1" stroke-linecap="round"/>
  <line x1="5.5" y1="11.5" x2="8" y2="11.5" stroke="__MUTED__" stroke-width="1.1" stroke-linecap="round"/>
</svg>`,

  // Test File (*.test.js, *.spec.ts)
  'file-test.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M3.5 1.5h5.5l3.5 3.5v8a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 011.5-1.5z" fill="__PRIMARY__" fill-opacity="0.12" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M7 6.5h2M8 6.5v2l1.6 2.3a.6.6 0 01-.5 1H6.9a.6.6 0 01-.5-1L8 8.5" fill="none" stroke="__PRIMARY__" stroke-width="1" stroke-linecap="round"/>
</svg>`,

  // Vue (.vue)
  'file-vue.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <polygon points="8,13 1.5,3.5 4.5,3.5 8,9 11.5,3.5 14.5,3.5" fill="__PRIMARY__" fill-opacity="0.2" stroke="__PRIMARY__" stroke-width="1.1" stroke-linejoin="round"/>
  <polygon points="8,9.5 5,4.5 6.8,4.5 8,6.8 9.2,4.5 11,4.5" fill="__SECONDARY__"/>
</svg>`,

  // Svelte (.svelte)
  'file-svelte.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <path d="M11.5 4.5c-1-1.5-3.3-1.8-4.8-.8L4.3 5.4C3.2 6.2 2.6 7.6 2.9 8.9c.2.9.8 1.6 1.6 2l-1.3.8C2 12.5 1.7 13.9 2.5 15c1 1.5 3.3 1.8 4.8.8l2.4-1.7c1.1-.8 1.7-2.2 1.4-3.5-.2-.9-.8-1.6-1.6-2l1.3-.8c1.2-.8 1.5-2.2.7-3.3z" fill="__ALT__" fill-opacity="0.18" stroke="__ALT__" stroke-width="1.1" stroke-linejoin="round"/>
</svg>`,

  // GraphQL (.graphql, .gql)
  'file-graphql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <circle cx="8" cy="2.5" r="1.1" fill="__PRIMARY__"/>
  <circle cx="13" cy="5.5" r="1.1" fill="__PRIMARY__"/>
  <circle cx="13" cy="11.5" r="1.1" fill="__PRIMARY__"/>
  <circle cx="8" cy="14.5" r="1.1" fill="__PRIMARY__"/>
  <circle cx="3" cy="11.5" r="1.1" fill="__PRIMARY__"/>
  <circle cx="3" cy="5.5" r="1.1" fill="__PRIMARY__"/>
  <polygon points="8,2.5 13,5.5 13,11.5 8,14.5 3,11.5 3,5.5" fill="none" stroke="__PRIMARY__" stroke-width="0.9"/>
  <polygon points="8,4.5 12,10.5 4,10.5" fill="none" stroke="__PRIMARY__" stroke-width="0.8"/>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(SOURCE_DIR, filename), content.trim() + '\n', 'utf8');
}

console.log(`Generated ${Object.keys(svgs).length} source SVG templates in icons/source/`);

