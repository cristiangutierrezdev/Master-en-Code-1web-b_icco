import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AutenticacionContexto } from "../contexts/Autenticacion";
import { useNavigate } from "react-router-dom";

const baseUrl =
  "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns";

function Unicornios() {
  const [unicornios, setUnicornios] = useState([]);
  const { autenticado } = useContext(AutenticacionContexto);
  const navigate = useNavigate();

  const obtenerUnicornios = () => {
    axios
      .get(baseUrl)
      .then(function (respuesta) {
        setUnicornios(respuesta.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(function () {
    if (autenticado) {
      obtenerUnicornios();
    } else {
      navigate("/login")
    }
  }, []);

  const eliminar = (id) => {
    axios
      .delete(baseUrl + "/" + id)
      .then(function (respuesta) {
        console.log(respuesta);
        obtenerUnicornios();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Unicornios</h1>
      <p>{unicornios.length === 0 ? "Cargando..." : <></>}</p>
      <ul>
        {unicornios.map(function (unicornio) {
          return (
            <li key={unicornio._id} style={{ marginTop: "10px" }}>
              {unicornio.name}{" "}
              <button
                onClick={() => {
                  eliminar(unicornio._id);
                }}
              >
                Eliminar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Unicornios;
