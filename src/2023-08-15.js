// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  const strArr = str.split(' ');

  if (strArr.every((word) => !word)) return false;

  const hashtag =
    '#' + strArr.map((word) => (word ? word[0].toUpperCase() + word.slice(1) : null)).join('');

  return hashtag.length > 140 ? false : hashtag;
}
console.log(generateHashtag('Codewars Is Nice')); // :>> #CodewarsIsNice
console.log(generateHashtag('Codewars is nice')); // :>> #CodewarsIsNice
console.log(generateHashtag(''));
console.log(generateHashtag('    '));
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
console.log(
  generateHashtag(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  ),
);
console.log(
  generateHashtag(
    '  a  bb  ccc  dddd  eeeee  ffffff  ggggggg  hhhhhhhh  iiiiiiiii  jjjjjjjjjj  kkkkkkkkkkk  llllllllllll  mmmmmmmmmmmmm  nnnnnnnnnnnnnn  ooooooooooooooo  pppppppppppppppp  qqq',
  ),
);
