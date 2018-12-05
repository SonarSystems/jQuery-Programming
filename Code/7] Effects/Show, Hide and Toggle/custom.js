"use strict";

$( document ).ready( function( )
{
	$( "#HideButton" ).click( function( )
	{
		$( "div" ).hide( );
	} );

	$( "#ShowButton" ).click( function( )
	{
		$( "div" ).show( );
	} );

	$( "#ToggleButton" ).click( function( )
	{
		$( "div" ).toggle( );
	} );

	$( "#SlowButton" ).click( function( )
	{
		$( "div" ).toggle( "slow" );
	} );

	$( "#FastButton" ).click( function( )
	{
		$( "div" ).toggle( "fast" );
	} );

	$( "#CustomSpeedButton" ).click( function( )
	{
		var time = parseInt( $( "#Time" ).val( ) );
		
		$( "div" ).toggle( time, function( )
		{
			console.log( "Effect finished" );
		} );
	} );
} );











