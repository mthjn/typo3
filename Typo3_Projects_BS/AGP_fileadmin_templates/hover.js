$(".dropdown-menu li").hover(
 function(){
   $( this ).toggleClass("activehover");
   $( this ).prev().find( 'a' ).toggleClass("noborder");
 }
);

//menu mattierung
//$( ".dropdown-menu li.active" ).prev().find( 'a' ).css( "border-bottom", "0px" );

// uppermenu active class
var url = window.location.href;
var lastchar = url.substring(url.length-1,url.length);

if ( lastchar == "/" ) {
var trailing = url.substring(0, url.length-1);
} else {
var trailing = url;
}

var parse = trailing.lastIndexOf("/")+1;
var urlstring = trailing.substr( parse );
 $(".uppermenu a").each(
  function(){
   if( $( this ).attr( "href" ) == urlstring ){
   $( this ).addClass(" active");
  }
 });

 $(".copyright a").each(
  function(){
   if( $( this ).attr( "href" ) == urlstring ){
   $( this ).addClass(" active");
  }
 });

