const accArrowGlobal = document.querySelector("#acc-arrow-global");
const accBodyGlobal = document.querySelector("#acc-body-global");
accArrowGlobal.addEventListener("click", function (event) {
	accBodyGlobal.classList.toggle("hidden");
	accArrowGlobal.classList.toggle("upside-down");
});

const accArrowVirtual = document.querySelector("#acc-arrow-virtual");
const accBodyVirtual = document.querySelector("#acc-body-virtual");
accArrowVirtual.addEventListener("click", function (event) {
	accBodyVirtual.classList.toggle("hidden");
	accArrowVirtual.classList.toggle("upside-down");
});

const accArrowCuriosity = document.querySelector("#acc-arrow-curiosity");
const accBodyCuriosity = document.querySelector("#acc-body-curiosity");
accArrowCuriosity.addEventListener("click", function (event) {
	accBodyCuriosity.classList.toggle("hidden");
	accArrowCuriosity.classList.toggle("upside-down");
});

const accArrowWhen = document.querySelector("#acc-arrow-when");
const accFaqBody = document.querySelector("#acc-faq-body");
accArrowWhen.addEventListener("click", function (event) {
	accFaqBody.classList.toggle("unhidden");
	accArrowWhen.classList.toggle("upside-down");
});

const accArrowWhere = document.querySelector("#acc-arrow-where");
const accFaqBody2 = document.querySelector("#acc-faq-body2");
accArrowWhere.addEventListener("click", function (event) {
	accFaqBody2.classList.toggle("unhidden");
	accArrowWhere.classList.toggle("upside-down");
});

const accArrowWill = document.querySelector("#acc-arrow-will");
const accFaqBody3 = document.querySelector("#acc-faq-body3");
accArrowWill.addEventListener("click", function (event) {
	accFaqBody3.classList.toggle("unhidden");
	accArrowWill.classList.toggle("upside-down");
});

const accArrowFree = document.querySelector("#acc-arrow-free");
const accFaqBody4 = document.querySelector("#acc-faq-body4");
accArrowFree.addEventListener("click", function (event) {
	accFaqBody4.classList.toggle("unhidden");
	accArrowFree.classList.toggle("upside-down");
});

const accArrowWait = document.querySelector("#acc-arrow-wait");
const accFaqBody5 = document.querySelector("#acc-faq-body5");
accArrowWait.addEventListener("click", function (event) {
	accFaqBody5.classList.toggle("unhidden");
	accArrowWait.classList.toggle("upside-down");
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-150px";
	}
	prevScrollpos = currentScrollPos;
};
