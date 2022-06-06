import "./example-component.js";

const toggle = document.querySelector("#toggleComponent");
const component = document.querySelector("#component");

toggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    component.appendChild(document.createElement("example-component"));
  } else {
    component.removeChild(document.querySelector("example-component"));
  }
});

const adopt = document.querySelector("button");
adopt.addEventListener("click", (e) => {
  const iframe = document.querySelector("iframe");
  const iframeComponent = iframe.contentDocument.querySelector("iframe-example-component");
  const newParent = document.querySelector("#adopt");

  newParent.appendChild(document.adoptNode(iframeComponent));
});
