import express from 'express';

export const server = express();

server.use(express.text())
server.use(express.json())
server.use(express.urlencoded())

server.get('/productos',(req,res)=>{
    
    res.send('obteniendo productos')
})

server.get('/productos/:id',(req,res)=>{
    const { id } = req.params
    res.send(`obteniendo el producto ${id}`)
})

server.post('/productos', (req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

server.put('/productos/:id',(req,res)=>{
    const { id } = req.params
    res.send(`El producto ${id} se actualizo correctamente`)
})

server.delete('/productos/:id', (req,res)=>{
    const { id } = req.params
    res.send(`usuario ${id} eliminado correctamete`)
})

server.use((req,res) =>{
    res.send('pagina no encontrada')
})


// server.listen(4000)
// console.log('server on port ' + 4000);