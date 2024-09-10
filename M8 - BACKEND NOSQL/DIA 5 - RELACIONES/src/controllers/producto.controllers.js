import Producto from "../models/productoSchema.js";

export const obtenerProductos = async (req, res) => {
  try {
    const result = await Producto.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};

export const crearProducto = async (req, res) => {
  try {
    const result = await Producto(req.body).save();
    res.status(201).sendStatus(201);
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};
