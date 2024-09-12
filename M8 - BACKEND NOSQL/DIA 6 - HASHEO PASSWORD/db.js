import { connect } from "mongoose";

 const conexion = (async () => {
  try {
    await connect("mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/")
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
})();



export default conexion