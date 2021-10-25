// // console.log("FETCH.JS FONCTIONNE");
("use strict");

function getUrl() {
  return "http://localhost:3000/api";
}

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
