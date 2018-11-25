"use strict";

$( document ).ready( function( )
{
	var titleVar = $( "div" ).attr( "title" );

	console.log( titleVar );

	$( "#EpicButton" ).click( function()
	{
		$( "div" ).attr( "title", "Epic Div" );
	} );
} );

