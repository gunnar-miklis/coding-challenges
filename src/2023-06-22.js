// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
function min(list) {
  return Math.min(...list);
}
function max(list) {
  return Math.max(...list);
}
const arr = [4, 6, 2, 1, 9, 63, -134, 566];
console.log(min(arr), max(arr));

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
function noSpace(x) {
  return x.replace(/\s/g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
  return array.map((num) => num * -1);
}
console.log(invert([1, 2, 3, 4, 5]));

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function dnaStrand(dna) {
  const complements = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  return dna
    .split('')
    .map((el) => {
      if (el === 'A') return complements.A;
      if (el === 'T') return complements.T;
      if (el === 'G') return complements.G;
      if (el === 'C') return complements.C;
    })
    .join('');
}
console.log(dnaStrand('ATTGC'));

// others, shorter solution
function dnaStrand2(dna) {
  const complements = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  return dna
    .split('')
    .map((el) => complements[el])
    .join('');
}
console.log(dnaStrand2('ATTGC'));

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}
console.log(validatePIN('1234'));

// others solution (ommit 1x: "^$")
function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePIN2('1234'));
