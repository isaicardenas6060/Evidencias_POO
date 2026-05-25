import Trabajador from "./trabajadores.js";
import promptSync from "prompt-sync";
const prompt=promptSync()
let TRABAJO=[]
let opcion;

do{
    console.log("\n=========Menu=========")
    console.log("1. Registrar trabajadores")
    console.log("2. Mostrar trabajadores")
    console.log("3. Salir")

    opcion=parseInt(prompt("Seleccione una opcion:"))

    switch(opcion){
        case 1:
            try{
                let nombre=prompt("ingrese el nombre:")
                let horas=parseFloat(prompt("ingrese las horas trabajadas:"))
                let pago=parseFloat(prompt("ingrese el pago:"))

                let trabajadores=new Trabajador (nombre,horas,pago)

                trabajadores.setNombre=nombre
                trabajadores.sethorasTrabajadas=horas
                trabajadores.setpagoXHora=pago

                TRABAJO.push(trabajadores)
                  console.log("\nTrabajador agregado correctamente.")
            }catch (error){ 
                console.log("\nERROR", error.message)
            }
            break;
            case 2:
                if(TRABAJO.length===0){
                     console.log("\nAun no hay registro de trabajadores.")
                }else{
                    console.log("\n=========Lista de trabajadores.=========")
                    TRABAJO.forEach((trabajadores,index) =>{
                    console.log(`\nTrabajador ${index+1}`)
                    console.log(`nombre:`, trabajadores.getNombre)
                    console.log(`horas trabajadas:`, trabajadores.getHorasTrabajadas)
                    console.log(`pago por hora:`, trabajadores.getPagoXHora)
                    console.log(`sueldo bruto:`,trabajadores.calcularSueldoBruto())
                    console.log(`descuento:`, trabajadores.calcularDescuento())
                    console.log(`sueldo final:`,trabajadores.calcularSueldoFinal())
                    });
                } break;
                case 3:
                    console.log(`\nFIN DE LA EJECUCION`)
                    break;
                    default:
                        console.log(`\nOPCION NO VALIDA`)
    }
}while(opcion!==3)
