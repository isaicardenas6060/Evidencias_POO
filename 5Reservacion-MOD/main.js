import Reserva from "./Reserva.js"
import SistemaSagitario from "./SistemaSagitario.js"

let cliente1=new Reserva(5,"ISAI.C",4,"10 DE MAYO","5 PM")
let cliente2=new Reserva(2,"JUAN.P",30,"3 de marzo","7 PM")
cliente1.TipodeCliente()
cliente1.ReservaTotal()
SistemaSagitario.ObtenerDatos()
cliente2.TipodeCliente()
cliente2.ReservaTotal()
