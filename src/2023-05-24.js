// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
  let result;

  const callback = (digitalRoot) => {
    result = String(digitalRoot)
      .split('')
      .reduce((sum, c) => sum + Number(c), 0);
    result > 9 ? callback(result) : result;
  };
  callback(n);

  return result;
}
console.log(digitalRoot(493193));

function digitalRoot2(n) {
  n = String(n)
    .split('')
    .reduce((sum, c) => sum + Number(c), 0);
  return n > 9 ? digitalRoot2(n) : n;
}
console.log(digitalRoot2(493193));

// https://www.codewars.com/kata/5782a87d9fb2a5e623000158
function clockDegree(s) {
  // validate minus
  if (/-/.test(s)) return 'Check your time !';

  // split input into hours and minutes
  let hh = s.substr(0, 2);
  let mm = s.substr(3, 2);

  // validate input beyond 24 or 60
  if (hh >= 24) return 'Check your time !';
  if (mm >= 60) return 'Check your time !';

  // validate if 0, then 360°, otherwise...
  // ...calculate: (hh * 30°) and (mm * 6°)
  // make sure hh is stays below 360° with modulo
  hh === '00' || hh === '12' ? (hh = 360) : (hh = (hh * 30) % 360);
  mm === '00' ? (mm = 360) : (mm = mm * 6);

  // return formatted string
  return `${hh}:${mm}`;
}
console.log(clockDegree('12:22'));
