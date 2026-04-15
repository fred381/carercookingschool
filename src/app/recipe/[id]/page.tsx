import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAdjacentRecipes, getAllRecipes, getRecipeById } from '@/data/course';
import AudioPlayer from '@/components/AudioPlayer';
import TagPill from '@/components/TagPill';
import Accordion from '@/components/Accordion';
import CompleteButton from '@/components/CompleteButton';

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ id: r.id }));
}

interface PageProps {
  params: { id: string };
}

export default function RecipePage({ params }: PageProps) {
  const recipe = getRecipeById(params.id);
  if (!recipe) notFound();

  const { prev, next } = getAdjacentRecipes(recipe.id);

  return (
    <div>
      {/* Full width green header */}
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-5xl px-4 py-6 md:py-12">
          <Link
            href={`/stage/${recipe.stage}`}
            className="inline-flex items-center min-h-[44px] text-sm text-hg-gold hover:text-hg-cream mb-1"
          >
            <span aria-hidden className="mr-1">←</span>
            Back to stage {recipe.stage}
          </Link>
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Stage {recipe.stage} · Recipe {recipe.order}
            {recipe.isAnchor ? ' · Anchor recipe' : ''}
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight mb-4 break-words">
            {recipe.name}
          </h1>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-base sm:flex sm:flex-wrap sm:gap-x-6">
            <div>
              <dt className="text-xs text-hg-cream/70 uppercase tracking-wide">Difficulty</dt>
              <dd>{recipe.difficulty}</dd>
            </div>
            <div>
              <dt className="text-xs text-hg-cream/70 uppercase tracking-wide">IDDSI</dt>
              <dd>{recipe.iddsiLevel}</dd>
            </div>
            <div>
              <dt className="text-xs text-hg-cream/70 uppercase tracking-wide">Prep</dt>
              <dd>{recipe.prepTime}</dd>
            </div>
            <div>
              <dt className="text-xs text-hg-cream/70 uppercase tracking-wide">Cook</dt>
              <dd>{recipe.cookTime}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-10">
        {/* Audio player: sticky at bottom on mobile, inline block on desktop */}
        <div className="hidden md:block mb-8">
          <AudioPlayer src={recipe.audioFile} recipeName={recipe.name} />
        </div>

        {/* Single column stack on mobile, 3-col grid on desktop */}
        <div className="md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0">
          {/* Main column */}
          <div className="md:col-span-2 space-y-8">
            {/* Technique note appears near the top on mobile so it is seen before cooking */}
            <section className="md:hidden border-l-4 border-hg-green bg-white rounded-r-lg p-4">
              <h3 className="font-serif text-lg mb-2 text-hg-darkgreen">Technique note</h3>
              <p className="text-base leading-relaxed text-hg-darkgreen/90">
                {recipe.techniqueNote}
              </p>
            </section>

            {/* Tags on mobile near the top */}
            <section className="md:hidden">
              <h3 className="sr-only">Health tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3">About this recipe</h2>
              <p className="text-base leading-relaxed text-hg-darkgreen/90">{recipe.about}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3">Ingredients</h2>
              <ul className="border border-hg-sage/40 rounded-lg overflow-hidden bg-white divide-y divide-hg-sage/30">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className={
                      (ing.shaded ? 'bg-hg-sagelight' : 'bg-white') +
                      ' flex items-baseline justify-between gap-4 px-4 py-3 min-h-[48px]'
                    }
                  >
                    <span className="text-base text-hg-darkgreen leading-snug">{ing.name}</span>
                    <span className="text-base text-hg-darkgreen/80 tabular-nums whitespace-nowrap shrink-0">
                      {ing.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3">Method</h2>
              <ol className="space-y-5">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-hg-green text-hg-cream flex items-center justify-center font-serif text-base">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-hg-darkgreen/90">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {recipe.caution && (
              <section className="bg-hg-amberlight border border-hg-amber rounded-lg p-4">
                <h3 className="font-serif text-lg mb-1 text-hg-darkgreen">A quick caution</h3>
                <p className="text-base text-hg-darkgreen/90">{recipe.caution}</p>
              </section>
            )}

            {/* Carer notes appear in main column on mobile, in aside on desktop */}
            <section className="md:hidden">
              <h2 className="font-serif text-2xl mb-3">Carer notes</h2>
              <Accordion
                items={[
                  { title: 'Nostalgia and memory', body: recipe.nostalgia },
                  { title: 'Presentation', body: recipe.presentation },
                  { title: 'Watch out for', body: recipe.watchOut },
                  { title: 'Make it easier', body: recipe.easier },
                ]}
              />
            </section>

            {recipe.nutrients.length > 0 && (
              <section className="md:hidden">
                <h2 className="font-serif text-xl mb-3">Key nutrients</h2>
                <ul className="text-base text-hg-darkgreen/90 space-y-2">
                  {recipe.nutrients.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="text-hg-green" aria-hidden>·</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="pt-2">
              <CompleteButton recipeId={recipe.id} />
            </section>

            {/* Big thumb friendly prev/next at the bottom of content */}
            <nav
              aria-label="Recipe navigation"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-hg-sage/40"
            >
              {prev ? (
                <Link
                  href={`/recipe/${prev.id}`}
                  className="flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-lg border border-hg-sage/50 bg-white hover:border-hg-green active:bg-hg-sagelight"
                >
                  <span aria-hidden className="text-hg-green text-xl shrink-0">←</span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs text-hg-darkgreen/60 uppercase tracking-wide">
                      Previous
                    </span>
                    <span className="block font-serif text-base text-hg-darkgreen truncate">
                      {prev.name}
                    </span>
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" aria-hidden />
              )}
              {next ? (
                <Link
                  href={`/recipe/${next.id}`}
                  className="flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-lg border border-hg-sage/50 bg-white hover:border-hg-green active:bg-hg-sagelight sm:text-right"
                >
                  <span className="flex-1 min-w-0 order-1 sm:order-none">
                    <span className="block text-xs text-hg-darkgreen/60 uppercase tracking-wide">
                      Next
                    </span>
                    <span className="block font-serif text-base text-hg-darkgreen truncate">
                      {next.name}
                    </span>
                  </span>
                  <span aria-hidden className="text-hg-green text-xl shrink-0 order-2">→</span>
                </Link>
              ) : (
                <div className="hidden sm:block" aria-hidden />
              )}
            </nav>
          </div>

          {/* Right column, desktop only */}
          <aside className="hidden md:block space-y-6">
            <div className="border-l-4 border-hg-green bg-white rounded-r-lg p-4">
              <h3 className="font-serif text-lg mb-2 text-hg-darkgreen">Technique note</h3>
              <p className="text-base leading-relaxed text-hg-darkgreen/90">
                {recipe.techniqueNote}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-2 text-hg-darkgreen">Health tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </div>

            {recipe.nutrients.length > 0 && (
              <div>
                <h3 className="font-serif text-lg mb-2 text-hg-darkgreen">Key nutrients</h3>
                <ul className="text-base text-hg-darkgreen/90 space-y-1">
                  {recipe.nutrients.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="text-hg-green" aria-hidden>·</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="font-serif text-lg mb-2 text-hg-darkgreen">Carer notes</h3>
              <Accordion
                items={[
                  { title: 'Nostalgia and memory', body: recipe.nostalgia },
                  { title: 'Presentation', body: recipe.presentation },
                  { title: 'Watch out for', body: recipe.watchOut },
                  { title: 'Make it easier', body: recipe.easier },
                ]}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky audio player, mobile only */}
      <div className="md:hidden">
        <AudioPlayer src={recipe.audioFile} recipeName={recipe.name} />
      </div>
    </div>
  );
}
