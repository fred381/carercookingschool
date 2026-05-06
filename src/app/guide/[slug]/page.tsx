import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guideChapters, getGuideChapter } from '@/lib/guide';
import GuideSectionRenderer from '@/components/guide/GuideSectionRenderer';

export function generateStaticParams() {
  return guideChapters.map((ch) => ({ slug: ch.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ch = getGuideChapter(params.slug);
  if (!ch) return {};
  return {
    title: ch.title,
    description: ch.description,
  };
}

export default function GuideChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getGuideChapter(params.slug);
  if (!chapter) notFound();

  const currentIndex = guideChapters.findIndex((c) => c.slug === chapter.slug);
  const prev = currentIndex > 0 ? guideChapters[currentIndex - 1] : undefined;
  const next =
    currentIndex < guideChapters.length - 1
      ? guideChapters[currentIndex + 1]
      : undefined;

  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-12">
          <Link
            href="/guide"
            className="inline-flex items-center min-h-[44px] text-sm text-hg-gold hover:text-hg-cream mb-1"
          >
            <span aria-hidden className="mr-1">←</span>
            All chapters
          </Link>
          <p className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Chapter {currentIndex + 1}
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight mb-2">
            {chapter.title}
          </h1>
          <p className="text-hg-cream/80 text-base md:text-lg">
            {chapter.subtitle}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-6 md:py-10">
        <article className="space-y-2">
          {chapter.sections.map((section, i) => (
            <GuideSectionRenderer key={i} section={section} />
          ))}
        </article>

        <nav
          aria-label="Chapter navigation"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 mt-8 border-t border-hg-sage/40"
        >
          {prev ? (
            <Link
              href={`/guide/${prev.slug}`}
              className="flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-lg border border-hg-sage/50 bg-white hover:border-hg-green active:bg-hg-sagelight"
            >
              <span aria-hidden className="text-hg-green text-xl shrink-0">←</span>
              <span className="flex-1 min-w-0">
                <span className="block text-xs text-hg-darkgreen/60 uppercase tracking-wide">
                  Previous
                </span>
                <span className="block font-serif text-base text-hg-darkgreen truncate">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" aria-hidden />
          )}
          {next ? (
            <Link
              href={`/guide/${next.slug}`}
              className="flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-lg border border-hg-sage/50 bg-white hover:border-hg-green active:bg-hg-sagelight sm:text-right"
            >
              <span className="flex-1 min-w-0">
                <span className="block text-xs text-hg-darkgreen/60 uppercase tracking-wide">
                  Next
                </span>
                <span className="block font-serif text-base text-hg-darkgreen truncate">
                  {next.title}
                </span>
              </span>
              <span aria-hidden className="text-hg-green text-xl shrink-0">→</span>
            </Link>
          ) : (
            <div className="hidden sm:block" aria-hidden />
          )}
        </nav>
      </div>
    </div>
  );
}
