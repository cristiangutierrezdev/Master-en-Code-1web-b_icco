import { createContext, useState } from "react";

export const EstadoGlobal = createContext()

export function EstadoGlobalProovedor(props) {
    const [datos, setDatos] = useState([])
    const [ autenticar, setAutenticar ] = useState(false)
    
     
    const datosAExportar = {
        datos,
        setDatos,
        autenticar,
        setAutenticar
    }

    return <EstadoGlobal.Provider value={datosAExportar}>
        {props.children}
    </EstadoGlobal.Provider>
}