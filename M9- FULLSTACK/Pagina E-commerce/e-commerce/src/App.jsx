import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Carrito from "./pages/Carrito"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
