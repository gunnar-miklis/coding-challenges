// https://www.codewars.com/kata/57de78848a8b8df8f10005b1/train/javascript
function howMuchCoffee( events ) {
	let coffee = 0;
	events.forEach( ( e ) => {
		if ( /^(cw||cat||dog||movie)$/.test( e ) ) coffee += 1;
		else if ( /^(CW||CAT||DOG||MOVIE)$/.test( e ) ) coffee += 2;
	} );
	return coffee > 3 ? 'You need extra sleep' : coffee;
}
console.log( howMuchCoffee( [ 'cw' ] ) ); // 1
console.log( howMuchCoffee( [ 'CW' ] ) ); // 2
console.log( howMuchCoffee( [ 'cw', 'CAT' ] ) ); // 3
console.log( howMuchCoffee( [ 'cw', 'CAT', 'DOG' ] ) ); // extra sleep
console.log( howMuchCoffee( [ 'cw', 'CAT', 'cw=others' ] ) ); // 3


