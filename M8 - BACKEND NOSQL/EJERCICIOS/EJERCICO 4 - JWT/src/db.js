import { connect } from "mongoose";

export const conexion = (async()=>{
    try{
        await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rv5lj.mongodb.net/${process.env.DB_DATABASE}`)
        console.log("Base de datos conectada");
    }catch(err){
        console.log(err);
    }
})()