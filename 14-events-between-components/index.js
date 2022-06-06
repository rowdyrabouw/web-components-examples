import "./driver-list.js";
import "./driver-detail.js";

const driverListComponent = document.querySelector("driver-list");
const driverDetailComponent = document.querySelector("driver-detail");

driverListComponent.addEventListener("selectDriver", (e) => (driverDetailComponent.driver = e.detail));

fetch("http://ergast.com/api/f1/2021/drivers.json")
  .then((res) => res.json())
  .then((data) => {
    const drivers = data.MRData.DriverTable.Drivers;
    driverListComponent.drivers = drivers;
    driverDetailComponent.driver = drivers[0];
  });
