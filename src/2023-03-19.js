/* Kata 1 */
/* -------------------------------------- */
/* my solution */
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return `found the needle at position ${i}`;
    }
  }
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

/* optimized */
function findNeedle2(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
console.log(findNeedle2(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

/* Kata 2 */
/* -------------------------------------- */
/* my solution */
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    avg = sum / array.length;
    return avg;
  }
}
console.log(findAverage([5, 6, 9, 1, 14, 15, 31, 22, 38, 4]));

/* Kata 3 */
/* -------------------------------------- */
/* my solution */
function bmi(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25.0) {
    return 'Normal';
  } else if (bmi <= 30.0) {
    return 'Overweight';
  } else if (bmi > 3) {
    return 'Obese';
  }
}
console.log(bmi(62, 175));

/* optimized */
function bmi2(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) return 'Underweight';
  else if (bmi <= 25.0) return 'Normal';
  else if (bmi <= 30.0) return 'Overweight';
  else if (bmi > 30) return 'Obese';
}
console.log(bmi2(62, 175));
