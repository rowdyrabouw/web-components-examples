const template = document.createElement("template");
template.innerHTML = `
<blockquote><p>Because I'm Dutch</p><cite>Max Verstappen</cite></blockquote>
`;

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("driver-quote", DriverQuote);
