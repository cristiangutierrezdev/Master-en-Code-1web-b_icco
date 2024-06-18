import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"

function ObtenerUnicornios() {
    const url = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns"
    const [unicornios, setUnicornios] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(datos => {
                setUnicornios(datos.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(unicornios);
    return (
        <>
            <h1>Soy Obtener Unicornios</h1>
            <Container>
                <Row>
                    {unicornios.map((unicornio) => (
                        <Col key={unicornio._id} className="mb-4">
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src={unicornio.image} />
                                <Card.Body>
                                    <Card.Title>{unicornio.name}</Card.Title>
                                    <Card.Text>{unicornio.power}</Card.Text>
                                    <Card.Text>{unicornio.age}</Card.Text>
                                    <Button variant="primary">Actualizar</Button>
                                    <Button variant="danger">Eliminar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default ObtenerUnicornios