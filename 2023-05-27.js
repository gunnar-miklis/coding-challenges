// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

function paperwork( n, m ) {
	return n < 0 || m < 0 ? 0 : n * m;
}
console.log( paperwork( 0, 5 ) );


// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript
// my over-complicate solution
function spacey( array ) {
	const result = [array[0]];
	for ( let i = 0; i < array.length - 1; i++ ) {
		result.push( result[i] + array[i+1] );
	}
	return result;
}
console.log(
	spacey( ['kevin', 'has', 'no', 'space'] ),
);
// easy peasy, no?! T_T
function spacey2( array ) {
	let result = '';
	return array.map( ( e ) => result += e );
}
console.log(
	spacey2( ['kevin', 'has', 'no', 'space'] ),
);
