
export default class Banca {
    constructor(Nombre, saldo, cuenta) {
        this.Nombre = Nombre;
        this.saldo = saldo;
        this.cuenta = cuenta;
    }
    MostrarInfo() {
        console.log(`Nombre del cliente: ${this.Nombre}. Número de cuenta: ${this.cuenta}. Saldo disponible: ${this.saldo}`);
    }
}



