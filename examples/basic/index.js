import Carriage from "carriage";

let c = new Carriage(),
  notice = document.createElement("span");

window.setInterval(() => notice.innerHTML = Object.keys(c.keyboard).map(k => `${k} -> ${c.keyboard[k]}`), 60);

// For debugging
window.c = c;