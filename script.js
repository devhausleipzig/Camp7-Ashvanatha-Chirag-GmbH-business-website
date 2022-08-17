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
