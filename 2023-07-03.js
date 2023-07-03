// https://www.codewars.com/kata/587e18b97a25e865530000d8/train/javascript
function anagramCounter( wordsArray ) {
	let counter = 0;

	wordsArray.forEach( ( word ) => {
		const regEx = new RegExp( `^[${word}]{${word.length}}$` );
		wordsArray.forEach( ( checkAnagram ) => {
			if ( word !== checkAnagram ) {
				if ( regEx.test( checkAnagram ) ) counter++;
			}
		} );
	} );

	return counter / 2;
}
console.log( anagramCounter( [ 'dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab' ] ) );

// others solution
function anagramCounter2( wordsArray ) {
	let numberOfAnagrams = 0;
	const wordsSorted = wordsArray.map( ( word ) => word.split( '' ).sort().join( '' ).toLowerCase() );
	wordsSorted.forEach( ( word, idx ) => {
		for ( let i = idx; i < wordsSorted.length; i++ ) {
			if ( word === wordsSorted[i] && idx !== i ) numberOfAnagrams++;
		}
	} );
	return numberOfAnagrams;
}
console.log( anagramCounter2( [ 'dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab' ] ) );
