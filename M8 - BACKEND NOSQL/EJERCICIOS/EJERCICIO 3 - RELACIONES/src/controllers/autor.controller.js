import Autor from "../models/autorSchema.js";

export const obtenerAutores = async (req, res) => {
  try {
    const result = await Autor.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};
export const obtenerAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Autor.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};
export const crearAutores = async (req, res) => {
  try {
    const autor = Autor(req.body);
    await autor.save();
    res.status(201).sendStatus(201);
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};
export const actualizarAutor = async (req, res) => {
  try {
    const nuevaInfo = req.body;
    const { id } = req.params;
    await Autor.findByIdAndUpdate(id, nuevaInfo);
    res.status(200).sendStatus(200);
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};
export const eliminarAutor = async (req, res) => {
  try {
    const { id } = req.params;
    await Autor.findByIdAndDelete(id);
    res.status(200).sendStatus(200);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};
