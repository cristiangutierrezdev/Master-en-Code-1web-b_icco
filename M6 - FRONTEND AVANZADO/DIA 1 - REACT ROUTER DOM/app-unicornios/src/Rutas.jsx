import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home' 
import Nav from './Nav'
import ObtenerUnicornios from './ObtenerUnicornios'
import CrearUnicornio from './CrearUnicornio'

function Rutas(){
    return(
    <>
        <Nav/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/obtener-unicornios" element={<ObtenerUnicornios/>}/>
                <Route path="/crear-unicornio" element={<CrearUnicornio/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Rutas