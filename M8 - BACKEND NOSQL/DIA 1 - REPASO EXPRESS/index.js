import express from 'express'

const app = express()

app.use(function(peticion, respuesta, next){
    console.log(`Metodo : ${peticion.method}`);
    console.log("esto es antes de llegar al servidor");
    next()
})

app.get('/', function(peticion, respuesta){
    console.log(peticion.params);
    respuesta.send("<h2>Pagina principal</h2>")
}) 


app.get('/:id', function(peticion, respuesta){
    console.log(peticion.query);
    respuesta.send(`<p>Usuario ${peticion.params.id}</p>`)
}) 



app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto " + 3000);
})


