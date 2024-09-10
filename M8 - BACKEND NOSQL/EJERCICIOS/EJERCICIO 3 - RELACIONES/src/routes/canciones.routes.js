import { Router } from "express";
import { actualizarCancion, crearCancion, eliminarCancion, obtenerCancion, obtenerCanciones} from "../controllers/canciones.controller.js";

export const cancionRouter = Router();

cancionRouter.get("/cancion", obtenerCanciones)
cancionRouter.get("/cancion/:id", obtenerCancion)
cancionRouter.post("/cancion", crearCancion)
cancionRouter.put("/cancion/:id", actualizarCancion)
cancionRouter.delete("/cancion/:id", eliminarCancion)