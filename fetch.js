("use strict");

const URL_PHOTOGRAPHERS = "http://localhost:3000/photographers";
const URL_MEDIA = "http://localhost:3000/media";

// Promise.all , exécute nos requêtes en parallèle et en séquence.
const requests = async () => {
  await Promise.all([fetch(URL_PHOTOGRAPHERS), fetch(URL_MEDIA)])
    .then(([photographers, media]) => {
      const A_FETCH = photographers.json();
      const B_FETCH = media.json();
      return [A_FETCH, B_FETCH];
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err, "Une erreur est survenue");
    });
};
export { requests };

class vehicule {
  constructor(marque, model) {
    this.marque = marque;
    this.model = model;
  }
  presenteVehicule() {
    console.log(
      `Je suis un vehicule de marque ${this.marque} et de model ${this.model}`
    );
  }
}
export { vehicule };
