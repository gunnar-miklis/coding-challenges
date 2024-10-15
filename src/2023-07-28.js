// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
console.log(likes([]));
console.log(likes(['Alex']));
console.log(likes(['Alex', 'Jacob']));
console.log(likes(['Alex', 'Jacob', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
  const textArray = text.toLowerCase().split('');

  // count char occurences
  const occurence = {};
  textArray.forEach((char) => (occurence[char] ? occurence[char]++ : (occurence[char] = 1)));

  // filter out duplicates
  const duplicates = Object.keys(occurence).filter((char) => occurence[char] > 1);
  return duplicates.length;
}
console.log(duplicateCount('')); // :>> 0
console.log(duplicateCount('abcde')); // :>> 0
console.log(duplicateCount('aabbcde')); // :>> 2
console.log(duplicateCount('aabBcde')); // :>> 2
console.log(duplicateCount('Indivisibility')); // :>> 1
console.log(duplicateCount('Indivisibilities')); // :>> 2

// others solution: instead of declaring a new object, use "reduce()" method and do the counting inside
// NOTE: new for me: reduce() can take an object as second argument (inital value)
function duplicateCount2(text) {
  const duplicates = text
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1); // count occurences and store/add in the inital object
      return acc;
    }, {}); // initalize an empty object
  return Object.keys(duplicates).filter((count) => duplicates[count] > 1).length;
}
console.log(duplicateCount2('')); // :>> 0
console.log(duplicateCount2('abcde')); // :>> 0
console.log(duplicateCount2('aabbcde')); // :>> 2
console.log(duplicateCount2('aabBcde')); // :>> 2
console.log(duplicateCount2('Indivisibility')); // :>> 1
console.log(duplicateCount2('Indivisibilities')); // :>> 2

// others solution: ...or even better!
// NOTE: new for me: reduce() can take an object as second argument (inital value) AND even set a new key-value pair [ "count:0", in this case ]
function duplicateCount3(text) {
  return text
    .toLowerCase()
    .split('')
    .reduce(
      (acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1); // counting occurences and store/add in the inital object
        if (acc[curr] === 2) acc.count++; // increment the inital key-value pair, but only "ONCE", when there's a duplicate
        return acc;
      },
      { count: 0 },
    ).count; // initalize object with a default key-value pair "count:0" // return the value of inital property "count"
}
console.log(duplicateCount3('')); // :>> 0
console.log(duplicateCount3('abcde')); // :>> 0
console.log(duplicateCount3('aabbcde')); // :>> 2
console.log(duplicateCount3('aabBcde')); // :>> 2
console.log(duplicateCount3('Indivisibility')); // :>> 1
console.log(duplicateCount3('Indivisibilities')); // :>> 2

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(text) {
  const textArray = text.toLowerCase().split('');

  const duplicates = textArray.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  return textArray.map((char) => (duplicates[char] > 1 ? (char = ')') : (char = '('))).join('');
}
console.log(duplicateEncode('din')); // :>> (((
console.log(duplicateEncode('recede')); // :>> ()()()
console.log(duplicateEncode('Success')); // :>> )())())
console.log(duplicateEncode('(( @')); // :>> ))((

// others solution: use .indexOf() to identify duplicates and .replace() to convert to parenthesis
// NOTE: new for me: in ".replace()" method, use callback function as a "replaceValue" to implement "conditional" replacments
function duplicateEncode2(text) {
  return text
    .toLowerCase()
    .replace(/./g, (char) => (text.indexOf(char) === text.lastIndexOf(char) ? '(' : ')'));
}
console.log(duplicateEncode2('din')); // :>> (((
console.log(duplicateEncode2('recede')); // :>> ()()()
console.log(duplicateEncode2('Success')); // :>> )())())
console.log(duplicateEncode2('(( @')); // :>> ))((

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string) {
  return string
    .split(' ')
    .map((word) => (word.length > 4 ? word.split('').reverse().join('') : word))
    .join(' ');
}
console.log(spinWords('This is another test'));

// others solution: with regular expressions
function spinWords2(string) {
  return string.replace(/\w{5,}/g, (word) => word.split('').reverse().join(''));
}
console.log(spinWords2('This is another test'));
