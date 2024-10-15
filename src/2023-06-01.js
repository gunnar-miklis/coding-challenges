// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript
function ipsBetween(start, end) {
  const ipStart = start.split('.');
  const ipEnd = end.split('.');

  const difference = ipEnd.map((e, i) => e - ipStart[i]);
  difference[0] ? (difference[0] *= 16777216) : 0;
  difference[1] ? (difference[1] *= 65536) : 0;
  difference[2] ? (difference[2] *= 256) : 0;

  return difference.reduce((sum, e) => sum + e, 0);
}
console.log(ipsBetween('10.0.0.0', '10.0.0.50'));
console.log(ipsBetween('160.0.0.0', '160.0.1.0'));
console.log(ipsBetween('170.0.0.0', '170.1.0.0'));
console.log(ipsBetween('180.0.0.0', '181.0.0.0'));

// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
}
console.log(solve([3, 4, 4, 3, 6, 3]));

function solve2(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) === i);
}
console.log(solve2([3, 4, 4, 3, 6, 3]));

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
console.log(reverseSeq(5));

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
  arr2.forEach((val) => arr1.push(val));
  return arr1.reduce((sum, val) => sum + val, 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// better solution 1
function arrayPlusArray2(arr1, arr2) {
  return arr1.concat(arr2).reduce((sum, val) => sum + val, 0);
}
console.log(arrayPlusArray2([1, 2, 3], [4, 5, 6]));

// better solution 2
function arrayPlusArray3(arr1, arr2) {
  return [...arr1, ...arr2].reduce((sum, val) => sum + val, 0);
}
console.log(arrayPlusArray3([1, 2, 3], [4, 5, 6]));

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alpha.length; i++) {
    if (!string.toLowerCase().split('').includes(alpha[i])) return false;
  }
  return true;
}
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));
