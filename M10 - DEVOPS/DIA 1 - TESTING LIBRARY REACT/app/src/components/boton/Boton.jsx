import { useState } from "react";

function Boton({ nombre = "enviar" }) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button
        id="boton"
        style={{cursor:"pointer"}}
        onClick={() => {
          setActive(!active);
        }}
      >
        {nombre}
      </button>
      {active ? <p id="texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae molestias repellendus itaque praesentium natus velit dolor alias dolore distinctio! Aut id iure dolores saepe quaerat iusto placeat earum molestiae.</p> : null}
    </div>
  );
}

export default Boton;
