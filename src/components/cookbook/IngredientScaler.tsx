'use client';

import { useState } from 'react';
import type { CookbookIngredient } from '@/lib/cookbook';

function parseNumber(s: string): number | null {
  const cleaned = s.trim();
  const fractionMatch = cleaned.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (fractionMatch) return Number(fractionMatch[1]) / Number(fractionMatch[2]);
  const mixed = cleaned.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixed) return Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);
  const n = parseFloat(cleaned);
  return isNaN(n) ? null : n;
}

function scaleAmount(amount: string, factor: number): { scaled: string; parsed: boolean } {
  if (factor === 1) return { scaled: amount, parsed: true };

  const numMatch = amount.match(/^([\d\s/.]+)\s*(.*)/);
  if (!numMatch) return { scaled: amount, parsed: false };

  const num = parseNumber(numMatch[1]);
  if (num === null) return { scaled: amount, parsed: false };

  const result = num * factor;
  const display = result % 1 === 0 ? String(result) : result.toFixed(1).replace(/\.0$/, '');
  const unit = numMatch[2];

  return { scaled: unit ? `${display} ${unit}` : display, parsed: true };
}

interface Props {
  ingredients: CookbookIngredient[];
  defaultServes: string;
}

export default function IngredientScaler({ ingredients, defaultServes }: Props) {
  const baseNum = parseNumber(defaultServes.split('-')[0]) ?? 1;
  const [serves, setServes] = useState(baseNum);
  const factor = serves / baseNum;

  const options = [
    Math.max(1, baseNum - 1),
    baseNum,
    baseNum + 1,
    baseNum + 2,
  ].filter((v, i, a) => a.indexOf(v) === i && v > 0);

  return (
    <div>
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="text-base font-medium text-hg-darkgreen">Serves:</span>
        <div className="flex gap-1.5">
          {options.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setServes(n)}
              className={
                serves === n
                  ? 'min-w-[44px] min-h-[44px] rounded-full bg-hg-green text-hg-cream font-medium text-base'
                  : 'min-w-[44px] min-h-[44px] rounded-full border border-hg-sage text-hg-darkgreen font-medium text-base hover:border-hg-green'
              }
            >
              {n}
            </button>
          ))}
        </div>
        {factor !== 1 && (
          <span className="text-sm text-hg-darkgreen/60">
            (scaled from {defaultServes})
          </span>
        )}
      </div>

      <ul className="border border-hg-sage/40 rounded-lg overflow-hidden bg-white divide-y divide-hg-sage/30">
        {ingredients.map((ing, i) => {
          const { scaled, parsed } = scaleAmount(ing.amount, factor);
          return (
            <li
              key={i}
              className={
                (i % 2 === 0 ? 'bg-white' : 'bg-hg-sagelight') +
                ' flex items-baseline justify-between gap-4 px-4 py-3 min-h-[48px]'
              }
            >
              <span className="text-base text-hg-darkgreen leading-snug">{ing.item}</span>
              <span className={
                'text-base tabular-nums whitespace-nowrap shrink-0 ' +
                (parsed ? 'text-hg-darkgreen/80' : 'text-hg-amber italic')
              }>
                {scaled}
              </span>
            </li>
          );
        })}
      </ul>

      {factor !== 1 && (
        <p className="text-sm text-hg-darkgreen/60 mt-2">
          Amounts that could not be scaled are shown in amber.
        </p>
      )}
    </div>
  );
}
