import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Unicornios from './pages/Unicornios'
import { EstadoGlobalProovedor } from './context/EstadoGlobal'
function App() {
  return (
    <BrowserRouter>
      <EstadoGlobalProovedor>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/unicornios' element={<Unicornios />} />
        </Routes>
      </EstadoGlobalProovedor>
    </BrowserRouter>
  )
}

export default App
