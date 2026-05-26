class Estudiante {
    #nombre="isai"
    constructor(nombre) {
        this.#nombre=nombre
    }
     get obtenerNombre(){
        return this.#nombre
    }
    set newNombre(valor){
        return this.#nombre=valor
    }
    mostrar(){
        console.log(`Hola:${this.#nombre}`)
    }
}
const usuario1=new Estudiante("ISAI")
usuario1.newNombre="LUIS"
usuario1.mostrar()
