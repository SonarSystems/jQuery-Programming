"use strict";

$( document ).ready( function( )
{
	var object1 =
	{
	  apple: 0,
	  banana: { weight: 52, price: 100 },
	  cherry: 97
	};

	var object2 =
	{
	  banana: { price: 200 },
	  taste: 100
	};

	console.log( object1 );
	console.log( object2 );

	$.extend( object1, object2 );

	console.log( object1 );
	console.log( object2 );
} );











