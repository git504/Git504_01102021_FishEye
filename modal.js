const isClose = document.getElementById("closeModal");
const getModal = document.getElementById("modalForm");

const launchModal = () => {
  getModal.style.display = "flex";
};

const closeModal = () => {
  window.onclick = (event) => {
    if (event.target == isClose) {
      getModal.style.display = "none";
    }
  };
};
export { launchModal, closeModal };
