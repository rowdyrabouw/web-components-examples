const template = document.createElement("template");
template.innerHTML = `
  <style>@import "quote.css";</style>
  <style>
    :host {
      --primary-color: #000;
      --secondary-color: #000;
    }
    blockquote { 
      color: var(--primary-color);
    }
    cite {
      color: var(--secondary-color);
    }
  </style>
  <blockquote><p>Because I'm Dutch.</p><cite>Max Verstappen</cite></blockquote>
`;

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("driver-quote", DriverQuote);
