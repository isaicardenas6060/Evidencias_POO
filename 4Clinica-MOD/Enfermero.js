import PersonalMedico from "./PersonalMedico.js"

export default class Enfermero extends PersonalMedico {
    constructor(id,nombre,departamento,turno,) {
        super(id,nombre,departamento)
        this.turno=turno
    }
    CuidarPaciente(){
         console.log(`Enfermero:${this.MostrarInfo()} | del turno:${this.turno},
            tiene programado cuidar un paciente`)
    }
    curaciones(){
         console.log(`Enfermero:${this.MostrarInfo()} | del turno:${this.turno},
            tiene programado una curacion`)
    }
    asistente(){
         console.log(`Enfermero:${this.MostrarInfo()} | del turno:${this.turno},
            se requiere como asistente`)
    }
}
