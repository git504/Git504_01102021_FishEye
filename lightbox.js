const LIGHTBOX = () => {
  //If you want to include more images, add the link name and URL of the image in the array list below.
  let images_list = [
    {
      url: "./assets/SamplePhotos/Mimi/Animals_Rainbow.jpg",
      name: "image 1",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Animals_Wild_Horses_in_the_mountains.mp4",
      name: "image 2",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Event_BenevidesWedding.jpg",
      name: "image 3",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Event_PintoWedding.jpg",
      name: "image 4",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Portrait_Background.jpg",
      name: "image 5",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Portrait_Nora.jpg",
      name: "image 5",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Portrait_Wednesday.jpg",
      name: "image 5",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Travel_HillsideColor.jpg",
      name: "image 5",
      link: "",
    },
    {
      url: "./assets/SamplePhotos/Mimi/Travel_Lonesome.jpg",
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
      ' class="lightbox__slides animated"' +
      (i === 0 ? ' style="display:block"' : "") +
      ">" +
      '<img src="' +
      images_list[i].url +
      '" alt="' +
      images_list[i].name +
      '">' +
      '<span class="lightbox__slide-text">' +
      images_list[i].name +
      "</span>" +
      "</a>";
  }
  slider_id.querySelector(".lightbox__slider-body").innerHTML = images_div;
  let slide_index = 0;

  let images = slider_id.querySelectorAll(".lightbox__slides");
  let prev_button = slider_id.querySelector(".lightbox__slide-prev");
  let next_button = slider_id.querySelector(".lightbox__slide-next");

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
// export { LIGHTBOX };
