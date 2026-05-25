import SistemaSagitario from "./SistemaSagitario.js"

export default class Reserva extends SistemaSagitario{
    constructor(nombre,cantidad,fecha,hora,frecuencia){
        super(nombre,cantidad,fecha,hora)
        this.frecuencia=frecuencia
    }
    TipodeCliente(){
        if(this.frecuencia>=5){
            console.log("****Cliente VIP. Platillo de entrada de cortesia****")
        }else{
            console.log("***Cliente ESTANDAR.***")
        }
    }
      ReservaTotal(){
        if(this.cantidad>=30){
            console.log("||RESERVA TOTAL DEL ESTABLECIMIENTO EXITOSA||")
        }else{
            console.log("||RESERVACION EXITOSA||")
        }
    }
}