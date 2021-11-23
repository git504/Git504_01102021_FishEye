// console.log("LIKE.JS FONCTIONNE");
("use strict");

// Compteur de likes
export const increaseOrDecreaseLikesAndTotalLikes = () => {
  const likesElements = document.querySelectorAll(".media__likes");
  likesElements.forEach((like) => {
    // console.log(like.previousElementSibling);
    ["click", "keyup"].forEach((event) =>
      like.addEventListener(event, (e) => {
        let totalLikes = document.querySelector(".infos__totalLikes");
        if (e.key == "Enter") {
          if (!like.classList.contains("media__liked")) {
            increaseLikesAndTotalLikes(totalLikes, like);
          } else {
            decreaseLikesAndTotalLikes(totalLikes, like);
          }
        } else if (e.type == "click") {
          if (!like.classList.contains("media__liked")) {
            increaseLikesAndTotalLikes(totalLikes, like);
          } else {
            decreaseLikesAndTotalLikes(totalLikes, like);
          }
        }
      })
    );
  });
};
export const increaseLikesAndTotalLikes = (totalLikes, like) => {
  // console.log(totalLikes);
  ++totalLikes.innerText;
  ++like.previousElementSibling.innerText;
  like.classList.add("media__liked");
  // like.firstChild.nextElementSibling.setAttribute("fill", "#901c1c");
  // console.log(like.firstChild.nextElementSibling);
};

export const decreaseLikesAndTotalLikes = (totalLikes, like) => {
  --totalLikes.innerText;
  --like.previousElementSibling.innerText;
  like.classList.remove("media__liked");
  // console.log(like.firstChild.nextElementSibling);
  // like.firstChild.nextElementSibling.setAttribute("fill", "grey");
};
