

export function mediaFactory(art, index) {
  if (art.hasOwnProperty("image")) {
    return `
      <a href="javascript:;" id="${index}" class="m__thumb">
    <img
    tabIndex = "4"
    src="./assets/SamplePhotos/${art.image}"
    alt="${art.altTxt}"
    class="media__thumb"
    role="img"
    />
    </a>
    `;
  } else if (art.hasOwnProperty("video")) {
    return `
      <a href="javascript:;"
      alt="lecture d'une vidéo"
      href="#"
      aria-label="lecture d'une vidéo"
      id="${index}"
      class="m__thumb"
      >
      <div class="media__playIcon"></div>
      <video
      controls
      tabindex="4"
      class="media__thumb"
          title="${art.altTxt}"
          role="video"
        >
          <track
            kind="subtitles"
            default
            src="./assets/SamplePhotos/videos/${art.vtt}"
            srclang="fr"
            label="français"
          />
          <source
            src="./assets/SamplePhotos/videos/${art.video}"
            type="video/mp4"
          />
        </video>
        </a>
      `;
  }
}
