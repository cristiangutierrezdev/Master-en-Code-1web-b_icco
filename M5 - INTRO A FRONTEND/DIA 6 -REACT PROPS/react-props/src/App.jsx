import { useState } from 'react'
import './App.css'
import Input from './Input'
// import Mensaje from './Mensaje'
// import Perfil from './Perfil'

function App() {
  const john = {
    nombre : "John",
    edad : 23,
    pais : "Bolivia"
  }
  return (
    <>
    <h2>Clase de React + Props</h2>
    {/* <Perfil nombre={john.nombre} edad={john.edad} pais={john.pais}/> */}
    {/* <Mensaje saludo ="Hola clase"/> */}
    <Input/>
    </>
  )
}

export default App
