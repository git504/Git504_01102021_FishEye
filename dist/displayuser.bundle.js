!function(){"use strict";var e={9130:function(){var e=document.querySelectorAll(".container__slider-image"),n=e.length,t=document.querySelector(".container__btn-nav--right"),r=document.querySelector(".container__btn-nav--left"),a=document.querySelector("#closeslider"),o=document.querySelector(".container"),i=0;a.addEventListener("focus",(function(){console.log("FOCUS to close slider"),o.style.display="none"}));var c=function(){e[i].classList.remove("active"),console.log("slidesuivante"),i<n-1?i++:i=0,e[i].classList.add("active"),console.log(i)};t.addEventListener("click",c);var s=function(){e[i].classList.remove("active"),console.log("slideprecedente"),i>0?i--:i=n-1,e[i].classList.add("active"),console.log(i)};r.addEventListener("click",s),document.addEventListener("keydown",(function(e){console.log(e),37===e.keyCode?s():39===e.keyCode&&c()}))}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}!function(){function e(e,n,t,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,a)}var n=function(){var n,t=(n=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/api").then((function(e){return e.json()})).catch((function(e){console.error("Error:",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,o){var i=n.apply(t,r);function c(n){e(i,a,o,c,s,"next",n)}function s(n){e(i,a,o,c,s,"throw",n)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw i}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n,t,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,a)}t(9130);var i={},c="",s="",l="",u="",d={inputSelect:document.querySelector(".filter__select"),photographerHeader:document.querySelector(".user--page"),photographerInfos:document.querySelector(".infos"),nameInForm:document.querySelector(".modal__head"),media:document.querySelector(".media"),mediaCard:document.querySelector(".media__card"),mediaTitle:document.querySelector(".media__title"),mediaLikes:document.querySelector(".media__likes"),form:document.querySelector(".form"),modalForm:document.querySelector(".modal"),selectMenu:document.querySelector(".filter__custom-menu"),selectOption:document.querySelectorAll(".filter__custom-option")},p=new URLSearchParams(window.location.search),m=parseInt(p.get("id"));console.log("PHOTOGRAPHE ID ",m);var f=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,a,o,p,f,h,v,g,_,y,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,a=t.photographers,o=t.media,p=r(a),e.prev=6,p.s();case 8:if((f=p.n()).done){e.next=20;break}h=f.value,v=h.id,e.t0=m,e.next=e.t0===v?14:18;break;case 14:i={city:h.city,country:h.country,id:h.id,name:h.name,portrait:h.portrait,price:h.price,tagline:h.tagline},g=r(h.tags);try{for(g.s();!(_=g.n()).done;)y=_.value,c+='<li class="user__tag--page">\n          <a\n          tag="'.concat(y,'"\n          href="./index.html?tag=').concat(y,'"\n          class="user__filter-tag"\n          >#').concat(y,"</a\n          >\n        </li>")}catch(e){g.e(e)}finally{g.f()}return e.abrupt("break",18);case 18:e.next=8;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(6),p.e(e.t1);case 25:return e.prev=25,p.f(),e.finish(25);case 28:b=o.filter((function(e){return e.photographerId===m})),s='\n      <article\n      class="user__profil--page"\n      role="article"\n      aria-label="Profil en détail du photographe sélectionné"\n  aria-labelledby="user"\n  >\n  <div class="user__body">\n    <div class="user__content--page">\n    <h1 class="user__name--page">'.concat(i.name,'</h1>\n      <p class="user__location--page">').concat(i.city,", ").concat(i.country,'</p>\n      <p class="user__tagline--page">').concat(i.tagline,'</p>\n      <nav\n        role="navigation"\n        aria-label="chercher par catégorie"\n        class="card__nav"\n      >\n        <ul\n          aria-label="chercher par catégorie"\n          class="user__tags--page"\n        >\n        ').concat(c,'\n        </ul>\n      </nav>\n    </div>\n    <button id="btnModal" class="user__contactButton">\n      Contactez-moi\n    </button>\n  </div>\n  <img\n    class="user__img"\n    src="./assets/SamplePhotos/PhotographersIDPhotos/').concat(i.portrait,'"\n    alt="Mimi Keel"\n  />\n</article>\n  '),d.photographerHeader.innerHTML=s,b.forEach((function(e){u+='\n      <article class="media__card">\n      <a href="./assets/SamplePhotos/'.concat(e.image,'">\n        <img\n          src="./assets/SamplePhotos/').concat(e.image,'"\n          alt="Rollier à long brins"\n          class="media__thumb"\n          role="img"\n        />\n      </a>\n      <div class="media__content">\n        <h2 class="media__title">').concat(e.title,'</h2>\n        <p class="media__number">').concat(e.likes,'</p>\n        <div class="media__likes" tabindex="0">\n          <svg\n            role="img"\n            class="media__heart"\n            width="19"\n            height="19"\n            viewbox="0 0 19 19"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            aria-label="likes"\n            aria-describedby="title-Rai description-Rai"\n          >\n            <title id="title-Rai">Likes</title>\n            <desc id="description-Rai">Icone en forme de cœur</desc>\n            <path\n              d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"\n              fill="#911C1C"\n            ></path>\n          </svg>\n        </div>\n      </div>\n    </article>\n      '),d.media.innerHTML=u})),l='<div class="infos" aria-details="etiquetteinfos">\n <div class="infos__likes">\n   <p class="infos__totalLikes"> ?€</p>\n   <svg\n     role="img"\n     class="infos__heart"\n     width="19"\n     height="19"\n     viewbox="0 0 19 19"\n     fill="none"\n     xmlns="http://www.w3.org/2000/svg"\n     aria-describedby="title-680 description-680"\n   >\n     <title id="title-680">Likes</title>\n     <desc id="description-680">Icone en forme de cœur</desc>\n     <path\n       d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"\n       fill="#000"\n     ></path>\n   </svg>\n </div>\n <p class="infos__price">'.concat(i.price," € / jour</p>\n </div>"),d.photographerInfos.innerHTML=l;case 34:case"end":return e.stop()}}),e,null,[[6,22,25,28]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){o(i,r,a,c,s,"next",e)}function s(e){o(i,r,a,c,s,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();f()}()}();