// https:// www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp( a, b ) {
	if ( !a || !b ) return false;
	const copyA = [ ...a ];
	const copyB = [ ...b ];
	copyA.sort( ( a, b ) => a - b );
	copyB.sort( ( a, b ) => a - b );
	return copyB.every( ( el, i ) => el === copyA[i]**2 );
}
console.log( comp( // :>> true
	[ 121, 144, 19, 161, 19, 144, 19, 11 ],
	[ 11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19 ] ),
);
console.log( comp( // :>> false
	[ 2, 2, 3 ],
	[ 4, 9, 9 ] ),
);
console.log( comp( // :>> true
	[ 6, 0, 2, 8, 3, 4, 7, 1, 2, 0, 10, 7, 3, 2, 5, 8, 2 ],
	[ 9, 4, 0, 36, 4, 0, 16, 64, 49, 49, 25, 100, 4, 1, 64, 4, 9 ] ),
);


// shuffle an copyAy
function shuffle( arr ) {
	return arr.sort( ( a, b ) => Math.floor( Math.random() * a ) - b );
}
console.log( shuffle( [ 1, 2, 3, 4, 5, 6, 7 ] ) );
