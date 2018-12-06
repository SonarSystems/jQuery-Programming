"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		$( "#AJAXDiv" ).load( "textfile.txt" );
	} );
} );











