class DriverDetail extends HTMLElement {
  get driver() {
    return this._driver;
  }

  set driver(value) {
    this._driver = value;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  _properDate(str) {
    return str.split("-").reverse().join("-");
  }
  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        ul {
         list-style: none;
         padding: 0;
        }
        li {
          padding-bottom: 0.5rem;
        }
      </style>
      <h2>${this.driver.givenName} ${this.driver.familyName}</h2>
      <ul>
        <li>Permanent number: ${this.driver.permanentNumber}</li>
        <li>Nationality: ${this.driver.nationality}</li>
        <li>Date of birth: ${this._properDate(this.driver.dateOfBirth)}</li>
      </ul>
    `;
  }
}

customElements.define("driver-detail", DriverDetail);
