import * as myFetchModule from "./fetch.js";
import * as myUsersModule from "./displayusers.js";
import * as myModalModule from "./modal.js";
import * as mySliderModule from "./slider.js";
import * as myDropdownModule from "./dropdown.js";
import * as myLikesModule from "./likes.js";

("use strict");

let photographersOnUserPage = {};
let mediaItemOnUserPage = {};

const dom = {
  inputSelect: document.querySelector(".filter__select"),
  photographerHeader: document.querySelector(".user--page"),
  nameInForm: document.querySelector(".modal__head"),
  media: document.querySelector(".media"),
  form: document.querySelector(".form"),
  modalForm: document.querySelector(".modal"),
  selectMenu: document.querySelector(".filter__custom-menu"),
  selectOption: document.querySelectorAll(".filter__custom-option"),
};
// console.log(dom);

// To get Id in Url's params
const params = new URLSearchParams(window.location.search);
let getPhotographerById = params.get("id");
// console.log(getPhotographerById);

// To display photographer header
// SI API => console.log(`${myFetchModule.getUrl()}/${getPhotographerById}`);
const showUserHeader = async () => {
  const db = await myFetchModule.getDatas();
  const photographers = db.photographers;
  const media = db.media;
  // console.log(photographers, media);

  photographers.map((photographer) => {
    photographersOnUserPage = {
      city: photographer.city,
      country: photographer.country,
      id: photographer.id,
      name: photographer.name,
      portrait: photographer.portrait,
      price: photographer.price,
      tagline: photographer.tagline,
      tags: photographer.tags,
    };
    console.log(photographersOnUserPage);
  });

  media.map((item) => {
    mediaItemOnUserPage = {
      altTxt: item.altTxt,
      date: item.date,
      id: item.id,
      image: item.image,
      likes: item.likes,
      photographerId: item.photographerId,
      price: item.price,
      tags: item.tags,
      title: item.title,
    };
    console.log(mediaItemOnUserPage);
  });

  //Présentation des photopgraphes

  userHeader = `


  `;
};
showUserHeader();
