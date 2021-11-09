// console.warn("FILTERTAGS.JS FONCTIONNE");
import { getPhotographers, showPhotographers } from "./displayusers.js";
import { getUrlTag } from "./utils.js";

("use strict");

const headerFilterTags = document.querySelectorAll(".header__filter-tag");

// console.log("TAG ON USER PAGE :", getTagOnUserPage);

//FILTRER LES TAGS SUR LA PAGE INDEX
const FILTER_TAGS_MACHINE = () => {
  headerFilterTags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.preventDefault();
      const givingTagToMachine = e.target.id;
      isUserFiltered(givingTagToMachine);
      // console.log("hello");
    });
  });
};
export { FILTER_TAGS_MACHINE };

//FILTRER LES TAGS SUR LA PAGE USER
const isUserFiltered = (oneTag) => {
  getPhotographers().then((photographers) => {
    // console.log(photographers);
    const currentArrayOfUserPhotographe = photographers.filter(
      (photographe) => {
        return photographe.tags.includes(oneTag);
      }
    );
    // console.log(currentArrayOfUserPhotographe);
    showPhotographers(currentArrayOfUserPhotographe);
  });
};
export { isUserFiltered };

// To get Id in Url's params
const userTag = getUrlTag();
if (userTag !== null) {
  // console.log(userTag);
  isUserFiltered(userTag);
}
