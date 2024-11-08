export {};

type Developer = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

let developers: Developer[] = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'Ruby',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Ruby',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 95,
    language: 'JavaScript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 18,
    language: 'JavaScript',
  },
  {
    firstName: 'Joao',
    lastName: 'D.',
    country: 'Portugal',
    continent: 'Europe',
    age: 25,
    language: 'JavaScript',
  },
];

// SECTION: https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse
function isLanguageDiverse(devs: Developer[]): boolean {
  const languages = {
    Python: 0,
    Ruby: 0,
    JavaScript: 0,
  };

  devs.forEach(({ language }) => languages[language as keyof typeof languages]++);

  // inital approach:
  // const isDiverse = Object.values(languages).every((lang1) =>
  //   Object.values(languages).every((lang2) => lang1 * 2 >= lang2),
  // );

  // another approach:
  const languageCounts = Object.values(languages);
  const min = Math.min(...languageCounts);
  const max = Math.max(...languageCounts);
  const isDiverse = max <= min * 2;

  return isDiverse;
}

const isDiverse = isLanguageDiverse(developers);
console.log(isDiverse); // => false

developers = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'Ruby',
  },
  {
    firstName: 'Joao',
    lastName: 'D.',
    country: 'Portugal',
    continent: 'Europe',
    age: 25,
    language: 'JavaScript',
  },
];

const isDiverse2 = isLanguageDiverse(developers);
console.log(isDiverse2); // => true
