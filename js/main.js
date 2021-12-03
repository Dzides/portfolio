$(function () {

    $('.header__burger').on('click', function () {
       $('.header__burger').toggleClass('header__burger--active');
       $('.header__menu').toggleClass('header__menu--active');
       $('body').toggleClass('lock');

    });

    $('.header__link').on('click', function () {
       $('.header__burger').removeClass('header__burger--active');
       $('.header__menu').removeClass('header__menu--active');
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