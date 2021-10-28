import * as myFetchModule from "./fetch.js";

("use strict");

const getPhotographers = async () => {
  const db = await myFetchModule.getDatas();
  const photographers = db.photographers;
  // console.log(photographers);
  showPhotographers(photographers);
  return photographers;
};
export { getPhotographers };

export const showPhotographers = (arrayofphotographs) => {
  const insertUsers = document.getElementById("users");
  let listOfUsers = "";

  // On crée l'affichage de la liste des produits proposés qui sera présente sur l'index avec la méthode map. $ = STRING INTERPOLATION
  arrayofphotographs.map((photographer) => {
    // console.log(photographer);
    let listOfTags = "";

    for (const tag of photographer.tags) {
      //   console.log(tag);
      listOfTags += `<li class="user__tag">
          <a id="${tag}"
          class="user__filter-tag"
      >${tag}</a
      >
    </li>`;
    }
    listOfUsers += `
        <article
        tabindex="2"
        class="user"
        aria-labelledby="users"
        aria-posinset="1"
        aria-setsize="6"
        >
        <a href="user.html?${photographer.id}" class="user__header">
        <img
        class="user__img"
        src="./assets/SamplePhotos/PhotographersIDPhotos/${photographer.portrait}"
        alt="${photographer.name} + ${photographer.tagline}"
        />
        <h2 class="user__name">${photographer.name}</h2>
        </a>
        <aside class="user__content">
        <p class="user__location">${photographer.city}, ${photographer.country}</p>
        <p class="user__tagline">${photographer.tagline}</p>
        <p class="user__price">${photographer.price} €</p>
        </aside>
        <nav
        role="navigation"
        aria-label="Chercher par catégorie"
        class="card__nav"
        >
        <ul
        role="navigation"
        aria-label="Chercher par catégorie"
        class="user__tags"
        >
        ${listOfTags}
    </ul>
    </nav>
    </article>
    `;
  });
  insertUsers.innerHTML = listOfUsers;
};
