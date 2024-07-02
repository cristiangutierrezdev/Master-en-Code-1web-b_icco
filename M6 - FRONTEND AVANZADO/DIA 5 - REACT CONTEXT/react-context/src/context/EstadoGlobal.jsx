import { useState } from "react";
import { createContext } from "react";

export const EstadoGlobal = createContext();

export function EstadoGlobalProveedor(props) {
  const [status, setStatus] = useState(0);
  const [unicornios, setUnicornios] = useState([]);

  const otraFuncion = () => {
    console.log("esto es otra funcion");
  };

  const datosParaCompartir = {
    status,
    setStatus,
    otraFuncion,
    unicornios,
    setUnicornios,
  };

  return (
    <EstadoGlobal.Provider value={datosParaCompartir}>
      {props.children}
    </EstadoGlobal.Provider>
  );
}
