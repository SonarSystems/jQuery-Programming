"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		console.log( $( "div" ).text( ) );

		$( "div" ).text( "Awesome stuff" );
	} );
} );

