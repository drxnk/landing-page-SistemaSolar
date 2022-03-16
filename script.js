const btnToTop = document.getElementById("btnTop");
const btnToDown = document.getElementById("btnDown");

const classAtivaBtnTop = "ativo";

btnToDown.addEventListener("click", () => {
  btnToTop.classList.add(classAtivaBtnTop);
});

btnToTop.addEventListener("click", () => {
  btnToTop.classList.remove(classAtivaBtnTop);
});

const textosPlanetas = document.querySelectorAll(
  '[data-anima="texto-planetas"]'
);
