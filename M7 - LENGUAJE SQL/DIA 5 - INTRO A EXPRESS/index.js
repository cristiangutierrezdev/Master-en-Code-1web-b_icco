// import http from 'http'
// import fs from 'fs'

// Creamos el servidor y enviamos un archivo html solo con node
// const server = http.createServer((request, response)=>{
//     const read = fs.createReadStream('./index.html')
//     read.pipe(response)
// })

// server.listen(3000)
// console.log("servidor en puerto " +3000);

// Creamos el servidor y enviamos un mensaje solo con node

// const server = http.createServer((req, res) =>{
//     const mensaje = 'este es un mensaje desde el servidor'
//     res.writeHead(200, {'Content-Type' : 'text/html'})
//     res.write(mensaje)
//     res.end()
// })

// server.listen(3000)
// console.log('servidor en el puerto ' +3000);

//Iniciamos con express
//creamos varias rutas y mostramos diferentes archivos y mensajes
// import express from "express";
// import { fileURLToPath } from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();

// Enviamos al cliente el archivo html que creamos al inicio
// app.get("/archivo", (req, res) => {
//   res.sendFile("./index.html", {
//     root: __dirname,
//   });
// });

//Enviamos al cliente una imagen con Express
// app.get("/imagen", (req, res) => {
//   res.sendFile("./imagenes/devf.png", {
//     root: __dirname,
//   });
// });

// Enviamos al cliente un video con Express
// app.get("/video", (req, res) => {
//   res.sendFile("./videos/video.mkv", {
//     root: __dirname,
//   });
// });

//Enviamos al cliente un mensaje con Express
// app.get("/api/v1/unicorns", (req, res) => {
//   res.send("Hola unicornios");
// });

//Enviamos al cliente un archivo tipo json con Express
// app.get('/json', (req,res)=>{
//     res.json({"name":"John", "Lastname": "Doe"})
// })

////Enviamos al cliente un mensaje con el dato siempre y cuando la url este mal definida por parte del cliente
// app.use((req,res)=>{
//     res.sendStatus(303)
// })

//Definimos el puerto en el cual vamos a escuchar nuestro servidor
// app.listen(3000);
// console.log("servidor en el puerto " + 3000);

//Usamos Express para obtener datos mediante la URL conocidos como parametros
import express from 'express'

const app = express();
const PORT = 4000

app.get('/usuarios', (req, res) =>{
    res.send('estoy obteniendo todos los usuarios')
})

//Siempre que queremos recibir variables por la URl utilizamos los 2 puntos
//de esta manera aseguramos que el dato que vamos a recibir es un dato variable
app.get('/usuarios/:id', (req, res) =>{
    console.log(req.params);
    const { id } = req.params
    res.send('estoy obteniendo el usuario ' + id)
})



app.listen(PORT);
console.log('Server on port ' + PORT);

//Crear 3 rutas con express donde me mostraran lo siguiente:
//en la ruta /usuarios me traera un mensaje que diga obteniendo todos los usuarios
//en la ruta /usuarios con el parametro id me traiga un mensaje con los datos de ese unico usuario
//en la ruta /usuarios/:id/foto me traera una foto de internet de una persona simulando al usuario
