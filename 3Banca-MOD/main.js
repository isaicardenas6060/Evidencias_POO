import CuentaAhorro from "./CuentaAhorro.js";
import CuentaCorriente from "./CuentaCorriente.js";

let clientes = [];
clientes.push(new CuentaAhorro("Miguel G", 4569090, 2700, 50));
clientes.push(new CuentaCorriente("Luis G", 7890123, 10000, 2000, 100));

clientes.map(cliente => cliente.MostrarInfo());

clientes[0].Retiro(500);  
clientes[0].Retiro(5000);
clientes[1].Prestar(1500);
clientes[1].Prestar(3000); 