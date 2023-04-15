import "./example-component.js";

const component = document.querySelector("example-component");
const result = document.querySelector("#result");
const circuitMap = document.querySelector("#map");

const map = L.map("map").setView([-23.7036, -46.6997], 14);
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm93ZHlyYWJvdXciLCJhIjoiY2wybjkybGdsMTdvOTNkbDF5dXI0bm93YyJ9.9ZmApFOe3AMtKnWPkaSsrQ", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "pk.eyJ1Ijoicm93ZHlyYWJvdXciLCJhIjoiY2wybjkybGdsMTdvOTNkbDF5dXI0bm93YyJ9.9ZmApFOe3AMtKnWPkaSsrQ",
}).addTo(map);

component.addEventListener("webComponentClick", (e) => {
  console.log(e.detail);
  const circuit = e.detail;
  result.innerHTML = `
    <h2 class="mb0">${circuit.circuitName}</h2>
    ${circuit.Location.locality}, 
    ${circuit.Location.country}
    `;
  map.setView([circuit.Location.lat, circuit.Location.long], 14);
  circuitMap.style.visibility = "visible";
});
