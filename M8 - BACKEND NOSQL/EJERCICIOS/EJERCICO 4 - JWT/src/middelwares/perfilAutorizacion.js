import jwt from "jsonwebtoken";

export const autorizacion = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
        const token = bearerToken.split(" ")[1]
        const decoded = jwt.verify(token, process.env.TOKEN_FIRMA)
        req.perfil = decoded.usuarioId
        next()

    } else {
      res.status(401).json({ message: "No Autorizado" });
    }
  } catch (error) {
    res.status(500).send(error.name)
  }
};
