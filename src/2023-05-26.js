// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
// (first 5 kyu)
function cakes(recipe, available) {
  const requiredIngredients = Object.keys(recipe);
  const availableIngredients = Object.keys(available);

  // if an ingredient is not available set: "isMissing = true". And "return 0" afterwards.
  const ingredientIsMissing = requiredIngredients.map(
    (ingredient) => !availableIngredients.includes(ingredient),
  );

  // calculate the number of possible servings for each ingredient, round down. And return the minimum afterwards.
  const numberOfServings = requiredIngredients.map((ingredient) =>
    Math.floor(available[ingredient] / recipe[ingredient]),
  );

  return ingredientIsMissing.includes(true) ? 0 : Math.min(...numberOfServings);
}
const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2  =

// https://www.codewars.com/kata/5703c093022cd1aae90012c9
// 8kyu
const find = (a, e) => (a.map((n) => n === e).includes(true) ? a.indexOf(e) : 'Not found');
console.log(find([2, 3, 5, 7, 11], 5)); // 2  =
// solution
const find2 = (a, e) => (a.includes(e) ? a.indexOf(e) : 'Not found');
console.log(find2([2, 3, 5, 7, 11], 5)); // 2  =

// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
console.log(sequenceSum(2, 6, 2));
