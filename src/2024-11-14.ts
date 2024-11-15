// https://www.codewars.com/kata/64d9f8b2dd14d200247b8184/train/javascript

type UserName = { firstName: string; lastName: string; initials: string };

export function generateChatRoomNames(users: string[]) {
  const chatNames = new Set<string>();

  // handle: no user names provided
  if (!users.length) return [];

  // convert userName-string into userName-object => { firstName, lastName, initials }
  const userNames: UserName[] = users.map((user) => {
    const [firstName, lastName] = user.toLowerCase().split(' ');
    return { firstName, lastName, initials: lastName.charAt(0) } satisfies UserName;
  });

  // filter users and check each case
  userNames.forEach(({ firstName, lastName, initials }) => {
    const matchingInitals = userNames.filter(
      (user) => user.firstName === firstName && user.initials === initials,
    );
    const matchingFirstNames = userNames.filter((user) => user.firstName === firstName);

    // case 1: two or more people have a specific first name and last name initial
    if (matchingInitals.length >= 2) {
      const formatedName = capitalizeFirstLetters([firstName, lastName]);
      chatNames.add(formatedName);
    }
    // case 2: two or more people have a specific first name
    else if (matchingFirstNames.length >= 2) {
      const formatedName = capitalizeFirstLetters([firstName, initials]);
      chatNames.add(formatedName);
    }
    // case 3: only one person has a specific first name
    else {
      const formatedName = capitalizeFirstLetters([firstName]);
      chatNames.add(formatedName);
    }
  });

  // sort alphabetically
  const sortedChatNames = Array.from(chatNames).toSorted((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );

  return sortedChatNames;
}

// convert to Title Case
function capitalizeFirstLetters(words: string[]) {
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const names = ['Joe Bloggs', 'John Smith', 'Jane Doe', 'Jane Bloggs', 'John Scott'];
const chatNames = generateChatRoomNames(names);
console.log(
  chatNames, // => [ 'Jane B', 'Jane D', 'Joe', 'John Scott', 'John Smith' ]
);
