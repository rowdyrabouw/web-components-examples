const template = document.createElement("template");
template.innerHTML = `
  <style>
  .card {
    border: 1px solid #000000;
    border-radius: 1rem;
  }
  img {
    max-width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  h2 {
    margin: 0;
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #000000;
  }
  p {
    margin: 0;
    padding: 1rem 1rem;
  }
  </style>
  <div class="card">
    <img alt="">
    <h2><slot name="driver"></slot></h2>
    <p><slot></slot></p>
  </div>
`;

class DriverQuote extends HTMLElement {
  static get observedAttributes() {
    return ["image"];
  }

  set image(value) {
    this._image = value;
    this.imgElement.src = this._image;
  }

  get image() {
    return this._quote;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.imgElement = this.shadowRoot.querySelector("img");
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "image") {
      this.image = newValue;
    }
  }
}

customElements.define("driver-quote", DriverQuote);
