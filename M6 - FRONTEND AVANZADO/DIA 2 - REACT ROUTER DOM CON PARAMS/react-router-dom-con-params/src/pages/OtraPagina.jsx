import { Link, useParams } from "react-router-dom";

function OtraPagina() {
  const urlParams = useParams()

  console.log(urlParams);
  return (
    <div>
      <h1>Esto es otra página</h1>
      <p>El parámetro número de la url es: {urlParams.numero}</p>
      <p>El parámetro nombre de la url es: {urlParams.nombre}</p>
      <Link to="/">Ir al home</Link>
    </div>
  );
}

export default OtraPagina;
