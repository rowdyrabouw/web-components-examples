1.create driver-quote.js

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<blockquote><p>Because I'm Dutch</p><cite>Max Verstappen</cite></blockquote>`;
  }
}

customElements.define("driver-quote", DriverQuote);

2. insert in index.html

<driver-quote></driver-quote>
<script src="driver-quote.js"></script>