"use strict";

$( document ).ready( function( )
{
	var titleVar = $( "div" ).attr( "title" );

	console.log( titleVar );

	$( "#EpicButton" ).click( function( )
	{
		$( "div" ).removeAttr( "title" );
	} );
} );

