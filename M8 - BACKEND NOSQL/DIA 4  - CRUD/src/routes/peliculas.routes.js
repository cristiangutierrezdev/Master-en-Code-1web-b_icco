import { Router } from "express";
import { crearUnaPelicula, obtenerTodasLasPeliculas } from "../controllers/peliculas.controllers.js";

export const peliculaRouter = Router()

peliculaRouter.get('/', obtenerTodasLasPeliculas)
peliculaRouter.post('/', crearUnaPelicula)