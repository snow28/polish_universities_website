$(document).ready(function(){
    $('.open-programs-js ').on('click', function(){
        $('.menu__secondary').toggleClass('opened');
    });
    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
    });

    $('.open-menu-js').on('click', function(){
        if($('.menu__secondary').hasClass('opened')){
            $('.menu__secondary').toggleClass('opened');
        }
        $('.menu__navigation').toggleClass('opened');
    });

});