const template = document.createElement("template");
template.innerHTML = `
<style>@import "quote.css";</style>
<style>blockquote { color: #F74F33; }</style>
<blockquote><p>Because I'm Dutch</p><cite>Max Verstappen</cite></blockquote>
`;

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("driver-quote", DriverQuote);
