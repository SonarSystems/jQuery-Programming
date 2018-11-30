"use strict";

$( document ).ready( function( )
{
	var num = 0;

	$( "textarea" ).scroll( function( )
	{
		//console.log( "Scrolling yay" );
		num++;

		console.log( num ); 
	} );
} );

