import { Router } from "express";
import { actualizarUnaPelicula, crearUnaPelicula, eliminarUnaPelicula, obtenerTodasLasPeliculas, obtenerUnaPelicula } from "../controllers/peliculas.controllers.js";

export const peliculaRouter = Router()

peliculaRouter.get('/peliculas', obtenerTodasLasPeliculas)
peliculaRouter.post('/peliculas', crearUnaPelicula)
peliculaRouter.delete('/peliculas/:id', eliminarUnaPelicula)
peliculaRouter.put('/peliculas/:id', actualizarUnaPelicula)
peliculaRouter.get('/peliculas/:id', obtenerUnaPelicula)