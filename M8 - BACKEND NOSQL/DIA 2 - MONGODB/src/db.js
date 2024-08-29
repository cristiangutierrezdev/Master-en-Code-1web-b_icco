import mongoose from "mongoose";

// nueva manera de manejar promesas
 export async function conexion () {
    try{
        const result = await mongoose.connect("mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/");
        console.log("DB connected");
    }
    catch(err){
        console.log(err);
    }
};

//Antigua manera de manejar promesas con una variable
// export const conexion = mongoose
//   .connect("mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/")
//   .then(function (res) {
//     console.log("DB connected");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



//Antigua manera de manejar promesas con una funcion
// export function conexion() {
//   mongoose
//     .connect("mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/")
//     .then((res) => {
//       console.log("Db connected");
//     })
//     .catch((err) => {
//         res.send()
//         console.log(err);
//     });
// }
