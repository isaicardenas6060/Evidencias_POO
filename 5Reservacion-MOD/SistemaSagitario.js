export default class SistemaSagitario {
    static clientes=[]
    constructor(nombre,cantidad,fecha,hora){
        this.nombre=nombre
        this.cantidad=cantidad
        this.fecha=fecha
        this.hora=hora
        let objeto={nombre:this.nombre,cantidad:this.cantidad,
            fecha:this.fecha,hora:this.hora}
            SistemaSagitario.clientes.push(objeto)
    }
    static ObtenerDatos(){
        SistemaSagitario.clientes.map(objeto=>{
            console.log(`===Reservacion===
de:${objeto.nombre},
Para:${objeto.cantidad}
personas, El dia:${objeto.fecha}, 
A las:${objeto.hora}`)})    }
}
