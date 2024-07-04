import { useNavigate } from "react-router-dom"

function Regresar() {
    const navigate = useNavigate()
  return (
    <div style={{cursor:"pointer"}} onClick={()=>{navigate(-1)}}>Regresar</div>
  )
}

export default Regresar