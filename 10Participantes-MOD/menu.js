import { ErrorInst } from "./ErrorReporte.js"
import { Curso } from "./Curso.js"
import promptSync from "prompt-sync"
const prompt = promptSync()

export function mostrarMenu() {
    let opcion
    do {
        console.log("\n===== MENU =====")
        console.log("1. Registrar participantes")
        console.log("2. Mostrar resultados")
        console.log("3. Salir")

        opcion = parseInt(prompt("Seleccione una opción: "))
        switch (opcion) {
            case 1:
                try {
                    let limite = parseInt(prompt("¿Cuántas personas ingresarás?: "))
                    if (limite <= 0 || isNaN(limite)) {
                        throw new ErrorInst("Cantidad inválida")
                    }
                    for (let i = 0; i < limite; i++) {
                        console.log(`\nParticipante ${i + 1}`)
                        while (true) {
                            try {
                                let nombre = prompt("Ingrese su nombre: ")
                                let old = parseInt(prompt("Ingrese su edad: "))
                                let altura = parseFloat(prompt("Ingrese su altura en metros: "))
                                let sexo = prompt("Ingrese su sexo (F/M): ").toUpperCase()

                                new Curso(nombre, old, altura, sexo)
                                console.log("Participante registrado correctamente")
                                break
                            } catch (error) {
                                console.log(error.message)
                                console.log("Intente nuevamente...")
                            }
                        }
                    }
                } catch (error) {
                    console.log("\nNo se cumple con el requisito solicitado")
                    console.log(error.message)
                }
                break

            case 2:
                Curso.mostrarResultados()
                break

            case 3:
                console.log("Programa finalizado")
                break

            default:
                console.log("Opción inválida")
        }
    } while (opcion !== 3)}