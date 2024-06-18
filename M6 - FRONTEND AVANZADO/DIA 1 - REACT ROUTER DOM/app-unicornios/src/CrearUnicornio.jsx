import { InputGroup, Form, Button } from "react-bootstrap"
import axios from "axios"
import { useState, useEffect } from "react"

    function CrearUnicornio(){
    const url = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns"
    const [nombre, setNombre] = useState("")
    const [imagen, setImagen] = useState("")
    const [edad, setEdad] = useState("")
    const [poder, setPoder] = useState("")
    // const [ nuevoUnicornio , setNuevoUnicornio ] = useState({})

    function valorImagen(evento){
        setImagen(evento.target.value);
    }
    function valorNombre(evento){
        setNombre(evento.target.value);
    }
    function valorEdad(evento){
        setEdad(evento.target.value);
    }
    function valorPoder(evento){
        setPoder(evento.target.value);
    }
    function enviarDatos(){
        if(nombre  && imagen && edad && poder !== ""){
           console.log("se creo el unicornio"); 
           crearUnicornio()

        }else{
            alert("Completa los campos")
        }
    }

    function crearUnicornio(){
        axios.post(url, {
            name : nombre,
            power : poder,
            age : edad,
            image : imagen
        } )
                .then(res =>{
                    console.log("Creado con exito")
     
                })
                .catch(error =>{
                    console.log(error);
                })
    }
  
    return (
        <>
        <InputGroup className="mb-3 mt-3">
        <Form.Control onChange={valorImagen}       
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
      <Button onClick={enviarDatos} >Crear Unicornio</Button>
      </>
    )
}
export default CrearUnicornio