console.log("%c APP status ok", "color: green; font-weight:bold;");
("use strict");

import * as myFilterModule from "./filtertags.js";
// import * as myModalModule from "./modal.js";
// import * as mySliderModule from "./slider.js";
import * as myLikesModule from "./likes.js";
import * as myUsersModule from "./displayusers.js";
import * as myUserModule from "./displayuser.js";
import * as myDropdownModule from "./dropdown.js";

myFilterModule.FILTER_TAGS();
myUserModule.getMedias();
myUsersModule.getPhotographers();

// class vehicule {
//   constructor(marque, model) {
//     this.marque = marque;
//     this.model = model;
//   }
//   presenteVehicule() {
//     console.log(
//       `Je suis un vehicule de marque ${this.marque} et de model ${this.model}`
//     );
//   }
// }
// export { vehicule };

// const car = new vehicule("renault", "clio");
// car.presenteVehicule();
