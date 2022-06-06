const template = document.createElement("template");
template.innerHTML = `<p><slot></slot></p>`;

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("driver-quote", DriverQuote);
