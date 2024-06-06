import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'


function ObtenerUnicornios() {
    const url = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns"
    const [datos, setDatos] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then((datos) => {
                setDatos(datos.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <Container>
            <Row>
                {datos ? (
                    datos.map((unicornio, index) => (
                        <Col className='mb-4' key={unicornio._id}>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src={unicornio.image} />
                                <Card.Body>
                                    <Card.Title>Nombre: {unicornio.name} </Card.Title>
                                    <Card.Text> Poder: {unicornio.power}  </Card.Text>
                                    <Card.Text> Edad: {unicornio.age}  </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))) : <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}> <Spinner animation="border" variant="primary" /></div>
                }
            </Row>
        </Container>

    )
}

export default ObtenerUnicornios