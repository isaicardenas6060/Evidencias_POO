
export default class Estudiante {
    constructor(nombre,promedio) {
        this.promedio=promedio
        this.nombre=nombre
    }
    ActualizarPromedio(nuevo){
        this.promedio=nuevo
    }
    Aprobacion(){
        if(this.promedio>=70){
            console.log(`El estidante ${this.nombre} esta aprovado con el promedio:${this.promedio}`)
        }
        else{
            console.log(`El estudiante ${this.nombre} NO aprobo. promedio:${this.promedio}`)
        }
    }
}