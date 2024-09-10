import { Router } from "express";
import { crearTicket, obtenerTickets } from "../controllers/ticket.controllers.js";
export const ticketRouter = Router();


ticketRouter.get("/tickets", obtenerTickets)
ticketRouter.post("/tickets", crearTicket)