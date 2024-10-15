// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
function smallestIntegerFinder(arr) {
  return arr.sort((a, b) => a - b)[0];
}
console.log(smallestIntegerFinder([34, -345, -1, 100]));

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b) {
  if (a === b) return a;
  else if (a > b) {
    for (let i = b + 1; i <= a; i++) b += i;
    return b;
  } else if (a < b) {
    for (let i = a + 1; i <= b; i++) a += i;
    return a;
  }
}
console.log(getSum(1, 0)); // :>> 1
console.log(getSum(1, 2)); // :>> 3
console.log(getSum(0, 1)); // :>> 1
console.log(getSum(1, 1)); // :>> 1
console.log(getSum(-1, 0)); // :>> -1
console.log(getSum(-1, 2)); // :>> 2
console.log(getSum(5, -1)); // :>> 14

// others solution, very clever with recursion
function getSum2(a, b) {
  if (a === b) return a;
  else if (a < b) return a + getSum2(a + 1, b);
  else return a + getSum2(a - 1, b);
}
console.log(getSum2(1, 0)); // :>> 1
console.log(getSum2(1, 2)); // :>> 3
console.log(getSum2(0, 1)); // :>> 1
console.log(getSum2(1, 1)); // :>> 1
console.log(getSum2(-1, 0)); // :>> -1
console.log(getSum2(-1, 2)); // :>> 2
console.log(getSum2(5, -1)); // :>> 14

// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript
function mostMoney(students) {
  // case 1: there's only one student
  if (students.length === 1) return students[0].name;

  // get the sum for each student and store in a new object
  const sums = {};
  students.forEach((student) => (sums[student.name] = student.getTotal()));

  // case 2: everyone has the same amount
  if (Object.values(sums).every((sum) => sum === Object.values(sums)[0])) return 'all';

  // case 3: one student has the most money, clear winner
  const max = Math.max(...Object.values(sums));
  return Object.keys(sums).filter((student) => sums[student] === max)[0];
}

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
  getFives() {
    return this.fives * 5;
  }
  getTens() {
    return this.tens * 10;
  }
  getTwenties() {
    return this.twenties * 20;
  }
  getTotal() {
    return this.getFives() + this.getTens() + this.getTwenties();
  }
}
const andy = new Student('Andy', 0, 0, 2);
const stephen = new Student('Stephen', 0, 4, 0);
const eric = new Student('Eric', 8, 1, 0);
const david = new Student('David', 2, 0, 1);
const phil = new Student('Phil', 0, 2, 1);
const cam = new Student('Cameron', 2, 2, 0);
const geoff = new Student('Geoff', 0, 3, 0);

console.log(mostMoney([andy, stephen, eric, david, phil])); // :>> Eric
console.log(mostMoney([david, cam, geoff])); // :>> all
console.log(mostMoney([andy])); // :>> Andy

// others solution: instead of creating a new object, just use the array of values and use the idx (indexOf) to identify the name of the student
function mostMoney2(students) {
  // case 1
  if (students.length === 1) return students[0].name;

  // get the sum for each student ( array of sums )
  const sums = students.map((st) => st.getTotal());

  // case 2
  if (sums.every((sum) => sum === sums[0])) return 'all';

  // case 3
  // get max and index
  const max = Math.max(...sums);
  const idx = sums.indexOf(max);
  return students[idx].name;
}
console.log(mostMoney2([andy, stephen, eric, david, phil])); // :>> Eric
console.log(mostMoney2([david, cam, geoff])); // :>> all
console.log(mostMoney2([andy])); // :>> Andy
