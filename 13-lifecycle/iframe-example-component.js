const template = document.createElement("template");
template.innerHTML = "Example Component in iFrame";

class iFrameExampleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  adoptedCallback() {
    console.log("adoptedCallback");
  }
}

customElements.define("iframe-example-component", iFrameExampleComponent);
