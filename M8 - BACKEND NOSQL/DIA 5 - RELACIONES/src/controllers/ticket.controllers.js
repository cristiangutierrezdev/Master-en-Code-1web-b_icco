import Ticket from "../models/ticketSchema.js";

export const obtenerTickets = async (req, res) => {
  try {
    const result = await Ticket.find().populate("producto")
    .populate("cliente");
    res.status(200).json(result);
  } catch (err) {
    res.status(404).senStatus(404);
    console.log(err);
  }
};
export const crearTicket = async (req, res) => {
  try {
    const result = await Ticket(req.body).save();
    res.status(201).sendStatus(201);
  } catch (err) {
    res.status(500).senStatus(500);
    console.log(err);
  }
};
