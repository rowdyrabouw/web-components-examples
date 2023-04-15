1. insert in driver-quote.js

class DriverQuote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<p>Because I'm Dutch &mdash; Max Verstappen</p>`;
  }
}

customElements.define("driver-quote", DriverQuote);

2. insert in index.html

<driver-quote></driver-quote>
<script src="driver-quote.js"></script>