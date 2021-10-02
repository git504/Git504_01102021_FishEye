"use strict";

fetch("http://localhost:3000/photographers")
  .then((res) => {
    if (res.ok) return res.json();
  })
  .catch((err) => console.err("Une erreur est survenue:", err))
  .then((res) => console.log("Success:", JSON.stringify(res)));

/*
\   ^__^
\  (oo)\_______
   (__)\       )\/\
       ||----w |
       ||     ||
*/
