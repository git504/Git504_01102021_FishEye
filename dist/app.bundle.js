!function(){var t={898:function(){}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return t[n](u,u.exports,e),u.exports}e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";var t={};function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function n(t,r,e,n,o,u,i){try{var a=t[u](i),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,o)}e.r(t),e.d(t,{Y:function(){return o}});var o=function(){var t,e=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("http://localhost:3000/photographers"),fetch("http://localhost:3000/media")]).then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,u=[],i=!0,a=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(u.push(n.value),!r||u.length!==r);i=!0);}catch(t){a=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(a)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=o[0],i=o[1];return[u.json(),i.json()]})).then((function(t){console.log(t)})).catch((function(t){console.log(t,"Une erreur est survenue")}));case 2:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(o,u){var i=t.apply(r,e);function a(t){n(i,o,u,a,c,"next",t)}function c(t){n(i,o,u,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),u=document.querySelectorAll(".header__filter-tag"),i=e(898);o(),i.LIGHTBOX(),u.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),console.log(t.currentTarget.getAttribute("tag"))}))}))}()}();