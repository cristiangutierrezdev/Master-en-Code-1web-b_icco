import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { EstadoGlobalProveedor } from "./context/EstadoGlobal";

function App() {
  return (
    <BrowserRouter>
      <EstadoGlobalProveedor>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </EstadoGlobalProveedor>
    </BrowserRouter>
  );
}

export default App;
