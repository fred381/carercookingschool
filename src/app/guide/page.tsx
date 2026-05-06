import type { Metadata } from 'next';
import Link from 'next/link';
import { guideChapters } from '@/lib/guide';

export const metadata: Metadata = {
  title: 'Guide',
  description:
    'Foundation chapters on nutrition, food safety, techniques, menu planning, and IDDSI guidance for care cooking.',
};

export default function GuideLandingPage() {
  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <p className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Hamilton George Care
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            The Carer&apos;s Guide
          </h1>
          <p className="text-hg-cream/80 text-base md:text-lg max-w-2xl">
            Seven foundation chapters covering everything you need before you start
            cooking: food safety, nutrition, core techniques, menu planning, and
            texture modification.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <ul className="space-y-3">
          {guideChapters.map((ch, i) => (
            <li key={ch.slug}>
              <Link
                href={`/guide/${ch.slug}`}
                className="flex items-start gap-4 bg-white border border-hg-sage/40 rounded-lg p-5 min-h-[80px] hover:border-hg-green active:bg-hg-sagelight transition-colors"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-hg-green text-hg-cream flex items-center justify-center font-serif font-bold text-base">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-xl text-hg-darkgreen leading-snug">
                    {ch.title}
                  </h2>
                  <p className="text-sm text-hg-darkgreen/60 mt-0.5">{ch.subtitle}</p>
                  <p className="text-base text-hg-darkgreen/80 mt-1.5 leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
