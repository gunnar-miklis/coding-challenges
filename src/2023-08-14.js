// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url) {
  return url.replace(/(?=#).+/, '');
}
console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));

// others solution
function removeUrlAnchor2(url) {
  return url.split('#')[0];
}
console.log(removeUrlAnchor2('www.codewars.com#about'));
console.log(removeUrlAnchor2('www.codewars.com/katas/?page=1#about'));

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}
console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
  if (!strarr.length || k <= 0 || k > strarr.length) return '';

  let length = 0;
  let longest = '';

  for (let i = 0; i <= strarr.length - k; i++) {
    let consec = '';
    for (let j = 0; j < k; j++) {
      consec += strarr[i + j];
    }
    if (consec.length > length) {
      length = consec.length;
      longest = consec;
    }
  }

  return longest;
}
console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)); // :>> "folingtrashy"
console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2),
); // :>> "abigailtheta"
console.log(
  longestConsec(
    ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
    1,
  ),
); // :>> "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)); // :>> "ixoyx3452zzzzzzzzzzzz"

console.log(longestConsec([], 3)); // :>> ""
console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 0)); // :>> ""
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)); // :>> ""
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)); // :>> ""
