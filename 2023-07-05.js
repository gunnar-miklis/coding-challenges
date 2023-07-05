// https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript
function whatTimeIsIt( angle ) {
	const h = Math.floor( angle / 30 );
	const m = Math.floor( ( angle - h * 30 ) * 2 );
	return `${h === 0 ? '12' : h.toString().padStart( 2, '0' )}:${m.toString().padStart( 2, '0' )}`;
}
console.log( whatTimeIsIt( 0 ) );	// :>> 12:00
console.log( whatTimeIsIt( 90 ) );	// :>> 03:00
console.log( whatTimeIsIt( 180 ) );	// :>> 06:00
console.log( whatTimeIsIt( 270 ) );	// :>> 09:00
console.log( whatTimeIsIt( 360 ) );	// :>> 12:00
console.log( whatTimeIsIt( 30 ) );	// :>> 01:00
console.log( whatTimeIsIt( 40 ) );	// :>> 01:20
console.log( whatTimeIsIt( 45 ) );	// :>> 01:30
console.log( whatTimeIsIt( 50 ) );	// :>> 01:40
console.log( whatTimeIsIt( 60 ) );	// :>> 02:00
console.log( whatTimeIsIt( 116.11713484844061 ) );	// :>> 03:52

// better with "modulo"
function whatTimeIsIt2( angle ) {
	const h = Math.floor( angle / 30 );
	const m = Math.floor( angle % 30 ) * 2;
	return `${h === 0 ? '12' : h.toString().padStart( 2, '0' )}:${m.toString().padStart( 2, '0' )}`;
}
console.log( whatTimeIsIt2( 30 ) );	// :>> 01:00
console.log( whatTimeIsIt2( 40 ) );	// :>> 01:20
console.log( whatTimeIsIt2( 45 ) );	// :>> 01:30
console.log( whatTimeIsIt2( 116.11713484844061 ) );	// :>> 03:52
