// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(x) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // split into arry
  const words = x.split(' ');

  // convert words into scores
  const scores = words.map((word) => {
    return word
      .split('') // split into characters
      .map((char) => alphabet[char]) // get value for each char
      .reduce((sum, score) => sum + score); // sum score
  });

  // get highest score
  const highestScore = Math.max(...scores);

  // return the word with the highest score, identified by index
  return words[scores.indexOf(highestScore)];
}
console.log(high('man i need a taxi up to ubud')); // taxi  =
