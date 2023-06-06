// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isSquare( n ) {
	return Number.isInteger( Math.sqrt( n ) );
}
console.log( isSquare( 25 ) );



// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount( str ) {
	return str.split( '' ).filter( ( char ) => /[aeiou]/.test( char ) ).length;
}
console.log( getCount( 'abracadabra' ) );


// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers( numbers ) {
	return numbers.sort( ( a, b ) => a - b ).slice( 0, 2 ).reduce( ( sum, num ) => sum + num );
}
console.log( sumTwoSmallestNumbers( [15, 28, 4, 2, 43] ) );



// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binary = '0110';

// solution 1: method
console.log( parseInt( binary, 2 ) );

// solution 2: adding left to right
// https://masteringjs.io/tutorials/tools/binary-to-decimal#:~:text=JavaScript%20has%20a%20parseInt(),using%20the%20toString()%20function.
// https://www.wikihow.com/Convert-from-Binary-to-Decimal
let num = 0;
for ( let i = 0; i < binary.length; i++ ) {
	num = num * 2 + Number( binary[i] );
}
num;

// solution 3: my approach, reverse binary, then use exponent of i
// https://i.ytimg.com/vi/sXxwr66Y79Y/maxresdefault.jpg
num = 0;
const binaryReversed = binary.split( '' ).reverse().join( '' );
for ( let i = 0; i < binary.length; i++ ) {
	if ( binaryReversed[i] === '1' ) num += 2**i;
}
num;

console.log( 2**0 );
console.log( 2**1 );
console.log( 2**3 );
console.log( 2**4 );



// submit -----------------------------------------------------------
// "no-method" solution:
function binaryArrayToNumber( arr ) {
	arr.reverse(); // mutates
	let num = 0;

	for ( let i = 0; i < arr.length; i++ ) {
		if ( arr[i] ) num += 2**i;
	}

	return num;
}
console.log( binaryArrayToNumber( [0, 0, 0, 1] ) );

// "method" solution:
//  return parseInt( arr.join( '' ), 2 );
function binaryArrayToNumber2( arr ) {
	return parseInt( arr.join( '' ), 2 );
}
console.log( binaryArrayToNumber2( [0, 0, 1, 1] ) );

