import express from "express";

export const app = express();
let contador = 1;

app.use(express.text());
app.use(express.json());

let arreglo = [];

app.get("/usuarios", (req, res) => {
  if (arreglo === "") {
    res.send("no hay datos");
  } else {
    res.json(arreglo);
  }
});

app.post("/usuarios", (req, res) => {
  const dato = req.body;
  if (Object.keys(dato).length === 0) {
    res.send("completa los datos");
  } else {
    dato.id = contador;
    contador = contador + 1;
    arreglo.push(dato);
    res.status(200).sendStatus(200);
  }
});

app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  const elemento = arreglo.find((elemento) => {
    return elemento.id === idInt;
  });
  if (elemento === undefined) {
    res.send("usuario no encontrado");
  }else{
    res.json(elemento);
  }
});

app.put("/usuarios/:id", (req, res) => {
  const cambio = req.body;
  const { id } = req.params;
  const idInt = parseInt(id);

  const elemento = arreglo.find((elemento) => {
    return elemento.id === idInt;
  });

  if (elemento != undefined) {
    if (cambio.nombre != undefined) {
      elemento.nombre = cambio.nombre;
    }
    if (cambio.apellido != undefined) {
      elemento.apellido = cambio.apellido;
    }
    res.status(200).json(elemento);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);

  const elemento = arreglo.findIndex((elemento) => {
    return elemento.id === idInt;
  });
  console.log(elemento);
  if (elemento != -1) {
    arreglo.splice(elemento, 1);
    res.status(200).sendStatus(200);
  } else {
    res.status(404).sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log("server on port " + 3000);
});
