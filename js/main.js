
const headerLinksEl = document.querySelectorAll(".links a");
const headerEl = document.querySelector(".header");
const barsLinlsEl = document.querySelector(".bars");
const linksEl = document.querySelector(".bars .links");
const imageContainerEl = document.getElementById("images-container");
const imgEl = document.querySelectorAll("#img");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");


barsLinlsEl.addEventListener("click", () => {
    linksEl.style.display ="flex"
});

window.onscroll = function() {
    linksEl.style.display = "none";
};
// barsLinlsEl.onmouseleave = () => {
//     linksEl.style.display = "none";
// }
// click out header => hide the dahs board
document.addEventListener("click", function clickOutsideHeader(event) {
    if (!headerEl.contains(event.target)) {
        linksEl.style.display = "none"
    }
})
// do scroll => hide the dahs board
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        headerEl.classList.add("hide-header");
    }
    else {
        headerEl.classList.remove("hide-header");
    }
    lastScrollY = window.scrollY;
});
// remove active and add active
headerLinksEl.forEach(element => {
    element.addEventListener("click", function() {
        headerLinksEl.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// swipper on offers
let imagIndexEl = 1;
let imageStop ;
nextEl.addEventListener("click", () => {
    imagIndexEl++;
    clearTimeout(imageStop);
    imageMove();
});

prevEl.addEventListener("click", () => {
    imagIndexEl--;
    clearTimeout(imageStop);
    imageMove();
});

imageMove();
function imageMove() {

    if (imagIndexEl > imgEl.length) {

        imagIndexEl = 1;
    }
    else if (imagIndexEl < 1) {

        imagIndexEl = imgEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(imagIndexEl - 1) * 500}px)`;

    imageStop = setTimeout(() => {

        imagIndexEl++;
        imageMove();
    }, 7000)
}

//    SWİPPER İN OFFERS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 5,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slideContainerContentEl = document.querySelectorAll(".slide-container .content");
const btnEls = document.querySelectorAll(".all-products .btn");
const popupCountEl = document.querySelectorAll(".slide-container .popup-cont");
const closeIconEl = document.querySelectorAll(".close-icon i");

// ----------- more btn -------------------
btnEls.forEach(oneBtn => {

    oneBtn.addEventListener("click", (e) => {
        
        e.target.parentElement.parentElement.nextElementSibling.style.display = "block";
        
        slideContainerContentEl.forEach(onePro => {
            onePro.style.filter = "blur(4px) brightness(0.5)";
        });
    });
});
// closing popup
closeIconEl.forEach(oneClose => {

    oneClose.addEventListener("click", () => {

        popupCountEl.forEach(oneCont => {
            oneCont.style.display = "none"
        });
        slideContainerContentEl.forEach(onePro => {
            onePro.style.filter = "none";
        });
    });
});
