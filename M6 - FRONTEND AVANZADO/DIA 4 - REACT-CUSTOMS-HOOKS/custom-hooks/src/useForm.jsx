import { useState } from "react"

function useForm(estadoInicial) {
    const [ formulario, setFormulario ] = useState(estadoInicial)

    const obtenerFormulario = (evento) => {
        const value = evento.target.value
        const name = evento.target.name
        const copiaFormulario = { ...formulario, [name]: value }
        setFormulario(copiaFormulario);
    }
    return {formulario, obtenerFormulario}
}

export default useForm