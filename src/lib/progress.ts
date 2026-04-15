'use client';

const STORAGE_KEY = 'hg-course-progress';

export interface Progress {
  completedRecipes: string[];
  completedAt: Record<string, string>;
  lastVisited: string;
}

const empty: Progress = {
  completedRecipes: [],
  completedAt: {},
  lastVisited: '',
};

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function getProgress(): Progress {
  if (!isBrowser()) return empty;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...empty };
    const parsed = JSON.parse(raw) as Progress;
    return {
      completedRecipes: parsed.completedRecipes ?? [],
      completedAt: parsed.completedAt ?? {},
      lastVisited: parsed.lastVisited ?? '',
    };
  } catch {
    return { ...empty };
  }
}

function save(progress: Progress): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markComplete(id: string): Progress {
  const p = getProgress();
  if (!p.completedRecipes.includes(id)) {
    p.completedRecipes.push(id);
  }
  p.completedAt[id] = new Date().toISOString();
  p.lastVisited = id;
  save(p);
  return p;
}

export function unmarkComplete(id: string): Progress {
  const p = getProgress();
  p.completedRecipes = p.completedRecipes.filter((r) => r !== id);
  delete p.completedAt[id];
  save(p);
  return p;
}

export function isComplete(id: string): boolean {
  return getProgress().completedRecipes.includes(id);
}

export function setLastVisited(id: string): void {
  const p = getProgress();
  p.lastVisited = id;
  save(p);
}

export function resetProgress(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}
