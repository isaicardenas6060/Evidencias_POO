import DevolucionExt from "./DevolucionExt.js";
import DevolucionSueldo from "./DevolucionSueldo.js";
try {
  const emp1 = new DevolucionSueldo("RFC123456789", 10000, 200, 5);
  console.log(emp1.MostrarInfo());
  console.log(emp1.MostrarALL());
} catch (error) {
  console.error(error.name, error.message);
}
