'use client';

import { useState } from 'react';
import Link from 'next/link';
import ConditionTag from './ConditionTag';
import type { CookbookRecipe, CookbookChapter } from '@/lib/cookbook';

interface Props {
  recipes: CookbookRecipe[];
  chapters: CookbookChapter[];
  allTags: string[];
  allIddsiLevels: string[];
}

export default function CookbookSearch({ recipes, chapters, allTags, allIddsiLevels }: Props) {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedIddsi, setSelectedIddsi] = useState('');

  const hasFilters = query || selectedTag || selectedIddsi;

  const filtered = hasFilters
    ? recipes.filter((r) => {
        if (query && !r.title.toLowerCase().includes(query.toLowerCase())) return false;
        if (selectedTag && !r.condition_tags.includes(selectedTag)) return false;
        if (selectedIddsi && r.iddsi_level !== selectedIddsi) return false;
        return true;
      })
    : [];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-hg-sage/40 rounded-lg p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="cb-search" className="block text-sm font-medium text-hg-darkgreen/70 mb-1">
              Search recipes
            </label>
            <input
              id="cb-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. chicken, salmon..."
              className="w-full min-h-[44px] px-3 rounded-lg border border-hg-sage/50 bg-hg-cream text-base text-hg-darkgreen placeholder:text-hg-darkgreen/40 focus:outline-none focus:ring-2 focus:ring-hg-green/40"
            />
          </div>
          <div>
            <label htmlFor="cb-tag" className="block text-sm font-medium text-hg-darkgreen/70 mb-1">
              Condition
            </label>
            <select
              id="cb-tag"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full min-h-[44px] px-3 rounded-lg border border-hg-sage/50 bg-hg-cream text-base text-hg-darkgreen focus:outline-none focus:ring-2 focus:ring-hg-green/40"
            >
              <option value="">All conditions</option>
              {allTags.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cb-iddsi" className="block text-sm font-medium text-hg-darkgreen/70 mb-1">
              IDDSI level
            </label>
            <select
              id="cb-iddsi"
              value={selectedIddsi}
              onChange={(e) => setSelectedIddsi(e.target.value)}
              className="w-full min-h-[44px] px-3 rounded-lg border border-hg-sage/50 bg-hg-cream text-base text-hg-darkgreen focus:outline-none focus:ring-2 focus:ring-hg-green/40"
            >
              <option value="">All levels</option>
              {allIddsiLevels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {hasFilters && (
        <div>
          <p className="text-sm text-hg-darkgreen/70 mb-3">
            {filtered.length} recipe{filtered.length !== 1 ? 's' : ''} found
          </p>
          {filtered.length === 0 ? (
            <p className="text-base text-hg-darkgreen/60">
              No recipes match your filters. Try adjusting your search.
            </p>
          ) : (
            <ul className="space-y-2">
              {filtered.map((r) => {
                const ch = chapters.find((c) => c.number === r.chapter_number);
                const chapterSlug = ch?.slug ?? '';
                return (
                  <li key={r.slug}>
                    <Link
                      href={`/cookbook/${chapterSlug}/${r.slug}`}
                      className="flex items-start gap-3 bg-white border border-hg-sage/40 rounded-lg p-4 min-h-[56px] hover:border-hg-green active:bg-hg-sagelight transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-serif text-lg text-hg-darkgreen leading-snug">
                          {r.title}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {r.condition_tags.map((t) => (
                            <ConditionTag key={t} label={t} />
                          ))}
                        </div>
                      </div>
                      <div className="text-right shrink-0 text-sm text-hg-darkgreen/70">
                        <div>{r.difficulty}</div>
                        <div>{r.iddsi_level}</div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
