//Crear 3 rutas con express donde me mostraran lo siguiente:
import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 const app = express();
//en la ruta /usuarios me traera un mensaje que diga obteniendo todos los usuarios
app.get('/usuarios', (request, response) =>{
    response.send('Obteniendo los usuarios ' + 5)
})

//en la ruta /usuarios con el parametro id me traiga un mensaje con los datos de ese unico usuario
app.get("/usuarios/:usuarioId",(req,res)=>{
    const {usuarioId} = req.params;
    res.send(`obteniendo el usuario: ${usuarioId}`)
})
//en la ruta /usuarios/:id/foto me traera una foto de internet de una persona simulando al usuario
app.get('/usuarios/:id/foto', (req,res)=>{
    const id = req.params.id
    if(id == 3){
        res.sendFile('./imagenes/foto1.jpg', {
            root:__dirname
        })
        
    }else if (id == 2){
        res.sendFile('./imagenes/foto2.jpg', {
            root:__dirname
        })
    }else{
        res.status(404).send('Usuario no encontrado')
    }
})

//creamos una funcion con el metodo use para cuando no se encuentre una ruta, nos envie un mensaje
app.use((req,res)=>{
    res.send('pagina no encontrada')
})

// app.listen(3000)
// console.log('server on port ' +3000);
// export default app

