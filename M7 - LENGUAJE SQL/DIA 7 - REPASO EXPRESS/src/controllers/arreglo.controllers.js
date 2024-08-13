let arreglo = [];
let incrementador = 0;
export const obtenerDatos = (req, res) => {
  res.status(200).json(arreglo);
};

export const obtenerDato = (req, res) => {
  try {
    const { id } = req.params;
    const idInt = parseInt(id);
    const datoEncontrado = arreglo.find((dato) => {
      return dato.id === idInt;
    });
    if (datoEncontrado != undefined) {
      res.status(200).json(datoEncontrado);
    } else {
      res.status(404).json(mensaje);
    }
  } catch (error) {
    console.log(error);
  }
};

export const crearDato = (req, res) => {
  const data = req.body;
  data.id = incrementador + 1;
  incrementador++;
  arreglo.push(data);

  if (data != "") {
    res.status(201).json({ mensaje: "creado" });
  } else {
    res.status(409).json({ mensaje: "no hay informacion" });
  }
};
export const actualizarDato = (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  const data = req.body;

  const actualizarDato = arreglo.find((dato) => {
    return dato.id === idInt;
  });

  if (actualizarDato != undefined) {
    actualizarDato.nombre = data.nombre;
    actualizarDato.apellido = data.apellido;
    actualizarDato.edad = data.edad;

    res.status(200).json({ mensaje: "usuario actualizado" });
  } else {
    res.status(404).json(mensaje);
  }
};

export const eliminarDato = (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  const datoEncontrado = arreglo.findIndex((dato) => {
    return dato.id === idInt;
  });
  if (datoEncontrado != -1) {
    arreglo.splice(datoEncontrado, 1);
    res.status(200).json({ mensaje: "usuario eliminado" });
  } else {
    res.status(404).json(mensaje);
  }
};
