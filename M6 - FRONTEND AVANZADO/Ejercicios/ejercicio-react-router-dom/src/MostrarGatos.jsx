import axios from "axios"
import { useEffect, useState } from "react"

function MostrarGatos() {
    const [datos, setDatos] = useState([])
    const link = " https://api.thecatapi.com/v1/images/search?limit=10"

    useEffect(() => {
        axios.get(link)
            .then((res) => {
                setDatos(res.data);
            })
            .catch((err) => { console.log(err); })
    }, [])
    console.log(datos);

    return (
        <>
            <div>MostrarGatos</div>
            {datos.map((gato, index) => {
                return (
                    <img key={index} src={gato.url} />
                )
            })}
        </>
    )
}

export default MostrarGatos