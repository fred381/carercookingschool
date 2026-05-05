import Link from 'next/link';
import { notFound } from 'next/navigation';
import { chapters, getChapterBySlug, getRecipesForChapter } from '@/lib/cookbook';
import ConditionTag from '@/components/cookbook/ConditionTag';

export function generateStaticParams() {
  return chapters.map((ch) => ({ chapterSlug: ch.slug }));
}

export function generateMetadata({ params }: { params: { chapterSlug: string } }) {
  const ch = getChapterBySlug(params.chapterSlug);
  if (!ch) return {};
  return { title: ch.name };
}

export default function ChapterPage({ params }: { params: { chapterSlug: string } }) {
  const chapter = getChapterBySlug(params.chapterSlug);
  if (!chapter) notFound();

  const recipes = getRecipesForChapter(chapter.slug);

  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <Link
            href="/cookbook"
            className="inline-flex items-center min-h-[44px] text-sm text-hg-gold hover:text-hg-cream mb-1"
          >
            <span aria-hidden className="mr-1">←</span>
            All chapters
          </Link>
          <p className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Chapter {chapter.number}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-2">
            {chapter.name}
          </h1>
          <p className="text-hg-cream/80">
            {recipes.length} recipe{recipes.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <ul className="space-y-3">
          {recipes.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/cookbook/${chapter.slug}/${r.slug}`}
                className="flex items-start gap-4 bg-white border border-hg-sage/40 rounded-lg p-4 sm:p-5 min-h-[72px] hover:border-hg-green active:bg-hg-sagelight transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg sm:text-xl text-hg-darkgreen leading-snug mb-2">
                    {r.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {r.condition_tags.map((t) => (
                      <ConditionTag key={t} label={t} />
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0 text-sm text-hg-darkgreen/70 space-y-1">
                  <div className="font-medium">{r.difficulty}</div>
                  <div>{r.iddsi_level}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
