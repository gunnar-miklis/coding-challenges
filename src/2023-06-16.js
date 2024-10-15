// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
  let count = 0;
  const regex = new RegExp(/^[:;][-~]?[D)]$/);
  arr.forEach((el) => {
    if (regex.test(el)) count++;
  });
  return count;
}
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); // 2

// others solution
function countSmileys2(arr) {
  return arr.filter((el) => /^[:;][-~]?[D)]$/.test(el)).length;
}
console.log(countSmileys2([':)', ':(', ':D', ':O', ':;'])); // 2

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}
console.log(doubleInteger(4));

// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(d) {
  const baseRent = d * 40;
  if (d >= 7) return baseRent - 50;
  else if (d >= 3) return baseRent - 20;
  else return baseRent;
}
console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(7));
console.log(rentalCarCost(10));
