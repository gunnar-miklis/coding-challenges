/* eslint-disable indent */

// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk( walk ) {
	if ( walk.length === 10 ) {
		let stepCountN = 0;
		let stepCountS = 0;
		let stepCountE = 0;
		let stepCountW = 0;

		walk.forEach( ( step ) => {
			switch ( step ) {
			case 'n':
				stepCountN++;
				break;
			case 's':
				stepCountS++;
				break;
			case 'e':
				stepCountE++;
				break;
			case 'w':
				stepCountW++;
				break;
			}
		} );

		return stepCountN === stepCountS && stepCountE === stepCountW ? true : false;
	} else return false;
}

console.log(
	isValidWalk( ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w'] ),
);


// optimized solution
function isValidWalk2( walk ) {
	let stepCountY = 0; // N - S
	let stepCountX = 0; // E - W

	walk.forEach( ( step ) => {
		switch ( step ) {
			case 'n': stepCountX++; break;
			case 's': stepCountX--; break;
			case 'e': stepCountY++; break;
			case 'w': stepCountY--; break;
		}
	} );

	return walk.length === 10 && stepCountX === 0 && stepCountY === 0;
}
console.log(
	isValidWalk2( ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w'] ),
);


// one-liner solution
function isValidWalk3( walk ) {
	const directions = { n: 0, s: 0, e: 0, w: 0 };
	walk.forEach( ( step ) => directions[step]++ );
	return walk.length === 10 && directions.n === directions.s && directions.e === directions.w;
}
console.log(
	isValidWalk3( ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w'] ),
);





// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd( A ) {
	const numbers = {};
	// count the appearance of each number
	A.forEach( ( num ) => numbers[num] = numbers[num] ? numbers[num] + 1 : 1 );
	// loop over object keys, filter out odd values, and return idx
	//	* because the object property-name is a string, it needs to be converted to a number by using: "+" infront
	return +Object.keys( numbers ).filter( ( key ) => numbers[key] % 2 === 1 )[0];
}
console.log( findOdd( [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10] ) ); // 1
console.log( findOdd( [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5] ) ); // 5
console.log( findOdd( [10] ) ); // 10
console.log( findOdd( [1, 1, 2] ) ); // 2
console.log( findOdd( [0, 1, 0, 1, 0] ) ); // 0


// one-liner solution
function findOdd2( A ) {
	// The XOR operation is performed between the accumulated value (sum = 20) and the current element (val = 1 ... ).
	// The result of the XOR operation becomes the new accumulated value (sum) for the next iteration.
	// Finally, the reduce method finishes iterating over all the elements in the array, and it returns the last accumulated value.
	// 20 ^ 1 = 21
	// 21 ^ 1 = 20
	// 20 ^ 2 = 22
	// 22 ^ 2 = 20
	// 20 ^ 3 = 23
	// 23 ^ 3 = 20
	// 20 ^ 5 = 17
	// 17 ^ 5 = 20
	// 20 ^ 4 = 16
	// 16 ^ 20 = 4
	// 4 ^ 5 = 1
	return A.reduce( ( sum, val ) => sum ^ val, 0 );
}
console.log( findOdd2( [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5] ) );

// learning:
// XOR ('^') bitwise operator
// Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.
// https://www.programiz.com/javascript/bitwise-operators
// bitwise XOR operator example
const a = 12; // 01100
const b = 25; // 11001
const result = a ^ b; // 00010101
console.log( result ); // 21
