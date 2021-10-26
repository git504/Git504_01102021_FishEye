import * as myFetchModule from "./fetch.js";
("use strict");

// const params = new URLSearchParams(window.location.search);
// let iserId = params.get("id");
// console.log(userId);

const getMedias = async () => {
  const db = await myFetchModule.getDatas();
  const medias = db.media;

  console.log(medias);
};

export { getMedias };

// class users {
//   constructor(name, id, city, country, tags, tagline, price, portrait) {
//     this.name = name;
//     this.id = id;
//     this.city = city;
//     this.country = country;
//     this.tags = tags;
//     this.tagline = tagline;
//     this.price = price;
//     this.portrait = portrait;
//   }
//   presenteUser() {
//     console.log(
//       `Je suis un user de nom ${this.name} et de location ${this.city}`
//     );
//   }
// }
// export { users };

// const user = new user("sylvain", "3232121");
// users.presenteUser();
