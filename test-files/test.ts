/**
 * @fileoverview HUEFORM Theme — TypeScript test file
 * @description Covers the full TypeScript grammar for theme preview.
 * @author HUEFORM Theme Contributors
 * @version 2.0.0
 */

import { EventEmitter } from 'events';
import type { ReadonlyDeep } from 'type-fest';

// ─── Enums ──────────────────────────────────────────────────────────────────

enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East  = 'EAST',
  West  = 'WEST',
}

const enum Status {
  Idle    = 0,
  Loading = 1,
  Ready   = 2,
  Error   = 3,
}

// ─── Type Aliases & Conditional Types ────────────────────────────────────────

type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Awaited<T>  = T extends Promise<infer R> ? R : T;
type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };
type NonNullableProps<T> = { [K in keyof T]-?: NonNullable<T[K]> };

// Mapped type with template literal key
type Prefixed<T, P extends string> = {
  [K in keyof T as `${P}${Capitalize<string & K>}`]: T[K];
};

// ─── Interfaces ──────────────────────────────────────────────────────────────

interface Identifiable {
  readonly id: string;
  readonly createdAt: Date;
}

interface Nameable {
  name: string;
  displayName?: string;
}

interface ColorEntry extends Identifiable, Nameable {
  hex: string;
  rgb: { r: number; g: number; b: number };
  japaneseName: string;
  meaning: string;
  tags: ReadonlyArray<string>;
}

interface Repository<T extends Identifiable> {
  findById(id: string): Promise<Nullable<T>>;
  findAll(filter?: Partial<T>): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

// ─── Generic Class ───────────────────────────────────────────────────────────

/**
 * A generic in-memory repository implementation.
 * @template T must be {@link Identifiable}
 */
class InMemoryRepository<T extends Identifiable> implements Repository<T> {
  private readonly store = new Map<string, T>();

  async findById(id: string): Promise<Nullable<T>> {
    return this.store.get(id) ?? null;
  }

  async findAll(filter?: Partial<T>): Promise<T[]> {
    const all = [...this.store.values()];
    if (!filter) return all;
    return all.filter(item =>
      Object.entries(filter).every(
        ([key, val]) => item[key as keyof T] === val
      )
    );
  }

  async save(entity: T): Promise<T> {
    this.store.set(entity.id, entity);
    return entity;
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }

  get size(): number {
    return this.store.size;
  }
}

// ─── Decorators (JSDoc-style for compatibility) ───────────────────────────────

/** @decorator — marks a method as deprecated */
function deprecated(message: string) {
  return function <T extends object>(
    _target: T,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const original = descriptor.value as (...args: unknown[]) => unknown;
    descriptor.value = function (...args: unknown[]) {
      console.warn(`[DEPRECATED] ${propertyKey}: ${message}`);
      return original.apply(this, args);
    };
    return descriptor;
  };
}

/** @decorator — logs method execution time */
function timed(target: object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const fn = descriptor.value as (...args: unknown[]) => unknown;
  descriptor.value = async function (...args: unknown[]) {
    const start = performance.now();
    const result = await fn.apply(this, args);
    console.log(`${key} took ${(performance.now() - start).toFixed(2)}ms`);
    return result;
  };
  return descriptor;
}

// ─── Async Functions ─────────────────────────────────────────────────────────

async function fetchPalette(url: string): Promise<ColorEntry[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json() as ColorEntry[];
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error.message);
    } else if (error instanceof Error) {
      console.error('Fetch error:', error.message);
    }
    return [];
  } finally {
    console.log(`fetchPalette("${url}") completed`);
  }
}

async function* generateColorSequence(
  colors: ColorEntry[]
): AsyncGenerator<ColorEntry, void, unknown> {
  for (const color of colors) {
    await new Promise<void>(resolve => setTimeout(resolve, 100));
    yield color;
  }
}

// ─── Destructuring & Spread ───────────────────────────────────────────────────

const hueformPalette = {
  abyss:    { hex: '#00F0FF', name: 'Abyss', meaning: 'Electric Cyan' },
  nocturne: { hex: '#B37DD3', name: 'Nocturne', meaning: 'Wisteria Violet' },
  sakura:   { hex: '#FF69B4', name: 'Sakura', meaning: 'Rose Pink' },
  umber:    { hex: '#E09F3E', name: 'Umber', meaning: 'Warm Amber' },
  midnight: { hex: '#4CC9F0', name: 'Midnight', meaning: 'Sky Blue' },
};

