// https://www.codewars.com/kata/595d4823c31ba629d90000d2/train/javascript
function findRarestPepe( pepes ) {
	// count occurences of each pepe
	const occurences = pepes.reduce( ( object, pepe ) => {
		object[pepe] ? object[pepe]++ : object[pepe] = 1;
		return object;
	}, {} );

	// 1. instruction:
	//	* filter those with a frequency of < 5
	//	* sort them small to big, to determine the lowest/rarest pepe
	const sortedOccurences = Object
		.keys( occurences )
		.filter( ( pepe ) => occurences[pepe] < 5 )
		.sort( ( a, b ) => occurences[a] - occurences[b] );
	const lowestValue = occurences[sortedOccurences[0]];

	// 2. instruction:
	//	* filter all pepes, that equal the rarest pepe / lowest value
	//	* sort them alphabetically
	const rarestPepe = sortedOccurences
		.filter( ( pepe ) => occurences[pepe] === lowestValue )
		.sort(); // COMMENT: i believe, technically this is the wrong way to sort alphabetically. better use ".localCompare()". however, the sample test only passes with ".sort()"

	// return the specified output format
	if ( !rarestPepe.length ) {
		return 'No rare pepes!';
	} else if ( rarestPepe.length === 1 ) {
		return rarestPepe[0];
	} else {
		return rarestPepe;
	}
}
console.log( findRarestPepe( [
	'Deep Learning Pepe',
	'Machine Learning Pepe',
	'Machine Learning Pepe',
	'Go Pepe',
	'Machine Learning Pepe' ] ) );
console.log( findRarestPepe( [
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe' ] ) );
console.log( findRarestPepe( [
	'Codewars Pepe',
	'Codewars Pepe',
	'Dance Pepe',
	'Dude Pepe',
	'DUDE Pepe',
	'Codewars Pepe',
	'Codewars Pepe' ] ) );
console.log( findRarestPepe( [
	'Codewars Pepe',
	'Codewars Pepe',
	'Coding Pepe' ] ) );


// TESTING: ".sort()" on strings give not alphabetically result actually, compared to ".localCompare()"
const arr = [ 'Hello', 'World', 'hello', 'world', 'HELLO', 'WORLD', 'hellO', 'worlD' ];
const sortedArr = arr.sort( );
console.log( sortedArr );
const sortedArr2 = arr.sort( ( a, b ) => a - b );
console.log( sortedArr2 );
const sortedArr3 = arr.sort( ( a, b ) => b - a );
console.log( sortedArr3 );
const sortedArr4 = arr.sort( ( a, b ) => a.localeCompare( b ) );
console.log( sortedArr4 );
const sortedArr5 = sortedArr4.sort( ( a, b ) => /[A-Z]+/.test( a ) ? a.localeCompare( b ) : 1 );
console.log( sortedArr5 );
