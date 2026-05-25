export default class Usuario{
    #nomuser
    #password
    constructor(nomuser,password){
        this.#nomuser=nomuser;
        this.#password=password;
    }
    datosUser(){
        console.log(`El nombre del usuario es ${this.#nomuser}`);
    }
    #ValidarPassword(constrasena){
     return constrasena.length>=4
     this.#password===constrasena
    }
     #ValidarNombre(nombre){
     return nombre.length>=3
     this.#nomuser===nombre
    }
    login(user,pass){
        if(this.#ValidarPassword(pass) && this.#ValidarNombre(user)){
            console.log(`Bienvenido ${this.#nomuser}`)
        }
        else{
            console.log(`No cumple con el long de password!`)
        }
    }}