import Carriage from "carriage";

let c = new Carriage();

c.addEventListener("carriage:keydown", e => console.log(e));

// For debugging
window.c = c;