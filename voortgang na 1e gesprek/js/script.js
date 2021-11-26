const bodyElement = document.querySelector("body");
const hamburger = document.querySelector("header nav ul:nth-of-type(2) li a div");
const hamburgerStrepen = document.querySelectorAll("header nav ul:nth-of-type(2) li:first-of-type div span");
const mobileNavOverlay = document.querySelector("body > nav");


//regelt de mobile nav overlay
function toggleHamburger() {
    mobileNavOverlay.classList.toggle("aan");
    if(bodyElement.style.overflowY !== "hidden") {
        bodyElement.style.overflowY = "hidden";
    }   else {
        bodyElement.style.overflowY = "scroll";
    }

    for(let i=0; i < hamburgerStrepen.length; i++) {
        hamburgerStrepen[i].classList.toggle("rotate"+[i]);
    }

}

hamburger.addEventListener("click", toggleHamburger);