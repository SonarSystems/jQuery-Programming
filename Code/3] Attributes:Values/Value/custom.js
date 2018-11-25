"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		var val = $( "#SimpleID" ).val( );
		console.log( val );

		$( "#SimpleID" ).val( "Batman is coming" );
	} );
} );

