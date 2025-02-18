// CLOSE TOP-BAR

var closeBtns = document.getElementById("closebtn");
var topBar = document.getElementById("topbar");

function handleCloseTopbar() {

    // CLOSE TOP-BAR

    if (closeBtns) {
        topBar.style.display = 'none';
    }
}

// NAV-TOGGLE

const handleNavToggle = () => {
    let navtoggle = document.getElementById('navToggle');
    let navbar = document.getElementById('navBar');


    if (navbar.classList.contains('show-navbar')) {
        navbar.classList.remove('show-navbar');
        console.log('close')

    } else {
        navbar.classList.add('show-navbar');
        console.log('open')
    }



}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    pagination: {
        el: ".swiper-pagination-counting",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return number < 10 ? "0" + number : number; // Adds "0" for single digits
        },
        formatFractionTotal: function (number) {
            return number < 10 ? "0" + number : number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> of <span class="' + totalClass + '"></span>';
        },
    },

    breakpoints: {
        300:
        {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});




