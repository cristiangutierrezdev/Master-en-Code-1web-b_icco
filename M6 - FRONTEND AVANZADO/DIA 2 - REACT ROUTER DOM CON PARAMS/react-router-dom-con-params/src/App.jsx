import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OtraPagina from "./pages/OtraPagina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/otra-pagina/:numero/:nombre" element={<OtraPagina/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
