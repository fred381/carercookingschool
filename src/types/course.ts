export interface Ingredient {
  name: string;
  amount: string;
  shaded?: boolean;
}

export interface Recipe {
  id: string;
  stage: number;
  order: number;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  iddsiLevel: string;
  prepTime: string;
  cookTime: string;
  tags: string[];
  caution?: string;
  techniqueNote: string;
  about: string;
  ingredients: Ingredient[];
  steps: string[];
  nutrients: string[];
  conditions: string[];
  nostalgia: string;
  presentation: string;
  watchOut: string;
  easier: string;
  audioFile?: string;
  isAnchor: boolean;
}

export interface Stage {
  id: number;
  title: string;
  coreTechnique: string;
  recipes: Recipe[];
}

export type TagKey =
  | 'Heart health'
  | 'Dementia'
  | 'Bone health'
  | 'Diabetes'
  | 'Appetite/nutrition';

export const tagColours: Record<TagKey, { bg: string; text: string }> = {
  'Heart health': { bg: '#FCEBEB', text: '#791F1F' },
  'Dementia': { bg: '#EEF4ED', text: '#002D18' },
  'Bone health': { bg: '#FAEEDA', text: '#633806' },
  'Diabetes': { bg: '#E6F1FB', text: '#0C447C' },
  'Appetite/nutrition': { bg: '#F7F2D9', text: '#004225' },
};
