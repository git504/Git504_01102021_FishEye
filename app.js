console.log("%c APP status ok", "color: green; font-weight:bold;");
("use strict");

import * as myFilterModule from "./filtertags.js";
import * as myUsersModule from "./displayusers.js";
import * as myAnchorModule from "./onscroll.js";

const photographers = myUsersModule.getPhotographers();
//   .then(myUsersModule.FILTER_TAGS_MILL());
myFilterModule.FILTER_TAGS_MACHINE();
// myUserModule.getMedias();
