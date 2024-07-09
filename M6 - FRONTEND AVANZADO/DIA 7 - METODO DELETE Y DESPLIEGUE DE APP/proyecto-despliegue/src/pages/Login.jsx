import { useContext } from "react";
import { AutenticacionContexto } from "../contexts/Autenticacion";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setAutenticado } = useContext(AutenticacionContexto);
  const navigate = useNavigate();

  const ingresar = () => {
    setAutenticado(true);
    navigate("/unicornios");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={ingresar}>Ingresar</button>
    </div>
  );
}

export default Login;
