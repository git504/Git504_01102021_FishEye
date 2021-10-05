"use strict";
const URL = "http://localhost:3000/photographers";

fetch(URL)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log("Une erreur est survenue");
  });
