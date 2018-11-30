"use strict";

$( document ).ready( function( )
{
	/*$( "textarea" ).click( function( )
	{
		console.log( "Text area is clicked" );
	} );

	$( "textarea" ).mouseenter( function( )
	{
		$( this ).css( "background-color", "red" );
	} );

	$( "textarea" ).mouseleave( function( )
	{
		$( this ).css( "background-color", "white" );
	} );*/

	$( "textarea" ).on(
	{
		click: function( )
		{
			console.log( "Epic multi event" );
		},

		mouseenter: function( )
		{
			$( this ).css( "background-color", "yellow" );
		},

		mouseleave: function( )
		{
			$( this ).css( "background-color", "white" );
		}
	} );
} );


