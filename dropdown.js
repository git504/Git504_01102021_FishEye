// console.log("DROPDOWN.JS FONCTIONNE");
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
  // console.log(filter);
  // if (filter.textContent == "Titre") {
  //   console.log("oktitre");
  // }
  // let filterDTP = filter;
  // console.log(filterDTP);
  // } else if (filter.textContent === "Date") {
  //   console.log("okddate");
  //   // filter = "date";
  // } else if (filter.textContent === "Popularité") {
  //   console.log("okpop");
  // filter = "likes";
  // }
  // switch (filter) {
  //   case "likes":
  //     return media.sort((a, b) => {
  //       return b[filter] - a[filter];
  //     });
  //   case "title":
  //     return media.sort((a, b) => {
  //       if (a[filter] < b[filter]) {
  //         return -1;
  //       }
  //       if (a[filter] > b[filter]) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   case "date":
  //     return media.sort((a, b) => {
  //       return new Date(b[filter]) - new Date(a[filter]);
  //     });
  //   default:
  //     break;
  // }
};
