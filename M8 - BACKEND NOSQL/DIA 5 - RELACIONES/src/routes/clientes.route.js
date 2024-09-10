import { Router } from "express";
import { crearClientes, obtenerClientes } from "../controllers/cliente.controllers.js";

export const rutaCliente = Router()

rutaCliente.get("/cliente", obtenerClientes)
rutaCliente.post("/cliente", crearClientes)
rutaCliente.put("/cliente")
rutaCliente.delete("/cliente")