'use client';

import { useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  src?: string;
  recipeName: string;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function AudioPlayer({ src, recipeName }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rate, setRate] = useState(1);
  const [ready, setReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setPlaying(false);
    setCurrent(0);
    setDuration(0);
    setReady(false);
    setHasError(false);
  }, [src]);

  if (!src) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 md:static md:z-auto bg-hg-amberlight border-t-2 md:border-2 border-hg-amber md:rounded-lg">
        <div className="mx-auto max-w-5xl px-4 py-4 safe-pb md:pb-4">
          <p className="font-serif text-base text-hg-darkgreen">
            Margaret&apos;s audio for this recipe is coming soon.
          </p>
          <p className="text-sm mt-1 text-hg-darkgreen/80">
            Read through the method once before you start cooking.
          </p>
        </div>
      </div>
    );
  }

  const audio = audioRef.current;

  const togglePlay = () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => setHasError(true));
    }
  };

  const skip = (delta: number) => {
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration || 0, audio.currentTime + delta));
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
  };

  const cycleRate = () => {
    const rates = [1, 1.25, 1.5, 0.75];
    const idx = rates.indexOf(rate);
    const next = rates[(idx + 1) % rates.length];
    setRate(next);
    if (audio) audio.playbackRate = next;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:static md:z-auto">
      <div className="bg-hg-green text-hg-cream shadow-[0_-4px_12px_rgba(0,0,0,0.15)] md:shadow-none md:rounded-lg">
        <div className="mx-auto max-w-5xl px-3 pt-3 pb-3 safe-pb md:pb-4">
          {/* Track label + time, full width */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="truncate font-serif text-sm text-hg-cream/90 min-w-0 flex-1">
              Margaret on {recipeName}
            </span>
            <span className="tabular-nums shrink-0 text-sm text-hg-cream/80">
              {formatTime(current)} / {formatTime(duration)}
            </span>
          </div>

          {/* Full width scrubber */}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={onSeek}
            disabled={!ready}
            aria-label="Seek audio position"
            className="hg-range w-full mb-2"
          />

          {/* Transport controls row, centered big play with skip buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => skip(-15)}
              aria-label="Back 15 seconds"
              className="flex items-center justify-center min-w-[56px] min-h-[44px] px-3 rounded-lg border border-hg-cream/40 hover:bg-hg-cream/10 active:bg-hg-cream/20 text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              15
            </button>

            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause audio' : 'Play audio'}
              className="shrink-0 w-14 h-14 rounded-full bg-hg-cream text-hg-green flex items-center justify-center hover:bg-hg-gold active:bg-hg-gold transition-colors"
            >
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => skip(15)}
              aria-label="Forward 15 seconds"
              className="flex items-center justify-center min-w-[56px] min-h-[44px] px-3 rounded-lg border border-hg-cream/40 hover:bg-hg-cream/10 active:bg-hg-cream/20 text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
              </svg>
              15
            </button>

            <button
              type="button"
              onClick={cycleRate}
              aria-label={`Playback speed, currently ${rate} times`}
              className="flex items-center justify-center min-w-[52px] min-h-[44px] px-3 rounded-lg border border-hg-cream/40 hover:bg-hg-cream/10 active:bg-hg-cream/20 text-sm font-medium tabular-nums"
            >
              {rate}x
            </button>
          </div>

          {hasError && (
            <p className="mt-2 text-sm text-hg-amber text-center">
              Audio could not play. Try again in a moment.
            </p>
          )}
        </div>

        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onLoadedMetadata={(e) => {
            const a = e.currentTarget;
            setDuration(a.duration);
            setReady(true);
          }}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setHasError(true)}
          className="hidden"
        />
      </div>
    </div>
  );
}
