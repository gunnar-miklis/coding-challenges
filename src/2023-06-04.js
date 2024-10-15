// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
  const sortedOdds = array.filter((e) => e % 2 === -1 || e % 2 === 1).sort((a, b) => a - b);
  let oddIndex = 0;
  return array.map((e) => (e % 2 === -1 || e % 2 === 1 ? sortedOdds[oddIndex++] : e));
}
console.log(sortArray([-12, -45, -29, -8, -9, -26, 7, 7, -46, 15, -4, 14, 26, 30, -48, 29]));