const { abyss, nocturne, ...secondaryColors } = hueformPalette;
const allColors = { ...hueformPalette, extra: { hex: '#5A5A8A', name: 'Muted', meaning: 'Comment' } };

// Array destructuring with rest and default
const [primaryKeyword, secondaryKeyword = '#B37DD3', ...otherKeywords] = [
  '#F72BB4',
  undefined,
  '#C4C43F',
  '#E6E8FB',
];

// ─── Template Literals ───────────────────────────────────────────────────────

function colorBlock(entry: typeof abyss): string {
  return `
    Color: ${entry.name}  ${entry.hex}  ${entry.meaning}
  `.trim();
}

const paletteReport = `
HUEFORM Palette (${new Date().getFullYear()})
${'─'.repeat(40)}
${Object.values(hueformPalette).map(c => `  ${c.name}  ${c.hex}  ${c.meaning}`).join('\n')}
`;

// ─── Regular Expressions ──────────────────────────────────────────────────────

const HEX_COLOR_RE  = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{3})$/;
const CSS_VAR_RE    = /--(?<name>[\w-]+):\s*(?<value>[^;]+)/g;
const WHITESPACE_RE = /\s+/g;

function isValidHex(value: string): value is `#${string}` {
  return HEX_COLOR_RE.test(value);
}

function extractCssVars(css: string): Record<string, string> {
  const vars: Record<string, string> = {};
  let match: RegExpExecArray | null;
  while ((match = CSS_VAR_RE.exec(css)) !== null) {
    const { name, value } = match.groups!;
    vars[name] = value.trim();
  }
  return vars;
}

// ─── Null / Optional Chaining ─────────────────────────────────────────────────

function getDisplayName(entry: Nullable<Nameable>): string {
  return entry?.displayName ?? entry?.name ?? 'Unknown';
}

function safeLength(val: string | null | undefined): number {
  return val?.length ?? 0;
}

// ─── Promise Chains ───────────────────────────────────────────────────────────

function loadTheme(id: string): Promise<ReadonlyDeep<ColorEntry> | null> {
  return fetch(`/api/themes/${id}`)
    .then(res => res.json())
    .then((data: ColorEntry) => Object.freeze(data) as ReadonlyDeep<ColorEntry>)
    .catch((err: Error) => {
      console.error('Failed to load theme:', err);
      return null;
    });
}

// ─── Class with EventEmitter ──────────────────────────────────────────────────

class PaletteManager extends EventEmitter {
  private static instance: PaletteManager | null = null;
  private colors: Map<string, ColorEntry> = new Map();
  private _status: Status = Status.Idle;

  private constructor(private readonly repoUrl: string) {
    super();
  }

  static getInstance(url = 'https://api.hueform.design'): PaletteManager {
    if (!PaletteManager.instance) {
      PaletteManager.instance = new PaletteManager(url);
    }
    return PaletteManager.instance;
  }

  get status(): Status {
    return this._status;
  }

  async initialize(): Promise<void> {
    this._status = Status.Loading;
    this.emit('status', this._status);
    try {
      const entries = await fetchPalette(this.repoUrl);
      for (const entry of entries) {
        this.colors.set(entry.id, entry);
      }
      this._status = Status.Ready;
    } catch {
      this._status = Status.Error;
    } finally {
      this.emit('status', this._status);
    }
  }

  getColor(id: string): Nullable<ColorEntry> {
    return this.colors.get(id) ?? null;
  }

  filterByTag(tag: string): ColorEntry[] {
    return [...this.colors.values()].filter(c => c.tags.includes(tag));
  }

  [Symbol.iterator](): Iterator<ColorEntry> {
    return this.colors.values();
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

(async () => {
  const manager = PaletteManager.getInstance();
  manager.on('status', (s: Status) => {
    console.log(`Status changed: ${Status[s]}`);
  });

  await manager.initialize();

  for await (const color of generateColorSequence(
    manager.filterByTag('primary')
  )) {
    console.log(colorBlock(color));
  }

  const hexTest: string[] = ['#F72BB4', '#GGG', '#B37DD3AA'];
  hexTest.forEach(h => {
    console.log(`${h}: ${isValidHex(h) ? 'valid' : 'invalid'}`);
  });

  console.log(paletteReport);
})();

export { PaletteManager, InMemoryRepository, Direction, Status, isValidHex };
export type { ColorEntry, Repository, Nullable, Optional, DeepPartial };
