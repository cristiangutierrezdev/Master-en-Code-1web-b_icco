import { Router } from "express";
import {
  obtenerDatos,
  obtenerDato,
  crearDato,
  actualizarDato,
  eliminarDato,
} from "../controllers/arreglo.controllers.js";

export const rutaArreglo = Router();

const mensaje = { mensaje: "usuario no encontrado" };

rutaArreglo.get("/arreglo", obtenerDatos);

rutaArreglo.get("/arreglo/:id", obtenerDato);

rutaArreglo.post("/arreglo", crearDato);

rutaArreglo.put("/arreglo:id", actualizarDato);

rutaArreglo.delete("/arreglo:id", eliminarDato);
