import { Router } from "express";
import {
  actualizarAlumno,
  crearAlumno,
  eliminarAlumno,
  obtenerAlumno,
  obtenerAlumnos,
} from "../controllers/alumnos.controllers.js";

export const alumnosRuta = Router();

alumnosRuta.get("/alumnos", obtenerAlumnos);
alumnosRuta.post("/alumnos", crearAlumno);
alumnosRuta.get("/alumnos/:id", obtenerAlumno);
alumnosRuta.put("/alumnos/:id", actualizarAlumno);
alumnosRuta.delete("/alumnos/:id", eliminarAlumno);
