// console.log("FILTERTAGS.JS FONCTIONNE");
import * as myUsersModule from "./displayusers.js";
import { showPhotographers } from "./displayusers.js";
("use strict");

const headerFilterTags = document.querySelectorAll(".header__filter-tag");
const photographesCards = document.querySelectorAll(".user");

const FILTER_TAGS_MACHINE = () => {
  headerFilterTags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.preventDefault();
      const givingTagToMachine = e.target.id;
      // console.log(givingTagToMachine);
      myUsersModule.getPhotographers().then((photographers) => {
        console.log(photographers);
        const currentArrayOfPhotographe = photographers.filter(
          (photographe) => {
            return photographe.tags.includes(givingTagToMachine);
          }
        );
        // console.log(currentArrayOfPhotographe);
        showPhotographers(currentArrayOfPhotographe);
      });
    });
  });
};

export { FILTER_TAGS_MACHINE };
