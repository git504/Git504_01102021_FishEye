// aria-current="page”
//menu dropdown : aria-expanded si ouvert
// aria-describedby="title-Wil description-Wil" card foto
// user card index aria-posinset="5"
//form aria-invalid
// https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965649-rendez-vos-modales-et-carrousels-accessibles

//getDB AVEC JSON SERVER
import { requests, vehicule } from "./fetch.js";
import { filterTags } from "./filtertags.js";
requests();
filterTags();

//modale
const car = new vehicule("renault", "clio");
car.presenteVehicule();
//
