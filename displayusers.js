import * as myFetchModule from "./fetch.js";
("use strict");

const getPhotographers = async () => {
  const db = await myFetchModule.getDatas();
  const photographers = db.photographers;
  console.log(photographers);

  const insertUsers = document.getElementById("users");
  let listOfUsers = "";

  // On crée l'affichage de la liste des produits proposés qui sera présente sur l'index avec la méthode map. $ = STRING INTERPOLATION
  photographers.map((i) => {
    console.log(i);
    listOfUsers += `
    <article
    tabindex="2"
    class="user"
    aria-labelledby="users"
    aria-posinset="1"
    aria-setsize="6"
  >
    <a href="user.html" class="user__header">
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
        <li class="user__tag">
          <a
            tag="portrait"
            href="./index.html?tag=portrait"
            class="user__filter-tag"
            >#portrait</a
          >
        </li>
        <li class="user__tag">
          <a
            tag="portrait"
            href="./index.html?tag=portrait"
            class="user__filter-tag"
            >#portrait</a
          >
        </li>
        <li class="user__tag">
          <a
            tag="portrait"
            href="./index.html?tag=portrait"
            class="user__filter-tag"
            >#portrait</a
          >
        </li>
        <li class="user__tag">
          <a
            tag="portrait"
            href="./index.html?tag=portrait"
            class="user__filter-tag"
            >#portrait</a
          >
        </li>
        <li class="user__tag">
          <a
            tag="portrait"
            href="./index.html?tag=portrait"
            class="user__filter-tag"
            >#portrait</a
          >
        </li>
      </ul>
    </nav>
  </article>
        `;
  });

  insertUsers.innerHTML = listOfUsers;
};

export { getPhotographers };
