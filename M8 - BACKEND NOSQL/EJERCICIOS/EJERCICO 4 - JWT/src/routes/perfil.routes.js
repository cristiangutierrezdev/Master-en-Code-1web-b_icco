import { Router } from "express";
import { crearPerfil, obtenerPerfiles, obtenerToken, perfil } from "../controller/perfil.controllers.js";
import { autorizacion } from "../middelwares/perfilAutorizacion.js";

export const perfilRouter = Router()

perfilRouter.get("/perfiles", obtenerPerfiles)
perfilRouter.post("/perfiles", crearPerfil)
perfilRouter.post("/token", obtenerToken)
perfilRouter.get("/perfil", autorizacion, perfil)