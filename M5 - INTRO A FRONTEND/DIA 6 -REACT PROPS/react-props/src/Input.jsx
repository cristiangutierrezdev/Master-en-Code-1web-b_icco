import { useState } from "react"
import Saludo from "./Saludo";

function Input (){
    const [mensaje, setMensaje] = useState("Hola clase")
    const [num, setNum] = useState(0)
    function obtenerMensaje(event){
        setMensaje(event.target.value);
    }
    function aumentaNumero(){
        setNum(num + 1)
    }
    function reiniciarNumero(){
        setNum(0)
    }

    return(
        <>
        <Saludo mensaje={mensaje} numero={num} unaFuncion={aumentaNumero} funcionDiferente={reiniciarNumero}/>
        <input type="text" placeholder="Escribe el mensaje" onChange={obtenerMensaje} />
        </>
    )
}

export default Input 