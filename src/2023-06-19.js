// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}
console.log(squareSum([0, 3, 4, 5])); // 50

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript
function descendingOrder(n) {
  return +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
}
console.log(descendingOrder(123456789)); // 987654321

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
function summation(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(8)); // 36
