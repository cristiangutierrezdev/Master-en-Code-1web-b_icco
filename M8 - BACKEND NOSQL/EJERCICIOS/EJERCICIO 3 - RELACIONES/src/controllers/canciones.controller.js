import Cancion from "../models/cancionSchema.js";

export const obtenerCanciones = async (req, res) => {
  try {
    const result = await Cancion.find().populate("autor");
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};
export const obtenerCancion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Cancion.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};
export const crearCancion = async (req, res) => {
  try {
    const cancion = Cancion(req.body);
    await cancion.save();
    res.status(201).sendStatus(201);
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};
export const actualizarCancion = async (req, res) => {
  try {
    const nuevaInfo = req.body;
    const { id } = req.params;
    await Cancion.findByIdAndUpdate(id, nuevaInfo);
    res.status(200).sendStatus(200);
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};
export const eliminarCancion = async (req, res) => {
  try {
    const { id } = req.params;
    await Cancion.findByIdAndDelete(id);
    res.status(200).sendStatus(200);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};
