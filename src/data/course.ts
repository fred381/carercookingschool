import type { Recipe, Stage } from '@/types/course';

const stage1Recipes: Recipe[] = [
  {
    id: 's1-01',
    stage: 1,
    order: 1,
    name: 'Smoked salmon with brown bread and butter',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '10 minutes',
    cookTime: 'No cooking',
    tags: ['Heart health', 'Dementia', 'Bone health'],
    caution: 'Check for fish allergies and watch salt intake for anyone on a low sodium diet.',
    techniqueNote:
      'The whole lesson here is restraint. Good smoked salmon needs nothing more than good bread, cold butter and a squeeze of lemon. If you find yourself reaching for a fourth ingredient, put it back.',
    about:
      'A quiet, elegant plate that sits at the heart of English teatime cooking. This is the anchor recipe for stage one because it teaches confidence without heat. You are assembling, not cooking, and every small decision shows on the plate.',
    ingredients: [
      { name: 'Smoked salmon, sliced', amount: '80 g', shaded: true },
      { name: 'Brown sourdough or rye bread', amount: '2 slices' },
      { name: 'Unsalted butter, softened', amount: '15 g', shaded: true },
      { name: 'Lemon', amount: '1 wedge' },
      { name: 'Black pepper', amount: 'A turn' },
      { name: 'Fresh dill (optional)', amount: 'A small sprig', shaded: true },
    ],
    steps: [
      'Take the butter out of the fridge ten minutes before you start so it spreads easily.',
      'Cut the crusts off the brown bread if they are very firm. Spread the butter in a thin, even layer right to the edges.',
      'Lay the smoked salmon on a board and loosely drape it. Do not press it flat, you want soft folds.',
      'Arrange the bread on a small plate, place the salmon alongside or on top of the bread.',
      'Add the lemon wedge, one turn of black pepper and the dill if using. Serve straight away.',
    ],
    nutrients: ['Omega 3', 'Protein', 'Vitamin D', 'Calcium from butter and bread'],
    conditions: ['Supports heart and brain health', 'Gentle enough for appetite loss', 'Good for bone health'],
    nostalgia:
      'Smoked salmon was a sign of a special occasion for many older people, Christmas, a wedding buffet, a quiet Sunday with the papers. Naming that memory while you plate up can bring real pleasure to the person you are cooking for.',
    presentation:
      'Use a cold plate if you can. Fold the salmon loosely, keep the lemon wedge small and tidy, and leave a little empty space on the plate. Elegance here comes from what you leave out.',
    watchOut:
      'Smoked salmon is salty. If the person you care for has high blood pressure or is on fluid restrictions, keep portions small and skip adding any extra salt.',
    easier:
      'If chewing is difficult, choose a softer brown bread without seeds, remove the crusts and cut the salmon into smaller ribbons. A thin spread of cream cheese under the salmon makes each mouthful easier to manage.',
    audioFile: '/audio/stage1/01-smoked-salmon.mp3',
    isAnchor: true,
  },
  {
    id: 's1-02',
    stage: 1,
    order: 2,
    name: 'Potted shrimps with brown bread',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '15 minutes',
    cookTime: '5 minutes',
    tags: ['Heart health', 'Dementia'],
    techniqueNote:
      'Warming the butter gently is the key. You want the spices to bloom without the butter browning. Low heat, patience, and a wooden spoon.',
    about:
      'A Morecambe Bay classic. Tiny brown shrimps sealed under spiced butter, spread onto warm toast. Comforting, familiar, and surprisingly quick to put together.',
    ingredients: [
      { name: 'Cooked brown shrimps', amount: '120 g', shaded: true },
      { name: 'Unsalted butter', amount: '60 g' },
      { name: 'Mace, ground', amount: 'A pinch', shaded: true },
      { name: 'Nutmeg, grated', amount: 'A pinch' },
      { name: 'Cayenne pepper', amount: 'A tiny pinch', shaded: true },
      { name: 'Brown bread, toasted', amount: '2 slices' },
      { name: 'Lemon', amount: '1 wedge', shaded: true },
    ],
    steps: [
      'Melt the butter very gently in a small pan until it is just liquid.',
      'Stir in the mace, nutmeg and cayenne and let the spices warm through for about a minute.',
      'Add the shrimps and turn them in the butter until warmed, do not let the pan sizzle.',
      'Spoon the shrimps into a small ramekin and pour over enough spiced butter to cover.',
      'Chill for ten minutes so the butter firms slightly, then serve with warm toast and lemon.',
    ],
    nutrients: ['Protein', 'Vitamin B12', 'Selenium'],
    conditions: ['Gentle for sore mouths when spread thinly', 'Good for heart health'],
    nostalgia:
      'Ask about seaside holidays. Many older people remember buying potted shrimps in small white tubs at Morecambe or Southport. The smell alone can open a whole afternoon of memories.',
    presentation:
      'Serve in a small ramekin with the toast cut into neat fingers. A wedge of lemon on the side is all you need.',
    watchOut:
      'Watch the seasoning. Brown shrimps are already salty, so taste before adding any more salt or cayenne.',
    easier:
      'Spread the shrimp butter thinly onto soft brown bread rather than firm toast, and mash the shrimps slightly with a fork if they are too chewy.',
    audioFile: '/audio/stage1/02-potted-shrimps.mp3',
    isAnchor: false,
  },
  {
    id: 's1-03',
    stage: 1,
    order: 3,
    name: 'Avocado and prawn cocktail',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '15 minutes',
    cookTime: 'No cooking',
    tags: ['Heart health', 'Diabetes'],
    techniqueNote:
      'The sauce should cling to the prawns, not drown them. Mix it in a bowl separately, then fold the prawns through at the last moment.',
    about:
      'An update of a 1970s dinner party favourite. Ripe avocado brings good fats, the prawns bring protein, and a light Marie Rose sauce holds everything together without too much sugar.',
    ingredients: [
      { name: 'Cooked peeled prawns', amount: '120 g', shaded: true },
      { name: 'Ripe avocado', amount: '1' },
      { name: 'Mayonnaise', amount: '1 tbsp', shaded: true },
      { name: 'Tomato ketchup', amount: '1 tsp' },
      { name: 'Lemon juice', amount: '1 tsp', shaded: true },
      { name: 'Baby gem lettuce', amount: '4 leaves' },
      { name: 'Paprika', amount: 'A pinch', shaded: true },
    ],
    steps: [
      'Pat the prawns dry with kitchen paper so the sauce does not become watery.',
      'In a small bowl mix the mayonnaise, ketchup and lemon juice until smooth.',
      'Cut the avocado in half, remove the stone and slice neatly into the skin.',
      'Lay the lettuce into two small glasses or bowls, add the avocado slices, then the prawns.',
      'Spoon over the sauce and finish with a light dusting of paprika.',
    ],
    nutrients: ['Monounsaturated fats', 'Protein', 'Vitamin E', 'Folate'],
    conditions: ['Low in added sugar', 'Supports heart health', 'Easy to eat with a spoon'],
    nostalgia:
      'This was the starter at every smart occasion in the 1970s. If the person you care for met their husband or wife around then, this dish might well have been on the menu at their engagement dinner.',
    presentation:
      'Serve in a small glass tumbler or wide coupe. Keep the sauce pale pink, not red, and finish with the lightest dusting of paprika.',
    watchOut:
      'Shop bought ketchup and mayonnaise can be high in sugar and salt. Use a small amount and taste before you add more.',
    easier:
      'Chop the prawns finely and mash the avocado through the sauce to make a soft prawn pâté that spoons easily.',
    audioFile: '/audio/stage1/03-prawn-cocktail.mp3',
    isAnchor: false,
  },
  {
    id: 's1-04',
    stage: 1,
    order: 4,
    name: 'Coronation chicken salad',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '15 minutes',
    cookTime: 'No cooking if using cooked chicken',
    tags: ['Appetite/nutrition', 'Dementia'],
    techniqueNote:
      'Coronation chicken is about balance between the mayonnaise, the curry and the sweetness. Add the curry powder a little at a time and taste as you go.',
    about:
      'Created for the 1953 Coronation, this is one of the most familiar cold chicken dishes in Britain. Mild curry, a little mango chutney, cool mayonnaise and shredded chicken.',
    ingredients: [
      { name: 'Cooked chicken breast, shredded', amount: '150 g', shaded: true },
      { name: 'Mayonnaise', amount: '2 tbsp' },
      { name: 'Natural yoghurt', amount: '1 tbsp', shaded: true },
      { name: 'Mild curry powder', amount: '1 tsp' },
      { name: 'Mango chutney', amount: '1 tsp', shaded: true },
      { name: 'Sultanas', amount: '1 tbsp' },
      { name: 'Flaked almonds, toasted', amount: '1 tbsp', shaded: true },
      { name: 'Salad leaves', amount: 'A handful' },
    ],
    steps: [
      'Mix the mayonnaise, yoghurt, curry powder and mango chutney in a bowl until smooth.',
      'Add the shredded chicken and the sultanas and fold gently until everything is coated.',
      'Taste and adjust, a little more chutney for sweetness, a little more curry for warmth.',
      'Arrange the salad leaves on a plate and spoon the chicken on top.',
      'Scatter the toasted almonds over the top just before serving.',
    ],
    nutrients: ['Protein', 'B vitamins', 'Vitamin E from almonds'],
    conditions: ['Gentle for appetite loss', 'Familiar for people living with dementia'],
    nostalgia:
      'Ask about the 1953 Coronation. Many older people will remember street parties, bunting, and the first time they tasted curry powder at all.',
    presentation:
      'Serve on a small white plate with the salad leaves tucked underneath. A scatter of almonds on top finishes it nicely.',
    watchOut:
      'Check for nut allergies before adding the almonds, and leave the sultanas out if swallowing is a concern.',
    easier:
      'Chop the chicken very finely rather than shredding, leave out the almonds and the sultanas, and use a thicker coat of the sauce so everything holds together on a fork.',
    audioFile: '/audio/stage1/04-coronation-chicken.mp3',
    isAnchor: false,
  },
  {
    id: 's1-05',
    stage: 1,
    order: 5,
    name: 'Egg mayonnaise salad',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '15 minutes',
    cookTime: '10 minutes',
    tags: ['Bone health', 'Appetite/nutrition'],
    techniqueNote:
      'A properly boiled egg for this salad has a just set yolk, golden and creamy, not chalky. Seven minutes from a rolling boil, then straight into cold water.',
    about:
      'A quiet lunchtime plate that looks after itself. Soft boiled eggs, a lightly seasoned mayonnaise, crisp lettuce, and perhaps a slice of buttered bread on the side.',
    ingredients: [
      { name: 'Eggs', amount: '2', shaded: true },
      { name: 'Mayonnaise', amount: '1 tbsp' },
      { name: 'Dijon mustard', amount: 'Half tsp', shaded: true },
      { name: 'Chives, chopped', amount: '1 tsp' },
      { name: 'Baby gem lettuce', amount: '4 leaves', shaded: true },
      { name: 'Cherry tomatoes, halved', amount: '4' },
      { name: 'Salt and pepper', amount: 'To taste', shaded: true },
    ],
    steps: [
      'Bring a small pan of water to a rolling boil. Lower the eggs in with a spoon.',
      'Boil for seven minutes exactly, then lift the eggs into a bowl of cold water to stop the cooking.',
      'Peel the eggs under a gentle running tap. Halve them and lay them on a plate.',
      'Mix the mayonnaise, mustard and chives in a small bowl and spoon over the eggs.',
      'Arrange the lettuce and tomatoes alongside and season lightly.',
    ],
    nutrients: ['Protein', 'Vitamin D', 'Calcium', 'Choline'],
    conditions: ['Gentle on the appetite', 'Good source of bone supporting nutrients'],
    nostalgia:
      'For older women especially, egg mayonnaise salad was a staple lunch when they were first running a home. It can bring back early married life and the pride of a tidy table.',
    presentation:
      'A small plate, eggs halved and yolks up, sauce spooned rather than poured. Keep the tomatoes neat and the lettuce trimmed.',
    watchOut:
      'Undercooked eggs are not suitable for older adults with weaker immune systems. Seven minutes gives you a safe, fully set egg.',
    easier:
      'Chop the eggs and mix them right through the mayonnaise so the whole thing can be eaten with a soft spoon or scooped onto a small piece of bread.',
    audioFile: '/audio/stage1/05-egg-mayo.mp3',
    isAnchor: false,
  },
  {
    id: 's1-06',
    stage: 1,
    order: 6,
    name: 'Waldorf salad',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '15 minutes',
    cookTime: 'No cooking',
    tags: ['Heart health', 'Appetite/nutrition'],
    techniqueNote:
      'Cut the apple last. Once it is in the bowl, squeeze the lemon straight over so it stays pale and fresh.',
    about:
      'A New York classic from the Waldorf Hotel that crossed the Atlantic and settled into the British buffet table. Apple, celery, walnut, and a soft mayonnaise dressing.',
    ingredients: [
      { name: 'Crisp eating apple', amount: '1', shaded: true },
      { name: 'Celery stalks', amount: '2' },
      { name: 'Walnut halves', amount: '30 g', shaded: true },
      { name: 'Mayonnaise', amount: '2 tbsp' },
      { name: 'Natural yoghurt', amount: '1 tbsp', shaded: true },
      { name: 'Lemon juice', amount: '1 tsp' },
      { name: 'Salad leaves', amount: 'A handful', shaded: true },
    ],
    steps: [
      'Wash and trim the celery and slice it into thin crescents.',
      'In a bowl mix the mayonnaise, yoghurt and lemon juice to a loose dressing.',
      'Quarter, core and dice the apple, then fold it through the dressing straight away.',
      'Add the celery and most of the walnuts, keep a few back for the top.',
      'Spoon onto the salad leaves and scatter the reserved walnuts over.',
    ],
    nutrients: ['Omega 3 from walnuts', 'Fibre', 'Vitamin C'],
    conditions: ['Supports heart health', 'Light on the stomach'],
    nostalgia:
      'Waldorf salad was often the dinner party starter many older people practised for weeks before they made it for guests. Ask about the first time they made it themselves.',
    presentation:
      'Serve in a shallow bowl so the colours show. Pale apple, green celery, toasted walnut, a little lemon zest on top if you have it.',
    watchOut:
      'Check for nut allergies. If there is any doubt, leave the walnuts out completely and add a small handful of sunflower seeds instead.',
    easier:
      'Grate the apple and chop the celery very finely so everything blends into the dressing and can be eaten with a soft spoon.',
    audioFile: '/audio/stage1/06-waldorf.mp3',
    isAnchor: false,
  },
  {
    id: 's1-07',
    stage: 1,
    order: 7,
    name: 'Prawn Marie Rose salad',
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '10 minutes',
    cookTime: 'No cooking',
    tags: ['Heart health', 'Appetite/nutrition'],
    techniqueNote:
      'Marie Rose sauce should taste of seafood first and tomato second. Start with one teaspoon of ketchup and add more only if you need it.',
    about:
      'The quiet cousin of the prawn cocktail. All the same flavours, laid flat on a plate with crisp leaves, no glass, no fuss.',
    ingredients: [
      { name: 'Cooked peeled prawns', amount: '150 g', shaded: true },
      { name: 'Mayonnaise', amount: '1.5 tbsp' },
      { name: 'Tomato ketchup', amount: '1 tsp', shaded: true },
      { name: 'Lemon juice', amount: '1 tsp' },
      { name: 'Worcestershire sauce', amount: 'A few drops', shaded: true },
      { name: 'Baby gem lettuce', amount: '4 leaves' },
      { name: 'Cucumber, sliced', amount: 'A small handful', shaded: true },
    ],
    steps: [
      'Pat the prawns very dry on kitchen paper.',
      'Mix the mayonnaise, ketchup, lemon juice and Worcestershire sauce in a small bowl.',
      'Fold the prawns gently through the sauce.',
      'Arrange the lettuce and cucumber on a plate.',
      'Spoon the prawns on top and serve straight away, it is best while the leaves are still crisp.',
    ],
    nutrients: ['Protein', 'Iodine', 'Selenium'],
    conditions: ['Heart friendly', 'Very gentle for smaller appetites'],
    nostalgia:
      'Ask about holiday lunches by the sea, prawn cocktails in paper cups, or a first proper meal out in a hotel. The flavour takes many older people straight back.',
    presentation:
      'A cool plate, pale leaves, pale pink sauce. Keep it tidy rather than piled high.',
    watchOut:
      'Worcestershire sauce has quite a lot of salt, so only a few drops. Leave it out entirely for anyone on a low salt diet.',
    easier:
      'Chop the prawns smaller and mix the sauce through them to make a soft prawn salad that can be spooned onto soft white bread.',
    audioFile: '/audio/stage1/07-prawn-marie-rose.mp3',
    isAnchor: false,
  },
  {
    id: 's1-08',
    stage: 1,
    order: 8,
    name: "Ploughman's lunch",
    difficulty: 'Easy',
    iddsiLevel: 'Level 7',
    prepTime: '10 minutes',
    cookTime: 'No cooking',
    tags: ['Bone health', 'Appetite/nutrition'],
    techniqueNote:
      "A good ploughman's is about contrast. Something sharp, something soft, something crunchy, something sweet. Keep the plate generous but not crowded.",
    about:
      'A pub lunch built from the larder. A wedge of good cheddar, cold ham, a pickled onion, some chutney and a hunk of fresh bread. Honest and filling.',
    ingredients: [
      { name: 'Mature cheddar', amount: '50 g', shaded: true },
      { name: 'Cooked ham', amount: '60 g' },
      { name: 'Crusty bread', amount: '1 small roll', shaded: true },
      { name: 'Butter', amount: '10 g' },
      { name: 'Branston pickle or chutney', amount: '1 tbsp', shaded: true },
      { name: 'Pickled onion', amount: '1' },
      { name: 'Apple, sliced', amount: 'Half', shaded: true },
      { name: 'Salad leaves', amount: 'A handful' },
    ],
    steps: [
      'Slice the cheese into a neat wedge rather than cubes.',
      'Fold the ham loosely rather than laying it flat.',
      'Split and butter the bread.',
      'Arrange everything on one plate with the pickle and pickled onion in a small pot or directly on the plate.',
      'Add the apple slices and a small handful of leaves and serve.',
    ],
    nutrients: ['Calcium', 'Protein', 'Fibre'],
    conditions: ['Good for bone health', 'Good for a better appetite day'],
    nostalgia:
      'Ask about pub lunches from the 1960s and 1970s, country walks on a Sunday, maybe a pint of shandy. This plate can bring back a whole afternoon.',
    presentation:
      'A generous round plate, everything spread out in little islands. Not piled up. You should be able to see each thing clearly.',
    watchOut:
      'Pickled onions and chutney are salty and sharp. If the person you care for has ulcers, reflux or a sore mouth, leave them out or offer just a taste.',
    easier:
      'Grate the cheese, chop the ham finely, mash the apple, and skip the pickled onion. A soft roll with butter is easier to manage than a crusty one.',
    audioFile: '/audio/stage1/08-ploughmans.mp3',
    isAnchor: false,
  },
];

