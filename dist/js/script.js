window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    const swiper = new Swiper('.swiper', {
        loop: true,
        // spaceBetween: 130,
        autoplay: {
            delay: 2000,
        },
        speed: 500,
        slidesPwgGroup: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
    });
});


