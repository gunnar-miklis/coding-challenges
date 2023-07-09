// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter( array ) {
	const str = array.join( '' ); 									// easier to work with string (index works the same).

	let alpha = 'abcdefghijklmnopqrstuvxyz'; 						// if input is lowercase, use default.
	if ( /[A-Z]/.test( array[0] ) ) alpha = alpha.toUpperCase(); 	// if input is uppercase, convert to uppercase.

	const idx = alpha.indexOf( str[0] ); 							// get starting position from input in the alphabet

	for ( let i = 0; i <= str.length; i++ ) {						// loop string ( input array )
		if ( str[i] !== alpha[i+idx] ) return alpha[i+idx];			// if idx of str does not match idx of alphabet, this is the missing letter => return it
	}
}
console.log( findMissingLetter( [ 'a', 'b', 'c', 'd', 'f' ] ) ); // :>> e
console.log( findMissingLetter( [ 'O', 'Q', 'R', 'S' ] ) ); // :>> p


// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
// different ways: string to number

function stringToNumber( str ) {
	return +str;
}
console.log( typeof stringToNumber( '1234' ) ); // :>> number
function stringToNumber2( str ) {
	return Number( str );
}
console.log( typeof stringToNumber2( '1234' ) ); // :>> number
function stringToNumber3( str ) {
	return parseInt( str );
}
console.log( typeof stringToNumber3( '1234' ) ); // :>> number
function stringToNumber4( str ) {
	return str * 1;
}
console.log( typeof stringToNumber4( '1234' ) ); // :>> number
function stringToNumber5( str ) {
	return str | str;
}
console.log( typeof stringToNumber5( '1234' ) ); // :>> number
function stringToNumber6( str ) {
	return Math.floor( str );
}
console.log( typeof stringToNumber6( '1234' ) ); // :>> number

// actuallyyyy ... https://www.codewars.com/kata/reviews/54582010888e98e127000142/groups/5e88f6881494ed0001f01ea0