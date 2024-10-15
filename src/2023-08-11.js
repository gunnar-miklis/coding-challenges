// https://www.codewars.com/kata/559536379512a64472000053/train/javascript
function playPass(s, n) {
  const a = 'abcdefghijklmnopqrstuvwxyz';
  return s
    .split('')
    .map((c, i) => {
      if (/[A-z]/.test(c)) {
        const idx = (a.indexOf(c.toLowerCase()) + n) % 26; // #1: shift n, % => "circular shift"
        return i % 2 === 0 ? a[idx].toUpperCase() : a[idx]; // #4: even/odd uppercase/lowercase
      } else if (/[0-9]/.test(c)) {
        return 9 - c; // #2: digit by its complement to 9
      } else {
        return c; // #3: keep non alpha/digit
      }
    })
    .reverse() // #5: reverse
    .join('');
}
console.log(playPass('BORN in 2015!', 1)); // :>> "!4897 Oj oSpC"
console.log(playPass('I LOVE YOU!!!', 1)); // :>> "!!!vPz fWpM J"
console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2));
