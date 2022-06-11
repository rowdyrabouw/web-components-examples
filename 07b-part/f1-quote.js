const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      --primary-color: #FFCC01;
      --secondary-color: #D2003D;
      --tertiary-color: #005B9C;
    }
    p {
      color: var(--primary-color);
      background-color: var(--secondary-color);
      border: 4px solid var(--tertiary-color);
      border-radius: 0.5rem;
      padding: 1rem 2rem;
    }
  </style>
  <p part="quote">Woah! There's a giant lizard on the track! &mdash; Max Verstappen</p>
`;

class F1Quote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("f1-quote", F1Quote);
