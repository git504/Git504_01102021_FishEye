/*
\   ^__^
\  (oo)\_______
   (__)\       )\/\
       ||----w |
       ||     ||
*/
"use strict";
const URL_PHOTOGRAPHERS = "http://localhost:3000/photographers";
const URL_MEDIA = "http://localhost:3000/media";

// fetch()retourne une Promise. then() et catch()sont appelées plus tard.
async function fetchPhotographersJSON() {
  const responsePhotographers = await fetch("URL_PHOTOGRAPHERS");
  if (responsePhotographers.ok) {
    const photographers = await res.json();
    return photographers;
  }
}
fetchPhotographersJSON()
  .then((photographers) =>
    console.log("Success:", JSON.stringify(photographers))
  )
  .then((photographers) => {
    photographers; // fetched photographers
  })
  .catch((err) => console.error("Une erreur est survenue :", err));

// const responseMedia = await fetch("/media");
// const media = await res.json();
// return media;

async function fonctionAsynchrone1() {
  /* code asynchrone */
}
async function fonctionAsynchrone2() {
  /* code asynchrone */
}

async function fonctionAsynchrone3() {
  const value1 = await fonctionAsynchrone1();
  const value2 = await fonctionAsynchrone2();
  return value1 + value2;
}
// https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5866911-parallelisez-plusieurs-requetes-http
