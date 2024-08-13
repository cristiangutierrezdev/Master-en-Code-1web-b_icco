import { conexion } from "../db.js";

export const obtenerAlumnos = async (req, res) => {
  const resultado = await conexion.query("SELECT * FROM alumnos");
  res.json(resultado.rows);
};
