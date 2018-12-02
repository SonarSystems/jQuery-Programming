"use strict";

$( document ).ready( function( )
{
	var width = $( "#RedBox" ).width( );
	var height = $( "#RedBox" ).height( );

	var innerWidth = $( "#RedBox" ).innerWidth( );
	var innerHeight = $( "#RedBox" ).innerHeight( );

	var outerWidth = $( "#RedBox" ).outerWidth( );
	var outerHeight = $( "#RedBox" ).outerHeight( );

	var outerWidthWithMargin = $( "#RedBox" ).outerWidth( true );
	var outerHeightWithMargin = $( "#RedBox" ).outerHeight( true );

	console.log( "Width : " + width );
	console.log( "Height : " + height );

	console.log( "Inner Width : " + innerWidth );
	console.log( "Inner Height : " + innerHeight );

	console.log( "Outer Width : " + outerWidth );
	console.log( "Outer Height : " + outerHeight );

	console.log( "Outer Width With Margin : " + outerWidthWithMargin );
	console.log( "Outer Height With Margin : " + outerHeightWithMargin );

	$( "#ClickMe" ).click( function( )
	{
		$( "#RedBox" ).width( 400 );
	} );
} );











