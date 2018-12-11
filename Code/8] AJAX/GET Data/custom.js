"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		$.get( "favourites.php", function( data, status )
		{
			console.log( data );

			$( "div" ).html( data );
			console.log( status );
		} );
	} );
} );











