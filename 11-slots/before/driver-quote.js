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
  <blockquote><p><slot></slot></p><cite></cite></blockquote>
`;

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("driver-quote", DriverQuote);
