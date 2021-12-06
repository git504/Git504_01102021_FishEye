// console.log("SLIDER.JS FONCTIONNE");
"use strict";
const getSlider = document.querySelector(".container");

export const launchSlider = () => {
  getSlider.style.display = "flex";
};

export const closeSlider = () => {
  // console.log("FOCUS to close slider");
  getSlider.style.display = "none";
};

export const keyPressSlider = (e) => {
  // console.log(e);
  if (e.keyCode === 27) {
    closeSlider();
  }
};
