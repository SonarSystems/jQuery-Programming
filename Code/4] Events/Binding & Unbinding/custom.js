"use strict";

$( document ).ready( function( )
{
	function AfterBind( event )
	{
		console.log( "After Bind Function" );
	}

	$( "p" ).bind( "click", function( event )
	{
		console.log( "Before Bind" );
	} );

	$( "#BindButton" ).click( function( )
	{
		$( "p" ).unbind( "click" );

		/*$( "p" ).bind( "click", function( event )
		{
			console.log( "After Bind" );
		} );*/

		$( "p" ).bind( "click", function( event )
		{
			AfterBind( event );
		} );
	} );
} );

