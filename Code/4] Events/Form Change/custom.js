"use strict";

$( document ).ready( function( )
{
	$( "form" ).submit( function( )
	{
		alert( "Form has been submitted" );
	} );

	$( "input" ).change( function( )
	{
		console.log( $( this ).val( ) );
		console.log( "It has now changed" );
	} );
} );

