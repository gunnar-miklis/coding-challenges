// https://www.codewars.com/kata/5b7d7ce57a0c9d86c700014b/train/javascript
function addAll( numbers ) {
	const nums = numbers.sort();

	const result = [];
	nums.reduce( ( sum, num ) => {
		const add = sum + num;
		result.push( add );
		return add;
	}, 0 );

	return result.reduce( ( sum, num ) => sum + num, 0 ) - 1;
}
// DONE: those two are correct
console.log( addAll( [ 1, 2, 3 ] ) ); // :>> 9
// equal:
console.log( 3 + 6 ); // :>> 9

console.log( addAll( [ 1, 2, 3, 4 ] ) ); // :>> 19
// equal:
console.log( 3 + 6 + 10 ); // :>> 19

// FIXME: currently gives 34 but 33 is expected...
console.log( addAll( [ 1, 2, 5, 4, 3 ] ) ); // :>> 33
// ...because:
console.log( 1 + 2 ); // :>> 3
console.log( 3 + 3 ); // :>> 6
console.log( 5 + 4 ); // :>> 9, currently: 6 + 4 = 10, but 5 + 4 = 9 is smaller
console.log( 9 + 6 ); // :>> 15, 5 and 6 swaping
// equal:
console.log( 3 + 6 + 9 + 15 ); // :>> 33


// https://www.codewars.com/kata/58be35e9e36224a33f000023/train/javascript
function Allergies( score ) {
	// DONE: throw error
	if ( typeof score === 'string' || score % 1 !== 0 || score === null ) throw new Error( 'string, float, null not allowed' );

	this.ALLERGY_SCORES = {
		'eggs': 1,
		'peanuts': 2,
		'shellfish': 4,
		'strawberries': 8,
		'tomatoes': 16,
		'chocolate': 32,
		'pollen': 64,
		'cats': 128,
	};

	// DONE: return true/false
	this.isAllergicTo = function( allergen ) {
		return this.ALLERGY_SCORES[allergen] <= score;
	};

	// FIXME: i do get very close/similar results
	//	* i believe the add/.push() "lastIdx" thingy is wrong
	this.allergies = function() {
		const result = [];

		// convert into array of values
		const allergies = Object.values( this.ALLERGY_SCORES );

		function filterAllergies( allergies, score ) {
			// filter all in score range
			const filteredAllergies = allergies.filter( ( allergie ) => allergie <= score );

			// FIXME: add highest / last
			const lastIdx = filteredAllergies.length-1;
			result.push( filteredAllergies[lastIdx] );

			// get rest
			const rest = score % filteredAllergies[lastIdx];

			// recursion, repeat until none left
			if ( rest > 0 ) return filterAllergies( filteredAllergies, rest );
		}
		filterAllergies( allergies, score );

		// convert array of values into array of names...
		//	... and sort alphabetically
		return Object
			.keys( this.ALLERGY_SCORES )
			.filter( ( allergen ) => result.some( ( filteredAllergen ) => this.ALLERGY_SCORES[allergen] === filteredAllergen ) )
			.sort( ( a, b ) => a.localeCompare( b ) );
	};
}

// DONE: following are correct
console.log( new Allergies( 0 ).isAllergicTo( 'peanuts' ) );
console.log( new Allergies( 0 ).isAllergicTo( 'chocolate' ) );
console.log( new Allergies( 0 ).allergies() );

console.log( new Allergies( 34 ).isAllergicTo( 'peanuts' ) );
console.log( new Allergies( 34 ).isAllergicTo( 'chocolate' ) );
console.log( new Allergies( 34 ).allergies() );

console.log( new Allergies( 1 ).isAllergicTo( 'eggs' ) );
console.log( new Allergies( 1 ).allergies() );
console.log( new Allergies( 2 ).allergies() );

console.log( new Allergies( 255 ).allergies() );
console.log( new Allergies( 1000 ).allergies() );

// FIXME: cats (128) always lastIdx... incorrect logic
console.log( new Allergies( 256 ).allergies() ); // correct, but without "cats"
console.log( new Allergies( 257 ).allergies() ); // correct, but without "cats"
console.log( new Allergies( 258 ).allergies() ); // correct, but without "cats"
console.log( new Allergies( 259 ).allergies() ); // correct, but without "cats"
console.log( new Allergies( 260 ).allergies() ); // correct, but without "cats"
