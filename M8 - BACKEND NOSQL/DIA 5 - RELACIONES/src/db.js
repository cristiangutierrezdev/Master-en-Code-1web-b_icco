import { connect } from "mongoose";

export const conexion = (async () => {
  try {
    const result = await connect(
      "mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/minimarket"
    );
    console.log("Db connected");
  } catch (err) {
    console.log(err);
  }
})();
