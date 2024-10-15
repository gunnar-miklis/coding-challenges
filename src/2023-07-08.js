// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
function digPow(n, p) {
  const arr = n.toString().split('');
  const sum = arr.reduce((sum, num, i) => sum + num ** (p + i), 0);
  const k = sum / n;
  return k % 1 === 0 ? k : -1; // :>> is whole number?
}
console.log(digPow(89, 1)); // :>> 1
console.log(digPow(92, 1)); // :>> -1
console.log(digPow(695, 2)); // :>> 2
console.log(digPow(46288, 3)); // :>> 3
