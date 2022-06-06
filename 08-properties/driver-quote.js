const template = document.createElement("template");
template.innerHTML = `<p></p>`;

class DriverQuote extends HTMLElement {
  set quote(value) {
    this._quote = value;
    this.quoteElement.innerHTML = this._quote;
  }

  get quote() {
    return this._quote;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.quoteElement = this.shadowRoot.querySelector("p");
  }
}

customElements.define("driver-quote", DriverQuote);
