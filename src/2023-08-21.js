// https://www.codewars.com/kata/54530f75699b53e558002076/train/javascript
const natoPhoneticAlphabet = (function () {
  const letters = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu',
  };

  return function (word) {
    return word
      .split('')
      .map((letter) => letters[letter.toUpperCase()])
      .join(' ');
  };
})();
console.log(natoPhoneticAlphabet('hi')); // :>> hotel india
console.log(natoPhoneticAlphabet('codewars')); // :>> charlie oscar delta echo whiskey alpha romeo sierra

// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript
function vowel2index(str) {
  return str
    .split('')
    .map((char, i) => char.replace(/[aeiou]/i, i + 1))
    .join('');
}
console.log(vowel2index('Codewars is the best site in the world')); // :>> C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld

// https://www.codewars.com/kata/5971b219d5db74843a000052/train/javascript
function addedChar(s1, s2) {
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) return str2[i];
  }
}
console.log(addedChar('hello', 'checlclo')); // :>> c
