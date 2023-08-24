// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
function solve( s ) {
	const a = 'abcdefghijklmnopqrstuvwxyz';
	const values = s
		.split( /[aiueo]/gi )
		.map( ( sub ) => sub
			.split( '' )
			.reduce( ( sum, val ) => sum + Number( a.indexOf( val ) + 1 ), 0 ),
		);
	return Math.max( ...values );
}
console.log( solve( 'zodiacs' ) ); // :>> 26
console.log( solve( 'strength' ) ); // :>> 57
