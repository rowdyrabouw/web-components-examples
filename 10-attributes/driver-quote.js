const template = document.createElement("template");
template.innerHTML = `
  <style>@import "quote.css";</style>
  <style>
    :host {
      --primary-color: #F74F33;
      --secondary-color: #005b9c;
    }
    blockquote { 
      color: var(--primary-color);
    }
    cite {
      color: var(--secondary-color);
    }
  </style>
  <blockquote><p></p><cite></cite></blockquote>
`;

class DriverQuote extends HTMLElement {
  static get observedAttributes() {
    return ["quote"];
  }

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

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "quote") {
      this.quote = newValue;
    }
  }
}

customElements.define("driver-quote", DriverQuote);
