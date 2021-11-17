import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      }

    },
});


var swiper2 = new Swiper(".no-swipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 1,
        spaceBetween: 30,

        pagination: {
            el: ".swiper-pagination",
        },
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      }

    },
});

var swiper3 = new Swiper(".testimonial-swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".swiper-gallery", {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 1,

      },
      1023: {

        slidesPerView: 1.2,

      }
    }
});

AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true,
    disable: "mobile",
});



$(document).ready(function(){

    var buttonclicked;

    $('.nav-menu').click(function(){
        if( buttonclicked!= true ) {
            buttonclicked= true;
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
            $('header nav').slideToggle();



        }
        else
        {
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
            $('header nav').slideToggle();

        }
    });

    if($(".swiper-experiences .swiper-slide").length <= 3) {
      $('.swiper-experiences').addClass( "disabled-swiper" );

      console.log($(".swiper-experiences .swiper-slide").length);
    }

    if($(".swiper-expertise .swiper-slide").length <= 3) {
      $('.swiper-expertise').addClass( "disabled-swiper" );
    }
    if($(".swiper-facilities .swiper-slide").length <= 3) {
      $('.swiper-facilities').addClass( "disabled-swiper" );
    }

    if($(".swiper-staff .swiper-slide").length <= 3) {
      $('.swiper-staff').addClass( "disabled-swiper" );
    }

});


// Sticky hamburger menu on tablet and mobile.
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 5) {
            $('header').addClass('fixed-header');


        }
        else {
            $('header').removeClass('fixed-header');
        }

    })
})
