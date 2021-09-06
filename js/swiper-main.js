// init Swiper slider
let swiperOptions = {
    slideToClickedSlide: true,
    loop: true,
    slidesPerView: 4,
    autoplay: {
        delay: 1,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 7000,
    mousewheel: true,
    direction: 'vertical',
    spaceBetween: 10
};

let leftSlider = new Swiper('.gallery-items-photo-left', swiperOptions);

let rightSlider = new Swiper('.gallery-items-photo-right', swiperOptions);

let sliderBlock = document.querySelector('.gallery-items-photo');
let pauseGallery = document.querySelector('.pause-gallery');
let playGallery = document.querySelector('.play-gallery');


let leftSwiper = document.querySelector('.gallery-items-photo-left .gallery-items-photo-left-wrap');
let rightSwiper = document.querySelector('.gallery-items-photo-right .gallery-items-photo-right-wrap');

let transLeft = leftSwiper.style.transform;
let transRight = leftSwiper.style.transform;

sliderBlock.addEventListener('mouseenter', function () {

    leftSwiper.style.cssText = `transition-duration: 0ms;`;
    rightSwiper.style.cssText = `transition-duration: 0ms;`;

    leftSlider.autoplay.stop();
    rightSlider.autoplay.stop();
});

pauseGallery.addEventListener('click', function () {
    leftSwiper.style.cssText = `transition-duration: 0ms;`;
    rightSwiper.style.cssText = `transition-duration: 0ms;`;

    leftSlider.autoplay.stop();
    rightSlider.autoplay.stop();
});

sliderBlock.addEventListener('mouseleave', function () {

    leftSwiper.style.cssText = `transition-duration: 70000ms;`;
    leftSwiper.style.transform = transLeft;
    rightSwiper.style.cssText = `transition-duration: 70000ms;`;
    rightSwiper.style.transform = transRight;

    leftSlider.autoplay.start();
    rightSlider.autoplay.start();

});

playGallery.addEventListener('click', function () {

    leftSwiper.style.cssText = `transition-duration: 70000ms;`;
    leftSwiper.style.transform = transLeft;
    rightSwiper.style.cssText = `transition-duration: 70000ms;`;
    rightSwiper.style.transform = transRight;

    leftSlider.autoplay.start();
    rightSlider.autoplay.start();
});

