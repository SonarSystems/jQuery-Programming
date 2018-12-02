"use strict";

$( document ).ready( function( )
{
	$( "#RemoveButton" ).click( function( )
	{
		$( "div" ).remove( );
	} );

	$( "#EmptyButton" ).click( function( )
	{
		$( "div" ).empty( );
	} );

	$( "#RemoveFilterButton" ).click( function( )
	{
		$( "div" ).remove( ".epicDiv" );
	} );
} );











