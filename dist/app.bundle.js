!function(){"use strict";var n={4584:function(){var n=document.querySelector(".anchor"),t=document.querySelector(".header"),e=document.documentElement.scrollTop,r=t.getBoundingClientRect().top;window.addEventListener("scroll",(function(){e>(e+r).toFixed()?n.style.opacity="0":n.style.opacity="1"}))}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}!function(){function n(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,a=function(){};return{s:a,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return i=n.done,n},e:function(n){u=!0,c=n},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var r=document.querySelectorAll(".header__filter-tag"),o=document.querySelectorAll(".user");function a(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}var c=function(){var n,t=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:3000/api").then((function(n){return n.json()})).catch((function(n){console.error("Error:",n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var c=n.apply(t,e);function i(n){a(c,r,o,i,u,"next",n)}function u(n){a(c,r,o,i,u,"throw",n)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}var s=function(){var n,t=(n=regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c();case 2:t=n.sent,e=t.photographers,l(e);case 5:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){u(a,r,o,c,i,"next",n)}function i(n){u(a,r,o,c,i,"throw",n)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),l=function(n){var t=document.getElementById("users"),e="";n.map((function(n){var t,r="",o=function(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}(n.tags);try{for(o.s();!(t=o.n()).done;){var a=t.value;r+='<li class="user__tag">\n          <a id="'.concat(a,'"\n          class="user__filter-tag"\n      >').concat(a,"</a\n      >\n    </li>")}}catch(n){o.e(n)}finally{o.f()}e+='\n        <article\n        tabindex="2"\n        class="user"\n        aria-labelledby="users"\n        aria-posinset="1"\n        aria-setsize="6"\n        >\n        <a href="user.html?'.concat(n.id,'" class="user__header">\n        <img\n        class="user__img"\n        src="./assets/SamplePhotos/PhotographersIDPhotos/').concat(n.portrait,'"\n        alt="').concat(n.name," + ").concat(n.tagline,'"\n        />\n        <h2 class="user__name">').concat(n.name,'</h2>\n        </a>\n        <aside class="user__content">\n        <p class="user__location">').concat(n.city,", ").concat(n.country,'</p>\n        <p class="user__tagline">').concat(n.tagline,'</p>\n        <p class="user__price">').concat(n.price,' €</p>\n        </aside>\n        <nav\n        role="navigation"\n        aria-label="Chercher par catégorie"\n        class="card__nav"\n        >\n        <ul\n        role="navigation"\n        aria-label="Chercher par catégorie"\n        class="user__tags"\n        >\n        ').concat(r,"\n    </ul>\n    </nav>\n    </article>\n    ")})),t.innerHTML=e};function f(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}var v=function(){var n,t=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c();case 2:n.sent.media;case 4:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){f(a,r,o,c,i,"next",n)}function i(n){f(a,r,o,c,i,"throw",n)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();e(4584),console.log("%c APP status ok","color: green; font-weight:bold;"),r.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.id;console.log(e);var r,a=n(o);try{for(a.s();!(r=a.n()).done;){var c=r.value;c.classList.remove("active"),c.classList.add("delete");var i,u=n(c.querySelectorAll("nav > ul li a.user__filter-tag"));try{for(u.s();!(i=u.n()).done;)i.value.textContent==e&&(c.classList.remove("delete"),c.classList.add("active"))}catch(n){u.e(n)}finally{u.f()}}}catch(n){a.e(n)}finally{a.f()}}))})),v(),s()}()}();