// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
function stringToArray( string ) {
	return string.split( ' ' );
}
console.log( stringToArray( 'I love arrays they are my favorite' ) );

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps( x ) {
	return x.map( ( n ) => n*2 );
}
console.log( maps( [ 4, 1, 1, 1, 4 ] ) );


// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century( year ) {
	return year.toString().slice( -2 ) > 0 ?
		+year.toString().slice( 0, -2 ) + 1 :
		+year.toString().slice( 0, -2 );
}
console.log( century( 819722 ) );

// others solution
function century2( year ) {
	return Math.ceil( year/100 );
}
console.log( century2( 819722 ) );


// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past( h, m, s ) {
	const milliseconds = h*60*60*1000 + m*60*1000 + s*1000;
	return milliseconds;
}
console.log( past( 1, 0, 1 ) );
