const accArrowGlobal = document.querySelector(
	"#acc-arrow-global"
) as HTMLElement;
const accBodyGlobal = document.querySelector("#acc-body-global") as HTMLElement;
accArrowGlobal.addEventListener("click", function (event) {
	accBodyGlobal.classList.toggle("hidden");
	accArrowGlobal.classList.toggle("upside-down");
});

const accArrowVirtual = document.querySelector(
	"#acc-arrow-virtual"
) as HTMLElement;
const accBodyVirtual = document.querySelector(
	"#acc-body-virtual"
) as HTMLElement;
accArrowVirtual.addEventListener("click", function (event) {
	accBodyVirtual.classList.toggle("hidden");
	accArrowVirtual.classList.toggle("upside-down");
});

const accArrowCuriosity = document.querySelector(
	"#acc-arrow-curiosity"
) as HTMLElement;
const accBodyCuriosity = document.querySelector(
	"#acc-body-curiosity"
) as HTMLElement;
accArrowCuriosity.addEventListener("click", function (event) {
	accBodyCuriosity.classList.toggle("hidden");
	accArrowCuriosity.classList.toggle("upside-down");
});

const accArrowWhen = document.querySelector("#acc-arrow-when") as HTMLElement;
const accFaqBody = document.querySelector("#acc-faq-body") as HTMLElement;
accArrowWhen.addEventListener("click", function (event) {
	accFaqBody.classList.toggle("unhidden");
	accArrowWhen.classList.toggle("upside-down");
});

const accArrowWhere = document.querySelector("#acc-arrow-where") as HTMLElement;
const accFaqBody2 = document.querySelector("#acc-faq-body2") as HTMLElement;
accArrowWhere.addEventListener("click", function (event) {
	accFaqBody2.classList.toggle("unhidden");
	accArrowWhere.classList.toggle("upside-down");
});

const accArrowWill = document.querySelector("#acc-arrow-will") as HTMLElement;
const accFaqBody3 = document.querySelector("#acc-faq-body3") as HTMLElement;
accArrowWill.addEventListener("click", function (event) {
	accFaqBody3.classList.toggle("unhidden");
	accArrowWill.classList.toggle("upside-down");
});

const accArrowFree = document.querySelector("#acc-arrow-free") as HTMLElement;
const accFaqBody4 = document.querySelector("#acc-faq-body4") as HTMLElement;
accArrowFree.addEventListener("click", function (event) {
	accFaqBody4.classList.toggle("unhidden");
	accArrowFree.classList.toggle("upside-down");
});

const accArrowWait = document.querySelector("#acc-arrow-wait") as HTMLElement;
const accFaqBody5 = document.querySelector("#acc-faq-body5") as HTMLElement;
accArrowWait.addEventListener("click", function (event) {
	accFaqBody5.classList.toggle("unhidden");
	accArrowWait.classList.toggle("upside-down");
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		const navbar = document.getElementById("navbar") as HTMLElement;
		navbar.style.top = "0";
	} else {
		const navbar = document.getElementById("navbar") as HTMLElement;
		navbar.style.top = "-150px";
	}
	prevScrollpos = currentScrollPos;
};

////////// Toggle Menu Button //////
const menu = document.querySelector(".menu") as HTMLElement;
const menuItems = document.querySelectorAll(
	".menu-item"
) as NodeListOf<Element>;
const hamburger = document.querySelector(".hamburger") as HTMLElement;
const closeIcon = document.querySelector("#icon-after") as HTMLElement;
const menuIcon = document.querySelector("#icon-before") as HTMLElement;

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
	} else {
		menu.classList.add("showMenu");
	}
}

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
////////////////////////////////////////////////////
