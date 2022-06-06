const template = document.createElement("template");
template.innerHTML = `<p>Woah! There's a giant lizard on the track! &mdash; Max Verstappen</p>`;

class F1Quote extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("f1-quote", F1Quote);
