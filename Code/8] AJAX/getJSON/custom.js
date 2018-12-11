"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		$.getJSON( "favourites.json", function( result )
		{
			console.log( result );

			$.each( result, function( index, value )
			{
				console.log( index + " - " + value );
			} );
		} );
	} );
} );











