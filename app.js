function myFunction() {
    
    var copyText = document.getElementById("myInput");
   
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
   
    document.execCommand("copy");
  
    
  }

  function navdown() {
    var x = document.getElementById("nav-links");
    x.classList.toggle('active')
  }