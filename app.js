console.log("%c APP status ok", "color: green; font-weight:bold;");
("use strict");

import * as myFilterModule from "./filtertags.js";
// import * as myModalModule from "./modal.js";
// import * as mySliderModule from "./slider.js";
import * as myLikesModule from "./likes.js";
import * as myUsersModule from "./displayusers.js";
import * as myUserModule from "./displayuser.js";
import * as myDropdownModule from "./dropdown.js";
import * as myAnchorModule from "./onscroll.js";

const photographers = myUsersModule.getPhotographers();
myFilterModule.FILTER_TAGS_MACHINE();
myUserModule.getMedias();

// console.log(e.currentTarget.getAttribute("tag"));
// const queryString_URL_Tag = window.location.search;
// const searchParamsTag = new URLSearchParams(queryString_URL_Tag);
// const tagFromUrl = searchParamsTag.get("tag");
