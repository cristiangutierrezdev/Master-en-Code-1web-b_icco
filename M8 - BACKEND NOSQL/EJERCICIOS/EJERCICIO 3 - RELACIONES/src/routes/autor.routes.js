import { Router } from "express";
import { actualizarAutor, crearAutores, eliminarAutor, obtenerAutor, obtenerAutores } from "../controllers/autor.controller.js";

export const autorRouter = Router();

autorRouter.get("/autor", obtenerAutores)
autorRouter.get("/autor/:id", obtenerAutor)
autorRouter.post("/autor", crearAutores)
autorRouter.put("/autor/:id", actualizarAutor)
autorRouter.delete("/autor/:id", eliminarAutor)