import express from 'express';

export const app = express();

app.get('/:id', (req, res) =>{
    console.log(req.query);
    const querys = req.query.x
    console.log(querys);
    const {id } = req.params
    res.send(`hola ${id}`)
})



app.listen(3000,()=>{
    console.log('server on port '+3000);
})