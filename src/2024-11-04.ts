// remove duplicates from an array of objects

type Person = {
  name: string;
  type?: 'student' | 'teacher';
};

const list: Person[] = [
  { name: 'John' },
  { name: 'Sara' },
  { name: 'Sara' },
  { name: 'Jake', type: 'student' }, // edge case 1: optional property (other than "name")
  { name: 'Lynn' },
  { name: 'Lynn', type: 'teacher' }, // edge case 2: same name but with optional property
];

// 1.1 new Set(): only translates the "name" property
// NOTE: notice, type inference does NOT work
const setList = new Set<string>();
list.forEach(({ name }) => setList.add(name));
const uniqueSetList = Array.from(setList, (value) => ({ name: value })) as Person[];
console.log(uniqueSetList);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake' }, { name: 'Lynn' } ]

// 1.2 new Set() + JSON.stringfy: translates all properties (preserve inital object structure).
// NOTE: careful! strict unique! exact object match is used => { name: 'Lynn' }, { name: 'Lynn', type: 'teacher' }
// NOTE: notice, type inference does NOT work
const setList2 = new Set<string>();
list.forEach((person) => setList2.add(JSON.stringify(person)));
const uniqueSetList2 = Array.from(setList2, (value) => JSON.parse(value)) as Person[];
console.log(uniqueSetList2);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake', type: 'student' }, { name: 'Lynn' }, { name: 'Lynn', type: 'teacher' } ]

// 2. new Map(): translates all properties (preserve inital object structure).
// NOTE: However, LAST occurence is used (overwrites) => { name: 'Lynn', type: 'teacher' }.
// NOTE: notice, type inference works
const mapList = new Map<string, Person>();
list.forEach((person) => mapList.set(person.name, person));
const uniqueMapList = Array.from(mapList.values());
console.log(uniqueMapList);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake', type: 'student' }, { name: 'Lynn', type: 'teacher' } ]

// 3.1 reduce + includes + map: only translates the "name" property
// NOTE: notice, type inference does NOT work
const uniqueReduceList = list
  .reduce((names: string[], { name }) => {
    if (!names.includes(name)) {
      names.push(name);
    }
    return names;
  }, [])
  .map((name) => ({ name })) as Person[];
console.log(uniqueReduceList);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake' }, { name: 'Lynn' } ]

// 3.2 object + reduce + map: only translates the "name" property
// NOTE: However, FIRST occurence is used => { name: 'Lynn' }.
// NOTE: notice, type inference does NOT work
type Accumulator = { [key: string]: string };
const uniqueReduceList2 = Object.keys(
  list.reduce((obj: Accumulator, person) => {
    obj[person.name] = person.name;
    return obj;
  }, {}),
).map((name) => ({ name }));
console.log(uniqueReduceList2);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake' }, { name: 'Lynn' } ]

// 3.3 reduce + some: translates all properties (preserve inital object structure).
// NOTE: However, FIRST occurence is used => { name: 'Lynn' }.
// NOTE: notice, type inference works
const uniqueReduceList3 = list.reduce((persons: Person[], person) => {
  if (!persons.some((person) => person.name === person.name)) {
    persons.push(person);
  }
  return persons;
}, []);
console.log(uniqueReduceList3);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake', type: 'student' }, { name: 'Lynn' } ]

// 4. filter + findIndex: translates all properties (preserve inital object structure).
// NOTE: However, FIRST occurence is used => { name: 'Lynn' }.
// NOTE: notice, type inference works
const uniqueFilterList = list.filter(({ name }, idx) => {
  const idxName = list.findIndex((p) => p.name === name);
  return idxName === idx;
});
console.log(uniqueFilterList);
// => [ { name: 'John' }, { name: 'Sara' }, { name: 'Jake', type: 'student' }, { name: 'Lynn' } ]
