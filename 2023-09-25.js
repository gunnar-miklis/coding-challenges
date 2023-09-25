// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
function sumNoDuplicates( numList ) {
	return numList.reduce( ( s, v ) => numList.indexOf( v ) === numList.lastIndexOf( v ) ? s + v : s, 0 );
}

console.log( sumNoDuplicates( [ 1, 1, 2, 2, 3 ] ) );


// https://www.codewars.com/kata/644b17b56ed5527b09057987/train/javascript
const STRANGE_STRING = 'ß';
const upDownLen = STRANGE_STRING.toUpperCase().toLowerCase().length;
const oriLen = STRANGE_STRING.length;

upDownLen; // :>> 2
oriLen; // :>> 1


// https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/javascript
function howMuch( m, n ) {
	const [ car, boat, start, end, result ] = [
		9,
		7,
		m < n ? m : n,
		m < n ? n : m,
		[],
	];

	for ( let i = start; i <= end; i++ ) {
		if ( i%car === 1 && i%boat === 2 ) {
			result.push( [ `M: ${i}`, `B: ${( i/boat ).toFixed()}`, `C: ${( i/car ).toFixed()}` ] );
		}
	}
	return result;
}

console.log( howMuch( 1, 100 ) );
console.log( howMuch( 1000, 1100 ) );
console.log( howMuch( 0, 200 ) );
console.log( howMuch( 10000, 9950 ) );
