import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Esto es el home</h1>
      <Link to="/otra-pagina/1234/Jane">Ir a otra página</Link>
    </div>
  );
}

export default Home;
