export {};

type Developer = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};


// SECTION: https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer
let developers: Developer[] = [
  {
    firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python',
  },
  {
    firstName: 'Emilija',
    lastName: 'S.',
    country: 'Lithuania',
    continent: 'Europe',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP',
  },
];

function findSenior(devs: Developer[]): Developer[] {
  const ages = devs.map(({ age }) => age);
  const maxAge = Math.max(...ages);
  const oldestDevs = devs.filter(({ age }) => age === maxAge);
  return oldestDevs;
}
const oldestDevs = findSenior(developers);
console.log(oldestDevs);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented
developers = [
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
  },
  {
    firstName: 'Agustín',
    lastName: 'M.',
    country: 'Chile',
    continent: 'Americas',
    age: 37,
    language: 'C',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Laia',
    lastName: 'P.',
    country: 'Andorra',
    continent: 'Europe',
    age: 55,
    language: 'Ruby',
  },
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 65,
    language: 'PHP',
  },
];

function allContinents(devs: Developer[]): boolean {
  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const;
  const devOrigins = new Set(devs.map(({ continent }) => continent));
  return continents.every((continent) => devOrigins.has(continent));
}
const isAllContinents = allContinents(developers);
console.log(isAllContinents);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse
developers = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby',
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 60,
    language: 'C',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 75,
    language: 'Python',
  },
  {
    firstName: 'Chloe',
    lastName: 'K.',
    country: 'Guernsey',
    continent: 'Europe',
    age: 88,
    language: 'Ruby',
  },
  {
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 98,
    language: 'PHP',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
  },
];

function isAgeDiverse(devs: Developer[]): boolean {
  const ageGroups = {
    teens: false,
    twenties: false,
    thirties: false,
    forties: false,
    fifties: false,
    sixties: false,
    seventies: false,
    eighties: false,
    nineties: false,
    centenarian: false,
  };

  const devAges = new Set(devs.map(({ age }) => age));
  devAges.forEach((age) => {
    if (!ageGroups.teens && age >= 10 && age < 20) ageGroups.teens = true;
    else if (!ageGroups.twenties && age >= 20 && age < 30) ageGroups.twenties = true;
    else if (!ageGroups.thirties && age >= 30 && age < 40) ageGroups.thirties = true;
    else if (!ageGroups.forties && age >= 40 && age < 50) ageGroups.forties = true;
    else if (!ageGroups.fifties && age >= 50 && age < 60) ageGroups.fifties = true;
    else if (!ageGroups.sixties && age >= 60 && age < 70) ageGroups.sixties = true;
    else if (!ageGroups.seventies && age >= 70 && age < 80) ageGroups.seventies = true;
    else if (!ageGroups.eighties && age >= 80 && age < 90) ageGroups.eighties = true;
    else if (!ageGroups.nineties && age >= 90 && age < 100) ageGroups.nineties = true;
    else if (!ageGroups.centenarian && age >= 100) ageGroups.centenarian = true;
  });

  const isDiverse = Object.values(ageGroups).every((group) => group === true);
  return isDiverse;
}
const isDiverse = isAgeDiverse(developers);
console.log(isDiverse);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames
developers = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];

type DeveloperWithUsername = Developer & { username: string };
function addUsername(devs: Developer[]) {
  const date = new Date();
  const currYear = date.getFullYear();

  // inital approach:
  //   const modifiedDevs: DevelopersWithUsername[] = devs.map((dev) => {
  //     const { firstName, lastName, age } = dev;
  //     const yearsOld = currYear - age;
  //     const username = (firstName + lastName[0]).toLowerCase() + yearsOld;
  //     return { ...dev, username };
  //   });

  // refined approach:
  const modifiedDevs: DeveloperWithUsername[] = devs.map((dev) => ({
    ...dev,
    username: [
      dev.firstName.toLowerCase(),
      dev.lastName.charAt(0).toLowerCase(),
      currYear - dev.age,
    ].join(''),
  }));

  return modifiedDevs;
}
const modifiedDevelopers: DeveloperWithUsername[] = addUsername(developers);
console.log(modifiedDevelopers);

// SECTION: https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
const isEven = (n: number) => n % 2 === 0;
function lovefunc(flower1: number, flower2: number): boolean {
  return isEven(flower1) === !isEven(flower2);
}
let isLove: boolean;
isLove = lovefunc(0, 1);
console.log(isLove); // => true
isLove = lovefunc(0, 0);
console.log(isLove); // => false

// SECTION: https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
const friends = [
  'Bob',
  'Mark',
  'Maya',
  'Lynn Smith',
  '1234',
  '1.2.',
  '11.02.2013',
  'true',
  'FALSE',
  'null',
  '    ',
  // '----',
];
function friend(friends: string[]) {
  // this is the requested solution for the task
  //   return friends.filter((friend) => friend.length === 4);

  // lets make it a bit more challenging
  // approach 1:
  //   return friends.filter((friend) => {
  //     if (friend.length !== 4) return false;
  //     if (/\W/.test(friend)) return false;
  //     if (/\d/.test(friend)) return false;
  //     if (friend.toLowerCase() === 'true') return false;
  //     if (friend.toLowerCase() === 'null') return false;
  //     return true;
  //   });

  // approach 2:
  return friends.filter(
    (friend) => friend.length === 4 && typeof realTypeParser(friend) === 'string',
  );
}
const trueFriends = friend(friends);
console.log(trueFriends); // => [ 'Mark', 'Maya' ]

// approach 2:
type RealType = string | number | boolean | null | Date;
function realTypeParser(value: string): RealType | Error {
  const trimmedVal = value.trim();

  // null
  if (trimmedVal.toLowerCase() === 'null') return null;

  // boolean
  if (trimmedVal.toLowerCase() === 'true') return true;
  if (trimmedVal.toLowerCase() === 'false') return false;

  // number
  const num = Number(trimmedVal);
  if (!isNaN(num)) return num;

  // date
  const date = new Date(trimmedVal);
  if (!isNaN(date.getTime())) return date;

  // string
  if (/\w/.test(trimmedVal)) return trimmedVal;

  throw new Error(`Unexpected Type for: "${trimmedVal}"`);
}
