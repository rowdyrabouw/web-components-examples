const template = document.createElement("template");
template.innerHTML = `
  <style>@import "quote.css";</style>
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
