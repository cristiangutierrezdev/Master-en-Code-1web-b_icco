import {connect} from "mongoose";

export async function conexion() {
  try {
    const result = await connect(
      "mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/"
    )
    console.log("Db connected");;
  } catch (error) {
    console.log(error);
  }
}

conexion()