export const course: Stage[] = [
  {
    id: 1,
    title: 'Cold preparation and confidence',
    coreTechnique: 'Assembly without heat',
    recipes: stage1Recipes,
  },
  {
    id: 2,
    title: 'Heat and timing',
    coreTechnique: 'Reading the pan',
    recipes: [],
  },
  {
    id: 3,
    title: 'The knife and the hob',
    coreTechnique: 'Knife skills and small cooking',
    recipes: [],
  },
  {
    id: 4,
    title: 'Pan and oven',
    coreTechnique: 'Moving between stovetop and oven',
    recipes: [],
  },
  {
    id: 5,
    title: 'Low and slow',
    coreTechnique: 'Braises, stews and gentle cooking',
    recipes: [],
  },
  {
    id: 6,
    title: 'Occasion and refinement',
    coreTechnique: 'Cooking for a moment',
    recipes: [],
  },
];

export function getAllRecipes(): Recipe[] {
  return course.flatMap((stage) => stage.recipes);
}

export function getRecipeById(id: string): Recipe | undefined {
  return getAllRecipes().find((r) => r.id === id);
}

export function getStageById(id: number): Stage | undefined {
  return course.find((s) => s.id === id);
}

export function getAdjacentRecipes(id: string): { prev?: Recipe; next?: Recipe } {
  const all = getAllRecipes();
  const idx = all.findIndex((r) => r.id === id);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}
