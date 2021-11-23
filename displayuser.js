import * as mySliderModule from "./slider.js";
import * as myDropdownModule from "./dropdown.js";
import * as myLikesModule from "./likes.js";
import * as myFetchModule from "./fetch.js";
import * as myUsersModule from "./displayusers.js";
import * as myFilterModule from "./filtertags.js";
import * as myModalModule from "./modal.js";
("use strict");

const dom = {
  photographerHeader: document.querySelector(".user--page"),
  photographerMedia: document.querySelector(".media"),
  photographerInfos: document.querySelector(".infos"),
  photographerModal: document.querySelector("#modalForm"),
  photographerSlider: document.querySelector(".container__slider"),
};
// console.log(dom);

//POUR LE DISPLAY HTML `backtick`
let userHeader_HTML = "";
let userListOfTags_HTML = "";
let userInfosPrice_HTML = "";
let userInfosLikes_HTML = "";
let userFotoCard_HTML = "";
let userCard_HTML = "";
let userVideoCard_HTML = "";
let userModal_HTML = "";
let userSlider_HTML = "";
let currentMediaIndex;
let currentArrayOfMedias = [];
let userTotalLikes = 0;

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
  currentArrayOfMedias = medias.filter(
    (media) => media.photographerId === getPhotographerByIdURL
  );
  // console.log(currentArrayOfMedias);

  //FONCTION AFFICHAGE HEADER > USERPAGE
  showHeader(currentArrayOfPhotographer);

  //FONCTION AFFICHAGE FOTOS > USERPAGE
  showMedias(currentArrayOfMedias);

  //FONCTION AFFICHAGE MODAL > USERPAGE
  showModal(currentArrayOfPhotographer);

  //FONCTION AFFICHAGE TOTAL-LIKES > USERPAGE
  showInfosLikes(currentArrayOfMedias);

  //FONCTION AFFICHAGE INFOS > USERPAGE
  showInfosPrice(currentArrayOfPhotographer);

  myLikesModule.increaseOrDecreaseLikesAndTotalLikes();

  // écouteur find the INDEX & open-slider
  const mediaThumb = document.querySelectorAll(".m__thumb");
  mediaThumb.forEach((thumb) => {
    thumb.addEventListener("click", (e) => {
      e.preventDefault();
      currentMediaIndex = parseInt(e.currentTarget.id);
      // console.log(currentMediaIndex);
      showSlider(currentArrayOfMedias);
      mySliderModule.launchSlider();
    });
  });
};

getDataOnUserPage().then(() => {
  console.log("%c page USER ok", "color: green; font-weight:bold;");

  // écouteur > open-modal
  document
    .querySelector("#btnModal")
    .addEventListener("click", myModalModule.launchModal);

  // écouter & valider le formulaire
  document
    .querySelector(".form__submitButton")
    .addEventListener("click", (e) => {
      e.preventDefault();
      myModalModule.checkInputs();
    });

  // écouteur > close-modal
  document
    .querySelector("#closeModal")
    .addEventListener("focus", myModalModule.closeModal);

  // écouteur > modal KEYPRESS
  document.addEventListener("keydown", myModalModule.keyPressModal);

  // écouteur > filter-tags
  document.querySelectorAll(".user__filter-tag").forEach((tag) => {
    tag.addEventListener("focus", myFilterModule.isUserFiltered);
  });

  // écouteur > close-slider
  document
    .querySelector(".container__btn-nav--close")
    .addEventListener("focus", mySliderModule.closeSlider);

  // écouteur > close-slider KEYPRESS
  document.addEventListener("keydown", mySliderModule.keyPressSlider);

  // écouteur > slide-Suivante
  document
    .querySelector(".container__btn-nav--right")
    .addEventListener("click", slideSuivante);

  // écouteur > slide-Precedente
  document
    .querySelector(".container__btn-nav--left")
    .addEventListener("click", slidePrecedente);

  // écouteur > slider KEYPRESS
  document.addEventListener("keydown", keyPress);

  let getButtontoFilter = document.getElementById("btndrop");
  // changer le text content menu selection filtre
  document.querySelectorAll(".filter__custom-option").forEach((li) => {
    li.addEventListener("click", (e) => {
      let liTextContent = li.textContent;
      console.log(liTextContent);
      li.textContent = getButtontoFilter.textContent;
      getButtontoFilter.textContent = liTextContent;
      // myDropdownModule.sortMediaByFilter(currentArrayOfMedias, li.textContent);
    });
  });

  // écouteur > Open & close DROPDOWNMENU
  document
    .querySelector("#btndrop")
    .addEventListener("click", myDropdownModule.getUpDownMenu);
});

