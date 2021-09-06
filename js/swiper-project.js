// init Swiper objects-slider

let objectsSlider = new Swiper('.object-slider-images',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slideToClickedSlide: true,
    slidesPerView: 2,
    watchOverflow: true,
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true
    },
    speed: 800,
    spaceBetween: -50
});

let objectSliderImages = document.querySelector('.object-slider-images');

objectSliderImages.addEventListener('mouseenter', function (e){
    objectsSlider.autoplay.stop();
});

objectSliderImages.addEventListener('mouseleave', function (e){
    objectsSlider.autoplay.start();
});

// init Swiper objects-slider

let objectsSliderBig = new Swiper('.objects-slider-big-images',{
    slideToClickedSlide: true,
    slidesPerView: 1,
    watchOverflow: true,
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true
    },
    speed: 2000,
    effect: 'fade',
    fadeEffect : {
        crossFade: true
    },
    thumbs:{
        swiper:{
            el:'.objects-slider-big-mini-images',
            slidesPerView:3
        }
    }
});

let objectSliderImagesBig = document.querySelector('.objects-slider-big');

objectSliderImagesBig.addEventListener('mouseenter', function (e){
    objectsSliderBig.autoplay.stop();
});

objectSliderImagesBig.addEventListener('mouseleave', function (e){
    objectsSliderBig.autoplay.start();
});



