import express from "express";
import { PORT } from "./config.js";
import { alumnosRuta } from "./routes/alumnos.routes.js";


const app = express()
app.use(express.json())
app.use(alumnosRuta)

app.listen(PORT, ()=>{
    console.log('servidor en el puerto ' + PORT);
})