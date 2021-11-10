import * as mySliderModule from "./slider.js";
// import * as myDropdownModule from "./dropdown.js";
// import * as myLikesModule from "./likes.js";
import * as myFetchModule from "./fetch.js";
import * as myUsersModule from "./displayusers.js";
import * as myFilterModule from "./filtertags.js";
import * as myModalModule from "./modal.js";
("use strict");

const dom = {
  photographerHeader: document.querySelector(".user--page"),
  photographerMedia: document.querySelector(".media"),
  photographerInfos: document.querySelector(".infos"),
  photographerModal: document.getElementById("modalForm"),
  mediaCard: document.querySelector(".media__card"),
  mediaTitle: document.querySelector(".media__title"),
  mediaLikes: document.querySelector(".media__likes"),
  selectMenu: document.querySelector(".filter__custom-menu"),
  selectOption: document.querySelectorAll(".filter__custom-option"),
};
// console.log(dom);

//POUR LE DISPLAY HTML `backtick`
let userHeader = "";
let listOfTags = "";
let userInfos = "";
let userFotoCard = "";
let userVideoCard = "";
let modalHTML = "";

// To get Id in Url's params
const params = new URLSearchParams(window.location.search);
let getPhotographerByIdURL = parseInt(params.get("id"));
// console.log("PHOTOGRAPHE ID ", getPhotographerByIdURL);

// RECUPERATION DE LA DB json
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
  // console.log(currentArrayOfMedias);

  //FONCTION AFFICHAGE HEADER > USERPAGE
  showHeader(currentArrayOfPhotographer);

  //FONCTION AFFICHAGE INFOS > USERPAGE
  showInfos(currentArrayOfPhotographer);

  //FONCTION AFFICHAGE FOTOS > USERPAGE
  showMedias(currentArrayOfMedias);

  //FONCTION AFFICHAGE MODAL > USERPAGE
  showModal(currentArrayOfPhotographer);

  // mediaFactory(currentArrayOfMedias);
};
getDataOnUserPage().then(() => {
  console.log("%c page USER ok", "color: green; font-weight:bold;");

  // écouteur open-modal
  document
    .querySelector("#btnModal")
    .addEventListener("focus", myModalModule.launchModal);

  // écouteur close-modal
  document
    .querySelector("#closeModal")
    .addEventListener("focus", myModalModule.closeModal);

  // écouteur filter-tag
  document.querySelectorAll(".user__filter-tag").forEach((tag) => {
    tag.addEventListener("focus", myFilterModule.isUserFiltered);
  });

  // écouteur open-slider
  document.querySelectorAll(".media__thumb").forEach((pic) => {
    pic.addEventListener(
      "click",
      // console.log("slider"),
      mySliderModule.launchSlider
    );
  });

  // écouteur close-slider
  document
    .querySelector(".container__btn-nav--close")
    .addEventListener("focus", mySliderModule.closeSlider);

  // écouteur slider slide-Suivante
  document
    .querySelector(".container__btn-nav--right")
    .addEventListener("focus", mySliderModule.slideSuivante);

  // écouteur slider slide-Precedente
  document
    .querySelector(".container__btn-nav--left")
    .addEventListener("focus", mySliderModule.slidePrecedente);

  // écouteur slider KEYPRESS
  document.addEventListener("keydown", mySliderModule.keyPress);
});

