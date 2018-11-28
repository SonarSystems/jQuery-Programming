"use strict";

$( document ).ready( function( )
{
	$( "div" ).click( function( )
	{
		console.log( "Clicked Div" );
	} );

	$( "div" ).mousedown( function( )
	{
		console.log( "Mouse Down" );
	} );
} );

