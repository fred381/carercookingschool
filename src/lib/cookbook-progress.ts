'use client';

const STORAGE_KEY = 'hg-cookbook-cooked';

interface CookbookProgress {
  cookedSlugs: string[];
  cookedAt: Record<string, string>;
}

const empty: CookbookProgress = { cookedSlugs: [], cookedAt: {} };

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function load(): CookbookProgress {
  if (!isBrowser()) return empty;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...empty };
    const parsed = JSON.parse(raw) as CookbookProgress;
    return {
      cookedSlugs: parsed.cookedSlugs ?? [],
      cookedAt: parsed.cookedAt ?? {},
    };
  } catch {
    return { ...empty };
  }
}

function save(p: CookbookProgress): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function isCooked(slug: string): boolean {
  return load().cookedSlugs.includes(slug);
}

export function markCooked(slug: string): void {
  const p = load();
  if (!p.cookedSlugs.includes(slug)) {
    p.cookedSlugs.push(slug);
  }
  p.cookedAt[slug] = new Date().toISOString();
  save(p);
}

export function unmarkCooked(slug: string): void {
  const p = load();
  p.cookedSlugs = p.cookedSlugs.filter((s) => s !== slug);
  delete p.cookedAt[slug];
  save(p);
}

export function getCookedCount(): number {
  return load().cookedSlugs.length;
}

export function getCookedSlugs(): string[] {
  return load().cookedSlugs;
}
