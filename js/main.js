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
          $(".header__top").addClass("header__top--animate");
       } else {
          $(".header__top").removeClass("header__top--animate");
       }
    });

   var mixer = mixitup('.portfolio__board');

});