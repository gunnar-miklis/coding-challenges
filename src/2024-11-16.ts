// https://www.codewars.com/kata/5b6dac711db5cef31100005b/train/javascript

type Units = 'cup' | 'tbsp' | 'tsp';
type MetricUnits = 'g' | 'ml';
type ConvertTable = {
  [key in Units]: {
    [key in MetricUnits]: number;
  };
};
type Ingredients = 'flour' | 'sugar' | 'eggs' | 'milk' | 'oil';
type Available = Partial<{ [key in Ingredients]: string }>;
type Recipe = Partial<{ [key in Ingredients]: string }>;

export function canBake(available: Available, recipe: Recipe): string {
  const convertTable: ConvertTable = {
    cup: { g: 200, ml: 220 },
    tbsp: { g: 14, ml: 15 },
    tsp: { g: 5, ml: 5 },
  };

  const missingIngredients = Object.keys(recipe).filter((ingredient) => {
    // 1. filter: ingredient missing entirely
    if (!available[ingredient as Ingredients]) return true;

    const [rAmount, rUnit] = recipe[ingredient as Ingredients]!.split(' ');
    const [aAmount, aUnit] = available[ingredient as Ingredients]!.split(' ');

    // convert liquids to ml and non-liquids to g
    const rNeed = eval(rAmount) * convertTable[rUnit as Units][aUnit as MetricUnits];

    // 2. filter: not enough ingredients (compare available and recipe measures)
    if (Number(aAmount) < rNeed) return true;

    // 3. filter: enough ingredients/ignore/skip
    return false;
  });

  return !missingIngredients.length
    ? 'You can bake'
    : `Not enough ingredients: need ${missingIngredients.join(', ')}`;
}

const available = { oil: '200 ml', flour: '600 g', sugar: '110 g', milk: '600 ml' };
const recipe = { oil: '3 tbsp', flour: '2 cup', sugar: '1/2 cup', milk: '1 cup' };
console.log(canBake(available, recipe)); // => You can bake
