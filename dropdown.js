// console.log("DROPDOWN.JS FONCTIONNE");
("use strict");

let custoMenu = document.querySelector(".filter__custom-menu");
let customArrow = document.querySelector(".filter__custom-arrow");

export const getUpDownMenu = () => {
  if (custoMenu.style.display === "flex") {
    custoMenu.style.display = "none";
    customArrow.style.transform = "rotate(0deg)";
    console.log("to close");
  } else {
    custoMenu.style.display = "flex";
    customArrow.style.transform = "rotate(180deg)";
    console.log("to open");
  }
};

let displaySelectOptions = () => {
  let select = document.querySelector(".filter__custom-select");
  let inputSelect = document.querySelector(".filter__select");
  select.addEventListener("click", () => {
    const option = document.querySelector(".filter__custom-menu");
    const arrow = document.querySelector(".filter__custom-arrow", "before");
    // if the class is not present in the HTML Element then we add it
    if (!option.classList.contains("filter__show")) {
      option.classList.add("filter__show");
      arrow.style.transform = "rotate(180deg)";
      inputSelect.setAttribute("aria-expanded", true);
    }
    // else we remove it
    else {
      arrow.style.transform = "rotate(0deg)";
      option.classList.remove("filter__show");
      inputSelect.setAttribute("aria-expanded", false);
    }
  });
};

const sortMediaByFilter = (media, filter) => {
  switch (filter) {
    case "likes":
      return media.sort((a, b) => {
        return b[filter] - a[filter];
      });
    case "title":
      return media.sort((a, b) => {
        if (a[filter] < b[filter]) {
          return -1;
        }
        if (a[filter] > b[filter]) {
          return 1;
        }
        return 0;
      });
    case "date":
      return media.sort((a, b) => {
        return new Date(b[filter]) - new Date(a[filter]);
      });
    default:
      break;
  }
};
