"use strict";

$( document ).ready( function( )
{
	$( "#AddClassButton" ).click( function( )
	{
		$( "div" ).addClass( "blue" );
	} );

	$( "#RemoveClassButton" ).click( function( )
	{
		$( "div" ).removeClass( "blue" );
	} );

	$( "#ToggleClassButton" ).click( function( )
	{
		$( "div" ).toggleClass( "blue" );
	} );
} );


