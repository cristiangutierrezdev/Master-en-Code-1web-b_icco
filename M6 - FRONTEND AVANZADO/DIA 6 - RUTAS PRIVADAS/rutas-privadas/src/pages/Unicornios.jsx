import axios from "axios"
import { useEffect } from "react"
import { useContext } from "react"
import { EstadoGlobal } from "../context/EstadoGlobal"
import { useNavigate } from "react-router-dom"

function Unicornios() {
  const estadoGlobal = useContext(EstadoGlobal)
  const url = 'https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns'
  const navigate = useNavigate()

  useEffect(() => {
    if (!estadoGlobal.autenticar)
      navigate('/')
  }, [estadoGlobal.autenticar])

  useEffect(() => {
    axios.get(url)
      .then(datos => {
        estadoGlobal.setDatos(datos.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const logout = () => {
    estadoGlobal.setAutenticar('false')
    navigate('/')
  }

  return (
    <>
      <div>Unicornios</div>
      {estadoGlobal.datos.map((unicornio) => {
        return <h5 key={unicornio._id}>{unicornio.name}</h5>
      })}
      <button onClick={() => { logout() }}>Logout</button>
    </>
  )
}

export default Unicornios