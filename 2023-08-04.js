// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
	if ( typeof this.trim() !== 'string' || !this.length ) return '';

	return this
		.trim()
		.split( ' ' )
		.map( ( word ) => `${word[0].toUpperCase()}${word.slice( 1 )}` )
		.join( '' );
};
console.log( 'camel case method'.camelCase() );
console.log( ''.camelCase() );



// https://www.codewars.com/kata/62c376ce1019024820580309/train/javascript
function getCellAddresses( range ) {
	const [ start, end ] = range.split( ':' );
	if ( start === end ) return [];

	const isString = new RegExp( /\D/gi );
	const isNumber = new RegExp( /\d/gi );
	const startLetter = String( start.match( isString ).join( '' ) );
	const startNumber = Number( start.match( isNumber ).join( '' ) );
	const endLetter = String( end.match( isString ).join( '' ) );
	const endNumber = Number( end.match( isNumber ).join( '' ) );

	const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
	const sheet = [];

	for ( let i = startNumber; i <= endNumber; i++ ) {
		for ( let j = alpha.indexOf( startLetter ); j <= alpha.indexOf( endLetter ); j++ ) {
			sheet.push( alpha[j] + i );
		}
	}
	return sheet;
}
// console.log( getCellAddresses( 'B3:D5' ) );
console.log( getCellAddresses( 'B86:L212' ) );



// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count( string ) {
	return string
		.split( '' )
		.reduce( ( acc, val ) => {
			acc[val] ? acc[val]++ : acc[val] = 1;
			return acc;
		}, {} );
}
console.log( count( 'AAABCC' ) );



// https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
function groupByCommas( n ) {
	return n.toString()
		.split( '' )
		.reverse().join( '' )
		.replace( /\d{3}/g, '$&,' )
		.split( '' )
		.reverse( '' )
		.join( '' )
		.replace( /^,/, '' );
}
console.log( groupByCommas( 1 ) );
console.log( groupByCommas( 10 ) );
console.log( groupByCommas( 100 ) );
console.log( groupByCommas( 1000 ) );
console.log( groupByCommas( 10000 ) );
console.log( groupByCommas( 100000 ) );
console.log( groupByCommas( 1000000 ) );
console.log( groupByCommas( 10000000 ) );
console.log( groupByCommas( 100000000 ) );
console.log( groupByCommas( 1000000000 ) );

// others solutions... *ouch*
function groupByCommas2( n ) {
	return n.toLocaleString();
}
console.log( groupByCommas2( 1 ) );
console.log( groupByCommas2( 10 ) );
console.log( groupByCommas2( 100 ) );
console.log( groupByCommas2( 1000 ) );
console.log( groupByCommas2( 10000 ) );
console.log( groupByCommas2( 100000 ) );
console.log( groupByCommas2( 1000000 ) );
console.log( groupByCommas2( 10000000 ) );
console.log( groupByCommas2( 100000000 ) );
console.log( groupByCommas2( 1000000000 ) );

function groupByCommas3( n ) {
	return n.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
}
console.log( groupByCommas3( 1 ) );
console.log( groupByCommas3( 10 ) );
console.log( groupByCommas3( 100 ) );
console.log( groupByCommas3( 1000 ) );
console.log( groupByCommas3( 10000 ) );
console.log( groupByCommas3( 100000 ) );
console.log( groupByCommas3( 1000000 ) );
console.log( groupByCommas3( 10000000 ) );
console.log( groupByCommas3( 100000000 ) );
console.log( groupByCommas3( 1000000000 ) );
