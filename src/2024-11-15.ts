// https://www.codewars.com/kata/5b7d7ce57a0c9d86c700014b/train/javascript
export function addAll(numbers: number[]) {
  let nums = [...numbers];
  let totalCost = 0;

  while (nums.length > 1) {
    // sort
    nums.sort((a, b) => a - b);

    // sum first two
    const cost = nums[0] + nums[1];

    // track costs
    totalCost += cost;

    // remove first two
    nums = nums.slice(2);

    // reinsert sum
    nums.push(cost);
  }

  return totalCost;
}

const numbers = [1, 2, 3];
console.log(addAll(numbers)); // => 9
