$(document).ready(function () {
    $('.top__slick-slader').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 500,
    });

    $('.reviews__inner-slader').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });




    $('.menu-btn').on('click', function () {
        console.log("ти мене нажала");
        $('.menu__list').toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu-btn').toggleClass('active');
    });

});
