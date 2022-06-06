const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  --primary-color: blue;
}
p {
  color: var(--primary-color);
}
</style>
<p>Woah! There's a giant lizard on the track! &mdash; Max Verstappen</p>`;

class F1Quote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("f1-quote", F1Quote);
