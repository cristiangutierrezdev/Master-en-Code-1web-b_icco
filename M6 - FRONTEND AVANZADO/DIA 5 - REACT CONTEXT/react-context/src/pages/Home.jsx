import { useEffect } from "react";
import axios from "axios";
import ListaDeUnicornios from "../components/ListaDeUnicornios";
import { useContext } from "react";
import { EstadoGlobal } from "../context/EstadoGlobal";

const apiUrl =
  "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns";


function Home() {
  const estadoGlobal= useContext(EstadoGlobal);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((result) => {
        estadoGlobal.setUnicornios(result.data)
        estadoGlobal.setStatus(result.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ListaDeUnicornios/>
    </div>
  );
}

export default Home;
