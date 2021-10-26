// console.log("FILTERTAGS.JS FONCTIONNE");

("use strict");

const getTagsHTML = document.querySelectorAll(".header__filter-tag");

export const FILTER_TAGS = () => {
  getTagsHTML.forEach((tagHTML) => {
    tagHTML.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id);
    });
  });
};

// console.log(e.currentTarget.getAttribute("tag"));
// const queryString_URL_Tag = window.location.search;
// const searchParamsTag = new URLSearchParams(queryString_URL_Tag);
// const tagFromUrl = searchParamsTag.get("tag");
