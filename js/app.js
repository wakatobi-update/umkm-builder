// ===============================
// UMKM BUILDER GLOBAL SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

initSmoothScroll();
initHeaderScroll();

});


// ===============================
// SMOOTH SCROLL
// ===============================

function initSmoothScroll(){

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

link.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({
behavior: "smooth"
});

});

});

}



// ===============================
// HEADER SCROLL EFFECT
// ===============================

function initHeaderScroll(){

const header = document.querySelector(".header");

if(!header) return;

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.classList.add("header-scroll");

}else{

header.classList.remove("header-scroll");

}

});

}
