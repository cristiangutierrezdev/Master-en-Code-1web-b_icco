import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import MostrarPerros from "./MostrarPerros"
import MostrarGatos from "./MostrarGatos"

function Rutas(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mostrar-perros" element={<MostrarPerros/>}/>
            <Route path="/mostrar-gatos" element={<MostrarGatos/>}/>
        </Routes>
    </BrowserRouter>
    )
}
export default Rutas