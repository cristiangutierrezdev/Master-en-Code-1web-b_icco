import axios from 'axios'
import urlBase from './index.js';

export default function obtenerUnicornios() {
    axios.get(`${urlBase}/unicorns`)
        .then((respuesta) => {
            console.log(respuesta.data);
            console.log("obtube los datos");
        }).catch((err) => {
            console.log("Algo fallo", err);
        })
}