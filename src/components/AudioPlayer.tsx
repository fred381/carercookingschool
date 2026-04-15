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
      <div className="rounded-md bg-hg-amberlight border border-hg-amber text-hg-darkgreen p-4">
        <p className="font-serif text-base">
          Margaret&apos;s audio for this recipe is coming soon.
        </p>
        <p className="text-sm mt-1 opacity-80">
          In the meantime, read through the method once before you start cooking.
        </p>
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
      <div className="bg-hg-green text-hg-cream shadow-lg md:rounded-lg md:shadow-none">
        <div className="mx-auto max-w-5xl px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause audio' : 'Play audio'}
              className="shrink-0 w-12 h-12 rounded-full bg-hg-cream text-hg-green flex items-center justify-center hover:bg-hg-gold transition-colors"
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="truncate font-serif opacity-90">Margaret on {recipeName}</span>
                <span className="tabular-nums ml-2 shrink-0">
                  {formatTime(current)} / {formatTime(duration)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={current}
                onChange={onSeek}
                disabled={!ready}
                aria-label="Seek"
                className="w-full accent-hg-cream"
              />
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => skip(-15)}
                className="text-hg-cream text-xs px-2 py-1 rounded border border-hg-cream/40 hover:bg-hg-cream/10"
                aria-label="Back 15 seconds"
              >
                -15s
              </button>
              <button
                type="button"
                onClick={() => skip(15)}
                className="text-hg-cream text-xs px-2 py-1 rounded border border-hg-cream/40 hover:bg-hg-cream/10"
                aria-label="Forward 15 seconds"
              >
                +15s
              </button>
              <button
                type="button"
                onClick={cycleRate}
                className="text-hg-cream text-xs px-2 py-1 rounded border border-hg-cream/40 hover:bg-hg-cream/10"
                aria-label="Playback speed"
              >
                {rate}x
              </button>
            </div>
          </div>

          {hasError && (
            <p className="mt-2 text-xs text-hg-amber">
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
          className="hg-audio hidden"
        />
      </div>
    </div>
  );
}
