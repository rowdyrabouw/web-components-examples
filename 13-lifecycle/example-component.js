const template = document.createElement("template");
template.innerHTML = "Example Component";

class ExampleComponent extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("connectedCallback");
  }

  disconnectedCallback() {
    console.log("disconnectedCallback");
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log("attributeChangedCallback", `\nattrName: ${attrName}`, `\noldVal: ${oldVal}`, `\nnewVal: ${newVal}`);
  }
}

customElements.define("example-component", ExampleComponent);
