import * as myFetchModule from "./fetch.js";
import * as myUsersModule from "./displayusers.js";
// import * as myModalModule from "./modal.js";
import * as mySliderModule from "./slider.js";
import * as myDropdownModule from "./dropdown.js";
import * as myLikesModule from "./likes.js";

("use strict");

let photographersOnUserPage = {};
let mediaItemOnUserPage = {};
let userHeader = "";
let userMedias = "";
let userInfos = "";

const dom = {
  inputSelect: document.querySelector(".filter__select"),
  photographerHeader: document.querySelector(".user--page"),
  photographerInfos: document.querySelector(".infos"),
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
let getPhotographerById = parseInt(params.get("id"));
// console.log(getPhotographerById);

// To display photographer header
// SI API => console.log(`${myFetchModule.getUrl()}/${getPhotographerById}`);
const showUser = async () => {
  const db = await myFetchModule.getDatas();
  const photographers = db.photographers;
  const medias = db.media;
  // console.log(photographers, media);

  //BOUCLE FOR OF + SWITCHCASE POUR SORTIR LA DATA ARRAY PHOTOGRAPHERS D UN PHOTOGRAPHE EN PARTICULIER
  for (const photographer of photographers) {
    let PHOTOGRAPHER_ID = photographer.id;
    // console.log(PHOTOGRAPHER_ID);
    switch (getPhotographerById) {
      case PHOTOGRAPHER_ID:
        // console.log(
        //   "ok",
        //   photographer.name,
        //   "est le bon photographe voici sa fiche PHOTOGRAPHE"
        // );
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
        break;
      default:
      // console.log("Others are not include");
    }
  }

  //BOUCLE FOR OF + SWITCHCASE POUR SORTIR LA DATA MEDIA PHOTOGRAPHERS D UN PHOTOGRAPHE EN PARTICULIER

  for (const mediaOfThePhotographer of medias) {
    let MEDIA_ID = mediaOfThePhotographer.photographerId;
    console.log(MEDIA_ID);
    switch (getPhotographerById) {
      case MEDIA_ID:
        // console.log(
        //   "ok",
        //   photographersOnUserPage.name,
        //   "est le bon photographe voici ses fiches MEDIA"
        // );
        mediaItemOnUserPage = {
          altTxt: mediaOfThePhotographer.altTxt,
          date: mediaOfThePhotographer.date,
          id: mediaOfThePhotographer.id,
          image: mediaOfThePhotographer.image,
          likes: mediaOfThePhotographer.likes,
          photographerId: mediaOfThePhotographer.photographerId,
          price: mediaOfThePhotographer.price,
          tags: mediaOfThePhotographer.tags,
          title: mediaOfThePhotographer.title,
        };
        console.log(mediaItemOnUserPage);
        break;
      default:
      // console.log("Others are not include");
    }
  }

  //

  //Présentation des photopgraphes

  userHeader = `
  <article
  class="user__profil--page"
  role="article"
  aria-label="Profil en détail du photographe sélectionné"
  aria-labelledby="user"
>
  <div class="user__body">
    <div class="user__content--page">
      <h1 class="user__name--page">${photographersOnUserPage.name}</h1>
      <p class="user__location--page">${photographersOnUserPage.city}, ${photographersOnUserPage.country}</p>
      <p class="user__tagline--page">${photographersOnUserPage.tagline}</p>
      <nav
        role="navigation"
        aria-label="chercher par catégorie"
        class="card__nav"
      >
        <ul
          aria-label="chercher par catégorie"
          class="user__tags--page"
        >
          <li class="user__tag--page">
            <a
              tag="portrait"
              href="./index.html?tag=portrait"
              class="user__filter-tag"
              >#portrait</a
            >
          </li>
          <li class="user__tag--page">
            <a
              tag="portrait"
              href="./index.html?tag=portrait"
              class="user__filter-tag"
              >#portrait</a
            >
          </li>
          <li class="user__tag--page">
            <a
              tag="portrait"
              href="./index.html?tag=portrait"
              class="user__filter-tag"
              >#portrait</a
            >
          </li>
          <li class="user__tag--page">
            <a
              tag="portrait"
              href="./index.html?tag=portrait"
              class="user__filter-tag"
              >#portrait</a
            >
          </li>
          <li class="user__tag--page">
            <a
              tag="portrait"
              href="./index.html?tag=portrait"
              class="user__filter-tag"
              >#portrait</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <button id="btnModal" class="user__contactButton">
      Contactez-moi
    </button>
  </div>
  <img
    class="user__img"
    src="./assets/SamplePhotos/PhotographersIDPhotos/MimiKeel.jpg"
    alt="Mimi Keel"
  />
</article>
  `;
  dom.photographerHeader.innerHTML = userHeader;

  // userMedias = `

  // `;
  // dom.photographerHeader.innerHTML = userMedias;

  userInfos = `<div class="infos" aria-details="etiquetteinfos">
 <div class="infos__likes">
   <p class="infos__totalLikes">${mediaItemOnUserPage.likes}</p>
   <svg
     role="img"
     class="infos__heart"
     width="19"
     height="19"
     viewbox="0 0 19 19"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     aria-describedby="title-680 description-680"
   >
     <title id="title-680">Likes</title>
     <desc id="description-680">Icone en forme de cœur</desc>
     <path
       d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"
       fill="#000"
     ></path>
   </svg>
 </div>
 <p class="infos__price">${mediaItemOnUserPage.price} € / jour</p>
 </div>`;
  dom.photographerInfos.innerHTML = userInfos;
};
showUser();
