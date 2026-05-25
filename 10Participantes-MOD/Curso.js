import { ErrorInst } from "./ErrorReporte.js"
export class Curso {

    #nombre
    #old
    #altura
    #sexo
    static lista = []
    constructor(nombre, old, altura, sexo) {
        if (!nombre) {throw new ErrorInst("El nombre está vacío") }
        if (old < 0) {throw new ErrorInst("La edad no es válida")  }
        if (altura <= 0) {throw new ErrorInst("La altura no es válida")}
        if (sexo !== "F" && sexo !== "M") {throw new ErrorInst("El sexo no es válido")}

        this.#nombre = nombre
        this.#old = old
        this.#altura = altura
        this.#sexo = sexo

        let objeto = {nombre: this.#nombre, old: this.#old, altura: this.#altura, sexo: this.#sexo}
             Curso.lista.push(objeto)
    }
    get nombre() {return this.#nombre}
    get old() {return this.#old}
    get altura() {return this.#altura}
    get sexo() {return this.#sexo}

    set old(old){
        if (old < 0 || isNaN(old))
            {throw new ErrorInst("Edad inválida");}
            this.#old = old
    }
    set altura(altura){
        if(altura<0 || isNaN(altura)){
            throw new ErrorInst("altura inválida")
        }
            this.#old = old
    }

    static #PromedioAlt() {
         let suma = 0
         for (let i = 0; i < Curso.lista.length; i++) {
        suma += Curso.lista[i].altura
        }
        return suma / Curso.lista.length
    }
  
    static #PromedioOld() {
        let suma = 0
        for (let i = 0; i < Curso.lista.length; i++) {
         suma += Curso.lista[i].old
        }
         return suma / Curso.lista.length
    }

    static mostrarResultados() {
         console.log("\nPARTICIPANTES REGISTRADOS")
        for (let i = 0; i < Curso.lista.length; i++) {
            console.log(
                `Nombre: ${Curso.lista[i].nombre} | Edad: ${Curso.lista[i].old} | Altura: ${Curso.lista[i].altura} | Sexo: ${Curso.lista[i].sexo}`
            )
        }
        console.log("\nPromedio de altura:",
            Curso.#PromedioAlt().toFixed(2))

        console.log("Promedio de edad:",
            Curso.#PromedioOld().toFixed(2))
    }
}