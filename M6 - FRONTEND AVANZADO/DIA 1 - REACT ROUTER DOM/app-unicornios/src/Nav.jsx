import { Navbar, Container } from "react-bootstrap"
function Nav(){
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">App de Unicornios</Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default Nav