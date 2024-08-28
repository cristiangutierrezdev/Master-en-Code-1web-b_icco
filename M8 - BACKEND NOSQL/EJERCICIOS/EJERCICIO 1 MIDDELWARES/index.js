import express from 'express';

const app = express();


const autenticacion = function(req, res, next){
    const user = "jose"
    const {userName} = req.query;

    if(userName === "jane"){
        next()
    }

  if( req.query.user === user){
    next()
  }else{
    res.status(401).send("<p>No estas autenticado</p>")
  }
}

app.get("/", function(req,res){
    res.send("<h1>Pagina Principal Bienvenido</h1>")
})

app.use(autenticacion)

app.get("/profile/:name", function(req,res){
    const {name} = req.params
    res.send(`<h2>Pagina de perfil de ${name} </h2>`)
})


app.listen(3000)
console.log("server listening on " +3000);