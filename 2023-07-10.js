// https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/javascript
// hilarious, fun and enjoyable kata +1
//	* Bonus in the description...
//	* OFF-TOPIC: Some music to get in the mood for this kata: "Street Fighter 2 - selection theme" (on YT)
//	* i listened to it on repeat x60 times (~1:30h) 🤣🤣🤣 🤟🤟🤟

const fighters = [
	[ 'Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega' ],
	[ 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison' ],
];


// my solution
function streetFighterSelection( fighters, position, moves ) {
	const selections = [];
	moves.forEach( ( move ) => {
		if ( move === 'up' && position[0] === 1 ) position[0] -= 1; 		// go up
		else if ( move === 'down' && position[0] === 0 ) position[0] += 1;	// go down
		else if ( move === 'right' && position[1] === 5 ) position[1] = 0;	// go leftmost
		else if ( move === 'left' && position[1] === 0 ) position[1] = 5;	// go rightmost
		else if ( move === 'left' ) position[1] -= 1;						// go left
		else if ( move === 'right' ) position[1] += 1;						// go right

		selections.push( fighters[position[0]][position[1]] ); 				// add selction
	} );
	return selections;
}
console.log( // :>> ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
	streetFighterSelection( fighters, [ 0, 0 ], [ 'up', 'left', 'right', 'left', 'left' ] ),
);
console.log( // :>> ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
	streetFighterSelection( fighters, [ 0, 0 ], [ 'right', 'down', 'left', 'left', 'left', 'left', 'right' ] ),
);


// others solutions... sooooo cleeever!!! :O
function streetFighterSelection2( fighters, position, moves ) {
	let [ x, y ] = position;					// deconstruct position: x, y
	const controls = {
		'up': () => y = 0,						// go up (row 0)
		'down': () => y = 1,					// go down (row 1)
		'left': () => x === 0 ? x = 5 : x--,	// go rightmost or left
		'right': () => x === 5 ? x = 0 : x++,	// go leftmost or right
	};
	return moves.map( ( move ) => {				// loop moves, and return selection
		controls[move]();						// call control functions
		return fighters[y][x];					// return selection
	} );
}
console.log( // :>> ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
	streetFighterSelection2( fighters, [ 0, 0 ], [ 'up', 'left', 'right', 'left', 'left' ] ),
);
console.log( // :>> ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
	streetFighterSelection2( fighters, [ 0, 0 ], [ 'right', 'down', 'left', 'left', 'left', 'left', 'right' ] ),
);
