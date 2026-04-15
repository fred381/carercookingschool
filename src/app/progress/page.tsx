'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { course, getAllRecipes } from '@/data/course';
import { getProgress, resetProgress, type Progress } from '@/lib/progress';

export default function ProgressPage() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const allRecipes = getAllRecipes();
  const totalAvailable = allRecipes.length;
  const completedCount = progress?.completedRecipes.length ?? 0;
  const percent = totalAvailable === 0 ? 0 : Math.round((completedCount / totalAvailable) * 100);

  const onReset = () => {
    if (confirm('Reset all progress on this device? This cannot be undone.')) {
      resetProgress();
      setProgress(getProgress());
    }
  };

  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-14">
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-2">Your journey</div>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-3 break-words">
            Your progress
          </h1>
          <p className="text-base text-hg-cream/80 max-w-2xl">
            Everything you have cooked so far. Progress is saved on this device only, no account
            is needed.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-12 space-y-8 md:space-y-10">
        <div className="bg-white border border-hg-sage/40 rounded-lg p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-hg-darkgreen">
                {completedCount} of {totalAvailable}
              </div>
              <div className="text-base text-hg-darkgreen/70">recipes completed</div>
            </div>
            <div className="text-4xl font-serif text-hg-green tabular-nums">{percent}%</div>
          </div>
          <div className="w-full h-3 bg-hg-sagelight rounded-full overflow-hidden">
            <div
              className="h-full bg-hg-green transition-all"
              style={{ width: `${percent}%` }}
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {course.map((stage) => {
          if (stage.recipes.length === 0) return null;
          return (
            <section key={stage.id}>
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <h2 className="font-serif text-xl md:text-2xl text-hg-darkgreen min-w-0 break-words">
                  Stage {stage.id}: {stage.title}
                </h2>
                <Link
                  href={`/stage/${stage.id}`}
                  className="shrink-0 inline-flex items-center min-h-[44px] text-sm text-hg-green hover:text-hg-darkgreen"
                >
                  Open →
                </Link>
              </div>
              <ul className="border border-hg-sage/40 rounded-lg overflow-hidden bg-white divide-y divide-hg-sage/30">
                {stage.recipes.map((r) => {
                  const done = progress?.completedRecipes.includes(r.id) ?? false;
                  const completedAt = progress?.completedAt[r.id];
                  return (
                    <li key={r.id}>
                      <Link
                        href={`/recipe/${r.id}`}
                        className="flex items-center gap-4 px-4 py-4 min-h-[64px] hover:bg-hg-sagelight active:bg-hg-sagelight"
                      >
                        <span
                          className={
                            done
                              ? 'shrink-0 w-7 h-7 rounded-full bg-hg-green text-hg-cream flex items-center justify-center'
                              : 'shrink-0 w-7 h-7 rounded-full border-2 border-hg-sage'
                          }
                          aria-hidden
                        >
                          {done && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17 4.83 12l-1.41 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          )}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-serif text-base text-hg-darkgreen break-words">
                            {r.name}
                          </div>
                          {done && completedAt && (
                            <div className="text-sm text-hg-darkgreen/60">
                              Completed {new Date(completedAt).toLocaleDateString('en-GB')}
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-hg-darkgreen/60 shrink-0">
                          {r.difficulty}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <div className="pt-4 border-t border-hg-sage/40">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center min-h-[44px] px-4 text-base text-hg-darkgreen/80 hover:text-hg-darkgreen underline"
          >
            Reset progress on this device
          </button>
        </div>
      </div>
    </div>
  );
}
