import Empleados from "./Empleados.js";
export default class DevolucionExt extends Empleados {
  constructor(Rfc, SueldoBase, PagoExt, HorasExt) {
    super(Rfc, SueldoBase, PagoExt, HorasExt);
  }
  calcular() {
    return this.calcularComplemento();
  }
}
