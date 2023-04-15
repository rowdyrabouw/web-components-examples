const template = document.createElement("template");
template.innerHTML = `
  <style>@import "quote.css";</style>
  <style>
    :host {
      --primary-color: #81171B;
      --secondary-color: #FF6978;
    }
    blockquote { 
      color: var(--primary-color);
    }
    cite {
      color: var(--secondary-color);
    }
  </style>
  <blockquote><p>Mikey, that is so not right. That is so not right.</p><cite>Toto Wolff</cite></<blockquote>
`;

class BossQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("boss-quote", BossQuote);
