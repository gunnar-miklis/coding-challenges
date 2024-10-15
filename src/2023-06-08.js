// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
// my solution
function deleteNth(arr, n) {
  // example: arr = [1,3,2,2,7,2,3,1,2], n = 3

  // create new array
  const resultArr = [];

  // create a unique array
  let uniqueArr = [...new Set(arr)];
  // make it 2D, idx[1] is the counter for each value of idx[0]
  // uniqueArray result: [[1,0],[3,0],[2,0],[7,0]]
  uniqueArr = uniqueArr.map((el) => [el, 0]);

  // loop arr against uniqueArr
  arr.forEach((element) => {
    uniqueArr.forEach((uniqueElement) => {
      // count how many times each number appears
      if (element === uniqueElement[0]) {
        // increase each counter at idx[1]
        // uniqueArray count result: [[1,2],[3,2],[2,4],[7,1]]
        uniqueElement[1] += 1;

        // if counter is less than or equal to n
        if (uniqueElement[1] <= n) {
          // add this element to the result array
          resultArr.push(element);
        }
      }
    });
  });

  return resultArr;
}
console.log(deleteNth([1, 3, 2, 2, 7, 2, 3, 1, 2], 3));
console.log(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3));

// solution 1
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// Methods: new Map(), set(), get(), has(), delete(), keys(), values(), entries(), etc.
// https://www.w3schools.com/js/js_object_maps.asp
function deleteNth2(arr, n) {
  const mapObj = new Map();
  const resultArr = [];

  arr.forEach((el) => {
    // if the element does not exist...
    if (!mapObj.has(el)) {
      // ...add it to the Map with the value "1" as counter
      mapObj.set(el, 1);
    }
    // if the elements value/counter is less then "n"...
    if (mapObj.get(el) <= n) {
      // ...push this element to the resultArr
      resultArr.push(el);
    }
    // increase it's value (count goes up)
    mapObj.set(el, mapObj.get(el) + 1);
  });
  console.log(mapObj); // => Map { 1 => 3, 3 => 3, 2 => 4, 7 => 2 }

  return resultArr;
}
console.log(deleteNth2([1, 3, 2, 2, 7, 2, 3, 1, 2], 3));
console.log(deleteNth2([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3));

// soltion 2
// geez.. almost a "one-liner", again... unbelievable. took me a while to even figure out what's the logic behind it.
function deleteNth3(arr, n) {
  const resultObj = {};
  // ***filter out "true"
  return arr.filter((el) => {
    // add a new property to the object with the inital value 1
    // if there's already property already exist increase it's value by +1
    resultObj[el] = resultObj[el] ? resultObj[el] + 1 : 1;
    // if the properties value is less than or equal to n return "true"***
    return resultObj[el] <= n;
  });
}
console.log(deleteNth3([1, 3, 2, 2, 7, 2, 3, 1, 2], 3));
console.log(deleteNth3([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3));

// learning 1:
//	* use objects instead of arrays...
//	* it's easier to work with a key-value-pair, than with a 2D array.

// learning 2:
//	* the Map() object was completly new to me, interesting way to access an object with set(), get(), has(), delete() methods.
