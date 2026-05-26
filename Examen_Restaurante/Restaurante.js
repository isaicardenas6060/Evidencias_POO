
class Restaurante {
    #HBSensilla;
    #HBConqueso;
    #HBEspecial;
    #papas;
    #refresco;
    #postre;
    #total;
    constructor(HBSensilla,HBConQueso,HBEspecial,papas,refresco,postre,total) {
        this.#HBSensilla=HBSensilla;
        this.#HBConqueso=HBConQueso;
        this.#HBEspecial=HBEspecial;
        this.#papas=papas;
        this.#refresco=refresco;
        this.#postre=postre;
        this.#total=total;
    }
    get getHBsensilla(){
        return this.#HBSensilla
    }
    get getHBConqueso(){
        return this.#HBConqueso
    }
    get getHBEspecial(){
        return this.#HBEspecial
    }
    get getPapas(){
        return this.#papas
    }
    get getRefresco(){
        return this.#refresco
    }
    get getPostres(){
        return this.#postre
    }
    get getTotal(){
        return this.#total
    }
    set newHBSensilla(sensilla){
        return this.#HBSensilla=sensilla
    }
    set newHBConqueso(queso){
        return this.#HBConqueso=queso
    }
    set newHBEspecial(especial){
        return this.#HBEspecial=especial
    }
    set newpapas(fritas){
        return this.#papas=fritas
    }
    set newRefresco(coca){
        return this.#refresco=coca

    }
    set newTotal(pago){
        if(pago<=0 || isNaN(pago)){
            throw new Error("El total no puede ser negativo o 0")
        }
        this.#total=pago
    }
}try {
    const precios=new Restaurante(15,18,20,8,5,6,0)
    
} catch (error) {
    
}
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

