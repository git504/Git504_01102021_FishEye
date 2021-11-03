// console.log("FETCH.JS FONCTIONNE");
("use strict");

const getUrl = () => {
  return "http://localhost:3000/api";
};
export { getUrl };

const getDatas = async () => {
  return await fetch(getUrl())
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
export { getDatas };
