$(document).ready(function () {
    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });
});





$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});