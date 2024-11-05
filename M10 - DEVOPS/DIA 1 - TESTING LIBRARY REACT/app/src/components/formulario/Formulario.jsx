//Ejercicio: Probando Funcionalidades de Formularios
// Objetivo: Probar la funcionalidad de un formulario básico.
// Descripción: Crea un componente Formulario con dos campos de entrada (email y contraseña) y un botón de envío.

import { useState } from "react"

function Formulario() {
    const [info, SetInfo] = useState({
        email:"",
        password:""
    })

    const validator = info.email && info.password

    const SaveChanges = (e)=>{
        const value = e.target.value
        const name = e.target.name
        const copyInfo = {...info, [name]:value}
        SetInfo(copyInfo)
    }


  return (
    <form>
        <input type="email" placeholder='email' name = "email" onChange={(e)=>{SaveChanges(e)}}/>
        <input type="password" placeholder='password' name ="password" onChange={(e)=>{SaveChanges(e)}}/>
        <button disabled = {!validator}>Enviar</button>
    </form>
  )
}

export default Formulario