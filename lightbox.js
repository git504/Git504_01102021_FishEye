const LIGHTBOX = () => {
  //If you want to include more images, add the link name and URL of the image in the array list below.
  let images_list = [
    {
      url: "https://www.html-code-generator.com/images/slider/1.png",
      name: "image 1",
      link: "",
    },
    {
      url: "https://www.html-code-generator.com/images/slider/2.png",
      name: "image 2",
      link: "",
    },
    {
      url: "https://www.html-code-generator.com/images/slider/3.png",
      name: "image 3",
      link: "",
    },
    {
      url: "https://www.html-code-generator.com/images/slider/4.png",
      name: "image 4",
      link: "",
    },
    {
      url: "https://www.html-code-generator.com/images/slider/5.png",
      name: "image 5",
      link: "",
    },
  ];

  let slider_id = document.querySelector("#lightbox");

  // append all images
  let dots_div = "";
  let images_div = "";
  for (let i = 0; i < images_list.length; i++) {
    // if no link without href="" tag
    let href =
      images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"';
    images_div +=
      "<a" +
      href +
      ' class="hcg-slides animated"' +
      (i === 0 ? ' style="display:block"' : "") +
      ">" +
      '<img src="' +
      images_list[i].url +
      '" alt="' +
      images_list[i].name +
      '">' +
      '<span class="hcg-slide-text">' +
      images_list[i].name +
      "</span>" +
      "</a>";
  }
  slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
  let slide_index = 0;

  let images = slider_id.querySelectorAll(".hcg-slides");
  let prev_button = slider_id.querySelector(".hcg-slide-prev");
  let next_button = slider_id.querySelector(".hcg-slide-next");

  function showSlides() {
    if (slide_index > images.length - 1) {
      slide_index = 0;
    }
    if (slide_index < 0) {
      slide_index = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      if (i == slide_index) {
        images[i].style.display = "block";
      }
    }
  }

  prev_button.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      slide_index--;
      showSlides();
    },
    false
  );

  next_button.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      slide_index++;
      showSlides();
    },
    false
  );
};
export { LIGHTBOX };
