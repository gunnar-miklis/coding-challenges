import { canBake } from './2024-11-16';

describe('Can Bake', () => {
  it('should return "You can bake" if there are enough ingredients to bake the recipe', () => {
    const available = { oil: '200 ml', flour: '600 g', sugar: '110 g', milk: '600 ml' };
    const recipe = { oil: '3 tbsp', flour: '2 cup', sugar: '1/2 cup', milk: '1 cup' };
    const expectedResult = 'You can bake';
    expect(canBake(available, recipe)).toBe(expectedResult);
  });
  it('should return "Not enough ingredients: need <missing ingredients>" if there are NOT enough ingredients to bake the recipe', () => {
    const available = { oil: '200 ml', flour: '600 g', sugar: '110 g', milk: '600 ml' };
    const recipe = { oil: '1 tbsp', flour: '4 cup', sugar: '1 cup', milk: '1 cup' };
    const expectedResult = 'Not enough ingredients: need flour, sugar';
    expect(canBake(available, recipe)).toBe(expectedResult);
  });
});
