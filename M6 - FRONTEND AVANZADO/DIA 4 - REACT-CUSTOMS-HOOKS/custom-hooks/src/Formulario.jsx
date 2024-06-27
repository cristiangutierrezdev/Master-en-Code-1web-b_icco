import { useParams, useNavigate } from "react-router-dom"
import useForm from "./useForm"
import axios from "axios"

function Formulario({ url }) {
    const params = useParams()
    const navigate = useNavigate()
    const { formulario, obtenerFormulario } = useForm({
        name: "",
        age: ""
    })

    function enviarDatos() {
        const urlId = `${url}/${params.unicornioid}`
        axios.put(urlId, { name: formulario.name, age: formulario.age })
            .then((res) => {
                navigate('/')
            }).catch((error => { console.log(error); }))
    }

    return (
        <>
            <div>Formulario</div>
            <input name="name" onChange={(e) => { obtenerFormulario(e) }} type="text" placeholder="Nombre" />
            <input name="age" onChange={(e) => { obtenerFormulario(e) }} type="text" placeholder="Edad" />
            <button onClick={() => { enviarDatos() }}>Enviar</button>
        </>
    )
}

export default Formulario