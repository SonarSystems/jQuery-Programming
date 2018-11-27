"use strict";

$( document ).ready( function( )
{
	$( "div" ).mouseenter( function( )
	{
		console.log( "Entered div" );
	} );

	$( "span" ).mouseenter( function( )
	{
		console.log( "Entered span" );
	} );
} );

