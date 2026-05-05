export interface Ingredient {
  name: string;
  amount: string;
  shaded?: boolean;
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Recipe {
  id: string;
  stage: number;
  stageTitle: string;
  order: number;
  name: string;
  category: string;
  difficulty: Difficulty;
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

export interface TagColour {
  bg: string;
  text: string;
}

export const tagColours: Record<string, TagColour> = {
  'Heart health': { bg: '#FCEBEB', text: '#791F1F' },
  'Dementia': { bg: '#EEF4ED', text: '#002D18' },
  'Bone health': { bg: '#FAEEDA', text: '#633806' },
  'Diabetes': { bg: '#E6F1FB', text: '#0C447C' },
  'Appetite/nutrition': { bg: '#F7F2D9', text: '#004225' },
  "Parkinson's": { bg: '#EEE7F5', text: '#3E2063' },
  'Dysphagia': { bg: '#E5F0EE', text: '#08423A' },
  'COPD': { bg: '#EAF0F5', text: '#1F3B52' },
  'Cancer support': { bg: '#F5EBEF', text: '#5C1B3A' },
  'Kidney friendly': { bg: '#EAF2E3', text: '#2E4A14' },
};

export const defaultTagColour: TagColour = { bg: '#EEF4ED', text: '#002D18' };
