// Ejercicio 9 EMPLEADOS
import ErrorEmpleado from "./ErrorEmpleado.js";
export default class Empleados {
  #Rfc;
  #SueldoBase;
  #PagoExt; 
  #HorasExt;
  constructor(Rfc, SueldoBase, PagoExt, HorasExt) {
    if (!Rfc || Rfc.length < 10) throw new ErrorEmpleado("El RFC debe tener al menos 10 caracteres");
    if (!SueldoBase || SueldoBase <= 0) throw new ErrorEmpleado("El sueldo base no puede estar vacío o negativo");
    if (!PagoExt || PagoExt < 0) throw new ErrorEmpleado("El pago por horas extras no puede ser vacío o negativo");
    if (HorasExt < 0) throw new ErrorEmpleado("Las horas extras no pueden ser negativas");
    this.#Rfc = Rfc;
    this.#SueldoBase = SueldoBase;
    this.#PagoExt = PagoExt;
    this.#HorasExt = HorasExt;
  }
  get Rfc() { return this.#Rfc; }
  get SueldoBase() { return this.#SueldoBase; }
  get PagoExt() { return this.#PagoExt; }
  get HorasExt() { return this.#HorasExt; }

  set Rfc(nuevoRfc) {
    if (!nuevoRfc || nuevoRfc.length < 10) throw new ErrorEmpleado("RFC inválido");
    this.#Rfc = nuevoRfc;
  }

  set SueldoBase(nuevoSueldo) {
    if (!nuevoSueldo || nuevoSueldo <= 0) throw new ErrorEmpleado("Sueldo inválido");
    this.#SueldoBase = nuevoSueldo;
  }

  set PagoExt(nuevoPago) {
    if (nuevoPago < 0) throw new ErrorEmpleado("Pago hora extra inválido");
    this.#PagoExt = nuevoPago;
  }

  set HorasExt(nuevasHoras) {
    if (nuevasHoras < 0) throw new ErrorEmpleado("Horas extra inválidas");
    this.#HorasExt = nuevasHoras;
  }

  calcularComplemento() {
    return this.#PagoExt * this.#HorasExt;
  }

  calcularSueldoBruto() {
    return this.#SueldoBase + this.calcularComplemento();
  }

  calcularSueldoNeto() {
    return this.calcularSueldoBruto() * 0.9;
  }
  MostrarInfo() {
    return `Empleado RFC: ${this.#Rfc}`;
  }

  MostrarALL() {
    return `
    RFC: ${this.#Rfc}
    Sueldo Base: $${this.#SueldoBase}
    Pago Hora Extra: $${this.#PagoExt}
    Horas Extra: ${this.#HorasExt}
    Complemento: $${this.calcularComplemento()}
    Sueldo Bruto: $${this.calcularSueldoBruto()}
    Sueldo Neto: $${this.calcularSueldoNeto()}
    `;
  }}
