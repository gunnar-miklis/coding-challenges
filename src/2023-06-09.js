// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
  return Number(
    String(num)
      .split('')
      .map((n) => n ** 2)
      .join(''),
  );
}
console.log(squareDigits(9119)); // 811181

// instead number "+" works as well
function squareDigits2(num) {
  return +num
    .toString()
    .split('')
    .map((n) => n ** 2)
    .join('');
}
console.log(squareDigits2(9119)); // 811181

// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}
console.log(hero(10, 5)); // true
console.log(hero(7, 4)); // false
console.log(hero(100, 40)); // true
console.log(hero(1500, 751)); // false
console.log(hero(0, 1)); // false
