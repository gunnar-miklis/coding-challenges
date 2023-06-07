// https:// www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// FIXME: Tests Passed: 212 Failed: 2
function comp( a, b ) {
	if ( !a || !b ) return false;
	const aSquared = a.map( ( num ) => num*num );
	const bCompared = b.map( ( square ) => aSquared.includes( square ) );
	return bCompared.every( ( el ) => el );
}
// COMMENT: this test case won't pass...
//	surely, because I check if it "includes",
//	and yes it does include obviously, but it does not match the number of appearance
const a1 = [2, 2, 3]; // 4, 4, 9 != 4, 9, 9
const a2 = [4, 9, 9];
console.log( comp( a1, a2 ) ); // expect: false





// shuffle an array
function shuffle( arr ) {
	return arr.sort( ( a, b ) => Math.floor( Math.random() * a ) - b );
}
console.log( shuffle( [1, 2, 3, 4, 5, 6, 7] ) );
