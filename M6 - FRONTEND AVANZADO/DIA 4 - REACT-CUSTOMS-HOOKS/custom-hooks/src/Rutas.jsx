import { BrowserRouter, Routes, Route } from "react-router-dom"
import MostrarUnicornios from "./MostrarUnicornios"
import Formulario from "./Formulario"
import Regresar from "./Regresar"

function Rutas() {
    const url = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns"
    return (
        <BrowserRouter>
        <Regresar/>
            <Routes>
                <Route path="/" element={<MostrarUnicornios url={url} />} />
                <Route path="/actualizar-unicornio/:unicornioid" element={<Formulario url={url} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas