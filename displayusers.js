import * as myFetchModule from "./fetch.js";
("use strict");

const getPhotographers = async () => {
  const db = await myFetchModule.getDatas();
  const photographers = db.photographers;
  console.log(photographers);
  showPhotographers(photographers);
};
export { getPhotographers };

const showPhotographers = (arrayofphotographs) => {
  const insertUsers = document.getElementById("users");
  const insertTags = document.querySelector(".user__tag");
  let listOfUsers = "";

  // On crée l'affichage de la liste des produits proposés qui sera présente sur l'index avec la méthode map. $ = STRING INTERPOLATION
  arrayofphotographs.map((i) => {
    console.log(i);
    let listOfTags = "";

    for (const iterator of i.tags) {
      console.log(iterator);
      listOfTags += `<li class="user__tag">
          <a id="${iterator}"
          tag="portrait"
          href="./index.html"
          class="user__filter-tag"
      >${iterator}</a
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
        <a href="user.html?${i.id}" class="user__header">
        <img
        class="user__img"
        src="./assets/SamplePhotos/PhotographersIDPhotos/${i.portrait}"
        alt="architecure"
        />
        <h2 class="user__name">${i.name}</h2>
        </a>
        <aside class="user__content">
        <p class="user__location">${i.city}</p>
        <p class="user__tagline">${i.tagline}</p>
        <p class="user__price">${i.price} €</p>
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
