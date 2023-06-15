// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear( p0, percent, aug, p ) {
	let n = 0;
	while ( p0 < p ) {
		p0 = Math.floor( p0 + p0 * ( percent/100 ) + aug );
		n++;
	}
	return n;
}
console.log( nbYear( 1500000, 0.25, 1000, 2000000 ) );


// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum( s ) {
	return s.split( '' )
		.map( ( c, i ) => c.toUpperCase() + c.repeat( i ).toLowerCase() )
		.join( '-' );
}
console.log(
	accum( 'ZpglnRxqenU' ),
); // :>> 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'


// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/javascript
function rps( p1, p2 ) {
	if ( p1 === 'rock' && p2 === 'scissors' ) return 'Player 1 won!';
	else if ( p1 === 'paper' && p2 === 'rock' ) return 'Player 1 won!';
	else if ( p1 === 'scissors' && p2 === 'paper' ) return 'Player 1 won!';
	else if ( p1 === p2 ) return 'Draw!';
	else return 'Player 2 won!';
}
console.log( rps( 'rock', 'scissors' ) );
console.log( rps( 'rock', 'paper' ) );
console.log( rps( 'scissors', 'paper' ) );
console.log( rps( 'scissors', 'scissors' ) );

// others solution, very clever with object
function rps2( p1, p2 ) {
	if ( p1 === p2 ) return 'Draw!';

	const opposites = { rock: 'scissors', scissors: 'paper', paper: 'rock' };

	if ( p1 === opposites[p2] ) return 'Player 2 won!';
	else return 'Player 1 won!';
}
console.log( rps2( 'rock', 'scissors' ) );
console.log( rps2( 'rock', 'paper' ) );
console.log( rps2( 'scissors', 'paper' ) );
console.log( rps2( 'scissors', 'scissors' ) );
