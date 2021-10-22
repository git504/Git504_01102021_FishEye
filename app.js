("use strict");
console.log("APP.JS FONCTIONNE");

import * as myFetchModule from "./fetch.js";
import * as myFilterModule from "./filtertags.js";
import * as myModalModule from "./modal.js";
import * as mySliderModule from "./slider.js";

myFetchModule.REQUESTS();
myFilterModule.FILTER_TAGS();
