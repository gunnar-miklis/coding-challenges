// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError( s ) {
	let err = 0;
	s.split( '' ).forEach( ( c ) => /[a-m]/.test( c ) ? 0 : err++ );
	return `${err}/${s.length}`;
}
console.log( printerError( 'aaabbbbhaijjjm' ) );
console.log( printerError( 'aaaxbbbbyyhwawiwjjjwwm' ) );


// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
function isTriangle( a, b, c ) {
	if (
		( a + b > c ) &&
		( a + c > b ) &&
		( b + c > a )
	) return true;
	else return false;
}
console.log( isTriangle( 1, 2, 2 ) ); // true
console.log( isTriangle( 7, 2, 2 ) ); // false
