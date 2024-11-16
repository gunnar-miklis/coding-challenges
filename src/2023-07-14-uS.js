// https://www.codewars.com/kata/5b6dac711db5cef31100005b/train/javascript

// DONE: solved in 2024-11-16.ts
//  => issue was the mutation of the initial recipe/available objects, which interferes with the random tests.

function canBake(available, recipe) {
  const missingIngredients = [];

  Object.keys(available).forEach((ingredient) => {
    // deconstruct quantity and unit.
    [available[ingredient]] = available[ingredient].split(' ');
  });

  Object.keys(recipe).forEach((ingredient) => {
    // deconstruct quantity and unit.
    let [quantity, unit] = recipe[ingredient].split(' ');

    if (/\//.test(quantity)) {
      // if the quantity is given as fraction, calculate it.
      const [numerator, denominator] = quantity.split('/');
      quantity = numerator / denominator;
    }

    if (['oil', 'milk'].includes(ingredient)) {
      // convert liquids in milliliters.
      if (unit === 'cup') quantity *= 220;
      else if (unit === 'tbsp') quantity *= 15;
      else if (unit === 'tsp') quantity *= 5;
    }

    if (['flour', 'sugar'].includes(ingredient)) {
      // convert non-liguids in grams.
      if (unit === 'cup') quantity *= 200;
      else if (unit === 'tbsp') quantity *= 14;
      else if (unit === 'tsp') quantity *= 5;
    }

    if (
      !available[ingredient] || // if available object is empty or...
      available[ingredient] < quantity
    ) {
      // if there're not enough ingredients available to backe the recipe (quantity)...
      missingIngredients.push(ingredient); // ...add this ingredient to the list of "missingIngreddients".
    }
  });

  return !missingIngredients.length
    ? 'You can bake'
    : `Not enough ingredients: need ${missingIngredients.join(', ')}`;
}

const available = { oil: '200 ml', flour: '600 g', sugar: '110 g', milk: '600 ml' };
console.log(canBake(available, { oil: '3 tbsp', flour: '2 cup', sugar: '1/2 cup', milk: '1 cup' }));
console.log(canBake(available, { oil: '1 tbsp', flour: '4 cup', sugar: '1 cup', milk: '1 cup' }));
console.log(canBake(available, {}));

// BUG: I believe there are some issues with the random sample test. this error seems to be a false error, no?!
//	flour: 4/4 cup = 1 cup (200g) = 200g = 'enough ingredients' = 'you can bake'
//	though, it says "need flour" ?!
//	i reported this as an issue. let's see what the pros say about it :)
console.log(
  canBake(
    { oil: '700 ml', flour: '200 g', sugar: '400 g', milk: '200 ml' },
    { oil: '3 cup', flour: '4/4 cup', sugar: '1 tbsp', milk: '24 tsp' },
  ),
);
// Expected: 'Not enough ingredients: need flour', instead got: 'You can bake'
