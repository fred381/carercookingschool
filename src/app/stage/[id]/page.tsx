import Link from 'next/link';
import { notFound } from 'next/navigation';
import { course, getStageById } from '@/data/course';
import TagPill from '@/components/TagPill';

export function generateStaticParams() {
  return course.map((s) => ({ id: String(s.id) }));
}

interface PageProps {
  params: { id: string };
}

export default function StagePage({ params }: PageProps) {
  const stage = getStageById(Number(params.id));
  if (!stage) notFound();

  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-14">
          <Link
            href="/"
            className="inline-flex items-center min-h-[44px] text-sm text-hg-gold hover:text-hg-cream mb-1"
          >
            <span aria-hidden className="mr-1">←</span>
            All stages
          </Link>
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Stage {stage.id}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-3 break-words">
            {stage.title}
          </h1>
          <p className="text-hg-cream/80 text-base md:text-lg">
            Core technique: {stage.coreTechnique}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-12">
        {stage.recipes.length === 0 ? (
          <div className="bg-hg-sagelight border border-hg-sage rounded-lg p-6 md:p-8 text-center">
            <p className="font-serif text-xl text-hg-darkgreen mb-2">Coming soon</p>
            <p className="text-base text-hg-darkgreen/80 max-w-md mx-auto">
              Margaret is still recording the lessons for this stage. Start with stage one while
              you wait.
            </p>
            <Link
              href="/stage/1"
              className="inline-flex items-center justify-center min-h-[48px] px-6 mt-6 rounded-full bg-hg-green text-hg-cream text-base font-medium hover:bg-hg-darkgreen"
            >
              Go to stage one
            </Link>
          </div>
        ) : (
          <ul className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-3">
            {stage.recipes.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/recipe/${r.id}`}
                  className="block h-full bg-white border border-hg-sage/40 rounded-lg p-5 min-h-[112px] hover:border-hg-green active:bg-hg-sagelight transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs text-hg-green/70 uppercase tracking-wider">
                      Recipe {r.order}
                    </span>
                    {r.isAnchor && (
                      <span className="text-xs bg-hg-gold/30 text-hg-darkgreen px-2 py-0.5 rounded shrink-0">
                        Anchor
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-hg-darkgreen leading-snug mb-3 break-words">
                    {r.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {r.tags.map((t) => (
                      <TagPill key={t} label={t} />
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm text-hg-darkgreen/70">
                    <span>{r.difficulty}</span>
                    <span>{r.prepTime}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
