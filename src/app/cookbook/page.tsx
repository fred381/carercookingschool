import type { Metadata } from 'next';
import Link from 'next/link';
import {
  chapters,
  meta,
  getAllCookbookRecipes,
  getAllConditionTags,
  getAllIddsiLevels,
  getRecipesForChapter,
} from '@/lib/cookbook';
import CookbookSearch from '@/components/cookbook/CookbookSearch';

export const metadata: Metadata = {
  title: "The Carer's Cookery Book",
  description: meta.subtitle,
};

export default function CookbookIndexPage() {
  const allRecipes = getAllCookbookRecipes();
  const allTags = getAllConditionTags();
  const allIddsiLevels = getAllIddsiLevels();

  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <p className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            {meta.publisher}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            {meta.title}
          </h1>
          <p className="text-hg-cream/80 text-base md:text-lg max-w-2xl">
            {meta.subtitle}. {meta.recipe_count} recipes across {chapters.length} chapters,
            designed for professional carers cooking for older people.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10 space-y-10">
        <CookbookSearch
          recipes={allRecipes}
          chapters={chapters}
          allTags={allTags}
          allIddsiLevels={allIddsiLevels}
        />

        <section>
          <h2 className="font-serif text-2xl md:text-3xl text-hg-darkgreen mb-5">
            Chapters
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((ch) => {
              const recipes = getRecipesForChapter(ch.slug);
              return (
                <Link
                  key={ch.slug}
                  href={`/cookbook/${ch.slug}`}
                  className="block bg-white border border-hg-sage/40 rounded-lg p-5 min-h-[100px] hover:border-hg-green active:bg-hg-sagelight transition-colors"
                >
                  <div className="text-xs text-hg-green/70 uppercase tracking-wider mb-1">
                    Chapter {ch.number}
                  </div>
                  <h3 className="font-serif text-xl text-hg-darkgreen leading-snug mb-2">
                    {ch.name}
                  </h3>
                  <p className="text-sm text-hg-darkgreen/70">
                    {recipes.length} recipe{recipes.length !== 1 ? 's' : ''}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
