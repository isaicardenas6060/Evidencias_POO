export default class ErrorEmpleado extends Error {
  constructor(mensaje, codigo = 400) {
    super(mensaje);
    this.name = "ErrorEmpleado";
    this.codigo = codigo;
  }
}