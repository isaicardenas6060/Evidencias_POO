/*Una biblioteca necesita registrar distintos tipos de materiales como libros y revistas. Todos 
los materiales tienen características en común como título y autor, pero también poseen 
características específicas.*/
export default class Material {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }
  MostrarInfo() {
    return `El Material: ${this.titulo} del autor: ${this.autor} 
        se encuentra: ${this.disponible ? "Disponible" : "Prestado"}`;
  }
  Prestar() {
    this.disponible
      ? (this.disponible = false, console.log(`${this.titulo}: ha sido prestado`))
      : console.log(`${this.titulo}: no está disponible`);
  }
  Devolver() {
    !this.disponible
      ? (this.disponible = true, console.log(`${this.titulo}: ha sido devuelto`))
      : console.log(`${this.titulo}: ya estaba disponible`);
  }
}

