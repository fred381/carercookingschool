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
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Stage {stage.id}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-3">{stage.title}</h1>
          <p className="text-hg-cream/80 text-base md:text-lg">
            Core technique: {stage.coreTechnique}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <Link href="/" className="inline-block text-sm text-hg-green hover:text-hg-darkgreen mb-6">
          ← All stages
        </Link>

        {stage.recipes.length === 0 ? (
          <div className="bg-hg-sagelight border border-hg-sage rounded-lg p-8 text-center">
            <p className="font-serif text-xl text-hg-darkgreen mb-2">Coming soon</p>
            <p className="text-hg-darkgreen/80 text-sm max-w-md mx-auto">
              Margaret is still recording the lessons for this stage. Start with stage one while
              you wait.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stage.recipes.map((r) => (
              <Link
                key={r.id}
                href={`/recipe/${r.id}`}
                className="block bg-white border border-hg-sage/40 rounded-lg p-5 hover:border-hg-green transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-hg-green/70 uppercase tracking-wider">
                    Recipe {r.order}
                  </span>
                  {r.isAnchor && (
                    <span className="text-xs bg-hg-gold/30 text-hg-darkgreen px-2 py-0.5 rounded">
                      Anchor
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg text-hg-darkgreen leading-snug mb-3">
                  {r.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.tags.map((t) => (
                    <TagPill key={t} label={t} />
                  ))}
                </div>
                <div className="flex gap-4 text-xs text-hg-darkgreen/70">
                  <span>{r.difficulty}</span>
                  <span>{r.prepTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
