class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<blockquote><p>Because I'm Dutch</p><cite>Max Verstappen</cite></blockquote>`;
  }
}

customElements.define("driver-quote", DriverQuote);
