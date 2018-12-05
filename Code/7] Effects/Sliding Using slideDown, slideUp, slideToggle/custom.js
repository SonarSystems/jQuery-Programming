"use strict";

$( document ).ready( function( )
{
	$( "#SlideDownButton" ).click( function( )
	{
		$( "#Panel" ).slideDown( );
	} );

	$( "#SlideUpButton" ).click( function( )
	{
		$( "#Panel" ).slideUp( );
	} );

	$( "#SlideToggleButton" ).click( function( )
	{
		$( "#Panel" ).slideToggle( );
	} );
} );











