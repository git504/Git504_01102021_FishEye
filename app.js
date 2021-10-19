// aria-current="page”
//menu dropdown : aria-expanded si ouvert
// aria-describedby="title-Wil description-Wil" card foto
// user card index aria-posinset="5"
//form aria-invalid
// https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965649-rendez-vos-modales-et-carrousels-accessibles

//fetch.js
import * as myFetchModule from "./fetch.js";
//filtertags.js
import * as myFilterModule from "./filtertags.js";
//lightbox
import * as myLightBox from "./lightbox.js";
//modale
//carrousel

myFetchModule.REQUESTS();
myFilterModule.FILTER_TAGS();
myLightBox.LIGHTBOX();
