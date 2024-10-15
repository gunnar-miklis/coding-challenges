// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}
console.log(positiveSum([1, 2, 3, 4, 5]));

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
  // make array of unique numbers
  const uniqArr = [...new Set(arr)];
  // filter uniqArr
  return uniqArr.filter((uniqNum) => {
    // loop arr and count the occurrence of each unique number
    let count = 0;
    arr.forEach((num) => (num === uniqNum ? count++ : count));
    // if there is only 1 occurence, filter out, this is the number
    return count === 1;
    // returns back an array, so index[0]
  })[0];
}
console.log(findUniq([1, 0, 0, 1, 1, 2, 2, 3, 0, 2, 1]));

// others solution: compare first and last index
function findUniq2(arr) {
  return +arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}
console.log(findUniq2([1, 0, 0, 1, 1, 2, 2, 3, 0, 2, 1]));
