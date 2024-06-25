import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const API_URL =
  "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns/";

function ActualizarUnicornio() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const modificar = () => {
    const data = { name: name };

    axios
      .put(API_URL + params.unicornioid, data)
      .then((resultado) => {
        console.log(resultado);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Actualizar Unicornio</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={inputChange}
      />
      <button onClick={modificar}>Actualizar</button>
    </div>
  );
}

export default ActualizarUnicornio;
