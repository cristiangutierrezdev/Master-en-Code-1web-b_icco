import { Router } from "express";
import { obtenerAlumnos } from "../controllers/alumnos.controllers.js";

export const rutaAlumno = Router();

rutaAlumno.get("/usuarios", obtenerAlumnos);
