// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filterList(l) {
  return l.filter((el) => typeof el !== 'string');
}
console.log(filterList([1, 2, 'a', 'b']));

// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers) {
  const firstPart = numbers.slice(0, 3).join('');
  const secondPart = numbers.slice(3, 6).join('');
  const thirdPart = numbers.slice(6).join('');
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber2(numbers) {
  const str = numbers.join('');
  return '(' + str.slice(0, 3) + ') ' + str.slice(3, 6) + '-' + str.slice(6);
}
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber3(numbers) {
  return numbers.join('').replace(/(...)(...)(.+)/, '($1) $2-$3');
}
console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// https://www.codewars.com/kata/57729a09914da60e17000329/train/javascript
const getMilitaryTime = function (input) {
  return input.slice(-2) === 'AM'
    ? input.slice(-2) === 'AM' && input.slice(0, 2) === '12' // if 12AM...
      ? '00' + input.slice(2, -2) // ...do 00:00
      : input.slice(0, -2) // if AM do 01:00
    : input.slice(0, 2) === '01'
      ? '13' + input.slice(2, -2) // if 01PM do 13:00
      : input.slice(0, 2) === '02'
        ? '14' + input.slice(2, -2)
        : input.slice(0, 2) === '03'
          ? '15' + input.slice(2, -2)
          : input.slice(0, 2) === '04'
            ? '16' + input.slice(2, -2)
            : input.slice(0, 2) === '05'
              ? '17' + input.slice(2, -2)
              : input.slice(0, 2) === '06'
                ? '18' + input.slice(2, -2)
                : input.slice(0, 2) === '07'
                  ? '19' + input.slice(2, -2)
                  : input.slice(0, 2) === '08'
                    ? '20' + input.slice(2, -2)
                    : input.slice(0, 2) === '09'
                      ? '21' + input.slice(2, -2)
                      : input.slice(0, 2) === '10'
                        ? '22' + input.slice(2, -2)
                        : input.slice(0, 2) === '11'
                          ? '23' + input.slice(2, -2)
                          : input.slice(0, 2) === '12'
                            ? '12' + input.slice(2, -2)
                            : false;
};
console.log(getMilitaryTime('12:00:01AM'));

const getMilitaryTime3 = function (input) {
  const ampm = input.slice(-2);
  const hh = input.slice(0, 2);
  const mmss = input.slice(2, -2);
  return ampm === 'AM' && hh === '12'
    ? '00' + mmss
    : ampm === 'PM' && hh !== '12'
      ? hh === '01'
        ? '13' + mmss
        : hh === '02'
          ? '14' + mmss
          : hh === '03'
            ? '15' + mmss
            : hh === '04'
              ? '16' + mmss
              : hh === '05'
                ? '17' + mmss
                : hh === '06'
                  ? '18' + mmss
                  : hh === '07'
                    ? '19' + mmss
                    : hh === '08'
                      ? '20' + mmss
                      : hh === '09'
                        ? '21' + mmss
                        : hh === '10'
                          ? '22' + mmss
                          : hh === '11'
                            ? '23' + mmss
                            : false
      : hh + mmss;
};
console.log(getMilitaryTime3('12:00:01PM'));

const getMilitaryTime2 = function (input) {
  const hh = input.substr(0, 2);
  const mm = input.substr(3, 2);
  const ss = input.substr(6, 2);
  const ampm = input.substr(-2, 2);

  if (ampm === 'AM' && hh === '12') {
    return `00:${mm}:${ss}`;
  } else if (ampm === 'PM' && hh !== '12') {
    return `${hh * 1 + 12}:${mm}:${ss}`;
  } else {
    return `${hh}:${mm}:${ss}`;
  }
};
console.log(getMilitaryTime2('12:00:01PM'));
