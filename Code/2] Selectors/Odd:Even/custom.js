"use strict";

$( document ).ready( function( )
{
	$( ".epicClass:even" ).click(function()
	{
		console.log( "Awesome click 2.0" );
	} );

	$( "tr:even" ).css( "background-color", "red" );
} );

