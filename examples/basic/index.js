import Carriage from "carriage";

let c = new Carriage(),
  notice = document.createElement("span");

document.body.appendChild(notice);

window.setInterval(() => {
  notice.innerHTML = Object
    .keys(c.keyboard)
    .map(k => `${k} -> ${c.keyboard[k]}`)
    .join(", ");
}, 60);

// For debugging
window.c = c;