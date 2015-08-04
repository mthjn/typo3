$(document).ready(function(){
$('.select_item').click(function( ){
    var ditem = $(this).attr('data-item');
    $('.content_item').hide("slow").filter( '[data-item="'+ditem+'"]' ).show("slow");
      return false;
  });
});
/*
file3 = http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
 file3.external = 1
 */
