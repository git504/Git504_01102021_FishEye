const getTagsHTML = document.querySelectorAll(".header__filter-tag");

export const FILTER_TAGS = () => {
  getTagsHTML.forEach((tagHTML) => {
    tagHTML.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.currentTarget.getAttribute("tag"));
    });
  });
};
