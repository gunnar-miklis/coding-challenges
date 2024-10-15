// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
// My 100. Completed Kata 🥳

// my solution 1: using .includes()
function scramble(str1, str2) {
  console.time('solution 1');
  let result = '';

  for (const char of str2) {
    if (str1.includes(char)) {
      const idx = str1.indexOf(char);
      result += str1[idx];
      str1 = str1.slice(0, idx) + str1.slice(idx + 1);
    }
    if (result.length === str2.length) return true;
  }

  console.timeEnd('solution 1'); // COMMENT: >> ~8ms
  return result.length === str2.length;
}
console.log(scramble('rkqodlw', 'world')); // :>> true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // :>> true
console.log(scramble('scriptjavx', 'javascript')); // :>> false
console.log(scramble('katas', 'steak')); // :>> false

// my solution 2: using regExp.test()
// COMMENT: is much quicker / has better performance ( elapsed time: 8ms vs. 0.3ms)
//	...yet, is not fast enough for the "sample test" ☹️
function scramble2(str1, str2) {
  console.time('solution 2');
  let result = '';

  for (const char of str2) {
    const regEx = new RegExp(char, 'g');
    if (regEx.test(str1)) {
      const idx = str1.indexOf(char);
      result += str1[idx];
      str1 = str1.slice(0, idx) + str1.slice(idx + 1);
    }
    if (result.length === str2.length) return true;
  }

  console.timeEnd('solution 2'); // COMMENT: >> ~0.3ms
  return result.length === str2.length;
}
console.log(scramble2('rkqodlw', 'world')); // :>> true
console.log(scramble2('cedewaraaossoqqyt', 'codewars')); // :>> true
console.log(scramble2('scriptjavx', 'javascript')); // :>> false
console.log(scramble2('katas', 'steak')); // :>> false

// my solution 3: using objects to count and index all characters of the alphabet and compore the occurences
function scramble3(str1, str2) {
  console.time('solution 3');

  const obj1 = {};
  const obj2 = {};

  // loop string. if character is already in the object, increment the counter, otherwise add it to the object
  for (const c of str1) {
    obj1[c] ? obj1[c]++ : (obj1[c] = 1);
  }
  // loop the test word. count the occurence of each char.
  for (const c of str2) {
    obj2[c] ? obj2[c]++ : (obj2[c] = 1);
  }

  // loop the test word object. return false, when...
  //	* obj1 does not include a char...
  //	* or there are not enough chars in obj1 to build the test word
  for (const c in obj2) {
    if (!obj1[c] || obj1[c] < obj2[c]) return false;
  }

  console.timeEnd('solution 3'); // COMMENT: >> ~0.04ms
  return true;
}
console.log(scramble3('rkqodlw', 'world')); // :>> true
console.log(scramble3('cedewaraaossoqqyt', 'codewars')); // :>> true
console.log(scramble3('scriptjavx', 'javascript')); // :>> false
console.log(scramble3('katas', 'steak')); // :>> false

// holy cow... that was a tough one 🥵... can't believe I solved it 🥳
