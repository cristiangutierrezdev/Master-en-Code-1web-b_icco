import { Router } from "express";
import {
  actualizarCliente,
  crearClientes,
  eliminarClientes,
  obtenerCliente,
  obtenerClientes,
} from "../controllers/cliente.controllers.js";

export const rutaCliente = Router();

rutaCliente.get("/cliente", obtenerClientes);
rutaCliente.get("/cliente", obtenerCliente);
rutaCliente.post("/cliente", crearClientes);
rutaCliente.put("/cliente/:id", actualizarCliente);
rutaCliente.delete("/cliente/:id", eliminarClientes);
