// console.log("SLIDER.JS FONCTIONNE");
"use strict";

const items = document.querySelectorAll(".container__slider-image");
const nbSlide = items.length;
const getSlider = document.querySelector(".container");
let count = 0;

export const launchSlider = () => {
  getSlider.style.display = "flex";
};

export const closeSlider = () => {
  console.log("FOCUS to close slider");
  getSlider.style.display = "none";
};

export const slideSuivante = () => {
  items[count].classList.remove("active");
  console.log("slidesuivante");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
};

export const slidePrecedente = () => {
  items[count].classList.remove("active");
  console.log("slideprecedente");
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
  console.log(count);
};

export const keyPress = (e) => {
  console.log(e);

  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
};
