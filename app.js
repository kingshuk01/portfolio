function myFunction() {
    
    var copyText = document.getElementById("myInput");
   
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
   
    document.execCommand("copy");
  
    
  }