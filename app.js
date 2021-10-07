// aria-current="page”
//menu dropdown : aria-expanded si ouvert
// aria-describedby="title-Wil description-Wil" card foto
// user card index aria-posinset="5"

"use strict";
const URL_PHOTOGRAPHERS = "http://localhost:3000/photographers";
const URL_MEDIA = "http://localhost:3000/media";

// Promise.all , exécute nos requêtes en parallèle et en séquence.
var requests = async () => {
  await Promise.all([fetch(URL_PHOTOGRAPHERS), fetch(URL_MEDIA)])
    .then(([photographers, media]) => {
      const A_FETCH = photographers.json();
      const B_FETCH = media.json();
      return [A_FETCH, B_FETCH];
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err, "Une erreur est survenue");
    });
};
requests();
