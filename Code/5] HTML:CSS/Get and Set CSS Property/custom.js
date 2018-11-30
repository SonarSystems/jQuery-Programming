"use strict";

$( document ).ready( function( )
{
	$( "div" ).click( function( )
	{
		console.log( $( this ).css( "color" ) );
		$( this ).css( "color", "#567FFA" );
	} );
} );


