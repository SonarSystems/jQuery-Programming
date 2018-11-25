"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		console.log( $( "div" ).html( ) );

		$( "div" ).html( "<b>You are a bold one.</b>" );
	} );
} );

