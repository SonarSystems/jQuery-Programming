"use strict";

$( document ).ready( function( )
{
	$( "#DequeueButton" ).click( function( )
	{
		var div = $( "div" );
		div.animate({height: 300}, "slow");
		div.animate({width: 300}, "slow");
		div.queue(function()
		{
			div.css("background-color", "red");
			div.dequeue();
		});
		div.animate({height: 100}, "slow");
		div.animate({width: 100}, "slow");
	} );
} );











