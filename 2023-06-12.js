// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary( a, b ) {
	return ( a + b ).toString( 2 );
}
console.log( addBinary( 1, 2 ) ); // 11


// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence( num ) {
	let i = 0;
	while ( num.toString().length > 1 ) {
		num = num.toString().split( '' ).reduce( ( sum, val ) => sum * val );
		i++;
	}
	return i;
}
console.log( persistence( 39 ) ); // 3


// https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript
function greet( name, owner ) {
	return name === owner ? 'Hello boss' : 'Hello guest';
}
console.log( greet( 'Daniel', 'Daniel' ) );

// clever solution
function greet2( name, owner ) {
	return `Hello ${name === owner ? 'boss' : 'guest'}`;
}
console.log( greet2( 'Daniel', 'Daniel' ) );
