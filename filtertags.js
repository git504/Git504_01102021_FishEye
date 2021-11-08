// console.warn("FILTERTAGS.JS FONCTIONNE");
import { getPhotographers, showPhotographers } from "./displayusers.js";
("use strict");

// To get Id in Url's params
const params = new URLSearchParams(window.location.search);
let getTagOnUserPage = params.get("tag");
console.log("TAG ON USER PAGE :", getTagOnUserPage);

const headerFilterTags = document.querySelectorAll(".header__filter-tag");

const FILTER_TAGS_MACHINE = () => {
  headerFilterTags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.preventDefault();
      const givingTagToMachine = e.target.id;
      // console.log(givingTagToMachine);
      getPhotographers().then((photographers) => {
        // console.log(photographers);
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

// const isUserFiltered = async () => {
//   getPhotographers().then((photographers) => {
//     // console.log(photographers);
//     const currentArrayOfUserPhotographe = photographers.filter(
//       (photographe) => {
//         return photographe.tags.includes(getTagOnUserPage);
//       }
//     );
//     // console.log(currentArrayOfPhotographe);
//     showPhotographers(getTagOnUserPage);
//   });
// };
// export { isUserFiltered };
