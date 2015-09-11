jQuery(document).ready(function($) {

//no joy in IE

if ( $(window).width() < 1000)  {

  $(document).ready( function() {
  $(".language").css("display", "none") ; 
  });


 $(window).scroll( function() {
  $(".language").css("display", "block") ;
  var body = $("body"); 
  var top = body.scrollTop();
	if(top>100){
	$(".language").css("bottom", "0" );
	} else if(top<=100){
	$(".language").css("bottom", "-100px" );
       }
 });

} /* small screens only */


  $("div.oben").click( function(e) {
	e.preventDefault();
 	var body = $("body");
	var top = body.scrollTop();
    	 if(top!=0) {
		body.animate({scrollTop:0}, '700');
	}
   });


  });
