import { useState } from "react";
import { createContext } from "react";

export const AutenticacionContexto = createContext();

export function AutenticacionProveedor(props) {
  const [autenticado, setAutenticado] = useState(false);

  // Datos que se comparten con los hijos (children)
  const datosParaCompartir = {
    autenticado,
    setAutenticado,
  };

  return (
    <AutenticacionContexto.Provider value={datosParaCompartir}>
      {props.children}
    </AutenticacionContexto.Provider>
  );
}
