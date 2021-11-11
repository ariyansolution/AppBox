(function ($) {
"use strict";

/* JS Index
----------------------------
01. Disable Link 
02. Mobile Menu 
03. owlCarousel Screenshot
04. owlCarousel Client Brand 
05. CounterUp 
06. ScrollUP
07. WOW Active
08. Preloader
09. Disable Right Click
*/

/*===================================
    1. Disable Link 
===================================*/
$("a[href='#']").on("click", function($) {
  $.preventDefault();
});

/*===================================
    2. Mobile Menu 
===================================*/
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

/*===================================
    3. owlCarousel Screenshot 
===================================*/
$('.screenshot').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:4000,
    smartSpeed:1200,
    lazyLoad:true,
    margin:40,
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        576:{
        	items:2
        },
        768:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/*===================================
    4. owlCarousel Client Brand 
===================================*/
$('.client-brand').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
	items:1,
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})

/*===================================
    5. CounterUp 
===================================*/
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/*===================================
    6. ScrollUP
===================================*/
$("#backTop").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 1200);
  return false;
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
    $("#backTop").fadeIn();
  } else {
    $("#backTop").fadeOut();
  }
});

/*===================================
    7. WOW Active
===================================*/
new WOW().init();

/*===================================
    8. PRELOADER 
===================================*/
$(window).on("load", function() {
    $("#loading").fadeOut(500);
});

/*===================================
  Disable Right Click
  -----------------------------------
  If you don't like then delete it.
===================================
$(function() {
  $(this).bind("contextmenu", function(e) {
      e.preventDefault();
  });
}); 

/*===================================
  Disable Inspect
  -----------------------------------
  If you don't like then delete it.
===================================
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }

 function killCopy(e){
    return false;
}

*/
})(jQuery);