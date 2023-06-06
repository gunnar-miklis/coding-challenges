// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
// 4 kyu kata

// a little help from: https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff

// COMMENT: ok... after 4h of trying...
//	i got the permutation algorithm working and...
//	passed the test for "small numbers"...
//	but get a "timed out" for the "bigger numbers" test T_T

function nextBigger( n ) {
	if ( n < 0 ) return -1;
	if ( n < 10 ) return n;

	// get all permutations
	function getPermutations( num ) {
		// turn number into array
		const digits = num.toString().split( '' );
		if ( digits.length === 1 ) return num;

		const permutations = [];
		for ( let i = 0; i < digits.length; i++ ) {
			// put i aside
			const currentDigit = digits[i];

			// get remaining digits
			const remainingDigits = digits.slice( 0, i ).concat( digits.slice( i+1 ) );

			// recursion: recall function until the length is === 1
			const remainingDigitsRecursive = getPermutations( remainingDigits.join( '' ) );

			// when all recursions have their value => loop over recursions
			for ( let j = 0; j < remainingDigitsRecursive.length; j++ ) {
				// concatenate current digit with remaining digit from each recursion
				const recursionResult = [currentDigit].concat( remainingDigitsRecursive[j] );
				// these are all possible permutations in one array
				permutations.push( recursionResult );
			}
		}
		return permutations;
	}

	// get all  permutations and convert each permutation-array into a string(number)
	const allPermutations = getPermutations( n ).map( ( permutation ) => Number( permutation.join( '' ) ) );

	// filter out all permutation that are bigger than the inital one
	const largerPermutations = allPermutations.filter( ( permutation ) => permutation > n );

	// if the array is empty, this means the inital number (n) is already the biggest possible permutation
	// in that case, return the inital number.
	// otherwise return the first index of the array, which is the "next bigger number"
	return largerPermutations.length === 0 ? n : largerPermutations[0];
}
console.log( nextBigger( 2017 ) );


// COMMENT: most of them passes the test... some combinations somehow don't work, idk
//	also.. at the end it says "no brutforce bla bla" 🖕 spent the fucking day on this shit 🖕
function nextBigger2( n ) {
	if ( n < 10 ) return -1;

	const arr = [n.toString().split( '' )];
	for ( let i = 0; i <= n.toString().length; i++ ) {
		for ( let j = 2; j <= n.toString().length; j++ ) {
			arr.push( arr[i].slice( 0, -j ).concat( arr[i].slice( -j ).reverse() ) );
		}
	}
	const uniqueArr = [...new Set( arr.map( ( el ) => el.join( '' ) ) )].sort();
	const filteredArr = uniqueArr.filter( ( el ) => el > n );

	return filteredArr.length === 0 ? -1 : Number( filteredArr[0] );
}
console.log( nextBigger2( 253744 ) );


// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

function sumSquareEvenRootOdd( ns ) {
	return Number(
		ns.map( ( num ) => num % 2 === 0 ? Math.pow( num, 2 ) : Math.sqrt( num ) )
			.reduce( ( sum, num ) => sum + num, 0 )
			.toFixed( 2 ),
	);
}
console.log( sumSquareEvenRootOdd( [1, 14, 9, 8, 17, 21] ) );


// https://www.codewars.com/kata/592915cc1fad49252f000006/train/javascript

function noIfsNoButs( a, b ) {
	switch ( true ) {
	case a < b:
		return `${a} is smaller than ${b}`;
	case a > b:
		return `${a} is greater than ${b}`;
	case a === b:
		return `${a} is equal to ${b}`;
	}
}
console.log( noIfsNoButs( 100, 80 ) );
