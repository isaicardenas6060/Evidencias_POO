

import Material from "./Material.js";

export default class Revista extends Material {
  constructor(titulo, autor, edicion) {
    super(titulo, autor);
    this.edicion = edicion;
  }
 InfoRevista() {
    console.log(`${this.MostrarInfo()} | Edición: ${this.edicion}`);
  }
}