"use strict";

$( document ).ready( function( )
{
	var titleVar = $( "div" ).attr( "title" );

	$( "#EpicButton" ).click( function()
	{
		$( "div" ).attr( "title", function( i, originalValue )
		{
			return i + 100;
		} );
	} );
} );

