import * as myFetchModule from "./fetch.js";
import * as myUsersModule from "./displayusers.js";
import * as mySliderModule from "./slider.js";
import * as myDropdownModule from "./dropdown.js";
import * as myLikesModule from "./likes.js";
import * as myFilterModule from "./filtertags.js";
import * as myModalModule from "./modal.js";
("use strict");

const dom = {
  userFilterTags: document.querySelectorAll(".user__filter-tag"),
  inputSelect: document.querySelector(".filter__select"),
  photographerHeader: document.querySelector(".user--page"),
  photographerInfos: document.querySelector(".infos"),
  nameInForm: document.querySelector(".modal__head"),
  media: document.querySelector(".media"),
  mediaCard: document.querySelector(".media__card"),
  mediaTitle: document.querySelector(".media__title"),
  mediaLikes: document.querySelector(".media__likes"),
  form: document.querySelector(".form"),
  modalForm: document.querySelector(".modal"),
  selectMenu: document.querySelector(".filter__custom-menu"),
  selectOption: document.querySelectorAll(".filter__custom-option"),
};
// console.log(dom);

const toOpenModal = document.getElementById("btnModal");
const toCloseModal = document.getElementById("closeModal");

let userHeader = "";
let listOfTags = "";
let userInfos = "";
let userCard = "";

// To get Id in Url's params
const params = new URLSearchParams(window.location.search);
let getPhotographerByIdURL = parseInt(params.get("id"));
// console.log("PHOTOGRAPHE ID ", getPhotographerByIdURL);

// RECUPERATION DE LA DB
const getDataOnUserPage = async () => {
  const db = await myFetchModule.getDatas();
  const photographers = db.photographers;
  const medias = db.media;
  // console.log(photographers, medias);

  //FILTRER LES DONNEES PHOTOGRAPHES SELON ID > URL
  const currentArrayOfPhotographer = photographers.filter(
    (user) => user.id === getPhotographerByIdURL
  );
  // console.log(currentArrayOfPhotographer);

  //FILTRER LES DONNEES MEDIAS SELON ID > URL
  const currentArrayOfMedias = medias.filter(
    (media) => media.photographerId === getPhotographerByIdURL
  );
  // console.log(currentArrayOfMedias)

  //FONCTION AFFICHAGE HEADER > USERPAGE
  showHeader(currentArrayOfPhotographer);

  //FONCTION AFFICHAGE INFOS > USERPAGE
  showInfos(currentArrayOfPhotographer);

  //FONCTION AFFICHAGE FOTOS > USERPAGE
  showMedias(currentArrayOfMedias);
};
getDataOnUserPage();

const showHeader = (arrayOfUser) => {
  // console.log(arrayOfUser);
  arrayOfUser.forEach((item) => {
    console.log(item);

    for (const tag of item.tags) {
      // console.log(tag);
      listOfTags += `<li class="user__tag--page">
      <a
      tag="${tag}"
      href="./index.html?tag=${tag}"
      class="user__filter-tag"
      >#${tag}</a
      >
      </li>`;
    }

    //HEADER
    userHeader = `
    <article
    class="user__profil--page"
    role="article"
    aria-label="Profil en détail du photographe sélectionné"
    aria-labelledby="user"
    >
    <div class="user__body">
    <div class="user__content--page">
    <h1 class="user__name--page">${item.name}</h1>
    <p class="user__location--page">${item.city}, ${item.country}</p>
    <p class="user__tagline--page">${item.tagline}</p>
    <nav
    role="navigation"
    aria-label="chercher par catégorie"
    class="card__nav"
    >
    <ul
    aria-label="chercher par catégorie"
    class="user__tags--page"
    >
    ${listOfTags}
    </ul>
    </nav>
    </div>
    <button id="btnModal" class="user__contactButton">
    Contactez-moi
    </button>
    </div>
    <img
    class="user__img"
    src="./assets/SamplePhotos/PhotographersIDPhotos/${item.portrait}"
    alt="Mimi Keel"
    />
    </article>
    `;
  });
  dom.photographerHeader.innerHTML = userHeader;
  // toOpenModal.onclick(console.log("hello"));
  toOpenModal.addEventListener("click", myModalModule.launchModal);
  toCloseModal.addEventListener("click", myModalModule.closeModal);
};

const showInfos = (infosOfUser) => {
  infosOfUser.forEach((item) => {
    console.log(item);

    //INFOS BAS DE PAGE
    userInfos = `<div class="infos" aria-details="etiquetteinfos">
    <div class="infos__likes">
    <p class="infos__totalLikes"> ?€</p>
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
    <p class="infos__price">${item.price} € / jour</p>
    </div>`;
  });
  dom.photographerInfos.innerHTML = userInfos;
};

const showMedias = (arrayOfMedias) => {
  // DISPLAY DES IMAGES
  arrayOfMedias.forEach((art) => {
    // console.log(art);

    userCard += `
    <article class="media__card">
    <a href="./assets/SamplePhotos/${art.image}">
    <img
    src="./assets/SamplePhotos/${art.image}"
    alt="Rollier à long brins"
    class="media__thumb"
    role="img"
    />
    </a>
    <div class="media__content">
    <h2 class="media__title">${art.title}</h2>
    <p class="media__number">${art.likes}</p>
    <div class="media__likes" tabindex="0">
    <svg
    role="img"
    class="media__heart"
    width="19"
    height="19"
    viewbox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="likes"
    aria-describedby="title-Rai description-Rai"
    >
    <title id="title-Rai">Likes</title>
    <desc id="description-Rai">Icone en forme de cœur</desc>
    <path
    d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"
    fill="#911C1C"
    ></path>
    </svg>
    </div>
    </div>
    </article>
    `;
    dom.media.innerHTML = userCard;
  });
};

// const userfilter = async () => {
//   await showUser();
//   document.querySelectorAll(".user__tag--page").forEach((tag) => {
//     console.log(tag);
//   });
//   // .addEventListener("click", (e) => {
//   //   console.log("hello");
//   //   e.preventDefault();
//   // });

//   // tag.addEventListener("click", myFilterModule.isFiltered());
// };
// userfilter();
