// INITIAL LOAD ANIMATIONS
$(document).ready(function(){
  $('header').animate({width:'100%'});
  $('header h1').delay(500).fadeIn(1000);
  $('section').fadeIn(1200);
  $('.main-nav').animate({width:'250px'});
});

// NAVIGATION
$(document).ready(function(){
  $('.menu-item').click(function(){
    $(this).next().slideToggle();
    $('.submenu').not($(this).next()).slideUp();
  });

  $('.hamburger-trigger').click(function(){
    $('.hamburger-nav').toggleClass('hamburger-nav-width');
    $('.close-hamburger').addClass('shadow');
    $('.close-hamburger .fa, .close-hamburger p').fadeToggle(200);
    $('.hamburger-nav .menu-item').fadeToggle(200);
  });

  $('.close-hamburger, .submenu li a, section').click(function(){
    $('.hamburger-nav').removeClass('hamburger-nav-width');
    $(this).removeClass('shadow');
    $('.close-hamburger .fa, .close-hamburger p').fadeOut();
    $('.hamburger-nav .menu-item, .hamburger-nav .submenu').fadeOut(200);
  });

});

// SMOOTH SCROLLING
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top -50
        }, 1000);
    }
  });
});

// CLICK LOGO > BACK TO TOP OF PAGE/CLOSE MENU TABS
$(document).ready(function(){
  $('.logo').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);

      $('.submenu').slideUp();
  });
});
