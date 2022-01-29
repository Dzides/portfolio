$(function () {

   $('.burger').on('click', function () {
      $('.burger').toggleClass('burger--active');
      $('.menu').toggleClass('menu--active');
      $('body').toggleClass('lock');

   });

   $('.menu__link').on('click', function () {
      $('.burger').removeClass('burger--active');
      $('.menu').removeClass('menu--active');
      $('body').removeClass('lock');

   });

   $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
         $(".header__wrapper").addClass("header__wrapper--animate");
         $(".return").addClass("return__animate");
         $(".header__nav").addClass("header__nav--animate");
      } else {
         $(".header__wrapper").removeClass("header__wrapper--animate");
         $(".return").removeClass("return__animate");
         $(".header__nav").removeClass("header__nav--animate");
      }
   });

   $(".menu__link, .logo, .header__link, .return").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   var mixer = mixitup('.portfolio__board');

});