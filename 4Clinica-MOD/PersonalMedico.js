
export default class PersonalMedico {
    static Paciente=[]
    constructor(id,nombre,departamento) {
        this.nombre=nombre
        this.id=id
        this.departamento=departamento
    }
    Registro(){
        let objeto={id:this.id,nombre:this.nombre,departamento:this.departamento}
    PersonalMedico.Paciente.push(objeto)
    console.log(`Registrado: ${this.nombre}`)
    }
    MostrarInfo(){
        return`ID:${this.id}, Nombre${this.nombre}, Depto${this.departamento}`
    }
    static MostrarTodo(){
     PersonalMedico.Paciente.map(objeto => {
            console.log(`Id:${objeto.id}, Nombre:${objeto.nombre}, Departamento${objeto.departamento}`)
        })
    }
}
