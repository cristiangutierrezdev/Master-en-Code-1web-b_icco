import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { EstadoGlobal } from "../context/EstadoGlobal"

function Home() {
  const navigate = useNavigate()
  const estadoGlobal = useContext(EstadoGlobal)

  const login = ()=>{
    estadoGlobal.setAutenticar(true)
    navigate('/unicornios')
  }


  return (
    <div style={{ display: "flex", width: "100%", height: "80vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Login</h1>
      <button onClick={()=>{login()}}>Login</button>
    </div>
  )
}

export default Home