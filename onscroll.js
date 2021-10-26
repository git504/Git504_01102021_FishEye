"use strict";

const anchor = document.querySelector(".anchor");

const passerAuContenu = () => {
  anchor.style.opacity = "1";
};

document.addEventListener("scroll", passerAuContenu);
