"use strict";

$( document ).ready( function( )
{
	$( "#EpicButton" ).click( function( )
	{
		var div = $( "div" )[0];

		$.data( div, "epic",
		{
			name: "Frahaan",
			age: 27
		} );

		$( "span:first" ).text( $.data( div, "epic" ).name );
		$( "span:last" ).text( $.data( div, "epic" ).age );
	} );
} );











