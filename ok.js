function hareket(e) {
    /*var x = e.clientX;
     var y = e.clientY;     
     
     var a= Math.atan2(x,y) * 180/Math.PI;
     a +=90;
     var krdnt = "KOORDINATLAR: (" + x + "," + y + ")";
     document.getElementById("a").style.left = x + "px";
     document.getElementById("a").style.top = y + "px";
     document.getElementById("ok").style.transform = "rotate(" + a + "deg)"; */

    //var gorsel = document.getElementById("ok");
    //var gorselCerceve = gorsel.getBoundingClientRect();
    //var merkeznokta = window.getComputedStyle(gorsel).transformOrigin;
    //var merkez = merkeznokta.split(" ");
    
    //  function noktadondur(e) {

    //         var x = e.clientX;
    //         var y = e.clientY;

    // var merkezY = gorselCerceve.top + parseInt(merkez[1]) - window.pageYOffset;
    // var merkezX = gorselCerceve.left + parent(merkez[0]) - window.pageXOffset;
    // var yaricap = Math.atan2(x - merkezY, y - merkezY);
    // var derece  = (yaricap*(180))
    //  }



   }
   
   document.addEventListener("DOMContentLoaded", function() { //tüm sayfa yüklendikten sonra çalışır.
       var pointer = document.getElementById("ok"),
       pointerBox = pointer.getBoundingClientRect(),  //resmin boyutu ve konumu bilgisini alır
       centerPoint = window.getComputedStyle(pointer).transformOrigin, //resmin döndürüldüğü noktasının penceredeki değeri
       centers = centerPoint.split(" ");
   
       function rotatePointer(e) {
                     mouseX = e.clientX,
                     mouseY = e.clientY;
              
    var centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset,
    centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset,
    radians = Math.atan2(mouseX - centerX, mouseY - centerY),
    degrees = (radians * (180 / Math.PI) * -1) + 90; 
    pointer.style.transform = 'rotate('+degrees+'deg)';
   }
   
   window.addEventListener('mousemove', rotatePointer);	
   
   })
   