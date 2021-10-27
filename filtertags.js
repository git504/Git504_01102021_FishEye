// console.log("FILTERTAGS.JS FONCTIONNE");
("use strict");

const headerFilterTags = document.querySelectorAll(".header__filter-tag");
const photographesCards = document.querySelectorAll(".user");

const FILTER_TAGS = () => {
  headerFilterTags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.preventDefault();
      const givingTagToMachine = e.target.id;
      console.log(givingTagToMachine);

      for (const photographeCard of photographesCards) {
        console.log(photographeCard);
        photographeCard.classList.remove("active");
        photographeCard.classList.add("delete");

        const tagsByCard = photographeCard.querySelectorAll(
          "nav > ul li a.user__filter-tag"
        );

        for (let tag of tagsByCard) {
          // console.log(tag);
          if (tag.textContent == givingTagToMachine) {
            photographeCard.classList.remove("delete");
            photographeCard.classList.add("active");
          }
        }
      }
    });
  });
};

export { FILTER_TAGS };
