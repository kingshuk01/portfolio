

  var tl = gsap.timeline({defaults : {duration:0.6}})

  tl.from('.about-text', {opacity : 0,  y : -50, stagger :0.6})
  .from('.about-pic',{opacity : 0, y : 50}, "-=0.4")
  

  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger : '.tech-stack'
    }
  })

  tl2.from('.upper img',{x : -2000, stagger :0.15}, "-=0.4")
  .from('.lower img',{x : -2000, stagger :0.15}, "-=0.4")





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
