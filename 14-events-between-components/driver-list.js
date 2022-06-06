const template = document.createElement("template");
template.innerHTML = `
  <style>
    select { 
      font-size: 1rem; 
      padding: 0.2em 0.5em
    }
  </style>
  <select></select>
`;

class DriverList extends HTMLElement {
  get drivers() {
    return this._drivers;
  }

  set drivers(value) {
    this._drivers = value;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.driverListElement = this.shadowRoot.querySelector("select");
  }

  _render() {
    this._drivers.forEach((driver) => {
      const option = document.createElement("option");
      option.value = driver.driverId;
      option.textContent = `${driver.givenName} ${driver.familyName}`;
      this.driverListElement.appendChild(option);
    });
    this.driverListElement.addEventListener("change", () => {
      const driver = this._drivers.find((driver) => driver.driverId === this.driverListElement.value);
      this.dispatchEvent(new CustomEvent("selectDriver", { detail: driver }));
    });
  }
}

customElements.define("driver-list", DriverList);
