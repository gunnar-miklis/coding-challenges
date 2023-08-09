// https://www.codewars.com/kata/570957fc20a35bd2df0004f9/train/javascript
function AlanAnnoyingKid( input ) {
	const str = input.replace( /Today I /, '' );

	// identify if Alan "did" or "didn't"
	const alanDid = !/didn't/.test( str );

	// get verb, based on if Alan "did" or "didn't"
	let verb = '';
	if ( alanDid ) {
		verb = str.match( /.+(?<=ed)/ )[0];
	} else {
		verb = str.match( /didn't \w+/ )[0];
	}

	// get object
	const regEx = new RegExp( `(${verb} )|(.)$`, 'g' );
	const object = str.replace( regEx, '' );

	// create output string, based on if Alan "did" or "didn't"
	let output = '';
	if ( alanDid ) {
		output = `didn't ${verb.replace( /ed$/, '' )} at all!`;
	} else {
		output = `did ${verb.replace( /didn't /, '' )} it!`;
	}

	return `I don't think you ${verb} ${object} today, I think you ${output}`;
}
console.log(
	AlanAnnoyingKid( 'Today I played football.' ) );
console.log(
	AlanAnnoyingKid( 'Today I didn\'t play football.' ) );
console.log(
	AlanAnnoyingKid( 'Today I didn\'t attempt to hardcode this Kata.' ) );


// others solution
function AlanAnnoyingKid2( input ) {
	const action = input.slice( 8, -1 );
	const isNegation = input.indexOf( 'didn\'t' ) > 0;
	const verb = isNegation ? action.split( ' ' )[1] : action.match( /\w+(?=ed)/ )[0];

	return `I don't think you ${action} today, I think you ${isNegation ? 'did ' + verb + ' it!' : 'didn\'t ' + verb + ' at all!' }`;
}
console.log(
	AlanAnnoyingKid2( 'Today I played football.' ) );
console.log(
	AlanAnnoyingKid2( 'Today I didn\'t play football.' ) );
console.log(
	AlanAnnoyingKid2( 'Today I didn\'t attempt to hardcode this Kata.' ) );
