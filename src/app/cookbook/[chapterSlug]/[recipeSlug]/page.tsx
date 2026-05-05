import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  chapters,
  getAllCookbookRecipes,
  getChapterBySlug,
  getRecipeBySlug,
} from '@/lib/cookbook';
import ConditionTag from '@/components/cookbook/ConditionTag';
import CarerTipCard from '@/components/cookbook/CarerTipCard';
import IddsiTable from '@/components/cookbook/IddsiTable';
import IngredientScaler from '@/components/cookbook/IngredientScaler';
import MarkAsCookedButton from '@/components/cookbook/MarkAsCookedButton';

export function generateStaticParams() {
  return getAllCookbookRecipes().map((r) => {
    const ch = chapters.find((c) => c.number === r.chapter_number);
    return {
      chapterSlug: ch?.slug ?? '',
      recipeSlug: r.slug,
    };
  });
}

export function generateMetadata({
  params,
}: {
  params: { chapterSlug: string; recipeSlug: string };
}) {
  const recipe = getRecipeBySlug(params.recipeSlug);
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.about.slice(0, 160),
  };
}

export default function RecipePage({
  params,
}: {
  params: { chapterSlug: string; recipeSlug: string };
}) {
  const recipe = getRecipeBySlug(params.recipeSlug);
  const chapter = getChapterBySlug(params.chapterSlug);
  if (!recipe || !chapter) notFound();

  const tips = recipe.carer_tips;

  return (
    <div>
      {/* Header */}
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-12">
          <Link
            href={`/cookbook/${chapter.slug}`}
            className="inline-flex items-center min-h-[44px] text-sm text-hg-gold hover:text-hg-cream mb-1"
          >
            <span aria-hidden className="mr-1">←</span>
            {chapter.name}
          </Link>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight mb-4">
            {recipe.title}
          </h1>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-base mb-4">
            {recipe.at_a_glance && (
              <span className="text-hg-cream/80">{recipe.at_a_glance}</span>
            )}
            <span>
              <span className="text-hg-cream/60">Difficulty: </span>
              {recipe.difficulty}
            </span>
            <span>
              <span className="text-hg-cream/60">IDDSI: </span>
              {recipe.iddsi_level}
            </span>
            {recipe.serves && (
              <span>
                <span className="text-hg-cream/60">Serves: </span>
                {recipe.serves}
              </span>
            )}
            {recipe.makes && (
              <span>
                <span className="text-hg-cream/60">Makes: </span>
                {recipe.makes}
              </span>
            )}
            {recipe.season && (
              <span>
                <span className="text-hg-cream/60">Season: </span>
                {recipe.season}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {recipe.condition_tags.map((t) => (
              <ConditionTag key={t} label={t} />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        {/* Cautions at the top */}
        {recipe.cautions.length > 0 && (
          <div className="mb-8 space-y-2">
            {recipe.cautions.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border-2 border-hg-red bg-hg-redlight p-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C46A6A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                  aria-hidden
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-base text-hg-red leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        )}

        <div className="md:grid md:grid-cols-3 md:gap-10 space-y-8 md:space-y-0">
          {/* Main column */}
          <div className="md:col-span-2 space-y-10">
            {/* About */}
            <section>
              <h2 className="font-serif text-2xl mb-3">About this recipe</h2>
              <p className="text-base leading-relaxed text-hg-darkgreen/90">{recipe.about}</p>
            </section>

            {/* Ingredients with scaler */}
            <section>
              <h2 className="font-serif text-2xl mb-3">Ingredients</h2>
              <IngredientScaler
                ingredients={recipe.ingredients}
                defaultServes={recipe.serves || '1'}
              />
            </section>

            {/* Method */}
            <section>
              <h2 className="font-serif text-2xl mb-3">Method</h2>
              <ol className="space-y-5">
                {recipe.method.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-hg-green text-hg-cream flex items-center justify-center font-serif font-bold text-base">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-hg-darkgreen/90">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* IDDSI table */}
            {recipe.iddsi_table.length > 0 && (
              <section>
                <h2 className="font-serif text-2xl mb-3">IDDSI adaptations</h2>
                <IddsiTable entries={recipe.iddsi_table} />
              </section>
            )}

            {/* Mark as cooked */}
            <section className="pt-2">
              <MarkAsCookedButton slug={recipe.slug} />
            </section>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Key nutrients */}
            {recipe.key_nutrients.length > 0 && (
              <div className="bg-white border border-hg-sage/40 rounded-lg p-4 sm:p-5">
                <h3 className="font-serif text-lg mb-3 text-hg-darkgreen">Key nutrients</h3>
                <ul className="space-y-2 text-base text-hg-darkgreen/90">
                  {recipe.key_nutrients.map((n, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-hg-green shrink-0" aria-hidden>·</span>
                      <span className="leading-relaxed">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Good for conditions */}
            {recipe.good_for_conditions.length > 0 && (
              <div className="bg-white border border-hg-sage/40 rounded-lg p-4 sm:p-5">
                <h3 className="font-serif text-lg mb-3 text-hg-darkgreen">Good for</h3>
                <ul className="space-y-3 text-base text-hg-darkgreen/90">
                  {recipe.good_for_conditions.map((c, i) => (
                    <li key={i} className="leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Carer tips */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-hg-darkgreen">Carer tips</h3>
              <CarerTipCard title="Watch out for" body={tips.watch_out_for} variant="warning" />
              <CarerTipCard title="Nostalgia and memory" body={tips.nostalgia_note} />
              <CarerTipCard title="Presentation" body={tips.presentation_tip} />
              <CarerTipCard title="Make it easier" body={tips.make_it_easier} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
