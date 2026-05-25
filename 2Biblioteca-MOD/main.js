import Libro from "./Libro.js";
import Revista from "./Revista.js";
let biblioteca = [
  new Libro("Juego de tronos", "George R. R. Martin", 835),
  new Revista("National Geographic", "Varios autores", "Febrero 2026")
];

let info = biblioteca.map(material => material.MostrarInfo());
console.log(info);
