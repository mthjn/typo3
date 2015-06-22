function toggle_visibility(id) {
       var e = document.getElementById(id);

       if(e.style.visibility == 'visible')
          e.style.visibility = 'hidden';
       else
          e.style.visibility= 'visible';

document.getElementById("plusminus").style.left = "-30px";
    } 
/*
position: relative;
left: -30px;

onclick="document.getElementById('plusminus').style.left = '-30px'"
width="60px"

window.location.hash='back';

*/    
