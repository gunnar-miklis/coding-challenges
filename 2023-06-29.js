/* eslint-disable indent */

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
function getGrade( s1, s2, s3 ) {
	const score = Math.floor( ( s1 + s2 + s3 ) / 3 );
	if ( 90 <= score ) return 'A';
	else if ( 80 <= score ) return 'B';
	else if ( 70 <= score ) return 'C';
	else if ( 60 <= score ) return 'D';
	else return 'F';
}
console.log( getGrade( 95, 90, 93 ) );
console.log( getGrade( 60, 82, 76 ) );


// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp( operation, value1, value2 ) {
	switch ( operation ) {
		case '+': return value1 + value2;
		case '-': return value1 - value2;
		case '*': return value1 * value2;
		case '/': return value1 / value2;
	}
}
console.log( basicOp( '+', 4, 7 ) );
console.log( basicOp( '-', 11, 5 ) );

// others solution, so clever using an object
function basicOp2( operation, value1, value2 ) {
	const casesObject = {
		'+': value1 + value2,
		'-': value1 - value2,
		'*': value1 * value2,
		'/': value1 / value2,
	};
	return casesObject[operation];
}
console.log( basicOp2( '+', 4, 7 ) );
console.log( basicOp2( '-', 11, 5 ) );


// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
function updateLight( current ) {
	const trafficLights = {
		'green': 'yellow',
		'yellow': 'red',
		'red': 'green',
	};
	return trafficLights[current];
}
console.log( updateLight( 'green' ) );
console.log( updateLight( 'yellow' ) );
console.log( updateLight( 'red' ) );

// others solution: same, but shorter syntax
function updateLight2( current ) {
	return {
		'green': 'yellow',
		'yellow': 'red',
		'red': 'green',
	}[current];
}
console.log( updateLight2( 'green' ) );
console.log( updateLight2( 'yellow' ) );
console.log( updateLight2( 'red' ) );


// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven( array ) {
	return array.reduce( ( sum, num ) => sum + num, 0 ) % 2 === 0 ? 'even' : 'odd';
}
console.log( oddOrEven( [ 0, 1, 5 ] ) );
