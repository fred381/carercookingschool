import recipesData from '../../recipes.json';

export interface CookbookIngredient {
  item: string;
  amount: string;
}

export interface IddsiEntry {
  level: string;
  texture: string;
  adaptation: string;
}

export interface CarerTips {
  nostalgia_note: string;
  presentation_tip: string;
  watch_out_for: string;
  make_it_easier: string;
}

export interface CookbookRecipe {
  title: string;
  slug: string;
  chapter_name: string;
  chapter_number: number;
  serves: string;
  makes: string;
  season: string;
  difficulty: string;
  iddsi_level: string;
  at_a_glance: string;
  condition_tags: string[];
  cautions: string[];
  about: string;
  ingredients: CookbookIngredient[];
  method: string[];
  key_nutrients: string[];
  good_for_conditions: string[];
  iddsi_table: IddsiEntry[];
  carer_tips: CarerTips;
}

export interface CookbookChapter {
  number: number;
  name: string;
  slug: string;
  recipe_slugs: string[];
}

export interface CookbookMeta {
  title: string;
  subtitle: string;
  publisher: string;
  programme: string;
  recipe_count: number;
}

const KNOWN_TAGS = new Set([
  'Appetite/nutrition',
  'Bone health',
  'COPD',
  'Cancer support',
  'Dementia',
  'Diabetes',
  'Dysphagia',
  'Heart health',
  'Kidney friendly',
  "Parkinson's",
]);

function parseConditionTags(raw: string[]): { tags: string[]; cautions: string[] } {
  const tags: string[] = [];
  const cautions: string[] = [];
  let pendingCaution = '';

  for (const entry of raw) {
    if (entry.startsWith('!')) {
      if (pendingCaution) cautions.push(pendingCaution.trim());
      pendingCaution = entry.slice(1).trim();
    } else if (KNOWN_TAGS.has(entry)) {
      if (pendingCaution) {
        cautions.push(pendingCaution.trim());
        pendingCaution = '';
      }
      tags.push(entry);
    } else {
      if (pendingCaution) {
        pendingCaution += ' ' + entry.trim();
      }
    }
  }
  if (pendingCaution) cautions.push(pendingCaution.trim());

  return { tags, cautions };
}

const data = recipesData as {
  meta: CookbookMeta;
  chapters: CookbookChapter[];
  recipes: Array<Omit<CookbookRecipe, 'cautions'> & { condition_tags: string[] }>;
};

export const meta: CookbookMeta = data.meta;

export const chapters: CookbookChapter[] = data.chapters.sort(
  (a, b) => a.number - b.number
);

const parsedRecipes: CookbookRecipe[] = data.recipes.map((r) => {
  const { tags, cautions } = parseConditionTags(r.condition_tags);
  return { ...r, condition_tags: tags, cautions };
});

export function getAllCookbookRecipes(): CookbookRecipe[] {
  return parsedRecipes;
}

export function getRecipeBySlug(slug: string): CookbookRecipe | undefined {
  return parsedRecipes.find((r) => r.slug === slug);
}

export function getChapterBySlug(slug: string): CookbookChapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getRecipesForChapter(chapterSlug: string): CookbookRecipe[] {
  const ch = getChapterBySlug(chapterSlug);
  if (!ch) return [];
  return ch.recipe_slugs
    .map((slug) => getRecipeBySlug(slug))
    .filter((r): r is CookbookRecipe => r !== undefined);
}

export function getAllConditionTags(): string[] {
  return Array.from(KNOWN_TAGS).sort();
}

export function getAllIddsiLevels(): string[] {
  const levels = new Set(parsedRecipes.map((r) => r.iddsi_level));
  return Array.from(levels).sort();
}
