class DriverDetail extends HTMLElement {

  get driver() {
    return this._driver;
  }

  set driver(value) {
    this._driver = value;
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  readableDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  }

  render() {
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
        <li>Driver code: ${this.driver.code}</li>
        <li>Permanent number: ${this.driver.permanentNumber}</li>
        <li>Nationality: ${this.driver.nationality}</li>
        <li>Date of birth: ${this.readableDate(this.driver.dateOfBirth)}</li>
      </ul>
    `;
  }
}

customElements.define("driver-detail", DriverDetail);
