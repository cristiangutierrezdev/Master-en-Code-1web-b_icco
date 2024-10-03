import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
