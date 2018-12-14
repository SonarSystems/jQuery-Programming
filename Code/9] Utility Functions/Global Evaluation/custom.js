"use strict";

$( document ).ready( function( )
{
	function EpicFunc( )
	{
		$.globalEval( "var epicVar = 27;" );
	}

	EpicFunc( );

	console.log( epicVar );
} );











