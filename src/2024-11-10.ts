export {};

type Developer = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

// SECTION: https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names
let developers: Developer[] = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

function findOddNames(devs: Developer[]): Developer[] {
  const oddDevNames = devs.filter(({ firstName }) => {
    const asciiSum = firstName.split('').reduce((sum, char) => {
      const ascii = char.charCodeAt(0);
      return sum + ascii;
    }, 0);

    const isOdd = asciiSum % 2;
    return isOdd;
  });

  return oddDevNames;
}
const oddNames: Developer[] = findOddNames(developers);
console.log(oddNames);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details
developers = [
  {
    firstName: null!,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null!,
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

type DeveloperWithQuestion = Developer & { question: string };
function askForMissingDetails(devs: Developer[]) {
  const devsMissingDetails = devs.filter((dev) => Object.values(dev).some((val) => val === null));

  const devsContainingFeedback = devsMissingDetails.map((dev) => {
    let question = '';
    Object.entries(dev).forEach(([key, val]) => {
      if (val === null) {
        question = `Hi, could you please provide your ${key}.`;
      }
    });
    return { ...dev, question } as DeveloperWithQuestion;
  });

  return devsContainingFeedback;
}
const feedback: DeveloperWithQuestion[] = askForMissingDetails(developers);
console.log(feedback);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age
developers = [
  {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
  },
];

function getAverageAge(devs: Developer[]): number {
  const ageSum = devs.reduce((sum, { age }) => sum + age, 0);
  const devsCount = devs.length;
  return Math.round(ageSum / devsCount);
}
const averageAge: number = getAverageAge(developers);
console.log(averageAge); // => 50

// SECTION: https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins
type GitHubDeveloper = Developer & { githubAdmin: 'yes' | 'no' };
type Languages = (typeof gitHubDevelopers)[number]['language'];

const gitHubDevelopers = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 49,
    language: 'Ruby',
    githubAdmin: 'no',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
    githubAdmin: 'no',
  },
] as const satisfies GitHubDeveloper[];

function findAdmin(devs: GitHubDeveloper[], lang: Languages): GitHubDeveloper[] {
  const languageAdmins = devs.filter(
    ({ language, githubAdmin }) => githubAdmin === 'yes' && language === lang,
  );
  return languageAdmins;
}
const languageAdmins: GitHubDeveloper[] = findAdmin(gitHubDevelopers, 'JavaScript');
console.log(languageAdmins);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food
type FoodOptions = 'standard' | 'vegetarian' | 'vegan' | 'diabetic' | 'gluten-intolerant';
type FoodOrder = { [key in FoodOptions]?: number };
type DeveloperWithFoodChoice = Developer & { meal: FoodOptions };

const developersWithFoodChoice: DeveloperWithFoodChoice[] = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    meal: 'vegetarian',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    meal: 'standard',
  },
  {
    firstName: 'Ramona',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    meal: 'vegan',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    meal: 'vegetarian',
  },
];

function orderFood(devs: DeveloperWithFoodChoice[]): FoodOrder {
  const totalOrder = devs.reduce((order: FoodOrder, { meal }) => {
    if (!order[meal]) order[meal] = 1;
    else order[meal]++;
    return order;
  }, {});

  return totalOrder;
}
const foodOrder: FoodOrder = orderFood(developersWithFoodChoice);
console.log(foodOrder); // => { vegetarian: 2, standard: 1, vegan: 1 }

// SECTION: https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe
developers = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

function countDevelopers(devs: Developer[]): number {
  const jsDevsFromEu = devs.filter(
    ({ language, continent }) => language === 'JavaScript' && continent === 'Europe',
  );
  const jsDevsFromEuCount = jsDevsFromEu.length;
  return jsDevsFromEuCount;
}
const count: number = countDevelopers(developers);
console.log(count); // => 1

// SECTION: https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers
type DeveloperWithGreeting = Developer & { greeting: string };

developers = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

function greetDevelopers(devs: Developer[]): DeveloperWithGreeting[] {
  const devsWithGreeting = devs.map((dev) => {
    const greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    return { ...dev, greeting } as DeveloperWithGreeting;
  });
  return devsWithGreeting;
}
const devGreetings: DeveloperWithGreeting[] = greetDevelopers(developers);
console.log(devGreetings);

// SECTION: https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming
developers = [
  {
    firstName: 'Emma',
    lastName: 'Z.',
    country: 'Netherlands',
    continent: 'Europe',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'Javascript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
];

function isRubyComing(devs: Developer[]): boolean {
  const hasRubyDevs = devs.some(({ language }) => language === 'Ruby');
  return hasRubyDevs;
}
const hasRubyDevs: boolean = isRubyComing(developers);
console.log(hasRubyDevs); // => true

// SECTION: https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer
const devsMeetupFour = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python',
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure',
  },
] as const satisfies Developer[];

type FirstNames = (typeof devsMeetupFour)[number]['firstName'];
type Countries = (typeof devsMeetupFour)[number]['country'];
type Response = `${FirstNames}, ${Countries}` | 'There will be no Python developers';

function getFirstPython(devs: Developer[]): Response {
  const firstPythonDev = devs.find(({ language }) => language === 'Python');

  if (firstPythonDev) {
    const { firstName, country } = firstPythonDev;
    return `${firstName as FirstNames}, ${country as Countries}`;
  } else {
    return 'There will be no Python developers';
  }
}
const firstPythonDev: Response = getFirstPython(devsMeetupFour);
console.log(firstPythonDev); // => Victoria, Puerto Rico

// SECTION: https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages
developers = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
];

type LangRepresentations = { [language: string]: number };

function countLanguages(devs: Developer[]): LangRepresentations {
  const totalRepresentations: LangRepresentations = devs.reduce(
    (representation: LangRepresentations, { language }) => {
      if (!representation[language]) representation[language] = 1;
      else representation[language]++;
      return representation;
    },
    {},
  );

  return totalRepresentations;
}
const representations: LangRepresentations = countLanguages(developers);
console.log(representations); // => { C: 2, JavaScript: 1, Ruby: 1 }

// SECTION: https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language
developers = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 65,
    language: 'JavaScript',
  },
];

function isSameLanguage(devs: Developer[]): boolean {
  const firstDevsLanguage = devs[0].language;
  const isSame = devs.every(({ language }) => language === firstDevsLanguage);
  return isSame;
}
const isSame: boolean = isSameLanguage(developers);
console.log(isSame); // => true
