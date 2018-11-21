"use strict";

$( document ).ready( function( )
{
	$("div").click(function()
	{
		console.log("Div is clicked");

		console.log( $( this ) );

		$( this ).hide( );
	} );
} );

