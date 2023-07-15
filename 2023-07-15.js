// https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax( arr ) {
	return [ Math.min( ...arr ), Math.max( ...arr ) ];
}

console.log( minMax( [ 1, 2, 3, 4, 5 ] ) ); // :>> 1, 5
console.log( minMax( [ 2334454, 5 ] ) ); // :> 5, 2334454
console.log( minMax( [ 5 ] ) ); // :>> 5, 5



// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/javascript
function removeEveryOther( arr ) {
	return arr.filter( ( e, i ) => i % 2 === 0 );
}
console.log( removeEveryOther( [ 'Hello', 'Goodbye', 'Hello Again' ] ) ); // :>> ['Hello', 'Hello Again']
console.log( removeEveryOther( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) ); // :>> [1, 3, 5, 7, 9]



// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
function wave( str ) {
	const mexicanWave = [];
	for ( let i = 0; i < str.length; i++ ) {
		if ( /\s/.test( str[i] ) ) continue;
		const waveState = str.slice( 0, i ) + str[i].toUpperCase() + str.slice( i + 1 );
		mexicanWave.push( waveState );
	}
	return mexicanWave;
}
console.log( wave( 'hello' ) ); // :>> ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log( wave( 'codewars' ) );
console.log( wave( '' ) );
console.log( wave( 'two words' ) );



// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld( dad, son ) {
	return dad > son*2 ? dad - son*2 : son*2 - dad;
}
console.log( twiceAsOld( 36, 7 ) ); // :>> 22
console.log( twiceAsOld( 55, 30 ) ); // :>> 5
console.log( twiceAsOld( 42, 21 ) ); // :>> 0
console.log( twiceAsOld( 29, 0 ) ); // :>> 29
// others solution, "Math.abs()" gives the difference
function twiceAsOld2( dad, son ) {
	return Math.abs( dad - son*2 );
}
console.log( twiceAsOld2( 36, 7 ) ); // :>> 22
console.log( twiceAsOld2( 55, 30 ) ); // :>> 5
console.log( twiceAsOld2( 42, 21 ) ); // :>> 0
console.log( twiceAsOld2( 29, 0 ) ); // :>> 29
