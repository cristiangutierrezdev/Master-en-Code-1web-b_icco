import { Router } from "express";
import { Libros } from "../models/libroSchema.js";

export const libroRouter = Router();

libroRouter.get("/", async (req, res) => {
  try {
    const result = await Libros.find();
    res.json(result);
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});
libroRouter.post("/", async (req, res) => {
  try {
    const libro = Libros(req.body);
    const result = await libro.save();
    res.status(201).send("Libro creado");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
});
