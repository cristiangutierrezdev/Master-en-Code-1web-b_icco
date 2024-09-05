import Peliculas from "../models/peliculaSchema.js";

export async function obtenerTodasLasPeliculas(req, res) {
  try {
    const resultado = await Peliculas.find()
    res.send(resultado)
  } catch (error) {
    res.send("que pena hubo un error")
    console.log(error);
  }
}

export async function obtenerUnaPelicula(req, res) {
  try {
  } catch (error) {
    console.log(error);
  }
}
export async function crearUnaPelicula(req, res) {
  try {
    const peliculas = Peliculas(req.body) 
    const resultado = await peliculas.save()
    res.status(201).sendStatus(201)
  } catch (error) {
    res.status(500).sendStatus(500)
    console.log(error);
  }
}
export async function actualizarUnaPelicula(req, res) {
  try {
  } catch (error) {
    console.log(error);
  }
}
export async function eliminarUnaPelicula(req, res) {
  try {
  } catch (error) {
    console.log(error);
  }
}
