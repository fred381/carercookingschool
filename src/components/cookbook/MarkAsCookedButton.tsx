'use client';

import { useEffect, useState } from 'react';
import { isCooked, markCooked, unmarkCooked } from '@/lib/cookbook-progress';

export default function MarkAsCookedButton({ slug }: { slug: string }) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDone(isCooked(slug));
  }, [slug]);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-hg-sage text-hg-darkgreen text-base font-medium opacity-60"
      >
        Mark as cooked
      </button>
    );
  }

  const onClick = () => {
    if (done) {
      unmarkCooked(slug);
      setDone(false);
    } else {
      markCooked(slug);
      setDone(true);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        done
          ? 'w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-hg-gold text-hg-darkgreen text-base font-medium hover:bg-hg-gold/80 active:bg-hg-gold/80 transition-colors'
          : 'w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-hg-green text-hg-cream text-base font-medium hover:bg-hg-darkgreen active:bg-hg-darkgreen transition-colors'
      }
    >
      {done ? (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 16.17 4.83 12l-1.41 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          Cooked! Tap to undo
        </>
      ) : (
        'Mark as cooked'
      )}
    </button>
  );
}
