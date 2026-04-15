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
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-hg-sage text-hg-darkgreen font-medium opacity-60"
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
          ? 'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-hg-gold text-hg-darkgreen font-medium hover:bg-hg-gold/80'
          : 'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-hg-green text-hg-cream font-medium hover:bg-hg-darkgreen'
      }
    >
      {done ? (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
