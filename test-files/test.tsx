/**
 * SONDER Theme — React TSX test file
 * Covers: functional components, hooks, events, conditional rendering, lists, types
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  type FC,
  type ReactNode,
  type MouseEvent,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PaletteColor {
  id:           string;
  name:         string;
  japaneseName: string;
  hex:          string;
  role:         'primary' | 'secondary' | 'background' | 'semantic';
  contrast:     number;
}

interface SwatchProps {
  color:    PaletteColor;
  selected: boolean;
  onSelect: (id: string) => void;
  size?:    'sm' | 'md' | 'lg';
}

interface PaletteGridProps {
  colors:    PaletteColor[];
  title?:    string;
  children?: ReactNode;
}

type CursorMode = 'living' | 'static';

// ─── Constants ────────────────────────────────────────────────────────────────

const SONDER_COLORS: PaletteColor[] = [
  { id: 'ai',     name: 'Ai',     japaneseName: '藍', hex: '#2E2D67', role: 'primary',    contrast: 3.2  },
  { id: 'fuji',   name: 'Fuji',   japaneseName: '藤', hex: '#B37DD3', role: 'primary',    contrast: 4.7  },
  { id: 'uguisu', name: 'Uguisu', japaneseName: '鶯', hex: '#C4C43F', role: 'primary',    contrast: 5.5  },
  { id: 'kure',   name: 'Kure',   japaneseName: '紅', hex: '#F72BB4', role: 'primary',    contrast: 4.5  },
  { id: 'shiro',  name: 'Shiro',  japaneseName: '白', hex: '#E6E8FB', role: 'primary',    contrast: 14.8 },
  { id: 'bg',     name: 'Bg',     japaneseName: '背', hex: '#0D0D1A', role: 'background', contrast: 1.0  },
];

const SIZE_CLASS: Record<NonNullable<SwatchProps['size']>, string> = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

// ─── Swatch Component ─────────────────────────────────────────────────────────

const Swatch: FC<SwatchProps> = ({ color, selected, onSelect, size = 'md' }) => {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onSelect(color.id);
    },
    [color.id, onSelect]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(color.id);
      }
    },
    [color.id, onSelect]
  );

  return (
    <button
      className={`${SIZE_CLASS[size]} rounded-md border-2 transition-all ${
        selected
          ? 'border-white scale-110 shadow-lg'
          : 'border-transparent hover:border-gray-400'
      }`}
      style={{ backgroundColor: color.hex }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Select ${color.name} (${color.japaneseName}) — ${color.hex}`}
      aria-pressed={selected}
      title={`${color.japaneseName} ${color.name}: ${color.hex}`}
    />
  );
};

// ─── Palette Grid Component ───────────────────────────────────────────────────

const PaletteGrid: FC<PaletteGridProps> = ({ colors, title, children }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedColor = useMemo(
    () => colors.find(c => c.id === selectedId) ?? null,
    [colors, selectedId]
  );

  const handleSelect = useCallback((id: string) => {
    setSelectedId(prev => (prev === id ? null : id));
  }, []);

  return (
    <div className="palette-grid" role="group" aria-label={title ?? 'Color palette'}>
      {title && <h2 className="palette-title">{title}</h2>}

      <div className="flex flex-wrap gap-4 p-4">
        {colors.map(color => (
          <div key={color.id} className="flex flex-col items-center gap-1">
            <Swatch
              color={color}
              selected={selectedId === color.id}
              onSelect={handleSelect}
              size="lg"
            />
            <span className="text-xs font-mono text-gray-400">{color.japaneseName}</span>
            <span className="text-xs text-gray-500">{color.hex}</span>
          </div>
        ))}
      </div>

      {selectedColor && (
        <div className="color-detail" aria-live="polite">
          <ColorDetail color={selectedColor} />
        </div>
      )}

      {children}
    </div>
  );
};

// ─── Color Detail ─────────────────────────────────────────────────────────────

const ColorDetail: FC<{ color: PaletteColor }> = ({ color }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const copyHex = async () => {
    await navigator.clipboard.writeText(color.hex);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="color-detail-card" style={{ borderColor: color.hex }}>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded"
          style={{ backgroundColor: color.hex }}
          aria-hidden="true"
        />
        <div>
          <p className="text-lg font-semibold">
            {color.japaneseName} — {color.name}
          </p>
          <p className="text-sm text-gray-400">{color.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <code className="font-mono text-sm bg-gray-800 px-2 py-1 rounded">
          {color.hex}
        </code>
        <button
          onClick={copyHex}
          className="text-xs px-2 py-1 rounded border border-gray-600 hover:border-gray-400"
          aria-label={`Copy ${color.hex}`}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      <div className="mt-2 text-sm text-gray-400">
        Contrast ratio: <strong>{color.contrast}:1</strong>
        {color.contrast >= 4.5
          ? <span className="text-green-400 ml-2">✓ AA</span>
          : <span className="text-yellow-400 ml-2">⚠ below AA</span>}
      </div>
    </div>
  );
};

// ─── Living Cursor Toggle ─────────────────────────────────────────────────────

interface CursorToggleProps {
  initial?: CursorMode;
  onChange?: (mode: CursorMode) => void;
}

const CursorToggle: FC<CursorToggleProps> = ({ initial = 'living', onChange }) => {
  const [mode, setMode] = useState<CursorMode>(initial);

  const toggle = useCallback(() => {
    const next: CursorMode = mode === 'living' ? 'static' : 'living';
    setMode(next);
    onChange?.(next);
  }, [mode, onChange]);

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={mode === 'living'}
        onChange={toggle}
        className="sr-only"
        aria-label="Toggle living cursor"
      />
      <div
        className={`w-10 h-6 rounded-full transition-colors ${
          mode === 'living' ? 'bg-purple-600' : 'bg-gray-700'
        }`}
        aria-hidden="true"
      >
        <div
          className={`w-4 h-4 rounded-full bg-white mt-1 transition-transform ${
            mode === 'living' ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </div>
      <span className="text-sm">
        {mode === 'living' ? '藤 Living Cursor' : 'Static Cursor'}
      </span>
    </label>
  );
};

// ─── Search / Filter ──────────────────────────────────────────────────────────

const PaletteSearch: FC<{ onFilter: (colors: PaletteColor[]) => void }> = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    const filtered = SONDER_COLORS.filter(
      c =>
        c.name.toLowerCase().includes(val.toLowerCase()) ||
        c.japaneseName.includes(val) ||
        c.hex.toLowerCase().includes(val.toLowerCase())
    );
    onFilter(filtered);
  };

  return (
    <input
      type="search"
      value={query}
      onChange={handleChange}
      placeholder="Search colors..."
      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500"
      aria-label="Search palette colors"
    />
  );
};

// ─── App Root ─────────────────────────────────────────────────────────────────

const SonderPaletteApp: FC = () => {
  const [filteredColors, setFilteredColors] = useState<PaletteColor[]>(SONDER_COLORS);
  const [cursorMode, setCursorMode] = useState<CursorMode>('living');

  useEffect(() => {
    document.title = `SONDER Theme Preview`;
  }, [cursorMode]);

  const primaryColors = useMemo(
    () => filteredColors.filter(c => c.role === 'primary'),
    [filteredColors]
  );

  return (
    <main className="min-h-screen bg-[#0D0D1A] text-[#E6E8FB] p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">
          SONDER
        </h1>
        <p className="mt-2 text-gray-400">Every theme has a character of its own</p>
      </header>

      <section className="mb-6">
        <CursorToggle onChange={setCursorMode} />
      </section>

      <section className="mb-6">
        <PaletteSearch onFilter={setFilteredColors} />
      </section>

      {filteredColors.length === 0 ? (
        <p className="text-gray-500 italic">No colors match your search.</p>
      ) : (
        <PaletteGrid colors={primaryColors} title="Primary Palette">
          <p className="text-xs text-gray-600 mt-4">
            {primaryColors.length} colors shown
          </p>
        </PaletteGrid>
      )}
    </main>
  );
};

export default SonderPaletteApp;
export { Swatch, PaletteGrid, ColorDetail, CursorToggle, SONDER_COLORS };
export type { PaletteColor, SwatchProps, CursorMode };
