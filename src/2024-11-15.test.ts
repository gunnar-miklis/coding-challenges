import { addAll } from './2024-11-15';

describe('addAll(): which is suppose to return the minimum total cost of addition', () => {
  it('should return 0 if there is only one number in the array', () => {
    const numbers = [8];
    const expectedResult = 0;
    expect(addAll(numbers)).toBe(expectedResult);
  });
  it('should pass the sample test with 3 numbers given', () => {
    const numbers = [3, 1, 2];
    const expectedResult = 9;
    expect(addAll(numbers)).toBe(expectedResult);
  });
  it('should pass the sample test with 4 numbers given', () => {
    const numbers = [3, 1, 4, 2];
    const expectedResult = 19;
    expect(addAll(numbers)).toBe(expectedResult);
  });
  it('should pass the sample test with 5 numbers given', () => {
    const numbers = [3, 1, 5, 4, 2];
    const expectedResult = 33;
    expect(addAll(numbers)).toBe(expectedResult);
  });
  it('should pass the sample test with random numbers given', () => {
    const numbers = [3, 34, 19, 1];
    const expectedResult = 84;
    expect(addAll(numbers)).toBe(expectedResult);
  });
  it('should pass the sample test with many numbers given', () => {
    const numbers = [
      100, 57, 100, 97, 63, 83, 59, 44, 16, 29, 49, 79, 60, 39, 59, 1, 33, 54, 76, 64, 18, 5, 48,
      84, 5, 71, 91, 53, 90, 3, 91, 2, 90, 81, 11, 100, 64, 47, 71, 93, 93, 10, 97, 94, 56, 41,
    ];
    const expectedResult = 14103;
    expect(addAll(numbers)).toBe(expectedResult);
  });
});
