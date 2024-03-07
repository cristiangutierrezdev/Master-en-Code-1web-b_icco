//import me permite trare archivos de otro módulo,
/* SINTAXIS BÁSICA

import {nombreFuncion, nombreVariable} from "ruta/relativa/del/archivo.js"

*/
import { saludar, despedir } from "./src/controllers/controller.js";




const saludarBtn= document.getElementById("saludar")
const despedirBtn = document.getElementById("despedir")

saludarBtn.addEventListener("click", ()=>{
    saludar()
})
despedirBtn.addEventListener("click", ()=>{
    despedir()
})