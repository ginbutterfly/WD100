
$("button").hide();

$(document).ready(function(){

	$("#treatment1").click(function(){
      $(".dropbtn1").slideToggle("slow");
   });

   $("#treatment2").click(function(){
   	$(".dropbtn2").slideToggle("slow");
   });

	$("#treatment3").click(function(){
   	$(".dropbtn3").slideToggle("slow");
   });

});


	
 
// $(document).ready(function(){

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 0) {
//         // apply effects and animations
   

// 	$(".dropbtn").animate({
// 		right: '250px',
//       height: '+=100px',
//       width: '+=100px'

//     });
	
// 	 }
// });
	
// });