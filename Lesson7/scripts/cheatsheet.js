
// To use $(document).ready() and ensure the page is ready for your jQuery, you'll need to pass it an anonymous function (a callback) to execute when the document is ready


$(document).ready(function() {

	$("#hiding").css("font-size", "30px");

	$("#hiding").hide();

   // $("#sliding").hide();

	$("p").css( {
		"background-color": "White",
		"display": "block",
		"padding": "25px"
	});

	$("div").css("color", "DarkBlue");

	$("button").css( {
		"background-color": "Bisque", 
		"font-size": "20px", 
		"margin-top": "10px",
		"margin-bottom": "10px",

		});

	$("#fading").css( {
		"font-size": "20px", 
		"color": "red"
		});

	$("#sliding").css( {
		"right": "-2000px",
		"position": "relative",
		// "overflow": "hidden"

  	});

	$("#animate").css ( {
		"width": "300px",
		"height": "100px",
		"padding": "10px",
		"background-color": "Yellow",
		"display": "block"

	});


	// To show or hide an element on the page with jQuery, select it and call the show() or hide() function on your selection

	

});


$( document).click(function() {

			$("h1").css("color", "Crimson");
			
			$("h2").css("color", "DarkMagenta") ;
			
			$("p").css( {
				"color": "DarkBlue", 
				"font-size": "20px", 
				"border": "yellow",
				"background-color": "MistyRose",
			});
			
			$("button").css( {
				"background-color": "LightGrey", 
				"font-size": "24px", 
				"display": "block"
			});
			
			$("#hiding").show();



	


	
// To show or hide an element on the page using a fading animation, select it and call the fadeIn() or fadeOut() function on your selection


// You can give the fadeOut() and fadeIn() functions a time in milliseconds as an argument over which they should fade in and out

	$("#fading").fadeOut(4000); // Fade out over 4 seconds
	// $("#section-one").fadeIn(4000);
	//Fade in over 4 seconds

// Another way of hiding and showing items on the page is by using the slideUp() or slideDown() methods

	// $("#section-one").slideUp(1000);
	//Fade out over 1 second
	// $("#sliding").slideDown(4000);
	//Fade in over 4 second

// Use jQuery's animate() method to animate most CSS properties that are numeric

	$("#animate").animate( {
		opacity: 0.5,
		width: "70%"
	} , 2000 );

	$("#sliding").animate( {
		marginLeft: '-=2000px'
	} , 3000 );


// To monitor an HTML element for the click event and then fire a callback function with some code:
	// $("ul li a").click(
	// 	function(){
	// 		alert('imclicked!');
	// 	}
	// );

});