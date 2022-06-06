class F1Quote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<p>Woah! There's a giant lizard on the track! &mdash; Max Verstappen</p>`;
  }
}

customElements.define("f1-quote", F1Quote);
