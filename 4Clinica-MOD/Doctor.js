import PersonalMedico from "./PersonalMedico.js"

export default class Doctor extends PersonalMedico {
    constructor(id,nombre,departamento,especialidad) {
        super(id,nombre,departamento)
        this.especialidad=especialidad
    }
    cirujia(){
        console.log(`Medico:${this.MostrarInfo()} | Con especialidad:${this.especialidad},
            tiene una cirujia`)
    }
    Alta(){
        console.log(`Medico:${this.MostrarInfo()} | con especialidad:${this.especialidad},
            tiene programado un alta`)
    }
    Diagnostico(){
        console.log(`Medico:${this.MostrarInfo()} | con especialidad:${this.especialidad},
            tiene programado un diagnostico`)
    }
}
