"use strict";

$( document ).ready( function( )
{
	console.log( $.isNumeric( 6 ) );
	console.log( $.isNumeric( "Hello" ) );
	console.log( $.isNumeric( -56.835 ) );
	console.log( $.isNumeric( "67" ) );
	console.log( $.isNumeric( "67u" ) );
} );











