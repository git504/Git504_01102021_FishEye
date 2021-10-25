import * as myFetchModule from "./fetch.js";
("use strict");

const getMedias = async () => {
  const db = await myFetchModule.getDatas();
  const medias = db.media;
  console.log(medias);
};

export { getMedias };
