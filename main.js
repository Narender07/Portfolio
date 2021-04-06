// ======== Custom Cursor ==========

$(document).ready(function(){
    var cursor = $('.cursor');
   
    $(window).mousemove(function(e) {
           cursor.css({
               top: e.clientY - cursor.height() / 2,
               left: e.clientX - cursor.width() / 2
           });
       });
   });
// ============= Mobile Menu ================

$('.mobile-menu').click(function(){
    $('nav ul').toggleClass('show');
});


 // ================ WOW JS ===========

 AOS.init({
  offset: 150,
  duration: 700,
  once: true
 });


// ============ skrollr ==============
var s = skrollr.init();



//  ============ Go to top btn ============

$(window).scroll(function(){
    if($(this).scrollTop() >= 500){
        $('.fixed-btn').addClass('visible');
    } else{
        $('.fixed-btn').removeClass('visible');
    }
  });


  $('.bu').click(function(){
      $('body').toggleClass('dark-mode');
  })