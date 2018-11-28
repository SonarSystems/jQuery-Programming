"use strict";

$( document ).ready( function( )
{
	$( "div" ).mouseenter( function( )
	{
		console.log( "Entered div" );
		$( this ).css( "color", "red" );
	} );

	$( "div" ).mouseleave( function( )
	{
		console.log( "Exited div" );
		$( this ).css( "color", "black" );
	} );

	$( "span" ).mouseenter( function( )
	{
		console.log( "Entered span" );
	} );
} );

