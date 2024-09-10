import { Router } from "express"
import { crearProducto, obtenerProductos } from "../controllers/producto.controllers.js"

export const rutaProducto = Router()


rutaProducto.get("/productos", obtenerProductos)
rutaProducto.post("/productos", crearProducto)
rutaProducto.put("/productos")
rutaProducto.delete("/productos")