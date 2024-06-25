import { Link } from "react-router-dom"
function Home() {
  return (
    <div>
      <h1>Home</h1>
        <Link to='/mostrar-perros'>Mostrar perros</Link>
        <br/>
        <br/>
        <Link to='/mostrar-gatos'>Mostrar gatos</Link>
    </div>
  )
}

export default Home