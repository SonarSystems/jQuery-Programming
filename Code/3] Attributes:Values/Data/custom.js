"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		var name = $( "div" ).data( "name" );
		var age = $( "div" ).data( "age" );

		console.log( name );
		console.log( age );

		$( "div" ).data( "name", "BATMAN" );

		name = $( "div" ).data( "name" );

		console.log( name );
		console.log( age );
	} );
} );

