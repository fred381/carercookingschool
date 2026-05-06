export interface GuideSection {
  heading?: string;
  body?: string[];
  bullets?: string[];
  callout?: { title: string; body: string[] };
  table?: { headers: string[]; rows: string[][] };
}

export interface GuideChapter {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sections: GuideSection[];
}

export const guideChapters: GuideChapter[] = [
  {
    slug: 'introduction',
    title: 'Introduction',
    subtitle: 'How to use this book',
    description: 'The philosophy of care cooking, and how each recipe in the book is structured.',
    sections: [
      {
        body: [
          'This cookery book is designed specifically for live-in carers working with Hamilton George Care. It is a practical resource, a training companion, and we hope, something you genuinely enjoy cooking from.',
          'It is structured to take you from the fundamentals through to a full repertoire of recipes, each one chosen for its relevance to the clients in your care. You do not need to read it cover to cover. Use it as you would any good cookery book: dip in, explore, and build your confidence over time.',
        ],
      },
      {
        heading: 'How the book is organised',
        body: [
          'The book opens with a set of foundation chapters covering everything you need before you start cooking. These are not optional reading. A carer who understands food safety, basic nutrition, and texture adaptation will cook more safely and more effectively than one who does not.',
          'The recipe chapters that follow are organised by course and category, mirroring the structure of a classic British cookery school curriculum. Within each chapter, recipes progress from straightforward to more technically demanding, so you can build your skills gradually.',
        ],
      },
      {
        heading: 'How each recipe works',
        body: [
          'Every recipe in this book follows the same format, so you will quickly learn to navigate it. Here is what to look for:',
        ],
        table: {
          headers: ['Section', 'What you will find'],
          rows: [
            ['At the top', 'Difficulty rating (Easy, Medium or Hard), IDDSI texture level, health condition tags, and a caution flag where allergens or clinical considerations apply.'],
            ['About this dish', 'The story and nostalgia behind the recipe.'],
            ['Ingredients', 'Scaled to one person, with sub-headings where needed.'],
            ['Method', 'Clear, numbered steps with one action per step.'],
            ['Health benefits', 'Key nutrients and conditions explained.'],
            ['Texture adaptation', 'A table showing how to adapt the dish for IDDSI levels 7 down to 4, with precise instructions for each level.'],
            ['Carer tips', 'A nostalgia note (conversation starter), presentation tip, watch out for (allergens and cautions), and make it easier (batch cooking and time-saving notes).'],
          ],
        },
      },
      {
        heading: 'A note on quantities',
        body: [
          'All recipes are written for one person. This reflects the reality of live-in care, where you are usually cooking for your client alone, or occasionally for a client and a family member. Most recipes can be doubled or tripled straightforwardly, and the batch cooking chapter gives specific guidance on scaling up for the freezer.',
        ],
      },
      {
        heading: 'A note on skill level',
        body: [
          'Do not be put off by recipes marked Medium or Hard. These ratings reflect technical complexity, not the time required. A slow-cooked lamb shoulder is marked Easy because it largely looks after itself. A hollandaise sauce is marked Hard because it requires concentration and technique. Work through the Easy recipes first and your confidence will build naturally.',
        ],
      },
      {
        callout: {
          title: 'A word about the clients you cook for',
          body: [
            'The people in your care have lived long, full lives. Many have cooked themselves, eaten in good restaurants, and have firm opinions about food. Treat their preferences with respect. Ask questions. Learn what they love and what they dislike.',
            'A carer who takes the time to understand a client\'s relationship with food will provide something far beyond nutrition: they will provide genuine comfort and pleasure.',
          ],
        },
      },
    ],
  },
  {
    slug: 'hygiene',
    title: 'Hygiene and Kitchen Maintenance',
    subtitle: 'Keeping the kitchen safe and well',
    description: 'Food safety standards, allergen awareness, and temperature control for care kitchens.',
    sections: [
      {
        body: [
          'Food safety in a care setting is not optional. The people in your care are likely to have reduced immunity, which means they are more vulnerable to foodborne illness than a healthy adult. A lapse in hygiene that might cause a healthy person mild discomfort can be serious for an elderly client. The standards in this chapter are the baseline: they are not negotiable.',
        ],
      },
      {
        heading: 'Personal hygiene',
        bullets: [
          'Wash your hands thoroughly with soap and warm water for at least 20 seconds before handling any food, after handling raw meat or fish, after using the bathroom, after touching your face or hair, and after handling rubbish or cleaning products.',
          'Tie back long hair and remove jewellery including rings before cooking.',
          'Do not cook if you are suffering from a gastrointestinal illness, vomiting or diarrhoea. Inform Hamilton George Care immediately and arrange cover.',
          'Keep any cuts or grazes on your hands covered with a blue waterproof plaster while cooking.',
          'Wear a clean apron when cooking and wash it regularly.',
        ],
      },
      {
        heading: 'Safe food handling',
        bullets: [
          'Always check use-by dates before using any ingredient. Never use food past its use-by date, even if it looks and smells fine.',
          'Store raw meat and fish on the bottom shelf of the fridge, in sealed containers, well away from cooked food and ready-to-eat ingredients.',
          'Use separate chopping boards for raw meat, raw fish, vegetables, and cooked food. Colour-coded boards are recommended: red for raw meat, blue for raw fish, green for vegetables, yellow for cooked food.',
          'Never wash raw chicken. It spreads bacteria across the sink and surrounding surfaces.',
          'Ensure meat and poultry are cooked through to a core temperature of 75°C or above. Use a probe thermometer: it is one of the most important tools in a care kitchen.',
          'Cool leftover food quickly (within 2 hours), cover, refrigerate, and consume within 2 days. Reheat only once, to piping hot throughout.',
        ],
      },
      {
        heading: 'Cross-contamination',
        body: [
          'Cross-contamination occurs when harmful bacteria are transferred from one food to another, usually via hands, surfaces, or utensils. It is one of the most common causes of foodborne illness. Prevent it by:',
        ],
        bullets: [
          'Washing all surfaces, boards, and utensils thoroughly between tasks, particularly when switching between raw and cooked food.',
          'Never using the same knife for raw meat and salad ingredients without washing it in between.',
          'Keeping the fridge clean and well-organised, with raw proteins always stored below cooked or ready-to-eat food.',
        ],
      },
      {
        heading: 'Temperature control',
        callout: {
          title: 'The danger zone',
          body: [
            'Bacteria multiply most rapidly between 8°C and 63°C. Keep cold food cold (below 5°C) and hot food hot (above 63°C). Never leave cooked food sitting at room temperature for more than 2 hours.',
          ],
        },
        bullets: [
          'Check the fridge temperature regularly. It should sit between 1°C and 4°C.',
          'Check the freezer temperature. It should be at or below -18°C.',
          'Do not overfill the fridge, as this prevents cold air from circulating.',
          'Defrost frozen food in the fridge overnight, never on the worktop.',
        ],
      },
      {
        heading: 'Kitchen maintenance',
        bullets: [
          'Clean surfaces before and after every cooking session using an antibacterial spray and clean cloth or paper towel.',
          'Wash cloths and tea towels regularly at 60°C or above. Replace dishcloths frequently: a damp cloth left on the worktop is a breeding ground for bacteria.',
          'Keep the kitchen tidy and organised. A cluttered kitchen is harder to keep clean and increases the risk of accidents.',
          'Empty the bin regularly and keep the bin area clean.',
          'Defrost and clean the fridge at least once a month, or whenever spillages occur.',
          'Clean the oven, hob, and extractor fan regularly. Built-up grease is both a hygiene risk and a fire hazard.',
          'Keep cleaning products stored separately from food, ideally in a dedicated cupboard below the sink.',
        ],
      },
      {
        heading: 'Allergens',
        body: [
          'You must be aware of your client\'s allergies and intolerances at all times. These should be documented in the client\'s care plan. The 14 major allergens to be aware of are:',
        ],
        table: {
          headers: ['Allergen', 'Allergen'],
          rows: [
            ['Celery', 'Molluscs'],
            ['Cereals containing gluten', 'Mustard'],
            ['Crustaceans', 'Nuts (tree nuts)'],
            ['Eggs', 'Peanuts'],
            ['Fish', 'Sesame'],
            ['Lupin', 'Soybeans'],
            ['Milk', 'Sulphur dioxide and sulphites'],
          ],
        },
      },
      {
        callout: {
          title: 'If you are ever uncertain',
          body: [
            'If you are ever unsure whether an ingredient is safe for your client, do not use it. Contact the Hamilton George Care team or the client\'s GP for clarification. It is always better to ask than to assume.',
          ],
        },
      },
    ],
  },
  {
    slug: 'nutrition',
    title: 'Key Points on Nutrition',
    subtitle: 'Feeding well in later life',
    description: 'How nutritional needs change with age, and practical guidance for every meal.',
    sections: [
      {
        body: [
          'The nutritional needs of an elderly person differ significantly from those of a younger adult. As we age, appetite often decreases, the ability to absorb certain nutrients diminishes, and the consequences of poor nutrition become more serious. Understanding these changes will help you make better choices in the kitchen every day.',
        ],
      },
      {
        heading: 'The risk of malnutrition',
        body: [
          'Malnutrition is far more common in elderly people than is generally understood. Studies suggest that up to one in three older adults in care settings is malnourished or at risk. The causes are multiple: reduced appetite, difficulty chewing or swallowing, medication side effects, depression, loneliness, and cognitive decline. The consequences are serious: muscle wasting, weakened immunity, poor wound healing, increased falls risk, and faster cognitive decline.',
        ],
        callout: {
          title: 'Your role',
          body: [
            'As a carer, you are often the most important factor in a client\'s nutritional wellbeing. A meal made with care and presented well is far more likely to be eaten than something that looks uninviting. Small, frequent, calorie-dense meals are often more effective than three large ones. Eating together, or sitting with a client while they eat, significantly improves intake.',
          ],
        },
      },
      {
        heading: 'Protein',
        body: [
          'Protein is the single most important macronutrient for elderly clients. It maintains muscle mass, supports wound healing, and underpins immune function. Older adults need more protein per kilogram of body weight than younger adults, yet they often eat less.',
        ],
        bullets: [
          'Prioritise protein at every meal: eggs, fish, meat, dairy, legumes.',
          'For clients with very small appetites, enrich dishes with protein: add full-fat milk or cream to mash, stir Greek yoghurt into soups, use eggs in sauces and puddings.',
          'Meat and fish are the richest sources. Do not automatically reduce these for elderly clients unless there is a specific clinical reason.',
        ],
      },
      {
        heading: 'Calories and enrichment',
        body: [
          'Many elderly clients need more calories than they are consuming. This is counter-intuitive for carers who may associate good nutrition with low-calorie eating. In a care context, the priority is almost always to get enough calories in, not to restrict them.',
        ],
        bullets: [
          'Use full-fat dairy: full-fat milk, butter, double cream, full-fat yoghurt.',
          'Add butter generously to vegetables, mash, and toast.',
          'Offer calorie-dense snacks: cheese and crackers, peanut butter on toast, full-fat yoghurt with honey.',
          'Small portions presented attractively are often more effective than large ones.',
        ],
      },
      {
        heading: 'Key nutrients to prioritise',
        table: {
          headers: ['Nutrient', 'Why it matters'],
          rows: [
            ['Calcium and vitamin D', 'Critical for bone health. Dairy, tinned fish with bones, and fortified foods are key sources. Vitamin D is rarely achieved through diet alone in elderly clients. A daily vitamin D supplement (typically 800-1000 IU, as recommended by the NHS for adults over 65) should be documented in the care plan.'],
            ['Vitamin B12', 'Essential for neurological function and often poorly absorbed in older adults. Found in meat, fish, eggs, and dairy. Deficiency is common and linked to cognitive decline and anaemia.'],
            ['Iron', 'Supports energy and immune function. Red meat, oily fish, and dark leafy greens are good sources. Haem iron from meat is absorbed far more readily than plant-based iron.'],
            ['Fibre', 'Constipation is extremely common in elderly clients and causes significant distress. Adequate fibre from vegetables, fruit, wholegrains, and legumes is essential. Always ensure adequate fluid intake alongside fibre.'],
            ['Fluids and hydration', 'Dehydration is endemic in elderly care. The sensation of thirst diminishes with age, so clients frequently do not drink enough. Offer fluids proactively throughout the day. Aim for at least 6-8 cups of fluid per day.'],
            ['Potassium and sodium', 'Important for heart and kidney function. Clients with CKD require careful potassium management. Processed foods are high in sodium and should be minimised for clients with hypertension or heart failure.'],
            ['Gut health and probiotics', 'Gut microbiome health is increasingly recognised as important for immune function, mood, and general wellbeing. Live yoghurt, kefir, and naturally fermented foods are practical probiotic sources.'],
          ],
        },
      },
      {
        heading: 'Condition-specific considerations',
        body: [
          'The following are brief summaries only. Always defer to the client\'s care plan and any guidance from their GP or dietitian.',
        ],
      },
      {
        callout: {
          title: 'Dementia',
          body: [
            'Prioritise familiar, flavourful foods. Finger foods can help clients who struggle with cutlery. Eating together or in a calm environment significantly improves intake. The smell of cooking is itself a positive sensory stimulus.',
          ],
        },
      },
      {
        callout: {
          title: 'Diabetes (Type 2)',
          body: [
            'Prioritise low-GI carbohydrates, increase vegetable content, and reduce added sugars. Do not eliminate carbohydrates entirely. Consistent meal timing matters. Do not restrict calories aggressively.',
          ],
        },
      },
      {
        callout: {
          title: 'Dysphagia',
          body: [
            'Always follow the IDDSI level documented in the care plan. Never deviate from the prescribed texture without clinical guidance. Thickened fluids must be prepared to the correct consistency. See the IDDSI Guidance chapter for full details.',
          ],
        },
      },
      {
        callout: {
          title: "Parkinson's disease",
          body: [
            'Timing meals around medication is important, as some medications interact with protein. Constipation is a major concern: prioritise fibre and fluids. Tremor may make self-feeding difficult: finger foods and adapted cutlery can help.',
            'Important: many clients with Parkinson\'s disease are prescribed levodopa or co-careldopa. High-protein meals taken close to medication times can significantly reduce levodopa absorption. Where noted in the care plan, offer lower-protein options (porridge, toast, fruit, yoghurt) in the period immediately before and after medication, and reserve protein-rich meals for other times of the day. This timing decision should always be confirmed with the client\'s GP or specialist nurse.',
          ],
        },
      },
    ],
  },
  {
    slug: 'techniques',
    title: 'Vital Techniques',
    subtitle: 'The foundations of good cooking',
    description: 'Core skills for knife work, stock making, enrichment, texture modification, and reheating safely.',
    sections: [
      {
        body: [
          'A small number of techniques underpin almost every recipe in this book. Master these and the rest will follow naturally. This chapter does not attempt to be a comprehensive cooking school: it focuses on the skills you will use every day in a care kitchen.',
        ],
      },
      {
        heading: 'Knife skills',
        body: [
          'A sharp knife is safer than a blunt one. A blunt knife requires more force, slips more easily, and produces uneven cuts that cook unevenly. Invest in a good 20cm chef\'s knife and a small paring knife, and keep them sharp.',
        ],
        bullets: [
          'Dice: cut into small, even cubes. For a fine dice (for soffritto or soup bases), aim for 3-5mm cubes.',
          'Slice: use a rocking motion, keeping the tip of the knife on the board and lifting only the heel.',
          'Julienne: thin matchstick strips, useful for stir-fries and salads.',
          'Chiffonade: fine ribbons of leafy herbs or greens. Stack the leaves, roll tightly, and slice across.',
          'The bridge grip: for cutting large items. Arch the thumb and forefinger over the item to form a bridge, and cut through the centre.',
          'The claw grip: for slicing. Curl the fingertips under and use the knuckles to guide the blade.',
        ],
      },
      {
        heading: 'Making a good stock',
        body: [
          'A good stock is the foundation of soups, sauces, stews, and braises. It takes very little active work and transforms the flavour of everything it touches.',
        ],
        bullets: [
          'Start with cold water: this produces a clearer stock.',
          'Bring slowly to a gentle simmer, never a rolling boil, which clouds the stock and makes it bitter.',
          'Skim regularly in the first 20 minutes to remove grey foam.',
          'Do not over-salt stock: reduce it first, then season.',
          'Strain through a fine sieve and cool quickly. Refrigerate for up to 3 days or freeze in portions.',
        ],
        callout: {
          title: 'A note on bought stock',
          body: [
            'Good-quality bought stock is an acceptable shortcut. Use low-sodium varieties where possible, particularly for clients with heart conditions or hypertension. Avoid stock cubes as the primary seasoning: they are very high in salt.',
          ],
        },
      },
      {
        heading: 'Sweating and softening vegetables',
        body: [
          'Sweating vegetables gently in fat is one of the most important techniques in cooking. It develops sweetness, softens texture, and builds the flavour base for soups, sauces, and stews.',
        ],
        bullets: [
          'Use a wide, heavy-based pan over a low to medium heat.',
          'Add enough fat (butter, olive oil, or a combination) to coat the base of the pan.',
          'Add the vegetables with a pinch of salt, which draws out moisture and speeds softening.',
          'Cook slowly, stirring occasionally, until completely soft and translucent but not coloured. This takes 8-15 minutes depending on the vegetables.',
          'If the vegetables start to colour before they are soft, add a splash of water and reduce the heat.',
        ],
      },
      {
        heading: 'Enriching and finishing',
        body: [
          'Enriching a dish at the end of cooking is one of the most effective ways to add calories and improve flavour: particularly important in a care kitchen where appetite may be limited.',
        ],
        bullets: [
          'Butter: stir a knob of cold butter into a sauce or soup off the heat to add richness and gloss.',
          'Cream: a splash of double cream added at the end of cooking enriches soups, sauces, and mashes.',
          'Egg yolk: whisked into a sauce or soup off the heat, it adds richness and body without curdling.',
          'Cheese: stirred into mash, risotto, or soup adds protein, calcium, and flavour.',
          'Olive oil: drizzled over a finished dish adds calories and a clean, fresh flavour.',
        ],
      },
      {
        heading: 'Texture modification',
        body: [
          'Adapting dishes for clients with dysphagia or chewing difficulties is a core skill in a care kitchen. Always follow the IDDSI level specified in the client\'s care plan. The following principles apply across all texture modification:',
        ],
        bullets: [
          'IDDSI Level 7 (regular): serve as cooked, no adaptation required.',
          'IDDSI Level 6 (soft and bite-sized): all pieces must be no larger than 1.5cm. No hard, crunchy, or chewy elements. Ensure the dish is moist throughout.',
          'IDDSI Level 5 (minced and moist): food must be finely minced or chopped to 4mm pieces. Must hold together but not be dry or crumbly. Test by pressing: it should cohere but not be stiff.',
          'IDDSI Level 4 (puréed): completely smooth with no lumps, skin, seeds, or fibrous pieces. Should hold its shape briefly when spooned. Pass through a fine sieve if in doubt.',
          'IDDSI Levels 1-3 (fluids): follow the specific consistency guidance in the care plan. Thickening agents must be measured precisely.',
        ],
      },
      {
        heading: 'Preparing thickened fluids safely',
        body: [
          'Thickened fluids appear across many recipes in this book. Getting the consistency right is a clinical safety requirement, not a preference. Incorrect thickened fluid consistency is one of the most common causes of aspiration in dysphagia care. Follow these rules without exception:',
        ],
        bullets: [
          'Always use the specific thickening agent named in the client\'s care plan. Do not substitute with cornflour, gravy powder, or other thickeners, as these do not behave predictably.',
          'Measure precisely. Use the measurement specified in the product instructions, either by weight or volume. Never add thickener by eye.',
          'Allow the thickener to fully hydrate before serving. Most commercial thickeners require 1 to 2 minutes of stirring or standing to reach their full consistency.',
          'Test the consistency before serving using the IDDSI fork drip test (for Levels 1 to 4) or the spoon tilt test (for Level 4). Instructions for these tests are available at iddsi.org.',
          'If you are unsure whether the consistency is correct, contact the Hamilton George Care team before serving.',
        ],
        callout: {
          title: 'Presentation matters at every IDDSI level',
          body: [
            'Puréed food can be presented attractively using moulds, piping bags, and ramekins. A dish that looks like food, rather than a grey slurry, is far more likely to be eaten. Take the extra minute to present it well.',
          ],
        },
      },
      {
        heading: 'Reheating safely',
        bullets: [
          'Reheat food to a core temperature of 75°C or above throughout.',
          'Reheat only once: never reheat the same food twice.',
          'Add a splash of stock, milk, or water when reheating to prevent drying out.',
          'Stir halfway through reheating to ensure even temperature throughout.',
          'Always check the temperature of the centre of the food with a probe thermometer before serving.',
          'Allow food to rest for 2-3 minutes after reheating before serving, and always check the temperature of what you are serving to avoid burns.',
        ],
      },
    ],
  },
  {
    slug: 'menu-planning',
    title: 'Menu Planning',
    subtitle: 'Thinking ahead for better care',
    description: 'How to build a balanced week of meals, manage shopping, and adapt to changing appetite.',
    sections: [
      {
        body: [
          'Good menu planning is one of the most practical skills a carer can develop. A week of meals thought through in advance is more nutritious, less wasteful, less stressful, and more enjoyable for both carer and client than deciding what to cook at the last minute.',
        ],
      },
      {
        heading: 'Why plan ahead',
        bullets: [
          'Shopping is more efficient and less expensive when you know what you need.',
          'Batch cooking becomes possible, saving significant time across the week.',
          'Nutritional balance is easier to achieve across a week than meal by meal.',
          'Variety is built in, avoiding the repetition that can deaden appetite.',
          'The client feels more involved and in control when asked about preferences in advance.',
        ],
      },
      {
        heading: 'How to build a balanced week',
        body: [
          'A well-planned week of meals for an elderly client should include:',
        ],
        table: {
          headers: ['Principle', 'Guidance'],
          rows: [
            ['Protein every day', 'Aim for at least two substantial protein sources daily: breakfast eggs or smoked fish, a meat or fish lunch, a protein-rich dinner. Dairy snacks supplement this.'],
            ['Oily fish twice a week', 'Salmon, mackerel, sardines, trout, and herring provide omega-3 fatty acids important for brain and heart health.'],
            ['Vegetables at every meal', 'Aim for a variety of colours across the week. Frozen vegetables are nutritionally equivalent to fresh and reduce waste.'],
            ['One batch cook per week', 'Designate one session (Sunday is natural) to make a large batch of something that will serve across two or three lunches or dinners.'],
            ['Pudding is not optional', 'A pudding adds calories, pleasure, and structure to a meal. For clients with reduced appetite, a small pudding is often eaten when the main course is not finished.'],
            ['Involve the client', 'Ask the client at the start of each week what they feel like eating. Having some control over what you eat is important for dignity and wellbeing.'],
          ],
        },
      },
      {
        heading: 'Shopping and kitchen organisation',
        bullets: [
          'Write a shopping list from the weekly menu before you go. Group items by category: protein, dairy, vegetables, store cupboard.',
          'Keep a well-stocked store cupboard: tinned tomatoes, stock, dried pasta, rice, lentils, tinned fish, good olive oil, and a range of dried herbs and spices.',
          'Label and date everything stored in the fridge or freezer.',
          'Check use-by dates when unpacking shopping and rotate older items to the front.',
          'Keep the freezer stocked with batch-cooked portions for days when time is short or the client is unwell.',
        ],
      },
      {
        heading: 'Adapting for changing appetite',
        body: [
          'A client\'s appetite may change day by day depending on their health, medication, mood, and activity level. A good carer is responsive to this, not rigid.',
        ],
        bullets: [
          'If a client is not hungry, offer something small and calorie-dense rather than a full meal: a boiled egg, a piece of cheese, a small bowl of soup.',
          'If a client is particularly hungry, take the opportunity to offer extra protein or a more substantial pudding.',
          'Never force a client to eat. Encourage, offer, and try again later.',
          'Keep a note of what the client eats and when. If you notice a consistent decline in intake over several days, inform Hamilton George Care.',
        ],
      },
    ],
  },
  {
    slug: 'menu-plans',
    title: 'Menu Plans',
    subtitle: 'A week of meals for every client',
    description: 'Four complete weekly menu plans: standard, dementia-focused, dysphagia-adapted, and high-calorie enrichment.',
    sections: [
      {
        body: [
          'The following menu plans are designed as starting points, not rigid prescriptions. Adapt them to your client\'s preferences, health conditions, and appetite. Each plan is built around the nutritional principles in the nutrition chapter, with variety, protein, and calorie density in mind.',
        ],
      },
      {
        heading: 'Standard weekly menu plan',
        body: [
          'Suitable for most clients without significant dietary restrictions.',
        ],
        table: {
          headers: ['Day', 'Breakfast', 'Lunch', 'Dinner', 'Pudding'],
          rows: [
            ['Monday', 'Porridge with honey and cream', 'Leek and potato soup with bread', 'Roast chicken with gravy and veg', 'Rice pudding'],
            ['Tuesday', 'Boiled egg and toast soldiers', 'Coronation chicken salad', 'Shepherd\'s pie', 'Stewed pears with ginger'],
            ['Wednesday', 'Smoked haddock kedgeree', 'Cream of mushroom soup', 'Baked cod with parsley sauce', 'Bread and butter pudding'],
            ['Thursday', 'Yoghurt with stewed fruit', 'Egg mayonnaise sandwich', 'Beef stew and dumplings', 'Lemon posset'],
            ['Friday', 'Soft poached eggs and salmon', 'Tomato soup with crusty bread', 'Pan-fried salmon, lemon butter', 'Fruit crumble and custard'],
            ['Saturday', 'Full English (adapted)', 'Ploughman\'s lunch', 'Slow-cooked lamb shoulder', 'Eton mess'],
            ['Sunday', 'Kippers with brown bread', 'Roast beef and Yorkshire pud', 'Cold meat, bubble and squeak', 'Treacle tart and cream'],
          ],
        },
      },
      {
        heading: 'Menu plan: dementia focus',
        body: [
          'Familiar, flavourful dishes with strong nostalgic associations. Finger food options at lunch to support independence. Two portions of oily fish per week are included to support cognitive health.',
        ],
        table: {
          headers: ['Day', 'Breakfast', 'Lunch', 'Dinner', 'Pudding'],
          rows: [
            ['Monday', 'Porridge with honey', 'Soft boiled egg, toast fingers', 'Shepherd\'s pie', 'Rice pudding'],
            ['Tuesday', 'Scrambled eggs on toast', 'Egg and cress sandwiches', 'Pan-fried salmon, lemon butter', 'Semolina pudding'],
            ['Wednesday', 'Boiled egg and soldiers', 'Cheese and cracker bites', 'Toad in the hole, onion gravy', 'Bread and butter pudding'],
            ['Thursday', 'Porridge with cream', 'Smoked salmon sandwiches', 'Fish pie', 'Baked egg custard'],
            ['Friday', 'Live yoghurt with stewed fruit', 'Mini quiches', 'Liver and bacon, onion gravy', 'Spotted dick and custard'],
            ['Saturday', 'French toast with banana', 'Welsh rarebit', 'Roast chicken with all trimmings', 'Fruit crumble and custard'],
            ['Sunday', 'Kippers and brown bread', 'Potted shrimps', 'Slow-cooked lamb shoulder', 'Queen of puddings'],
          ],
        },
      },
      {
        heading: 'Menu plan: dysphagia focus (IDDSI Level 4-5)',
        body: [
          'All dishes adapted to IDDSI Level 4 or 5. Refer to the texture adaptation table in each recipe for preparation guidance.',
        ],
        table: {
          headers: ['Day', 'Breakfast', 'Lunch', 'Dinner', 'Pudding'],
          rows: [
            ['Monday', 'Smooth porridge with cream', 'Blended chicken and veg dinner', 'Puréed fish in cream sauce', 'Smooth rice pudding'],
            ['Tuesday', 'Soft scrambled egg with cream', 'Smooth leek and potato soup', 'Blended lamb and rosemary stew', 'Smooth fruit fool'],
            ['Wednesday', 'Moist porridge, honey', 'Smooth carrot and lentil purée', 'Minced and moist chicken in gravy', 'Enriched milk pudding'],
            ['Thursday', 'Yoghurt with stewed fruit', 'Smooth tomato soup', 'Blended beef stew with soft mash', 'Lemon posset'],
            ['Friday', 'Smooth avocado with soft egg', 'Puréed fish in cream sauce', 'Smooth cauliflower cheese purée', 'Mango and coconut panna cotta'],
            ['Saturday', 'Savoury egg custard with cheese', 'Smooth pea and mint purée', 'Tender pork with mash', 'Chocolate mousse'],
            ['Sunday', 'Enriched milk (warm, with honey)', 'Smooth sweet potato purée', 'Blended lamb stew', 'Smooth rice pudding'],
          ],
        },
      },
      {
        heading: 'Menu plan: high calorie enrichment',
        body: [
          'For clients at risk of malnutrition or with very small appetites. Dishes are enriched with butter, cream, and full-fat dairy at every opportunity.',
        ],
        table: {
          headers: ['Day', 'Breakfast', 'Lunch', 'Dinner', 'Pudding'],
          rows: [
            ['Monday', 'Porridge with cream and honey', 'Cream of mushroom soup and bread', 'Fish pie (extra cream in mash)', 'Rice pudding with cream'],
            ['Tuesday', 'French toast with banana', 'Egg mayo on white bread', 'Shepherd\'s pie (enriched mash)', 'Bread and butter pudding'],
            ['Wednesday', 'Full English with extra egg', 'Chicken liver pâté on toast', 'Beef stew and dumplings', 'Spotted dick and custard'],
            ['Thursday', 'Scrambled eggs with cream', 'Potted shrimps on brown bread', 'Cauliflower cheese', 'Baked egg custard'],
            ['Friday', 'Kippers and buttered toast', 'Coronation chicken sandwich', 'Pan-fried salmon, lemon butter', 'Lemon posset with cream'],
            ['Saturday', 'Boiled egg and buttered soldiers', 'Cheese and cracker bites', 'Slow-cooked lamb shoulder', 'Syllabub'],
            ['Sunday', 'Smoked haddock kedgeree', 'Ploughman\'s with extra cheese', 'Roast beef and Yorkshire pudding', 'Treacle tart and cream'],
          ],
        },
      },
    ],
  },
  {
    slug: 'iddsi-guidance',
    title: 'IDDSI Guidance',
    subtitle: 'Texture modification in practice',
    description: 'A clinical reference for IDDSI levels, texture testing, and safe preparation of modified foods and fluids.',
    sections: [
      {
        body: [
          'The International Dysphagia Diet Standardisation Initiative (IDDSI) provides a globally recognised framework for describing food textures and fluid thicknesses for people with dysphagia. In a care setting, following the correct IDDSI level is not a matter of preference. It is a clinical safety requirement. Serving food at the wrong texture level can cause choking or aspiration.',
          'Every recipe in this book includes a texture adaptation table showing how to modify the dish for different IDDSI levels. This chapter provides the overarching guidance you need to work with those tables confidently.',
        ],
      },
      {
        heading: 'IDDSI levels at a glance',
        table: {
          headers: ['Level', 'Name', 'Description'],
          rows: [
            ['7', 'Regular', 'Normal everyday food. No texture modification required. Serve as cooked.'],
            ['6', 'Soft and bite-sized', 'Food that is soft, tender, and cut into pieces no larger than 1.5cm. No hard, tough, chewy, or crunchy elements. Must be moist throughout.'],
            ['5', 'Minced and moist', 'Food that is finely minced or chopped to pieces no larger than 4mm. Must hold together on a fork or spoon. Not dry, crumbly, or sticky.'],
            ['4', 'Puréed', 'Completely smooth with no lumps, fibres, skin, seeds, or gristly pieces. Should hold its shape briefly when spooned onto a plate. Falls off a spoon cleanly.'],
            ['3', 'Liquidised (moderately thick)', 'Can be drunk from a cup. Flows slowly. Leaves a coating on the cup.'],
            ['2', 'Mildly thick', 'Flows off a spoon quickly. Thicker than water but still drinkable.'],
            ['1', 'Slightly thick', 'Thicker than water. Flows through the prongs of a fork.'],
            ['0', 'Thin', 'Normal fluids: water, tea, juice. Flows through a fork immediately.'],
          ],
        },
      },
      {
        heading: 'Testing texture: the fork and spoon tests',
        body: [
          'Before serving any texture-modified food or thickened fluid, test it:',
        ],
        bullets: [
          'Fork drip test (Levels 1-4): tilt a fork loaded with the liquid or food. At Level 1, it should drip through the prongs steadily. At Level 4, it should sit on the fork without dripping through.',
          'Spoon tilt test (Level 4): place a spoonful of the food on a spoon and tilt. It should hold its shape briefly, then slide off in a smooth mass. If it stays rigidly on the spoon, it is too thick. If it runs off immediately, it is too thin.',
          'Finger test (Levels 5-6): press a small amount between your thumb and forefinger. At Level 5, it should feel smooth with no lumps larger than 4mm. At Level 6, pieces should be soft enough to squash easily.',
        ],
        callout: {
          title: 'When in doubt, do not serve',
          body: [
            'If you are unsure whether a food or fluid meets the required IDDSI level, do not serve it. Contact the Hamilton George Care team or the client\'s speech and language therapist for guidance. An incorrect texture is a serious safety risk.',
          ],
        },
      },
      {
        heading: 'Preparing puréed food (Level 4)',
        bullets: [
          'Use a high-powered blender or food processor for the smoothest result.',
          'Add liquid (stock, sauce, milk, or cream) gradually while blending to achieve the right consistency.',
          'Always pass through a fine sieve after blending. This removes any remaining fibres, skin, or lumps that the blender may have missed.',
          'Check the consistency with the spoon tilt test before serving.',
          'If the food is too thick, add a little more liquid. If too thin, blend in a small amount of potato flakes or a commercial thickener.',
        ],
      },
      {
        heading: 'Preparing thickened fluids',
        body: [
          'Thickened fluids are prescribed for clients who are at risk of aspiration when drinking thin liquids. Preparing them correctly is a clinical safety requirement.',
        ],
        bullets: [
          'Use only the thickening agent specified in the care plan.',
          'Measure the thickener precisely by weight or volume. Never estimate.',
          'Add the thickener to the liquid gradually while stirring continuously.',
          'Allow 1-2 minutes for the thickener to fully hydrate before testing consistency.',
          'Use the fork drip test to confirm the correct level before serving.',
          'Prepare thickened fluids fresh. Do not prepare large batches in advance, as consistency can change over time.',
        ],
      },
      {
        heading: 'Presentation at modified textures',
        body: [
          'The appearance of texture-modified food matters enormously. A client who is served an unappetising grey mush is unlikely to eat it, regardless of how nutritious it is. Thoughtful presentation signals that the same care has been taken over their meal as over anyone else\'s.',
        ],
        bullets: [
          'Use moulds, ramekins, or piping bags to give puréed food a recognisable shape.',
          'Serve components separately on the plate rather than mixing everything together.',
          'Use colour contrast: a bright green pea purée against a white plate is far more appetising than everything blended into one colour.',
          'Add a swirl of cream, a drizzle of herb oil, or a dusting of paprika for visual interest.',
          'Use white plates or bowls to make colours stand out.',
          'Serve at the correct temperature. Puréed food cools quickly, so use warmed plates and serve promptly.',
        ],
      },
      {
        heading: 'Common mistakes to avoid',
        bullets: [
          'Adding too much liquid during blending, resulting in food that is too thin for the required level.',
          'Skipping the sieving step, leaving fibrous material that is a choking risk.',
          'Using cornflour or gravy powder as a thickener instead of the prescribed commercial product.',
          'Preparing thickened drinks in advance, which allows the consistency to change.',
          'Mixing all components of a meal together before puréeing, which produces an unappealing uniform colour and flavour.',
          'Serving food that is too hot or too cold. Always check temperature before serving.',
        ],
      },
    ],
  },
];

export function getGuideChapter(slug: string): GuideChapter | undefined {
  return guideChapters.find((c) => c.slug === slug);
}
