"use strict";

$( document ).ready( function( )
{
	$( "#Red" ).click( function( )
	{
		console.log( "Red Button clicked" );
	} );

	$( "#Yellow" ).click( function( event )
	{
		console.log( "Yellow Button clicked" );

		event.stopPropagation( );
	} );
} );

