/* Kata 1 */
/* -------------------------------------- */
/* my solution */
function booleanToString( b ) {
	if ( b ) {
		return 'true';
	} else if ( !b ) {
		return 'false';
	}
}
console.log( booleanToString( true ) );
/* optimized */
function booleanToString2( b ) {
	return b.toString();
}
console.log( booleanToString2( true ) );


/* Kata 2 */
/* -------------------------------------- */
/* my solution */
function removeChar( str ) {
	str = str.slice( 1 );
	str = str.slice( 0, -1 );
	return str;
}
console.log( removeChar( 'flower' ) );
/* optimized */
function removeChar2( str ) {
	return str.slice( 1, -1 );
}
console.log( removeChar2( 'flower' ) );


/* Kata 3 */
/* -------------------------------------- */
/* my solution */
function repeatStr( n, s ) {
	let str = '';
	for ( let i = 0; i < n; i++ ) {
		str += s;
	}
	return str;
}
console.log( repeatStr( 3, 'Bmo' ) );
/* optimized */
function repeatStr2( n, s ) {
	return s.repeat( n );
}
console.log( repeatStr2( 3, 'Bmo' ) );
