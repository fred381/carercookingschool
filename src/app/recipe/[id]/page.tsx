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
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Stage {recipe.stage} · Recipe {recipe.order}
            {recipe.isAnchor ? ' · Anchor recipe' : ''}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-4">{recipe.name}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span>
              <span className="opacity-70">Difficulty: </span>
              {recipe.difficulty}
            </span>
            <span>
              <span className="opacity-70">IDDSI: </span>
              {recipe.iddsiLevel}
            </span>
            <span>
              <span className="opacity-70">Prep: </span>
              {recipe.prepTime}
            </span>
            <span>
              <span className="opacity-70">Cook: </span>
              {recipe.cookTime}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-10">
        {/* Audio player: sticky at bottom on mobile, inline on desktop */}
        <div className="mb-8">
          <AudioPlayer src={recipe.audioFile} recipeName={recipe.name} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="font-serif text-2xl mb-3">About this recipe</h2>
              <p className="leading-relaxed text-hg-darkgreen/90">{recipe.about}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3">Ingredients</h2>
              <div className="border border-hg-sage/40 rounded-lg overflow-hidden bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    {recipe.ingredients.map((ing, i) => (
                      <tr
                        key={i}
                        className={ing.shaded ? 'bg-hg-sagelight' : 'bg-white'}
                      >
                        <td className="px-4 py-2.5 text-hg-darkgreen">{ing.name}</td>
                        <td className="px-4 py-2.5 text-right text-hg-darkgreen/80 tabular-nums whitespace-nowrap">
                          {ing.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3">Method</h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-hg-green text-hg-cream flex items-center justify-center font-serif">
                      {i + 1}
                    </span>
                    <p className="pt-1 leading-relaxed text-hg-darkgreen/90">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {recipe.caution && (
              <section className="bg-hg-amberlight border border-hg-amber rounded-lg p-4">
                <h3 className="font-serif text-lg mb-1 text-hg-darkgreen">A quick caution</h3>
                <p className="text-sm text-hg-darkgreen/90">{recipe.caution}</p>
              </section>
            )}

            <section className="pt-2">
              <CompleteButton recipeId={recipe.id} />
            </section>

            <nav className="flex items-center justify-between pt-6 border-t border-hg-sage/40">
              {prev ? (
                <Link
                  href={`/recipe/${prev.id}`}
                  className="text-hg-green hover:text-hg-darkgreen text-sm flex items-center gap-2"
                >
                  <span aria-hidden>←</span>
                  <span>
                    <span className="block text-xs opacity-70">Previous</span>
                    <span className="font-serif">{prev.name}</span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/recipe/${next.id}`}
                  className="text-hg-green hover:text-hg-darkgreen text-sm flex items-center gap-2 text-right"
                >
                  <span>
                    <span className="block text-xs opacity-70">Next</span>
                    <span className="font-serif">{next.name}</span>
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            <div className="border-l-4 border-hg-green bg-white rounded-r-lg p-4">
              <h3 className="font-serif text-lg mb-2 text-hg-darkgreen">Technique note</h3>
              <p className="text-sm leading-relaxed text-hg-darkgreen/90">
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
                <ul className="text-sm text-hg-darkgreen/90 space-y-1">
                  {recipe.nutrients.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="text-hg-green">·</span>
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

    </div>
  );
}