const showHeader = (arrayOfUser) => {
  // console.log(arrayOfUser);
  arrayOfUser.forEach((item) => {
    // console.log(item);

    for (const tag of item.tags) {
      // console.log(tag);
      userListOfTags_HTML += `<li class="user__tag--page">
        <a
        tabIndex = "1"
        tag="${tag}"
        href="./index.html?tag=${tag}"
        class="user__filter-tag"
        >#${tag}</a
      >
      </li>`;
    }

    //HEADER
    userHeader_HTML = `
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
    ${userListOfTags_HTML}
    </ul>
    </nav>
    </div>
    <button tabIndex = "2" id="btnModal" class="user__contactButton">
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
  dom.photographerHeader.innerHTML = userHeader_HTML;
};

const showInfosLikes = (arrayOfMedias) => {
  arrayOfMedias.map((media) => {
    userTotalLikes += media.likes;

    userInfosLikes_HTML = `
  <div class="infos__likes">
  <p class="infos__totalLikes">${userTotalLikes}</p>
  <svg
  role="img"
  class="infos__heart"
  width="19"
  height="19"
  viewbox="0 0 19 19"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-describedby="title-${userTotalLikes} description-${userTotalLikes}"
  >
  <title id="title-${userTotalLikes}">Likes</title>
  <desc id="description-${userTotalLikes}">Icone en forme de cœur</desc>
  <path
  d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"
  fill="#000"
  ></path>
  </svg>
  </div>
  `;
  });
  dom.photographerInfos.innerHTML = userInfosLikes_HTML;
};

const showInfosPrice = (arrayOfUser) => {
  // console.log(arrayOfUser[0].price);
  //INFOS PRICE BAS DE PAGE
  userInfosPrice_HTML = `
    <p class="infos__price">${arrayOfUser[0].price} € / jour</p>
   `;

  dom.photographerInfos.insertAdjacentHTML("beforeend", userInfosPrice_HTML);
};

const showMedias = (arrayOfMedias) => {
  // DISPLAY DES IMAGES
  arrayOfMedias.forEach((art, index) => {
    // console.log(art);
    // const imageProperty = ("image" in art);
    // console.log(imageProperty);

    //composant photo
    userFotoCard_HTML = `
      <a href="javascript:;" id="${index}" class="m__thumb">
    <img
    tabIndex = "4"
    src="./assets/SamplePhotos/${art.image}"
    alt="${art.altTxt}"
    class="media__thumb"
    role="img"
    />
    </a>
    `;

    //composant video
    userVideoCard_HTML = `
    <a href="javascript:;"
    alt="lecture d'une vidéo"
    href="#"
    aria-label="lecture d'une vidéo"
    id="${index}"
    class="m__thumb"
    >
    <div class="media__playIcon"></div>
    <video
    controls
    tabindex="4"
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
    `;

    //composant mediacard
    if (art.hasOwnProperty("image")) {
      dom.photographerMedia.innerHTML += userCard_HTML = `
      <article class="media__card">
      ${userFotoCard_HTML}
      <div class="media__content">
      <h2 class="media__title">${art.title}</h2>
      <p class="media__number">${art.likes}</p>
      <div class="media__likes" tabIndex = "4">
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
    } else {
      dom.photographerMedia.innerHTML += userCard_HTML = `
      <article class="media__card">
      ${userVideoCard_HTML}
      <div class="media__content">
      <h2 class="media__title">${art.title}</h2>
      <p class="media__number">${art.likes}</p>
      <div class="media__likes" tabIndex = "4">
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
    }
  });
};

const showModal = (arrayOfUser) => {
  // console.log(arrayOfUser);
  arrayOfUser.forEach((item) => {
    // console.log(item);

    userModal_HTML = `
    <div class="modal__content" role="dialog">
    <button
    id="closeModal"
    class="modal__close"
    aria-label="Fermer le formulaire de contact"
    ></button>
      <h1 class="modal__head" aria-label="Contactez-moi">
        Contactez-moi <br />
        ${item.name}
      </h1>
      <div
        id="contact"
        class="modal__body"
        role="group"
        aria-labelledby="modalForm"
      >
        <form
          aria-labelledby="contact"
          name="contact"
          action="./user.html"
          method="post"
          class="form"
          id="form"
        >
          <div
            class="form__data"
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
              aria-required="true"
              placeholder="Votre Prénom"
              aria-placeholder="Votre Prénom"
              aria-labelledby="first-name"
              aria-label="entrer votre prénom"
              />
              <small class="form__error"></small>
          </div>
          <div
            class="form__data"
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
              aria-required="true"
              placeholder="Votre Nom"
              aria-placeholder="Votre Nom"
              aria-labelledby="last-name"
              aria-label="entrer votre nom"
              />
            <small class="form__error"></small>

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
              aria-required="true"
              placeholder="Votre email"
              aria-placeholder="Votre email"
              aria-labelledby="email-form"
              aria-label="entrer votre mail"
            />
            <small class="form__error"></small>
          </div>
          <div class="form__data">
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
              aria-required="true"
              placeholder="Votre message..."
              aria-labelledby="txtboxLabel"
              aria-label="Ecriver votre message"
            ></textarea>
            <small class="form__error"></small>
            <input  class="form__submitButton" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
 ;`;
  });
  dom.photographerModal.innerHTML = userModal_HTML;
};

const showSlider = (arrayOfMedias) => {
  let currentMedia = arrayOfMedias[currentMediaIndex];
  // console.log(currentMedia);
  if (currentMedia.hasOwnProperty("image")) {
    userSlider_HTML = `
      <img
      alt="${currentMedia.altTxt}"
      class="active container__slider-image"
      src="./assets/SamplePhotos/${currentMedia.image}"
    />

    <div class="container__text">
      <p class="container__slide-text">${currentMedia.altTxt}</p>
    </div>
    `;
  } else {
    userSlider_HTML = `
    <video
    controls
    class="media__thumb"
        title="${currentMedia.altTxt}"
        role="video"
      >
        <track
          kind="subtitles"
          default
          src="./assets/SamplePhotos/videos/${currentMedia.vtt}"
          srclang="fr"
          label="français"
        />
        <source
          src="./assets/SamplePhotos/videos/${currentMedia.video}"
          type="video/mp4"
        />
      </video>
`;
  }
  dom.photographerSlider.innerHTML = userSlider_HTML;
};

const slideSuivante = () => {
  console.log("slidesuivante");

  if (currentMediaIndex < currentArrayOfMedias.length - 1) {
    currentMediaIndex++;
  } else {
    currentMediaIndex = 0;
  }

  showSlider(currentArrayOfMedias);
};

const slidePrecedente = () => {
  console.log("slideprecedente");
  if (currentMediaIndex > 0) {
    currentMediaIndex--;
  } else {
    currentMediaIndex = currentArrayOfMedias.length - 1;
  }

  showSlider(currentArrayOfMedias);
};

const keyPress = (e) => {
  console.log(e);

  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
};
