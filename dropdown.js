// console.log("DROPDOWN.JS FONCTIONNE");
// import { showMedias } from "./displayuser";
("use strict");

let custoMenu = document.querySelector(".filter__custom-menu");
let customArrow = document.querySelector(".filter__custom-arrow");
let getButtontoFilter = document.getElementById("btndrop");
// let filter = getButtontoFilter.textContent;
let getAllLi = document.querySelectorAll(".filter__custom-option");

export const getUpDownMenu = (e) => {
  // console.log(e.currentTarget.id);

  if (custoMenu.style.display === "flex") {
    custoMenu.style.display = "none";
    customArrow.style.transform = "rotate(0deg)";
    console.log("to close filter DROPDOWN");
  } else {
    custoMenu.style.display = "flex";
    customArrow.style.transform = "rotate(180deg)";
    console.log("to open filter DROPDOWN");
  }
};

export const sortMediaByFilter = (media, filter) => {
  let datelikespopularite = "";

  if (filter.value === "Date") {
    datelikespopularite = "date";
    console.log(datelikespopularite);
  } else if (filter.value === "Titre") {
    datelikespopularite = "title";
    console.log(datelikespopularite);
  } else if (filter.value === "Popularité") {
    datelikespopularite = "likes";
    console.log(datelikespopularite);
  }

  switch (datelikespopularite) {
    case "likes":
      return media.sort((a, b) => {
        return b[datelikespopularite] - a[datelikespopularite];
      });
    case "title":
      return media.sort((a, b) => {
        if (a[datelikespopularite] < b[datelikespopularite]) {
          return -1;
        }
        if (a[datelikespopularite] > b[datelikespopularite]) {
          return 1;
        }
        return 0;
      });

    case "date":
      return media.sort((a, b) => {
        return (
          new Date(b[datelikespopularite]) - new Date(a[datelikespopularite])
        );
      });
    default:
      break;
  }
};
