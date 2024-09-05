import mongoose from "mongoose";

export async function conexion(){
    try{
        const result = await mongoose.connect("mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/cinema")
        console.log("DB connected");
    }catch(error){
        console.log(error);
    }
}

conexion()