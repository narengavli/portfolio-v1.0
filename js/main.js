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
let grpNum;
if (window.matchMedia("(max-width: 820px)").matches) {
    grpNum = 1;
} else {
    grpNum = 3;
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: grpNum,
    spaceBetween: 20,
    slidesPerGroup: grpNum,
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

window.onresize = function () { location.reload(); }
