import express from "express";
import {rutaArreglo} from './routes/arreglo.routes.js'
import { rutaAlumno } from "./routes/alumnos.routes.js";
import {PORT} from './config.js'

const app = express();
// app.use(express.urlencoded())
app.use(express.json());
app.use(express.text());

app.use(rutaArreglo);
app.use(rutaAlumno);


app.listen(PORT,()=>{
  console.log("servidor en el puerto " + PORT);
});
