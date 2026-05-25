
import Doctor from "./Doctor.js"
import Enfermero from "./Enfermero.js"

let enfemero1=new Enfermero(202478,"MIGUEL.R","Terapia Intensiva","Matutino")
let enfemero2=new Enfermero(202479,"MARIA.G","Patologia","Matutino")
let enfemero3=new Enfermero(202480,"LEEONEL S.","Tramatologia","Vespertino")
let medico1=new Doctor(202550,"DAVID.C","Sub cirujia","Cardiologia")
let medico2=new Doctor(202551,"ENRIQUE.E","Traumatologia","Pediatria")
enfemero1.Registro();
enfemero2.Registro();
enfemero3.Registro();
medico1.Registro();
medico2.Registro();
enfemero1.CuidarPaciente()
enfemero2.curaciones()
enfemero3.asistente()
medico1.cirujia()
medico2.Diagnostico()