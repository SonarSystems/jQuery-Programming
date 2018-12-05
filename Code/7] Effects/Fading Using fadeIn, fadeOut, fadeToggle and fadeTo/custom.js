"use strict";

$( document ).ready( function( )
{
	$( "#FadeInButton" ).click( function( )
	{
		$( "div" ).fadeIn( );
	} );

	$( "#FadeOutButton" ).click( function( )
	{
		$( "div" ).fadeOut( );
	} );

	$( "#FadeToggleButton" ).click( function( )
	{
		$( "div" ).fadeToggle( );
	} );

	$( "#FadeToButton" ).click( function( )
	{
		// values range between 0 and 1 for the opacity
		$( "div" ).fadeTo( "slow", 0.75 );
	} );
} );











