export default class Estudiante {
    #nombre
    #calificacion
    constructor(nombre,calificacion) {
        this.#calificacion=calificacion;
        this.#nombre=nombre;
    }
    #validarCalif(valor){
        if(valor>=70 && valor<=100){
            this.#calificacion=valor;
        }
        else{
            console.log(`Reprovado`);
        }
    }
    get obtenercalif(){
        return this.#calificacion;
    }
    set newCalificacion(cal){
        return this.#validarCalif(cal);

    }
    mostrarInformacion(){
        console.log(`El estudiante:${this.#nombre} y su calificacion es:${this.#calificacion}`);
    }
}
