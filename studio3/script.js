(function(){
"use strict";



AOS.init();
document.addEventListener("DOMContentLoaded", function(){
   setTimeout(function() {AOS.refresh(); }, 500);
   });

   var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });

})();