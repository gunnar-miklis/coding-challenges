// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 1));
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
function alphanumeric(string) {
  return /^(?=.*[a-zA-Z0-9])[A-Za-z0-9]+$/g.test(string);
}
console.log(alphanumeric('PassW0rd'));

// solution
function alphanumeric2(string) {
  return /^[a-z\d]+$/i.test(string);
}
console.log(alphanumeric2('PassW0rd'));
