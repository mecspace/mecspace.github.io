
$(function(){
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});


  $(function(){
      $(window).scroll(function (){
          $('.fadein').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
              }
          });
      });
  });
