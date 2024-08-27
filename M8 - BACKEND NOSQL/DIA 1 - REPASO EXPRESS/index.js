import express from "express";

const users = [ "john", "jane", "pepito", "juanito"]

const app = express();
app.use(express.json())

function autenticacion (req, res, next){
    console.log(`Query: ${req.query.userName}`);
    const nombreUsuario = req.query.userName
    console.log(`Metodo: ${req.method}`);

    const usuarios = users.find((usuario)=>{
        return nombreUsuario === usuario
    })
    console.log(usuarios);
    if(usuarios === nombreUsuario ){
        next()
    }else{
        res.status(401).sendStatus(401)
    }
}

app.get("/", function (peticion, respuesta) {
    respuesta.send("<h2>Pagina principal</h2>");
  });

app.use(autenticacion)

app.get("/:id", function (peticion, respuesta) {
    const nombreUsuario = peticion.query.userName
  respuesta.send(`<p>id usuario: ${peticion.params.id}</p> 
                  <p>Nombre:<b> ${nombreUsuario}</b></p>`);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto " + 3000);
});
