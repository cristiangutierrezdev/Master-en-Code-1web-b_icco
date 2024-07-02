import Card from "./Card";
import { useContext } from "react";
import { EstadoGlobal } from "../context/EstadoGlobal";

function ListaDeUnicornios() {
  const estadoGlobal= useContext(EstadoGlobal);

  return (
    <ul>
      {estadoGlobal.unicornios.map((unicornio) => {
        return <Card unicornio={unicornio} />;
      })}
    </ul>
  );
}

export default ListaDeUnicornios;
