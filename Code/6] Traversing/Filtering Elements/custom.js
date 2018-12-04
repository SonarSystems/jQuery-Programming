"use strict";

$( document ).ready( function( )
{
	// Select everything
	//$( "div" ).addClass( "red" );

	// Select the first item
	//$( "div" ).first( ).addClass( "red" );

	// Select the last item
	//$( "div" ).last( ).addClass( "red" );	

	// Select by index
	//$( "div" ).eq( 1 ).addClass( "red" );

	// Filter based on condition
	//$( "div" ).filter( ".hello" ).addClass( "red" );	
	// Filter not based on condition
	$( "div" ).not( ".hello" ).addClass( "red" );
} );











