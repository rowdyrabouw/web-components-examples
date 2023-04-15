const template = document.createElement("template");
template.innerHTML = `
<style>@import "quote.css";</style>
<style>
  .card {
    border-radius: 1rem;
    background: #BD0019;
    border: 1px solid #000000;
    display: flex;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  cite {
    font-size: 2rem;
    margin: 0rem;
    text-align: center;
    color: #fff;
    background-color: #000;
    padding: 1rem 0;
  }
  blockquote {
    color: #fff;
    margin: 1rem 0 2rem 0;
    width: 100%;
    text-align: center;
  }
  blockquote p::before,
  blockquote p::after {
    opacity: 0.8;
    text-shadow: 2px 3px 0px #8C1D1F, 2px 6px 0px #601415;
  }
  </style>
  <div class="card">
    <img alt="">
    <cite><slot name="driver"></slot></cite>
    <blockquote><p><slot></slot></p></blockquote>
  </div>
`;
// template.innerHTML = `
//   <style>@import "quote.css";</style>
//   <img alt="">
//   <blockquote><p><slot></slot></p><cite><slot name="driver"></slot></cite></blockquote>
// `;

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
