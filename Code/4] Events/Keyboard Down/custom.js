"use strict";

$( document ).ready( function( )
{
	$( "input" ).keydown( function( event )
	{
		console.log( event.which + " key is pressed" );
	} );
} );

