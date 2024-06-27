import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MostrarUnicornios({ url }) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
                setObtenerUnicornios(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <div>Mostrar Unicornios</div>
            {data.map((unicornio) => {
                return (
                    <div style={{display:"flex", columnGap:"10px", marginBottom:"15px"}} key={unicornio._id}>
                        <Link to={`/actualizar-unicornio/${unicornio._id}`} >{unicornio.name}</Link>
                    </div>
                )
            })}
        </>

    )
}

export default MostrarUnicornios