console.log("%c APP status ok", "color: green; font-weight:bold;");
("use strict");

import * as myFilterModule from "./filtertags.js";
import * as myUsersModule from "./displayusers.js";
import * as myAnchorModule from "./onscroll.js";

myUsersModule.getPhotographers();
myFilterModule.FILTER_TAGS_MACHINE();
