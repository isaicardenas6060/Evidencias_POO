
import Banca from "./Banca.js";

export default class CuentaAhorro extends Banca {
    constructor(Nombre, cuenta, saldo, comision) {
        super(Nombre, saldo, cuenta);
        this.comision = comision;
    }

    Deposito(monto) {
        this.saldo += monto;
        console.log(`Depósito de ${monto}. Saldo actual: ${this.saldo}`);
    }

    Retiro(monto) {
        monto <= this.saldo
            ? (this.saldo -= monto, console.log(`Retiro exitoso de ${monto}. Saldo actual: ${this.saldo}`))
            : console.log(`Saldo insuficiente. Saldo disponible: ${this.saldo}`);
    }
}