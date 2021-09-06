// burger-menu
const burgerButton = document.getElementById('burgerButton');
const headerMenuBlockPhone = document.querySelector('.header-menu-block-phone');
const burgerMenuOverlay = document.querySelector('.burger-menu_overlay');

burgerButton.addEventListener('click', function (){
    headerMenuBlockPhone.classList.toggle('show');
    burgerMenuOverlay.classList.toggle('show');
});

burgerMenuOverlay.addEventListener('click', function (){
    headerMenuBlockPhone.classList.toggle('show');
    burgerMenuOverlay.classList.toggle('show');
});

$(document).ready(function () {

    var sliderContainer = $('.slider-container');
    var stop = $('#slider-stop');
    var play = $('#slider-play');

    stop.on('click', function (){
        sliderContainer.attr('stop', true);
    })

    play.on('click', function (){
        sliderContainer.attr('stop', false);
    })
})



