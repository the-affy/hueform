/**
 * SONDER Adaptive Color Utilities
 * Mathematical color operations, conversions, blending, and contrast checking.
 */

// Convert HEX string to [r, g, b] (0-255)
function hexToRgb(hex) {
  let clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const num = parseInt(clean.slice(0, 6), 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

// Convert [r, g, b] to 6-digit uppercase HEX string
function rgbToHex(r, g, b) {
  const clamp = v => Math.max(0, Math.min(255, Math.round(v)));
  const toHex = v => clamp(v).toString(16).padStart(2, '0').toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Convert RGB (0-255) to HSL ([h (0-360), s (0-1), l (0-1)])
function rgbToHsl(r, g, b) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) * 60;
        break;
      case gNorm:
        h = ((bNorm - rNorm) / delta + 2) * 60;
        break;
      case bNorm:
        h = ((rNorm - gNorm) / delta + 4) * 60;
        break;
    }
  }

  return [h, s, l];
}

// Convert HSL to RGB (0-255)
function hslToRgb(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let rPrime = 0;
  let gPrime = 0;
  let bPrime = 0;

  if (h >= 0 && h < 60) {
    rPrime = c; gPrime = x; bPrime = 0;
  } else if (h >= 60 && h < 120) {
    rPrime = x; gPrime = c; bPrime = 0;
  } else if (h >= 120 && h < 180) {
    rPrime = 0; gPrime = c; bPrime = x;
  } else if (h >= 180 && h < 240) {
    rPrime = 0; gPrime = x; bPrime = c;
  } else if (h >= 240 && h < 300) {
    rPrime = x; gPrime = 0; bPrime = c;
  } else if (h >= 300 && h < 360) {
    rPrime = c; gPrime = 0; bPrime = x;
  }

  return [
    Math.round((rPrime + m) * 255),
    Math.round((gPrime + m) * 255),
    Math.round((bPrime + m) * 255)
  ];
}

// Adjust lightness of a hex color by a delta (-1 to 1)
function adjustLightness(hex, delta) {
  const [r, g, b] = hexToRgb(hex);
  const [h, s, l] = rgbToHsl(r, g, b);
  const newL = Math.max(0, Math.min(1, l + delta));
  const [newR, newG, newB] = hslToRgb(h, s, newL);
  return rgbToHex(newR, newG, newB);
}

// Adjust saturation of a hex color by a delta (-1 to 1)
function adjustSaturation(hex, delta) {
  const [r, g, b] = hexToRgb(hex);
  const [h, s, l] = rgbToHsl(r, g, b);
  const newS = Math.max(0, Math.min(1, s + delta));
  const [newR, newG, newB] = hslToRgb(h, newS, l);
  return rgbToHex(newR, newG, newB);
}

// Blend two hex colors together by weight (0 = all hex1, 1 = all hex2)
function mix(hex1, hex2, weight = 0.5) {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const w = Math.max(0, Math.min(1, weight));
  const r = r1 * (1 - w) + r2 * w;
  const g = g1 * (1 - w) + g2 * w;
  const b = b1 * (1 - w) + b2 * w;
  return rgbToHex(r, g, b);
}

// Append 2-digit alpha channel to a hex code (e.g. '88' or 0.5 -> '80')
function withAlpha(hex, alpha) {
  const clean = hex.startsWith('#') ? hex.slice(0, 7) : `#${hex.slice(0, 6)}`;
  if (typeof alpha === 'number') {
    const clamped = Math.max(0, Math.min(1, alpha));
    const hexAlpha = Math.round(clamped * 255).toString(16).padStart(2, '0').toUpperCase();
    return `${clean}${hexAlpha}`;
  }
  const str = String(alpha).replace('#', '').toUpperCase();
  return `${clean}${str.padStart(2, '0').slice(-2)}`;
}

// Relative luminance (WCAG definition)
function relativeLuminance(rgb) {
  const [r, g, b] = rgb.map(val => {
    const s = val / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Contrast ratio between two colors (1:1 to 21:1)
function contrastRatio(hex1, hex2) {
  const lum1 = relativeLuminance(hexToRgb(hex1));
  const lum2 = relativeLuminance(hexToRgb(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

module.exports = {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  adjustLightness,
  adjustSaturation,
  mix,
  withAlpha,
  relativeLuminance,
  contrastRatio
};

