import express from "express";
import conexion from "./db.js";
import { User } from "./userSchema.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("./index.html", {
    root: __dirname,
  });
});

app.get("/users", async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    await User(req.body).save();
    res.send("Usuario Creado");
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email });

    if (usuario) {
      const comparacion = await usuario.comparacionContrasenas(password);

      if (comparacion) {
        res.status(302).sendFile("./user.html", {
          root: __dirname,
        });
      } else {
        res.status(401).send("Contraseña incorrecta");
      }
    } else {
      res.status(404).send("Usuario no existe");
    }
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("Server on port " + 4000);
});

