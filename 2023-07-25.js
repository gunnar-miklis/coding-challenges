// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript


function domainName( url ) {
	return url
		.replace( /.+(?<=(\/\/)|(www\.))/, '' )
		.replace( /\..+/, '' );
}

console.log( domainName( 'http://google.com' ) );
console.log( domainName( 'http://google.co.jp' ) );
console.log( domainName( 'www.xakep.ru' ) );
console.log( domainName( 'https://youtube.com' ) );
console.log( domainName( 'http://github.com/carbonfive/raygun' ) );
console.log( domainName( 'http://www.zombie-bites.com' ) );

// others solution
function domainName2( url ) {
	return url.match( /(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i )[1];
}
console.log( domainName2( 'http://google.com' ) );
console.log( domainName2( 'http://google.co.jp' ) );
console.log( domainName2( 'www.xakep.ru' ) );
console.log( domainName2( 'https://youtube.com' ) );
console.log( domainName2( 'http://github.com/carbonfive/raygun' ) );
console.log( domainName2( 'http://www.zombie-bites.com' ) );

// others solution
function domainName3( url ) {
	return url.replace( /.+\/\/|www.|\..+/g, '' );
}
console.log( domainName3( 'http://google.com' ) );
console.log( domainName3( 'http://google.co.jp' ) );
console.log( domainName3( 'www.xakep.ru' ) );
console.log( domainName3( 'https://youtube.com' ) );
console.log( domainName3( 'http://github.com/carbonfive/raygun' ) );
console.log( domainName3( 'http://www.zombie-bites.com' ) );



// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
function smash( words ) {
	return words.join( ' ' );
}
console.log( smash( [ 'hello', 'world', 'this', 'is', 'great' ] ) );



// https://www.codewars.com/kata/56efc695740d30f963000557/javascript
/* eslint-disable no-extend-native */
String.prototype.toAlternatingCase = function() {
	const str = this;
	return Object.values( str ).map( ( val ) => val === val.toLowerCase()? val = val.toUpperCase() : val = val.toLowerCase() ).join( '' );
};
console.log( 'HELLO world'.toAlternatingCase() );

// others solutions
String.prototype.toAlternatingCase2 = function() {
	return [ ...this ].map( ( char ) => char === char.toLowerCase()? char = char.toUpperCase() : char = char.toLowerCase() ).join( '' );
};
console.log( 'HELLO world'.toAlternatingCase2() );

String.prototype.toAlternatingCase3 = function() {
	return this.split( '' ).map( ( char ) => char === char.toLowerCase()? char = char.toUpperCase() : char = char.toLowerCase() ).join( '' );
};
console.log( 'HELLO world'.toAlternatingCase3() );
