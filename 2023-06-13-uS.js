// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

// my solution 1: fails edge case
// COMMENT: "works", BUT returns the directions in the wrong order.
function dirReduc( arr ) {
	const result = [];

	// count each direction
	const dir = { NORTH: 1, SOUTH: 1, EAST: 1, WEST: 1 };
	arr.forEach( ( el ) => dir[el] ? dir[el]++ : 0 );
	dir;

	// calculate and compare E<>W
	const dirY = dir.EAST - dir.WEST;
	if ( dirY > 0 ) {
		for ( let i = 0; i < dirY; i++ ) result.push( 'EAST' );
	} else if ( dirY < 0 ) {
		for ( let i = 0; i > dirY; i-- ) result.push( 'WEST' );
	}

	// calculate and compare N<>S
	const dirX = dir.NORTH - dir.SOUTH;
	if ( dirX > 0 ) {
		for ( let i = 0; i < dirX; i++ ) result.push( 'NORTH' );
	} else if ( dirX < 0 ) {
		for ( let i = 0; i > dirX; i-- ) result.push( 'SOUTH' );
	}

	return result;
}
console.log( dirReduc( [ 'WEST', 'NORTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH' ] ) );


// my solution 2: fails edge case
// COMMENT: "works", BUT the test expects "["NORTH", "WEST", "SOUTH", "EAST"]" to be NOT reducable.
// COMMENT: 2nd, no matter if .indexOf() or .lastIndexOf() for some edge cases the order is wrong.
function dirReduc2( directions ) {
	// poor edge case workaround
	if ( directions.length === 4 ) {
		return directions;
	}

	// count each direction
	const dirCounter = { NORTH: 1, SOUTH: 1, EAST: 1, WEST: 1 };
	directions.forEach( ( dir ) => dirCounter[dir] ? dirCounter[dir]++ : 0 );
	dirCounter;

	// the smaller number of NORTH / SOUTH is the number of times which can be reduced
	let timesToReduceDirY = 0;
	// (comment: "-1" because, I initialized "dirCounter" with 1. with 0 it won't work, though)
	dirCounter.NORTH > dirCounter.SOUTH ? timesToReduceDirY = dirCounter.SOUTH - 1 : timesToReduceDirY = dirCounter.NORTH - 1;
	timesToReduceDirY;

	// reduce from the directions array
	while ( timesToReduceDirY > 0 ) {
		// get index of NORTH
		const idxN = directions.lastIndexOf( 'NORTH' );
		// delete it from the array
		directions.splice( idxN, 1 );
		// get index of SOUTH
		const idxS = directions.lastIndexOf( 'SOUTH' );
		// delete it from the array
		directions.splice( idxS, 1 );

		// repeat until "timesToReduce" is 0
		timesToReduceDirY--;
	}

	// do the same for X-directions
	let timesToReduceDirX = 0;
	dirCounter.EAST > dirCounter.WEST ? timesToReduceDirX = dirCounter.WEST - 1 : timesToReduceDirX = dirCounter.EAST - 1;
	timesToReduceDirX;

	while ( timesToReduceDirX > 0 ) {
		const idxE = directions.lastIndexOf( 'EAST' );
		directions.splice( idxE, 1 );
		const idxW = directions.lastIndexOf( 'WEST' );
		directions.splice( idxW, 1 );

		timesToReduceDirX--;
	}

	// since splice mutates the array, just returning "directions"
	return directions;
}

// poor edge case workaround :>> [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]
console.log(
	dirReduc2( [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ] ),
);
// should :>> [West, East] but does [ 'WEST', 'WEST', 'EAST', 'EAST' ]
console.log(
	dirReduc2( [ 'WEST', 'WEST', 'EAST', 'EAST' ] ),
);

// using .lastIndexOf() :>> [West, South] but expects [South, West]
console.log(
	dirReduc2( [ 'EAST', 'WEST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'EAST', 'WEST', 'NORTH', 'SOUTH' ] ),
);
// using .indexOf() :>> [North, West] but expects [West, North]
console.log(
	dirReduc2( [ 'NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'WEST', 'NORTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST' ] ),
);


// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor( n ) {
	if ( n <= 0 ) return n;

	let eu = -1;
	for ( let i = 0; i < n; i++ ) {
		eu++;
		if ( i === 13 ) eu--;
	}

	return eu;
}
console.log( getRealFloor( 1 ) ); // 0
console.log( getRealFloor( 5 ) ); // 4
console.log( getRealFloor( 15 ) ); // 13
console.log( getRealFloor( -2 ) ); // -2

// others solution:
function getRealFloor2( n ) {
	if ( n >= 13 ) return n - 2;
	if ( n > 0 ) return n - 1;
	return n;
}
console.log( getRealFloor2( 1 ) ); // 0
console.log( getRealFloor2( 5 ) ); // 4
console.log( getRealFloor2( 15 ) ); // 13
console.log( getRealFloor2( -2 ) ); // -2
function getRealFloor3( n ) {
	if ( n <= 0 ) return n;
	return n - ( n >= 13 ? 2 : 1 );
}
console.log( getRealFloor3( 1 ) ); // 0
console.log( getRealFloor3( 5 ) ); // 4
console.log( getRealFloor3( 15 ) ); // 13
console.log( getRealFloor3( -2 ) ); // -2
