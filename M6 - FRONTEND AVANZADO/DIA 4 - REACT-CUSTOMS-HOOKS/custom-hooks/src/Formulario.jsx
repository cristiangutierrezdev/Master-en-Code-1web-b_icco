import { useParams, useNavigate } from "react-router-dom";
import useForm from "./useForm";
import axios from "axios";
import { useEffect } from "react";

function Formulario({ url }) {
  const params = useParams();
  const navigate = useNavigate();
  const { formulario, obtenerFormulario, setFormulario } = useForm({
    name: "",
    age: "",
  });

  function enviarDatos() {
    const urlId = `${url}/${params.unicornioid}`;
    axios
      .put(urlId, { name: formulario.name, age: formulario.age })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const urlId = `${url}/${params.unicornioid}`;
    axios
      .get(urlId)
      .then((result) => {
        setFormulario(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>Formulario</div>
      <input
        name="name"
        onChange={(e) => {
          obtenerFormulario(e);
        }}
        value={formulario.name}
        type="text"
        placeholder="Nombre"
      />
      <input
        name="age"
        onChange={(e) => {
          obtenerFormulario(e);
        }}
        value={formulario.age}
        type="text"
        placeholder="Edad"
      />
      <button
        onClick={() => {
          enviarDatos();
        }}
      >
        Enviar
      </button>
    </>
  );
}

export default Formulario;
