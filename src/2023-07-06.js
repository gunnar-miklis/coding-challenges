// https://www.codewars.com/kata/5a0d6d8c6975982b5b000383/train/javascript
function lastDayIsFriday(initialYear, endYear) {
  if (!endYear) endYear = initialYear;

  let lastFridays = 0;

  for (let year = initialYear; year <= endYear; year++) {
    // iterate years range
    for (let month = 1; month <= 12; month++) {
      // iterate 12 month
      const lastDayOfMonth = new Date(year, month, 0); // construct new Date, while "0" represents last day in month (28/29/30/31): 1991-11-31
      if (lastDayOfMonth.getDay() === 5) lastFridays++; // .getDay() returns 0-6, representing weekdays: sunday - saturday
    }
  }

  return lastFridays;
}

console.log(lastDayIsFriday(1901, 2000)); // :>> 171
console.log(lastDayIsFriday(1901, 2017)); // :>> 200
console.log(lastDayIsFriday(1991)); // :>> 1
console.log(lastDayIsFriday(2017)); // :>> 2
console.log(lastDayIsFriday(1997, 2042)); // :>> 81
console.log(lastDayIsFriday(1906, 1912)); // :>> 11

// TESTING:
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const lastDayOfMonth = new Date(2018, 11, 0);
console.log(lastDayOfMonth); // :>> Fri Nov 30 2018 00:00:00 GMT+0100 (CEST)
console.log(weekday[lastDayOfMonth.getDay()]); // :>> Friday
if (weekday[lastDayOfMonth.getDay()] === 'Friday') console.log(true); // :>> true
