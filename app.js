"use strict";
const URL_PHOTOGRAPHERS = "http://localhost:3000/photographers";
const URL_MEDIA = "http://localhost:3000/media";

// La fonction   Promise.all, exécute nos requêtes en parallèle et en séquence.

Promise.all([fetch(URL_PHOTOGRAPHERS), fetch(URL_MEDIA)])
  .then(async ([photographers, media]) => {
    const A_FETCH = await photographers.json();
    const B_FETCH = await media.json();
    return [A_FETCH, B_FETCH];
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, "Une erreur est survenue");
  });
