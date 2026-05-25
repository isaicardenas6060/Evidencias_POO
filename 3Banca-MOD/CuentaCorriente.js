
import Banca from "./Banca.js";
export default class CuentaCorriente extends Banca {
    constructor(Nombre, cuenta, saldo, limite, intereses) {
        super(Nombre, saldo, cuenta);
        this.limite = limite;
        this.intereses = intereses;
    }

    Prestar(monto) {
        monto <= this.limite
            ? (this.limite -= monto, console.log(`Préstamo exitoso de ${monto}. Crédito disponible: ${this.limite}`))
            : (this.intereses += monto * 0.1, console.log(`Préstamo excede el límite. Se cobró un interés de ${this.intereses}.`));
    }
}
