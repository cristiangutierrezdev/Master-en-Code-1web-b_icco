import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActualizarUnicornio from "./pages/ActualizarUnicornio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/actualizar-unicornio/:unicornioid" element={<ActualizarUnicornio/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
