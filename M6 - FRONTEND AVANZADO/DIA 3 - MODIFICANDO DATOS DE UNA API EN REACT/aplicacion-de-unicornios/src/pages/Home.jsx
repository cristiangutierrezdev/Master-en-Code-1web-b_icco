import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns";

function Home() {
  const [unicornios, setUnicornios] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((resultado) => {
        setUnicornios(resultado.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const nuevoArreglo = unicornios.map((unicornio) => {
    return (
      <li key={unicornio._id}>
        <Link to={"/actualizar-unicornio/" + unicornio._id}>{unicornio.name}</Link>
      </li>
    );
  });

  return <div>
    <ul>{nuevoArreglo}</ul>
    
  </div>;
}

export default Home;
