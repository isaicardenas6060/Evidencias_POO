class ErrorReporte extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrorReporte";
    this.codigo = 404;
  }
}
class Persona {
  #nombre;
  #id;
  #sexo;
  #edad;
  constructor(nombre, edad, id, sexo) {
    if (!nombre) throw new Error("El nombre esta vacío");
    if (!edad) throw new Error("La edad esta vacía");
    if (!id || id.length < 3) throw new Error("La ID es inválida");
    if (!sexo) throw new Error("El sexo esta vacío");
    this.#nombre = nombre;
    this.#edad = edad;
    this.#id = id;
    this.#sexo = sexo;
  }
  get nombre() { return this.#nombre; }
  get edad() { return this.#edad; }
  get id() { return this.#id; }
  get sexo() { return this.#sexo; }
  set nombre(nuevoNombre) {
    if (!nuevoNombre) throw new Error("El nombre esta vacío");
    this.#nombre = nuevoNombre;
  }
  set edad(nuevaEdad) {
    if (!nuevaEdad) throw new Error("La edad esta vacía");
    this.#edad = nuevaEdad;
  }
}
class Medico extends Persona {
  constructor(nombre, edad, id, sexo, especialidad) {
    super(nombre, edad, id, sexo);
    this.especialidad = especialidad;
  }
}
class Psicologo extends Persona {
  constructor(nombre, edad, id, sexo, area) {
    super(nombre, edad, id, sexo);
    this.area = area;
  }
}
class Administrador extends Persona {
  constructor(nombre, edad, id, sexo, area) {
    super(nombre, edad, id, sexo);
    this.area = area;
  }
}
class Paciente extends Persona {
  constructor(nombre, edad, id, sexo) {
    super(nombre, edad, id, sexo);
  }
}
class Consulta {
  constructor(paciente, profesional) {
    if (!paciente || !profesional) {
      throw new ErrorReporte("No hay datos asignados");
    }
    this.paciente = paciente;
    this.profesional = profesional;
    this.fecha = new Date();
  }
}
class ConsultaMedica extends Consulta {
  constructor(paciente, medico, diagnostico, tratamiento) {
    super(paciente, medico);
    this.diagnostico = diagnostico;
    this.tratamiento = tratamiento;
  }
  reporte() {
    return `
--- REPORTE MÉDICO ---
Paciente: ${this.paciente.nombre}
Médico: ${this.profesional.nombre}
Diagnóstico: ${this.diagnostico}
Tratamiento: ${this.tratamiento}
    `;
  }
}
class ConsultaPsicologica extends Consulta {
  constructor(paciente, psicologo, motivo, observaciones) {
    super(paciente, psicologo);
    this.motivo = motivo;
    this.observaciones = observaciones;
  }
  reporte() {
    return `
--- REPORTE PSICOLÓGICO ---
Paciente: ${this.paciente.nombre}
Psicólogo: ${this.profesional.nombre}
Motivo: ${this.motivo}
Observaciones: ${this.observaciones}
    `;
  }
}
class Historial {
  constructor(paciente) {
    this.paciente = paciente;
    this.consultas = [];
  }
  agregarConsulta(consulta) {
    this.consultas.push(consulta);
  }
 generarReportes() {
    return this.consultas.map(c => c.reporte());
  }
  mostrarHistorial() {
    console.log(this.generarReportes().join("\n"));
  }
}
try {
  const p1 = new Paciente("Luis", 18, "123", "Masculino");
  const p2 = new Paciente("Ana", 19, "456", "Femenino");

  const m1 = new Medico("Juan", 40, "789", "Masculino", "General");
  const ps1 = new Psicologo("Maria", 35, "321", "Femenino", "Familiar");

  const c1 = new ConsultaMedica(p1, m1, "Gripe", "Reposo");
  const c2 = new ConsultaPsicologica(p2, ps1, "Ansiedad", "Terapia");

  const historial = new Historial(p1);
  p1.nombre = "Exxon";
  p1.edad = 12
  historial.agregarConsulta(c1);
  historial.agregarConsulta(c2);
  historial.mostrarHistorial();
} catch (error) {
  console.log("No cumple con los requisitos solicitados:", error.message);
}