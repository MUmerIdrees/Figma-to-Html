$(document).ready(function(){
    $("#owl-carousel-1").owlCarousel({
        loop:true,
        margin:30,
        nav: true,
        dots: false,
        navText: ['<div class="custom-prev"></div>', '<div class="custom-next"></div>'],
        responsive:{
            "0": {
                "items": 1
            },
            "768": {
                "items": 2
            },
            "992": {
                "items": 4
            },
            "1200": {
                "items": 6
            }
        }
    });

    $("#owl-carousel-2").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: true,
        navText: ['<div class="custom-prev1"><img src="./images/Vector18.svg" alt="vector"></div>', '<div class="custom-next1"><img src="./images/Vector19.svg" alt="vector"></div>'],
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            },
            1200:{
                items:2
            },
            1400:{
                items:3
            }
        }
    });

    $("#owl-carousel-3").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ['<div class="custom-prev2"><img src="./images/Vector20.svg" alt="vector"></div>', '<div class="custom-next2"><img src="./images/Vector21.svg" alt="vector"></div>'],
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            },
            1200:{
                items:2
            },
            1400:{
                items:3
            }
        }
    });

    $("#owl-carousel-4").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ['<div class="custom-prev3"><img src="./images/Group 26.svg" alt="vector"></div>', '<div class="custom-next3"><img src="./images/Group 63.svg" alt="vector"></div>'],
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    $("#owl-carousel-5").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ['<div class="custom-prev1 custom-p"><img src="./images/Vector18.svg" alt="vector"></div>', '<div class="custom-next1 custom-n"><img src="./images/Vector19.svg" alt="vector"></div>'],
        responsive:{
            0:{
                items:1
            },
            768: {
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });

    $("#owl-carousel-6").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ['<div class="custom-prev1 custom-p"><img src="./images/Vector18.svg" alt="vector"></div>', '<div class="custom-next1 custom-n"><img src="./images/Vector19.svg" alt="vector"></div>'],
        responsive:{
            0:{
                items:1
            },
            768: {
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});