
import Material from "./Material.js";

export default class Libro extends Material {
  constructor(titulo, autor, numeroPaginas) {
    super(titulo, autor);
    this.numeroPaginas = numeroPaginas;
  }
 InfoLibro() {
    console.log(`${this.MostrarInfo()} | Páginas: ${this.numeroPaginas}`);
  }
}