1. insert in f1-quote.js

class F1Quote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<p>Woah! There's a giant lizard on the track! &mdash; Max Verstappen</p>`;
  }
}

customElements.define("f1-quote", F1Quote);

2. insert in index.html

<f1-quote></f1-quote>
<script src="f1-quote.js"></script>