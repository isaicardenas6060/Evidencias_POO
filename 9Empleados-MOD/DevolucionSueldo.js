import Empleados from "./Empleados.js";

export default class DevolucionSueldo extends Empleados {
  constructor(Rfc, SueldoBase, PagoExt, HorasExt) {
    super(Rfc, SueldoBase, PagoExt, HorasExt);
  }
  SueldoBruto() {
    return this.calcularSueldoBruto();
  }
  MostrarALL() {
    return super.MostrarALL();
  }
}
