"use strict";

$( document ).ready( function( )
{
	var epicArray = [34, 27, "Batman", "Pizza"];

	console.log( $.inArray( 34, epicArray ) );
	console.log( $.inArray( "Batman", epicArray ) );
	console.log( $.inArray( "add", epicArray ) );
	console.log( $.inArray( "Pizza", epicArray, 2 ) );
} );











