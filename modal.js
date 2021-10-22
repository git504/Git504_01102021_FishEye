console.log("MODAL.JS FONCTIONNE");

("use strict");

const getModal = document.getElementById("modalForm");
const toOpenModal = document.getElementById("btnModal");
const toCloseModal = document.getElementById("closeModal");

const launchModal = () => {
  console.log("FOCUS to open modal");
  getModal.style.display = "flex";
};
toOpenModal.addEventListener("focus", launchModal);

const closeModal = () => {
  console.log("FOCUS to close modal");
  getModal.style.display = "none";
};
toCloseModal.addEventListener("focus", closeModal);
