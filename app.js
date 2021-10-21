console.log("app.js FONCTIONNE");
// https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965649-rendez-vos-modales-et-carrousels-accessibles

import * as myFetchModule from "./fetch.js";
import * as myFilterModule from "./filtertags.js";
import * as mySlider from "./slider.js";
import { launchModal, closeModal } from "./modal.js";

myFetchModule.REQUESTS();
myFilterModule.FILTER_TAGS();

// APPEL DE LA MODAL ET FERMETURE user.html
const clikOpenModal = document
  .getElementById("btnModal")
  .addEventListener("click", launchModal);
const clikCloseModal = document
  .getElementById("closeModal")
  .addEventListener("click", closeModal);

// APPEL DU SLIDER ET FERMETURE user.html
