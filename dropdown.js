// console.log("DROPDOWN.JS FONCTIONNE");

("use strict");

let sortMediaByFilter = (media, filter) => {
  switch (filter) {
    case "likes":
      return media.sort((a, b) => {
        return b[filter] - a[filter];
      });
    case "title":
      return media.sort((a, b) => {
        if (a[filter] < b[filter]) {
          return -1;
        }
        if (a[filter] > b[filter]) {
          return 1;
        }
        return 0;
      });
    case "date":
      return media.sort((a, b) => {
        return new Date(b[filter]) - new Date(a[filter]);
      });
    default:
      break;
  }
};
