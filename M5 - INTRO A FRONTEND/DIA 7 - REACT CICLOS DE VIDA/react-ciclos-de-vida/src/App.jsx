import { useState } from "react";
import ComponenteCiclosDeVida from "./ComponenteCiclosDeVida";

function App() {
  const [contador, setContador] = useState(0);

  const aumentarValor = () => {
    if(contador < 10){
      setContador(contador + 1);
    }
  };

  const disminuirValor = () => {
    if(contador < 10){
      setContador(contador - 1);
    }
  };

  return (
    <>
      <h1>Hola mundo, el contador es: {contador}</h1>

      <button onClick={aumentarValor}>Aumentar el contador</button>
      <button onClick={disminuirValor}>Disminuir el contador</button>

      {
        contador < 5  ? <ComponenteCiclosDeVida /> : <p>el contador es mayor a 0</p>
      }
    </>
  );
}

export default App;
