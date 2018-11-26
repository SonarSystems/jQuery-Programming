"use strict";

$( document ).ready( function( )
{
	$( "p" ).click( function( )
	{
		var result = $( "p" ).hasClass( "epicClass" );

		console.log( result );
	} );

	$( "#EpicID" ).click( function( )
	{
		var result = $( "#EpicID" ).hasClass( "epicClass" );

		console.log( result );
	} );

	$( "#RemoveClass" ).click( function( )
	{
		$( "p" ).removeClass(  );
	} );

	$( "#ToggleClass" ).click( function( )
	{
		$( "p" ).toggleClass( "epicClass" );
	} );

	$( "#AddClass" ).click( function( )
	{
		$( "p" ).addClass( "epicClass" );
	} );
} );

