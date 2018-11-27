"use strict";

$( document ).ready( function( )
{
	$( "div" ).click( function( )
	{
		console.log( "Single click" );
	} );

	$( "div" ).dblclick( function( )
	{
		console.log( "Double click" );
	} );
} );

