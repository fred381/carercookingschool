'use client';

import { useEffect, useState } from 'react';
import {
  getProgress,
  markComplete,
  unmarkComplete,
  setLastVisited,
} from '@/lib/progress';

export default function CompleteButton({ recipeId }: { recipeId: string }) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLastVisited(recipeId);
    setDone(getProgress().completedRecipes.includes(recipeId));
  }, [recipeId]);

  const base =
    'w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[56px] px-6 rounded-full text-base font-medium transition-colors';

  const onClick = () => {
    if (done) {
      unmarkComplete(recipeId);
      setDone(false);
    } else {
      markComplete(recipeId);
      setDone(true);
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className={`${base} bg-hg-sage text-hg-darkgreen opacity-60`}
      >
        Mark as complete
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        done
          ? `${base} bg-hg-gold text-hg-darkgreen hover:bg-hg-gold/80 active:bg-hg-gold/80`
          : `${base} bg-hg-green text-hg-cream hover:bg-hg-darkgreen active:bg-hg-darkgreen`
      }
    >
      {done ? (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 16.17 4.83 12l-1.41 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          Completed, tap to undo
        </>
      ) : (
        'Mark as complete'
      )}
    </button>
  );
}
