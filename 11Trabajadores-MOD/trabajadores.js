export default class Trabajador {
    #nombre;
    #horasTrabajadas;
    #pagoXHora

    constructor(nombre,horasTrabajadas,pagoXHora) {
        this.#nombre=nombre
        this.#horasTrabajadas=horasTrabajadas
        this.#pagoXHora=pagoXHora
    }
    //uso de los getters
get getNombre(){
    return this.#nombre
}
get getHorasTrabajadas(){
    return this.#horasTrabajadas
}
get getPagoXHora(){
    return this.#pagoXHora
}
//uso de setters
set setNombre(nombre){
    if(nombre.trim()===""){
        throw new Error("EL NOMBRE NO PUEDE ESTAR VACIO")
    }
this.#nombre
    }
    set sethorasTrabajadas(horas){
        if(horas<=0 || isNaN(horas)){
            throw new Error("Las horas trabajadas deben ser mayor a 0")
        }
        this.#horasTrabajadas
    }
    set setpagoXHora(pago){
        if(pago<=0 || isNaN(pago) ){
            throw new Error("El pago por hora debe ser mayor a 0")
        }
        this.#pagoXHora
}
//medoto para calcular sueldos
calcularSueldoBruto(){
    return this.#pagoXHora * this.#horasTrabajadas
}
calcularDescuento(){
    return this.calcularSueldoBruto()*0.10
}
calcularSueldoFinal(){
    return this.caltrcularSueldoBruto()-this.calcularDescuento()
}
}