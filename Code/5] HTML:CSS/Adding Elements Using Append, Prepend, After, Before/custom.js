"use strict";

$( document ).ready( function( )
{
	$( "#AppendButton" ).click( function( )
	{
		$( "#EpicDiv" ).append( "<b>Append</b>" );
	} );

	$( "#PrependButton" ).click( function( )
	{
		$( "#EpicDiv" ).prepend( "<b>Prepend</b> " );
	} );

	$( "#AfterButton" ).click( function( )
	{
		$( "#EpicDiv" ).after( "<b>After</b>" );
	} );

	$( "#BeforeButton" ).click( function( )
	{
		$( "#EpicDiv" ).before( "<b>Before</b>" );
	} );
} );











