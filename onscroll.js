// console.log("ONSCROLL.JS OK");
"use strict";

const anchor = document.querySelector(".anchor");
const headerOnIndexPage = document.querySelector(".header");
const { scrollTop } = document.documentElement;
const topElementToTopViewPort = headerOnIndexPage.getBoundingClientRect().top;
// console.log(scrollTop);
// console.log(topElementToTopViewPort);

const passerAuContenu = () => {
  if (scrollTop > (scrollTop + topElementToTopViewPort).toFixed()) {
    anchor.style.opacity = "0";
  } else {
    anchor.style.opacity = "1";
  }
};

window.addEventListener("scroll", passerAuContenu);
