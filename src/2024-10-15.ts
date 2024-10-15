// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// funny the function's called "removeDuplicates", but is supposed to return the length of the unique numbers array instead. the task description is very misleading, too.
// also, I learned and was adviced to clone or copy an array instead of mutating it for best practice. interesting approach, here.
function removeDuplicates(nums: number[]): number {
  const uniqueNums = [...new Set(nums)];

  nums.length = 0;
  uniqueNums.forEach((num) => nums.push(num));

  return nums.length;
}
console.log(removeDuplicates([1, 1, 2])); // => 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 4, 4])); // => 5
