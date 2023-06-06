// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution( str, ending ) {
	if ( ending === '' ) return true;
	return str.slice( - ending.length ) === ending;
}
console.log( solution( 'abc', '' ) );

// solution
function solution2( str, ending ) {
	return str.endsWith( ending );
}
console.log( solution2( 'abc', '' ) );


// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel( str ) {
	return str.replace( /[aeiou]/gi, '' );
}
console.log( disemvowel( 'This website is for losers LOL!' ) );
