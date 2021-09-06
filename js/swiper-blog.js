// init blog-slider-phone
let blogSliderPhoneImage = new Swiper('.blog-slider-phone-images', {
    slideToClickedSlide: true,
    slidesPerView: 5,
    watchOverflow: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true
    },
    speed: 800,
});

let blogSliderPhone = document.querySelector('.blog-slider-phone');

blogSliderPhone.addEventListener('mouseenter', function (e) {
    blogSliderPhoneImage.autoplay.stop();
});

blogSliderPhone.addEventListener('mouseleave', function (e) {
    blogSliderPhoneImage.autoplay.start();
});

// init blog-slider-phone-images-bottom
let blogSliderPhoneImageBottom = new Swiper('.blog-slider-phone-images-bottom', {
    slideToClickedSlide: true,
    slidesPerView: 5,
    watchOverflow: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true
    },
    speed: 800,
});

let blogSliderPhoneBottom = document.querySelector('.blog-slider-phone');

blogSliderPhoneBottom.addEventListener('mouseenter', function (e) {
    blogSliderPhoneImageBottom.autoplay.stop();
});

blogSliderPhoneBottom.addEventListener('mouseleave', function (e) {
    blogSliderPhoneImageBottom.autoplay.start();
});
