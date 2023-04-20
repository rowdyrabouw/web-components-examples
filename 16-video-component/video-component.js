const template = document.createElement("template");
template.innerHTML = `<div></div>`;

class VideoComponent extends HTMLElement {
  static get observedAttributes() {
    return ["data-youtube", "data-vimeo", "data-html5"];
  }

  set youtube(value) {
    this.videoElement.innerHTML = `
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="640" height="360" type="text/html" 
        src="https://www.youtube.com/embed/${value}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd1080&origin=https://youtubeembedcode.com">
      </iframe>
    `;
  }

  set vimeo(value) {
    this.videoElement.innerHTML = `
      <iframe width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
        src="https://player.vimeo.com/video/${value}">
      </iframe>
    `;
  }

  set html5(value) {
    this.videoElement.innerHTML = `
      <video controls width="640" height="360">
        <source src="${value}" type="video/mp4" />
      </video>
    `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.videoElement = this.shadowRoot.querySelector("div");
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (attrName) {
      case "data-youtube":
        this.youtube = newValue;
        break;
      case "data-vimeo":
        this.vimeo = newValue;
        break;
      case "data-html5":
        this.html5 = newValue;
        break;
    }
  }
}

customElements.define("video-component", VideoComponent);
