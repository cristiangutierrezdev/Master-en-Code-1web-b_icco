import axios from 'axios'
import { useState, useEffect } from 'react'


function MostrarPerros() {
    const link = "https://dog.ceo/api/breeds/image/random/20"
    const [datos, setDatos] = useState([])

    useEffect(() => {
        axios.get(link)
            .then((res) => {
                setDatos(res.data.message);
            })
            .catch(err => {console.log(err); })

    }, [])

    return (
        <>
        <h1>Perritos</h1>
            {datos.map((imagen, index) => {
                return (<img key={index} src={imagen} />)
            })}
        </>

    )
}

export default MostrarPerros