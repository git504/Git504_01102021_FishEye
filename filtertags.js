// console.log("FILTERTAGS.JS FONCTIONNE");
import { getPhotographers, showPhotographers } from "./displayusers.js";
("use strict");
// import * as myFilterModule from "./filtertags.js";
// myFilterModule.FILTER_TAGS_MILL();
const headerFilterTags = document.querySelectorAll(".header__filter-tag");
const userTags = document.querySelectorAll(".user__tag");
const photographesCards = document.querySelectorAll(".user");

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

// const FILTER_TAGS_MILL = () => {
//   userTags.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log("bonjour");
//   const givingTagToMill = e.currentTarget.id;
//   console.log(givingTagToMill);
//   getPhotographers().then((photographers) => {
//     // console.log(photographers);
//     const currentArrayOfPhotographe = photographers.filter(
//       (photographe) => {
//         return photographe.tags.includes(givingTagToMill);
//       }
//     );
//     // console.log(currentArrayOfPhotographe);
//     showPhotographers(currentArrayOfPhotographe);
//   });
//     });
//   });
// };
// export { FILTER_TAGS_MILL };
