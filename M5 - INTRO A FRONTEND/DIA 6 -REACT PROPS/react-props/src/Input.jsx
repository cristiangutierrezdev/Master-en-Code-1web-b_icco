import { useState } from "react"
import Saludo from "./Saludo";

function Input (){
    const [mensaje, setMensaje] = useState("Hola clase")
    function obtenerMensaje(event){
        setMensaje(event.target.value);
    }
    return(
        <>
        <Saludo mensaje={mensaje}/>
        <input type="text" placeholder="Escribe el mensaje" onChange={obtenerMensaje} />
        </>
    )
}

export default Input 