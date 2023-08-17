// https://www.codewars.com/kata/64d9f8b2dd14d200247b8184/train/javascript
// FIXME: kinda works... but won't pass the test "should handle lots of names" neither "Should work for random names"
//	* the indexOf logic is not correct.
function generateChatRoomNames( users ) {
	users = users
		.sort( ( a, b ) => a.localeCompare( b ) )
		.map( ( user ) => user
			.split( ' ' )
			.map( ( name ) => name[0].toUpperCase() + name.slice( 1 ).toLowerCase() )
			.join( ' ' ),
		);

	const firstNames = users.map( ( user ) => user.split( ' ' )[0] );
	const lastNameInitials = users.map( ( user ) => user.split( ' ' )[1][0] );

	return users
		.map( ( user, i ) => {
			const [ firstName, lastName ] = user.split( ' ' );

			const isEqualFirstName = firstNames.indexOf( firstName ) !== firstNames.lastIndexOf( firstName );
			const isEqualLastNameIntital = lastNameInitials[firstNames.indexOf( firstName )] === lastNameInitials[firstNames.lastIndexOf( firstName )];

			if ( isEqualFirstName && isEqualLastNameIntital ) {
				return `${firstName} ${lastName}`;
			} else if ( isEqualFirstName ) {
				return `${firstName} ${lastName[0]}`;
			} else {
				return firstName;
			}
		} );
}

console.log( generateChatRoomNames( [
	'JOE Bloggs',
	'John Smith',
] ) ); // :>> ["Joe", "John"]
console.log( generateChatRoomNames( [
	'Joe Bloggs',
	'John Smith',
	'Jane Doe',
] ) ); // :>> ["Jane", "Joe", "John"]
console.log( generateChatRoomNames( [
	'Joe Bloggs',
	'John Smith',
	'Jane Doe',
	'Jane Bloggs',
] ) ); // :>> ["Jane B", "Jane D", "Joe", "John"]
console.log( generateChatRoomNames( [
	'Joe Bloggs',
	'John Smith',
	'Jane Doe',
	'Jane Bloggs',
	'John Scott',
] ) ); // :>> ["Jane B", "Jane D", "Joe", "John Scott", "John Smith"]
// FIXME: see.. there are 2x Jane with B... means, it should display the fullnames.
console.log( generateChatRoomNames( [
	'Joe Bloggs',
	'Jane Smith',
	'John Smith',
	'Jane Doe',
	'Jane Bright',
	'Jane Bloggs',
	'John Scott',
] ) ); // :>> ["Jane B", "Jane D", "Joe", "John Scott", "John Smith"]
