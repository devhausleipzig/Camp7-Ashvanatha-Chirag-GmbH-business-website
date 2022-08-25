var accArrowGlobal = document.querySelector("#acc-arrow-global");
var accBodyGlobal = document.querySelector("#acc-body-global");
accArrowGlobal.addEventListener("click", function (event) {
    accBodyGlobal.classList.toggle("hidden");
    accArrowGlobal.classList.toggle("upside-down");
});
var accArrowVirtual = document.querySelector("#acc-arrow-virtual");
var accBodyVirtual = document.querySelector("#acc-body-virtual");
accArrowVirtual.addEventListener("click", function (event) {
    accBodyVirtual.classList.toggle("hidden");
    accArrowVirtual.classList.toggle("upside-down");
});
var accArrowCuriosity = document.querySelector("#acc-arrow-curiosity");
var accBodyCuriosity = document.querySelector("#acc-body-curiosity");
accArrowCuriosity.addEventListener("click", function (event) {
    accBodyCuriosity.classList.toggle("hidden");
    accArrowCuriosity.classList.toggle("upside-down");
});
var accArrowWhen = document.querySelector("#acc-arrow-when");
var accFaqBody = document.querySelector("#acc-faq-body");
accArrowWhen.addEventListener("click", function (event) {
    accFaqBody.classList.toggle("unhidden");
    accArrowWhen.classList.toggle("upside-down");
});
var accArrowWhere = document.querySelector("#acc-arrow-where");
var accFaqBody2 = document.querySelector("#acc-faq-body2");
accArrowWhere.addEventListener("click", function (event) {
    accFaqBody2.classList.toggle("unhidden");
    accArrowWhere.classList.toggle("upside-down");
});
var accArrowWill = document.querySelector("#acc-arrow-will");
var accFaqBody3 = document.querySelector("#acc-faq-body3");
accArrowWill.addEventListener("click", function (event) {
    accFaqBody3.classList.toggle("unhidden");
    accArrowWill.classList.toggle("upside-down");
});
var accArrowFree = document.querySelector("#acc-arrow-free");
var accFaqBody4 = document.querySelector("#acc-faq-body4");
accArrowFree.addEventListener("click", function (event) {
    accFaqBody4.classList.toggle("unhidden");
    accArrowFree.classList.toggle("upside-down");
});
var accArrowWait = document.querySelector("#acc-arrow-wait");
var accFaqBody5 = document.querySelector("#acc-faq-body5");
accArrowWait.addEventListener("click", function (event) {
    accFaqBody5.classList.toggle("unhidden");
    accArrowWait.classList.toggle("upside-down");
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        var navbar = document.getElementById("navbar");
        navbar.style.top = "0";
    }
    else {
        var navbar = document.getElementById("navbar");
        navbar.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
};
////////// Toggle Menu Button //////
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menu-item");
var hamburger = document.querySelector(".hamburger");
var closeIcon = document.querySelector("#icon-after");
var menuIcon = document.querySelector("#icon-before");
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.opacity = "0";
        menuIcon.style.opacity = "1";
    }
    else {
        menu.classList.add("showMenu");
        closeIcon.style.opacity = "1";
        menuIcon.style.opacity = "0";
    }
}
menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
////////////////////////////////////////////////////
