const getTagsHTML = document.querySelectorAll(".header__filter-tag");

export const filterTags = () => {
  getTagsHTML.forEach((tagHTML) => {
    tagHTML.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.currentTarget.getAttribute("tag"));
    });
  });
};
