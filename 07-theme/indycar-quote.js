const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      --primary-color: #000000;
      --secondary-color: #01ED02;
      --tertiary-color: #BE0275;
    }
    p { 
      color: var(--indycar-primary-color, var(--primary-color));
      background-color: var(--indycar-secondary-color, var(--secondary-color));
      border: 4px solid var(--indycar-tertiary-color, var(--tertiary-color));
      border-radius: 0.5rem;
      padding: 1rem 2rem;
    }
  </style>
  <p>I've never seen myself as a 'girl driver'. I'm just a driver. &mdash; Danica Patrick</p>
`;

class IndyCarQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("indycar-quote", IndyCarQuote);
