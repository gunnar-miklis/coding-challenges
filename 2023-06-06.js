// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
function sum( numbers ) {
	return numbers.reduce( ( sum, val ) => sum + val, 0 );
}
console.log( sum( [1, 5.2, 4, 0, -1] ) );


// https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
const greet = () => 'hello world!';
console.log( greet() );


// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior( data ) {
	return data.map( ( member ) => member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open' );
}
console.log(
	openOrSenior( [[59, 12], [55, -1], [12, -2], [12, 12]] ),
);

// damn good solution using destruction :OOO ...noiceee
function openOrSenior2( data ) {
	return data.map( ( [age, handicap] ) => age >= 55 && handicap > 7 ? 'Senior' : 'Open' );
}
console.log(
	openOrSenior2( [[59, 12], [55, -1], [12, -2], [12, 12]] ),
);
