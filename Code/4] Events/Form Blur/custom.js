"use strict";

$( document ).ready( function( )
{
	$( "*" ).focus( function( )
	{
		console.log( "Focused on me" );

	} );

	$( "*" ).blur( function( )
	{
		console.log( "Please don't leave me!!!" );
	} );
} );

