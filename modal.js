// console.log("MODAL.JS FONCTIONNE");

("use strict");

const getModal = document.getElementById("modalForm");

const launchModal = () => {
  console.log("FOCUS to open modal");
  getModal.style.display = "flex";
};

const closeModal = () => {
  console.log("FOCUS to close modal");
  getModal.style.display = "none";
};

export { launchModal, closeModal };
