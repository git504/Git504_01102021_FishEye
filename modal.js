// console.log("MODAL.JS FONCTIONNE");

("use strict");

const getModal = document.getElementById("modalForm");

const launchModal = () => {
  console.log("FOCUS to open modal");
  getModal.style.display = "flex";
  document.querySelector("#firstname").focus();
};

const closeModal = () => {
  console.log("FOCUS to close modal");
  getModal.style.display = "none";
};

const keyPressModal = (e) => {
  // console.log(e);
  if (e.keyCode === 27) {
    closeModal();
    document.querySelector(".user__contactButton").focus();
  }
};

export { launchModal, closeModal, keyPressModal };
