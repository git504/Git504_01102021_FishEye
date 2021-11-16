!function(){"use strict";var n=document.querySelector(".container"),e=function(){console.log("FOCUS to close slider"),n.style.display="none"};function t(n,e,t,a,r,o,i){try{var l=n[o](i),c=l.value}catch(n){return void t(n)}l.done?e(c):Promise.resolve(c).then(a,r)}var a=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:3000/api").then((function(n){return n.json()})).catch((function(n){console.error("Error:",n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var e=this,a=arguments;return new Promise((function(r,o){var i=n.apply(e,a);function l(n){t(i,r,o,l,c,"next",n)}function c(n){t(i,r,o,l,c,"throw",n)}l(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(){return new URLSearchParams(window.location.search).get("tag")};function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function i(n,e,t,a,r,o,i){try{var l=n[o](i),c=l.value}catch(n){return void t(n)}l.done?e(c):Promise.resolve(c).then(a,r)}var l=function(){var n,e=(n=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a();case 2:return e=n.sent,t=e.photographers,null==r()&&c(t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,r){var o=n.apply(e,t);function l(n){i(o,a,r,l,c,"next",n)}function c(n){i(o,a,r,l,c,"throw",n)}l(void 0)}))});return function(){return e.apply(this,arguments)}}(),c=function(n){var e=document.getElementById("users"),t="";n.map((function(n){var e,a="",r=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var a=0,r=function(){};return{s:r,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return l=n.done,n},e:function(n){c=!0,i=n},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw i}}}}(n.tags);try{for(r.s();!(e=r.n()).done;){var i=e.value;a+='<li id="'.concat(i,'" class="user__tag">\n      <a\n      class="user__filter-tag"\n      >').concat(i,"</a\n      >\n      </li>")}}catch(n){r.e(n)}finally{r.f()}t+='\n    <article\n    tabindex="2"\n    class="user"\n    aria-labelledby="users"\n    aria-posinset="1"\n    aria-setsize="6"\n    >\n    <a href="user.html?id='.concat(n.id,'" class="user__header">\n    <img\n    class="user__img"\n    src="./assets/SamplePhotos/PhotographersIDPhotos/').concat(n.portrait,'"\n        alt="').concat(n.name," + ").concat(n.tagline,'"\n        />\n        <h2 class="user__name">').concat(n.name,'</h2>\n        </a>\n        <aside class="user__content">\n        <p class="user__location">').concat(n.city,", ").concat(n.country,'</p>\n        <p class="user__tagline">').concat(n.tagline,'</p>\n        <p class="user__price">').concat(n.price,' €</p>\n        </aside>\n        <nav\n        role="navigation"\n        aria-label="Chercher par catégorie"\n        class="card__nav"\n        >\n        <ul\n        role="navigation"\n        aria-label="Chercher par catégorie"\n        class="user__tags"\n        >\n        ').concat(a,"\n        </ul>\n        </nav>\n        </article>\n        ")})),e.innerHTML=t},s=(document.querySelectorAll(".header__filter-tag"),function(n){l().then((function(e){var t=e.filter((function(e){return e.tags.includes(n)}));c(t)}))}),u=r();null!==u&&s(u);var d=document.getElementById("modalForm"),m=function(){console.log("FOCUS to open modal"),d.style.display="flex"},f=function(){console.log("FOCUS to close modal"),d.style.display="none"};function p(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function h(n,e,t,a,r,o,i){try{var l=n[o](i),c=l.value}catch(n){return void t(n)}l.done?e(c):Promise.resolve(c).then(a,r)}var v,_={photographerHeader:document.querySelector(".user--page"),photographerMedia:document.querySelector(".media"),photographerInfos:document.querySelector(".infos"),photographerModal:document.querySelector("#modalForm"),photographerSlider:document.querySelector(".container__slider")},g="",b="",y="",w="",x="",S="",C="",L=[],P=new URLSearchParams(window.location.search),k=parseInt(P.get("id")),q=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:t=e.sent,r=t.photographers,o=t.media,i=r.filter((function(n){return n.id===k})),L=o.filter((function(n){return n.photographerId===k})),E(i),M(i),I(L),A(i),document.querySelectorAll(".m__thumb").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),v=parseInt(e.currentTarget.id),T(L),n.style.display="flex"}))}));case 13:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(n){h(o,a,r,i,l,"next",n)}function l(n){h(o,a,r,i,l,"throw",n)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();q().then((function(){console.log("%c page USER ok","color: green; font-weight:bold;"),document.querySelector("#btnModal").addEventListener("focus",m),document.querySelector("#closeModal").addEventListener("focus",f),document.querySelectorAll(".user__filter-tag").forEach((function(n){n.addEventListener("focus",s)})),document.querySelector(".container__btn-nav--close").addEventListener("focus",e),document.querySelector(".container__btn-nav--right").addEventListener("click",R),document.querySelector(".container__btn-nav--left").addEventListener("click",V),document.addEventListener("keydown",j)}));var E=function(n){n.forEach((function(n){var e,t=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return p(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var a=0,r=function(){};return{s:r,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return i=n.done,n},e:function(n){l=!0,o=n},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw o}}}}(n.tags);try{for(t.s();!(e=t.n()).done;){var a=e.value;b+='<li class="user__tag--page">\n      <a\n      tag="'.concat(a,'"\n      href="./index.html?tag=').concat(a,'"\n      class="user__filter-tag"\n      >#').concat(a,"</a\n      >\n      </li>")}}catch(n){t.e(n)}finally{t.f()}g='\n    <article\n    class="user__profil--page"\n    role="article"\n    aria-label="Profil en détail du photographe sélectionné"\n    aria-labelledby="user"\n    >\n    <div class="user__body">\n    <div class="user__content--page">\n    <h1 class="user__name--page">'.concat(n.name,'</h1>\n    <p class="user__location--page">').concat(n.city,", ").concat(n.country,'</p>\n    <p class="user__tagline--page">').concat(n.tagline,'</p>\n    <nav\n    role="navigation"\n    aria-label="chercher par catégorie"\n    class="card__nav"\n    >\n    <ul\n    aria-label="chercher par catégorie"\n    class="user__tags--page"\n    >\n    ').concat(b,'\n    </ul>\n    </nav>\n    </div>\n    <button id="btnModal" class="user__contactButton">\n    Contactez-moi\n    </button>\n    </div>\n    <img\n    class="user__img"\n    src="./assets/SamplePhotos/PhotographersIDPhotos/').concat(n.portrait,'"\n    alt="Mimi Keel"\n    />\n    </article>\n    ')})),_.photographerHeader.innerHTML=g},M=function(n){n.forEach((function(n){y='<div class="infos" aria-details="etiquetteinfos">\n    <div class="infos__likes">\n    <p class="infos__totalLikes"> TO DO </p>\n    <svg\n    role="img"\n    class="infos__heart"\n    width="19"\n    height="19"\n    viewbox="0 0 19 19"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-describedby="title-680 description-680"\n    >\n    <title id="title-680">Likes</title>\n    <desc id="description-680">Icone en forme de cœur</desc>\n    <path\n    d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"\n    fill="#000"\n    ></path>\n    </svg>\n    </div>\n    <p class="infos__price">'.concat(n.price," € / jour</p>\n    </div>")})),_.photographerInfos.innerHTML=y},I=function(n){n.forEach((function(n,e){n.hasOwnProperty("image")?(w='\n    <article class="media__card">\n    <a href="javascript:;" id="'.concat(e,'" class="m__thumb">\n    <img\n    src="./assets/SamplePhotos/').concat(n.image,'"\n    alt="').concat(n.altTxt,'"\n    class="media__thumb"\n    role="img"\n    />\n    </a>\n    <div class="media__content">\n    <h2 class="media__title">').concat(n.title,'</h2>\n    <p class="media__number">').concat(n.likes,'</p>\n    <div class="media__likes" tabindex="0">\n    <svg\n    role="img"\n    class="media__heart"\n    width="19"\n    height="19"\n    viewbox="0 0 19 19"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-label="likes"\n    aria-describedby="title-Rai description-Rai"\n    >\n    <title id="title-Rai">Likes</title>\n    <desc id="description-Rai">Icone en forme de cœur</desc>\n    <path\n    d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"\n    fill="#911C1C"\n    ></path>\n    </svg>\n    </div>\n    </div>\n    </article>\n    '),_.photographerMedia.innerHTML+=w):(x='\n    <article class="media__card">\n    <a href="javascript:;"\n    alt="lecture d\'une vidéo"\n    href="#"\n    aria-label="lecture d\'une vidéo"\n    id="'.concat(e,'"\n    class="m__thumb"\n    >\n    <div class="media__playIcon"></div>\n    <video\n    controls\n    class="media__thumb"\n        title="').concat(n.altTxt,'"\n        role="video"\n      >\n        <track\n          kind="subtitles"\n          default\n          src="./assets/SamplePhotos/videos/').concat(n.vtt,'"\n          srclang="fr"\n          label="français"\n        />\n        <source\n          src="./assets/SamplePhotos/videos/').concat(n.video,'"\n          type="video/mp4"\n        />\n      </video>\n      </a>\n    <div class="media__content">\n      <h2 class="media__title">').concat(n.title,'</h2>\n      <p class="media__number">').concat(n.likes,'</p>\n      <div class="media__likes" tabindex="0">\n        <svg\n          tabindex="0"\n          role="img"\n          class="media__media__heart"\n          width="19"\n          height="19"\n          viewbox="0 0 19 19"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-label="likes"\n          aria-describedby="title-Wil description-Wil"\n        >\n          <title id="title-Wil">Likes</title>\n          <desc id="description-Wil">Icone en forme de cœur</desc>\n          <path\n            d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"\n            fill="#911C1C"\n          ></path>\n        </svg>\n      </div>\n    </div>\n  </article>\n    '),_.photographerMedia.innerHTML+=x)}))},A=function(n){n.forEach((function(n){S='\n    <div class="modal__content" role="dialog">\n      <button\n        id="closeModal"\n        class="modal__close"\n        aria-label="Fermer le formulaire de contact"\n      ></button>\n      <h1 class="modal__head" aria-label="Contactez-moi">\n        Contactez-moi <br />\n        '.concat(n.name,'\n      </h1>\n      <div\n        id="contact"\n        class="modal__body"\n        role="group"\n        aria-labelledby="modalForm"\n      >\n        <form\n          aria-labelledby="contact"\n          name="contact"\n          action="./user.html"\n          method="post"\n          class="form"\n        >\n          <div\n            class="form__data"\n            data-error="Veuillez entrer 2 caractères ou plus pour le champ du prénom."\n          >\n            <label\n              for="firstname"\n              class="form__label"\n              id="first-name"\n              aria-label="prénom"\n            >\n              Prénom\n            </label>\n            <input\n              class="form__text"\n              type="text"\n              id="firstname"\n              name="firstname"\n              minlength="2"\n              required\n              aria-required="true"\n              placeholder="Votre Prénom"\n              aria-placeholder="Votre Prénom"\n              aria-labelledby="first-name"\n              aria-label="entrer votre prénom"\n            />\n          </div>\n          <div\n            class="form__data"\n            data-error="Veuillez entrer 2 caractères ou plus pour le champ du nom."\n          >\n            <label\n              for="lastname"\n              class="form__label"\n              id="last-name"\n              aria-label="nom"\n            >\n              Nom\n            </label>\n            <input\n              class="form__text"\n              type="text"\n              id="lastname"\n              name="lastname"\n              minlength="2"\n              required\n              aria-required="true"\n              placeholder="Votre Nom"\n              aria-placeholder="Votre Nom"\n              aria-labelledby="last-name"\n              aria-label="entrer votre nom"\n            />\n          </div>\n          <div\n            class="form__data"\n            data-error="Veuillez saisir un email valide (exemple : bonjour@gmail.com)"\n          >\n            <label\n              for="email"\n              class="form__label"\n              id="email-form"\n              aria-label="mail"\n            >\n              E-mail\n            </label>\n            <input\n              class="form__text"\n              type="email"\n              id="email"\n              name="email"\n              required\n              aria-required="true"\n              placeholder="Votre email"\n              aria-placeholder="Votre email"\n              aria-labelledby="email-form"\n              aria-label="entrer votre mail"\n            />\n          </div>\n          <div class="form__data" data-error="Veuillez saisir votre message.">\n            <label\n              id="txtboxLabel"\n              for="textArea"\n              class="form__label"\n              aria-label="message"\n            >\n              Votre message\n            </label>\n            <textarea\n              role="textbox"\n              contenteditable="true"\n              aria-placeholder="Ecriver votre message..."\n              class="form__text--area"\n              name="textArea"\n              id="textArea"\n              cols="30"\n              rows="10"\n              required\n              aria-required="true"\n              placeholder="Votre message..."\n              aria-labelledby="txtboxLabel"\n              aria-label="Ecriver votre message"\n            ></textarea>\n            <input class="form__submitButton" type="submit" value="Send" />\n          </div>\n        </form>\n      </div>\n    </div>\n ;')})),_.photographerModal.innerHTML=S},T=function(n){var e=n[v];C=e.hasOwnProperty("image")?'\n      <img\n      alt="'.concat(e.altTxt,'"\n      class="active container__slider-image"\n      src="./assets/SamplePhotos/').concat(e.image,'"\n    />\n\n    <div class="container__text">\n      <p class="container__slide-text">').concat(e.altTxt,"</p>\n    </div>\n    "):'\n    <video\n    controls\n    class="media__thumb"\n        title="'.concat(e.altTxt,'"\n        role="video"\n      >\n        <track\n          kind="subtitles"\n          default\n          src="./assets/SamplePhotos/videos/').concat(e.vtt,'"\n          srclang="fr"\n          label="français"\n        />\n        <source\n          src="./assets/SamplePhotos/videos/').concat(e.video,'"\n          type="video/mp4"\n        />\n      </video>\n'),_.photographerSlider.innerHTML=C},R=function(){console.log("slidesuivante"),v<L.length-1?v++:v=0,T(L)},V=function(){console.log("slideprecedente"),v>0?v--:v=L.length-1,T(L)},j=function(n){console.log(n),37===n.keyCode?V():39===n.keyCode&&R()}}();