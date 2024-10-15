// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s) {
  s = s.split(' ');
  let sw = s[0].length;
  s.forEach((w) => (w.length < sw ? (sw = w.length) : null));
  return sw;
}
console.log(findShort('turns out random test cases are easier than writing out basic ones'));
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// others solution
function findShort2(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}
console.log(findShort2('turns out random test cases are easier than writing out basic ones'));
console.log(findShort2('bitcoin take over the world maybe who knows perhaps'));

// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
function strCount(str, letter) {
  const regex = new RegExp(letter, 'gi');
  return regex.test(str) ? str.match(regex).length : 0;
}
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));

// others solution
function strCount2(str, letter) {
  return str.split(letter).length - 1;
}
console.log(strCount2('Hello', 'o'));
console.log(strCount2('Hello', 'l'));
console.log(strCount2('', 'z'));

function strCount3(str, letter) {
  return str.split('').filter((c) => c === letter).length;
}
console.log(strCount3('Hello', 'o'));
console.log(strCount3('Hello', 'l'));
console.log(strCount3('', 'z'));
