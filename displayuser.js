import * as myFetchModule from "./fetch.js";
import { getPhotographers } from "./displayusers.js";
("use strict");

let photographer = {};

// To get Id in Url's params
const params = new URLSearchParams(window.location.search);
let getPhotographerById = params.get("id");

console.log(myFetchModule.getUrl());

// To display photographer header
console.log(getPhotographerById);
const showUserHeader = async () => {
  try {
    // + "/photographers/id/"}/${getPhotographerById}
    let reponse = await fetch(`${myFetchModule.getUrl()}`);
    if (reponse.ok) {
      photographer = await reponse.json();
      console.log(
        "%c DB_pageProfil_statusOK",
        "color: green; font-weight:bold;",
        photographer
      );
    }
  } catch (error) {
    console.log(
      "ERREUR LORS DE LA RECUPERATION DE LA DB PAGE user.html",
      error
    );
  }
};

showUserHeader();

// getPhotographers().then((photographers) => {
//   const idOfPhotographers = photographers.filter((photographer) => {
//     console.log(photographer.id);
//     return photographer.id;
//   });
// });

// const dom = {
//   inputSelect: document.querySelector(".filter__select"),
//   photographerHeader: document.querySelector(".user--page"),
//   nameInForm: document.querySelector(".modal__head"),
//   media: document.querySelector(".media"),
//   form: document.querySelector(".form"),
//   modalForm: document.querySelector(".modal"),
//   selectMenu: document.querySelector(".filter__custom-menu"),
//   selectOption: document.querySelectorAll(".filter__custom-option"),
// };

// const getMedias = async () => {
//   const db = await myFetchModule.getDatas();
//   const medias = db.media;
// console.log(medias);
// };

// export { getMedias };

// let photographerPage = "";
