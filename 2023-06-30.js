// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram( str ) {
	const arr = str.split( '' ).map( ( char ) => char.toLowerCase() );
	// const arr = str..toLowerCase().split( '' );  // much better
	for ( const el of arr ) {
		if ( arr.indexOf( el ) !== arr.lastIndexOf( el ) ) return false;
	}
	return true;
}
// console.log( isIsogram( 'isogram' ) );
// console.log( isIsogram( '' ) );
// console.log( isIsogram( 'isIsogram' ) );
console.log( isIsogram( 'moOse' ) );


// https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript
const pathToStableEquilibrium = [];
function numbersOfLetters( num ) {
	// define letters for each number
	const numberInLetters = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	};
	// make sure double (or more) digits are read as single => convert str to array...
	const numToArr = num.toString().split( '' );
	// ...and concatenated as one string: 999 => nineninenine, 60 => sixzero
	let numInStr = '';
	for ( let i = 0; i < numToArr.length; i++ ) {
		numInStr += numberInLetters[numToArr[i]];
	}

	// add current iteration to path
	pathToStableEquilibrium.push( numInStr );

	// if equilibrium is reached, ...
	if ( numInStr === 'four' ) {
		// ...return a copy of the pass...
		const pathCopy = [ ...pathToStableEquilibrium ];
		// ...reset/clear the path array...
		pathToStableEquilibrium.length = 0;
		return pathCopy;
	} else {
		// ...otherwise re-call function again and repeat
		return numbersOfLetters( numInStr.length );
	}
}
console.log( numbersOfLetters( 1 ) );
console.log( numbersOfLetters( 12 ) );
console.log( numbersOfLetters( 37 ) );
console.log( numbersOfLetters( 311 ) );
console.log( numbersOfLetters( 999 ) );
