const template = document.createElement("template");
template.innerHTML = `
  <style>
    button {
      padding: 0.5rem 1rem;
      font-family: "formula1";
      background-color: #e10601;
      border: 1px solid #e10601;
      border-radius: 0.5rem;
      color: #ffffff;
      font-size: 1rem;
    }
  </style>
  <button>Dispatch event</button>`;

class ExampleComponent extends HTMLElement {
  static _circuits;

  constructor() {
    super();
    fetch("http://ergast.com/api/f1/drivers/max_verstappen/circuits.json?limit=100")
      .then((res) => res.json())
      .then((data) => {
        this._circuits = data.MRData.CircuitTable.Circuits;
        console.log(this._circuits);
      });

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("button").addEventListener("click", () => this._dispatchClick());
  }

  _dispatchClick() {
    const randomCircuit = this._circuits[Math.floor(Math.random() * this._circuits.length)];
    this.dispatchEvent(new CustomEvent("webComponentClick", { detail: randomCircuit }));
  }
}

customElements.define("example-component", ExampleComponent);
