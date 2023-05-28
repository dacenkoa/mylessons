$(document).ready(function(){
    $('.top__slider-img, .slaid__inner').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
        autoplaySpeed:1500,
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});