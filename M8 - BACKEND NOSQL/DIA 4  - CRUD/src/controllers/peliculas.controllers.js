import Peliculas from "../models/peliculaSchema.js";

export async function obtenerTodasLasPeliculas(req, res) {
  try {
    const director = req.query
    const resultado = await Peliculas.find(director);

    res.send(resultado);
  } catch (error) {
    res.send("que pena hubo un error");
    console.log(error);
  }
}

export async function obtenerUnaPelicula(req, res) {
  try {
    const {id} = req.params.id
    const resultado = await Peliculas.findById(id)
    res.status(200).json(resultado)
  } catch (error) {
    res.status(500).sendStatus(500)
    console.log(error);
  }
}
export async function crearUnaPelicula(req, res) {
  try {
    const peliculas = Peliculas(req.body);
    const resultado = await peliculas.save();
    res.status(201).sendStatus(201);
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
}
export async function eliminarUnaPelicula(req, res) {
  try {
    const { id } = req.params;
    const resultado = await Peliculas.findByIdAndDelete(id);
    res.status(200).send("Pelicula eliminada");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

export async function actualizarUnaPelicula(req, res) {
  try {
    const { id } = req.params;
    const peliculaActualizada = req.body;
    const resultado = await Peliculas.findByIdAndUpdate(
      id,
      peliculaActualizada
    );
    console.log(peliculaActualizada.titulo);
    if (
      peliculaActualizada.titulo !== undefined ||
      peliculaActualizada.director !== undefined ||
      peliculaActualizada.lanzamiento !== undefined ||
      peliculaActualizada.calificacion !== undefined
    ) {
       res.status(200).send("Actualizada");
    }else{
        res.status(500).send("completa los campos correctos")
    }
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
}
