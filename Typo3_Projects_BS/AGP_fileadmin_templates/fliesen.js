 $(document).ready(function(){
   $('#plus').click(function( ){    
     $('#fliesen').fadeToggle("fast");
     $('#plusminus').toggleClass("shift");
     $('#slimpanel').toggleClass("shiftslim");
     $('#content').toggleClass("bgtoggle"); 
   });
});  

  var bgs = [
            "url('fileadmin/img-fliesen/AGP_Fliesen_Sub0.jpg')",
            "url('fileadmin/img-fliesen/AGP_Fliesen_Sub1.jpg')",
            "url('fileadmin/img-fliesen/AGP_Fliesen_Sub2.jpg')",
            "url('fileadmin/img-fliesen/AGP_Fliesen_Sub3.jpg')",
            "url('fileadmin/img-fliesen/AGP_Fliesen_Sub4.jpg')",          
            "url('fileadmin/img-fliesen/AGP_Fliesen_Sub5.jpg')",
            ];
  
  
  $(document).ready(function(){
   $('.select_item').click(function( ){
     var ditem = $(this).attr('data-item');
         
     $('.content_item').hide("slow").filter( '[data-item="'+ditem+'"]' ).show("slow");

     var bgimage;
     
     switch( ditem ) {
       case "p1":
         bgimage = bgs[0];
         break;
       case "p2":
         bgimage = bgs[1];
         break;
       case "p3":
         bgimage = bgs[2];
         break;
       case "p4":
         bgimage = bgs[3];
         break;
       case "p5":
         bgimage = bgs[4];
         break;
       case "p6":
         bgimage = bgs[5];
         break;
     }
     
       $('#content').css({"background-image" : bgimage});
        return false;
    });
});
