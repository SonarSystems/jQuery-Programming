"use strict";

$( document ).ready( function( )
{
	$( "div" ).hover( function( )
	{
		console.log( "Entered div" );
		$( this ).css( "color", "yellow" );	
	},
	function( )
	{
		console.log( "Exited div" );
		$( this ).css( "color", "black" );
	} );

	/*$( "div" ).mouseenter( function( )
	{
		console.log( "Entered div" );
		$( this ).css( "color", "red" );
	} );

	$( "div" ).mouseleave( function( )
	{
		console.log( "Exited div" );
		$( this ).css( "color", "black" );
	} );*/
} );

