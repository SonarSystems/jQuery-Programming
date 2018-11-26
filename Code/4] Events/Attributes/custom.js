"use strict";

$( document ).ready( function( )
{
	$( "p" ).bind( "click", function( event )
	{
		console.log( event );
		console.log( event.pageX + " : " + event.pageY );
	} );
} );

