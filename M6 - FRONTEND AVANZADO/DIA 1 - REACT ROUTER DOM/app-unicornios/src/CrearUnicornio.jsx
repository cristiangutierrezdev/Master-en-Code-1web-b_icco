import { InputGroup, Form, Button } from "react-bootstrap"
import axios from "axios"
import { useState, useEffect } from "react"

function CrearUnicornio(){
    const url = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns"
    const [nombre, setNombre] = useState("")
    const [imagen, setImagen] = useState("")
    const [edad, setEdad] = useState("")
    const [poder, setPoder] = useState("")

    function valorImagen(evento){
        console.log(evento.target.value);
    }
    function valorNombre(evento){
        console.log(evento.target.value);
    }
    function valorEdad(evento){
        console.log(evento.target.value);
    }
    function valorPoder(evento){
        console.log(evento.target.value);
    }
    
    // useEffect(()=>{
    //     axios.post(url,)
    // },[])
    return (
        <>
        <InputGroup className="mb-3 mt-3">
        <Form.Control
        onChange={valorImagen}       
          placeholder="Url de la imagen"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        </InputGroup>
        <InputGroup className="mb-3">
        <Form.Control
        onChange={valorNombre}
          placeholder="Nombre del unicornio"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        </InputGroup>   
        <InputGroup className="mb-3">
        <Form.Control
        onChange={valorPoder}
          placeholder="Poder del unicornio"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        </InputGroup>
        <InputGroup className="mb-3">
        <Form.Control
        onChange={valorEdad}
          placeholder="Edad del unicornio"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <Button onClick={()=>{obtenerValorInputs(e)}}>Crear Unicornio</Button>
      </>
    )
}
export default CrearUnicornio