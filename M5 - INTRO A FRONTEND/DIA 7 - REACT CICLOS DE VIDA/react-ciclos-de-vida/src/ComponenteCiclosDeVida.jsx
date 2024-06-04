import { useEffect, useState } from "react";

function ComponenteCiclosDeVida() {
  const [contadorComponente, setContadorComponente] = useState(0);

  useEffect(() => {
    console.log("El componente se montó y se llamó a la API");

    return () => {
      console.log("El componente se desmontó");
    };
  }, []);

  useEffect(()=>{
    console.log("El componente se actualizó y guardó los datos en la base de datos");
  }, [contadorComponente])

  return (
    <div>
      <h1>Componente ciclos de vida</h1>
      <h2>El contador del componente es: {contadorComponente}</h2>
      <button
        onClick={() => {
          setContadorComponente(contadorComponente + 1);
        }}
      >
        Aumentar el contador del componente
      </button>
    </div>
  );
}

export default ComponenteCiclosDeVida;
