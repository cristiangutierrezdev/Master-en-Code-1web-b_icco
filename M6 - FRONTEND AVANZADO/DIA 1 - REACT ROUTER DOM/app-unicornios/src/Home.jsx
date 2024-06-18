import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function Home(){
    return(
        <>
        <Button as={Link} to={'crear-unicornio'} variant="primary">Crear Unicornio</Button>
        <Button as={Link} to = {'obtener-unicornios'} variant="secondary">Mostrar Unicornios</Button>
        </>
    )
}
export default Home
