import { useContext } from "react";
import { EstadoGlobal } from "../context/EstadoGlobal";

function Button(props) {
  const estadoGlobal= useContext(EstadoGlobal);

  return (
    <button>
      click en {props.name} {estadoGlobal.status}
    </button>
  );
}

export default Button;
