// https://www.codewars.com/kata/595d4823c31ba629d90000d2/train/javascript
// FIXME: there's an issue with uppercase/lowercase sorting.
//	* the result list of rarest pepes is correct, but expected ['HBO Pepe', 'Hamilton Pepe'], instead of ['Hamilton Pepe', 'HBO Pepe']
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
		.sort( ( a, b ) => {
			const isUpperCase = new RegExp( /^([A-Z]+)(?=\s)/ );
			if ( isUpperCase.test( a ) === isUpperCase.test( b ) ) return a.localeCompare( b );
			if ( isUpperCase.test( a ) ) return -1;
			return 1;
		} );

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
	'dance Pepe',
	'DANCE Pepe',
	'Codewars Pepe',
	'Codewars Pepe' ] ) );
console.log( findRarestPepe( [
	'Codewars Pepe',
	'Codewars Pepe',
	'Coding Pepe' ] ) );
