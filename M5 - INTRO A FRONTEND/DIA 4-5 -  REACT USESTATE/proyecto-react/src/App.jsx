import { useState, useRef } from "react";
import "./App.css";
import Button from "./Button";
import Link from "./Link";
import Form from "./Form";

function App() {
  const [numero, setNumero] = useState(1);
  const [nombre, setNombre] = useState("");
  // const inputNombre = useRef();

  const aumentarVariable = () => {
    setNumero(numero + 1);
  };

  const cambiarNombre = (event) => {
    setNombre(event.target.value);
    // setNombre(inputNombre.current.value);
  };

  return (
    <div className="padre">
      <h1>Hola {nombre}, bienvenid@ </h1>
      <h2>Tu edad es: {numero}</h2>
      {/* <Link />
      <Form />
      <Button /> */}
      <button onClick={aumentarVariable}>Aumentar variable</button>
      <br />
      <br />
      <input
        // ref={inputNombre}
        onChange={cambiarNombre}
        type="text"
        placeholder="Escribe tu nombre"
      />
    </div>
  );
}

export default App;
