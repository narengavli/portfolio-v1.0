// navbar function
function navBarFunc() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// scroll page function
function scrollToTop() {
    element.scrollIntoView(true);
}

function aboutPage() {
    const element = document.getElementById("about");
    element.scrollIntoView();
}

function skillsPage() {
    const element = document.getElementById("skills");
    element.scrollIntoView();
}
function workPage() {
    const element = document.getElementById("project");
    element.scrollIntoView();
}
function contactPage() {
    const element = document.getElementById("contact");
    element.scrollIntoView();
}

// project script
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});