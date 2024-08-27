import express from "express";

const app = express();

function autenticacion (req,res,next){
    console.log(`Metodo : ${req.method}`);
    const autenticacion = req.query.userName;
  
    if (autenticacion === "jane") {
      next();
    } else {
        res.send("<h2>No estas autenticado en la base de datos</h2>");
    }
}

app.get("/api/v1/unicorns", function (peticion, respuesta) {
  console.log(peticion.params);
  respuesta.send("<h2>Pagina principal</h2>");
});

app.use(autenticacion);

app.get("/:id", function (peticion, respuesta) {
    const nombreUsuario = peticion.query.userName
  respuesta.send(`<p>id usuario: ${peticion.params.id}</p> 
                  <p>Nombre: ${nombreUsuario}</p>`);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto " + 3000);
});
