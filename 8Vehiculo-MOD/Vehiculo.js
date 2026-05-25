export default class Vehiculo {
    #velocidad;
    constructor(velocidad) {
        this.#velocidad=velocidad;
    }
    #controlVelocidad(valor){
        if(valor>=0 && valor<=180){
            this.#velocidad=valor;
        }
        else{
            console.log(`ESTO NO ESTA PERMITIDO!`);
        }
    }
    get obtenerVelocidad(){
        return this.#controlVelocidad;
    }
    set modificarVelocidad(vel){
        return this.#controlVelocidad(vel);
    }
    ObtenerDatos(){
        console.log(`Velocidad ajustada: ${this.#velocidad} KPH`);
    }
}
