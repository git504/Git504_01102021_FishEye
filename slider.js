("use strict");

const items = document.querySelectorAll(".container__slider-image");
const nbSlide = items.length;
const suivant = document.querySelector(".container__btn-nav--right");
const precedent = document.querySelector(".container__btn-nav--left");
let count = 0;

const slideSuivante = () => {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
};
suivant.addEventListener("click", slideSuivante);

const slidePrecedente = () => {
  items[count].classList.remove("active");
  console.log("slideprecedent");
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
  console.log(count);
};
precedent.addEventListener("click", slidePrecedente);

const keyPress = (e) => {
  console.log(e);

  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
};
document.addEventListener("keydown", keyPress);

export { slidePrecedente, slideSuivante, keyPress };