const showHeader = (arrayOfUser) => {
  // console.log(arrayOfUser);
  arrayOfUser.forEach((item) => {
    // console.log(item);

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
};

const showInfos = (arrayOfUser) => {
  arrayOfUser.forEach((item) => {
    // console.log(item);

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
    // const imageProperty = art.hasOwnProperty("image");
    // console.log(imageProperty);
    if (art.hasOwnProperty("image")) {
      userFotoCard = `
    <article class="media__card">
    <a href="./assets/SamplePhotos/${art.image}">
    <img
    src="./assets/SamplePhotos/${art.image}"
    alt="${art.altTxt}"
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
      dom.photographerMedia.innerHTML += userFotoCard;
    } else {
      userVideoCard = `
    <article class="media__card">
    <a
      alt="lecture d'une vidéo"
      href="./assets/SamplePhotos/videos/${art.video}"
    >
      <div class="media__playIcon"></div>
      <video
        controls
        class="media__thumb"
        title="${art.altTxt}"
        role="video"
      >
        <track
          kind="subtitles"
          default
          src="./assets/SamplePhotos/videos/${art.vtt}"
          srclang="fr"
          label="français"
        />
        <source
          src="./assets/SamplePhotos/videos/${art.video}"
          type="video/mp4"
        />
      </video>
    </a>
    <div class="media__content">
      <h2 class="media__title">${art.title}</h2>
      <p class="media__number">${art.likes}</p>
      <div class="media__likes" tabindex="0">
        <svg
          tabindex="0"
          role="img"
          class="media__media__heart"
          width="19"
          height="19"
          viewbox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="likes"
          aria-describedby="title-Wil description-Wil"
        >
          <title id="title-Wil">Likes</title>
          <desc id="description-Wil">Icone en forme de cœur</desc>
          <path
            d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"
            fill="#911C1C"
          ></path>
        </svg>
      </div>
    </div>
  </article>
    `;
      dom.photographerMedia.innerHTML += userVideoCard;
    }
  });
};

const showModal = (arrayOfUser) => {
  // console.log(arrayOfUser);
  arrayOfUser.forEach((item) => {
    // console.log(item);

    modalHTML = `
    <div class="modal__content" role="dialog">
      <button
        id="closeModal"
        class="modal__close"
      ></button>
      <h1 class="modal__head" aria-label="Contactez-moi">
        Contactez-moi <br />
        ${item.name}
      </h1>
      <div
        id="contact"
        class="modal__body"
        role="group"
        aria-labelledby="coordonnees"
      >
        <form
          aria-labelledby="contact"
          name="contact"
          action="./user.html"
          method="post"
          class="form"
        >
          <div
            class="form__data"
            data-error="Veuillez entrer 2 caractères ou plus pour le champ du prénom."
          >
            <label
              for="firstname"
              class="form__label"
              id="first-name"
              aria-label="prénom"
            >
              Prénom
            </label>
            <input
              class="form__text"
              type="text"
              id="firstname"
              name="firstname"
              minlength="2"
              required
              aria-required="true"
              placeholder="Votre Prénom"
              aria-placeholder="Votre Prénom"
              aria-labelledby="contact first-name"
              aria-describedby="Prénom"
              aria-label="entrer votre prénom"
            />
          </div>
          <div
            class="form__data"
            data-error="Veuillez entrer 2 caractères ou plus pour le champ du nom."
          >
            <label
              for="lastname"
              class="form__label"
              id="last-name"
              aria-label="nom"
            >
              Nom
            </label>
            <input
              class="form__text"
              type="text"
              id="lastname"
              name="lastname"
              minlength="2"
              required
              aria-required="true"
              placeholder="Votre Nom"
              aria-placeholder="Votre Nom"
              aria-labelledby="contact last-name"
              aria-describedby="nom"
              aria-label="entrer votre nom"
            />
          </div>
          <div
            class="form__data"
            data-error="Veuillez saisir un email valide (exemple : bonjour@gmail.com)"
          >
            <label
              for="email"
              class="form__label"
              id="email-form"
              aria-label="mail"
            >
              E-mail
            </label>
            <input
              class="form__text"
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              placeholder="Votre email"
              aria-placeholder="Votre email"
              aria-labelledby="contact email-form"
              aria-describedby="email"
              aria-label="entrer votre mail"
            />
          </div>
          <div class="form__data" data-error="Veuillez saisir votre message.">
            <label
              id="txtboxLabel"
              for="textArea"
              class="form__label"
              aria-label="message"
            >
              Votre message
            </label>
            <textarea
              role="textbox"
              contenteditable="true"
              aria-placeholder="Ecriver votre message..."
              class="form__text--area"
              name="textArea"
              id="textArea"
              cols="30"
              rows="10"
              required
              aria-required="true"
              placeholder="Votre message..."
              aria-labelledby="contact txtboxLabel"
              aria-describedby="message"
              aria-label="Ecriver votre message"
            ></textarea>
            <input class="form__submitButton" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
 ;`;
  });
  dom.photographerModal.innerHTML = modalHTML;
};

// const mediaFactory = (media) => {
//   // ARRAY FOTOS
//   const currentArrayOfImages = media.filter((item) =>
//     item.hasOwnProperty("image")
//   );
//   console.log("PHOTOS :", currentArrayOfImages);

//   // ARRAY VIDEOS
//   const currentArrayOfVideos = media.filter((item) =>
//     item.hasOwnProperty("video")
//   );
//   console.log("VIDEOS :", currentArrayOfVideos);

//   showFotos(currentArrayOfImages);
//   showVideos(currentArrayOfVideos);
//   // `<a href="./assets/SamplePhotos/${media}">
//   //     <img
//   //     src="./assets/SamplePhotos/${media}"
//   //     alt="Rollier à long brins"
//   //     class="media__thumb"
//   //     role="img"
//   //     />
//   //     </a>`;
// };
