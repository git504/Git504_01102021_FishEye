"use strict";
// import fetch from "node-fetch";
// const fetch = require("node-fetch");

// fetch("http://localhost:3000/api")
//   .then(function (res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     // Une erreur est survenue
//   });

fetch("http://localhost:3000/photographers")
  .then((response) => response.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", JSON.stringify(response)));

/*
\   ^__^
\  (oo)\_______
   (__)\       )\/\
       ||----w |
       ||     ||
*/
