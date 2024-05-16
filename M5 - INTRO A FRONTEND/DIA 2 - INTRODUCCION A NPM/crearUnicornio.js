import axios from 'axios'
import urlBase from './index.js';

export default function crearUnicornio(nuevoUnicornio) {
    axios.post(`${urlBase}/unicorns`, nuevoUnicornio)
        .then((respuesta) => {
            console.log(`se creo su nuevo unicornio: ${nuevoUnicornio.name}, exitosamente`);
        })
        .catch((error) => { console.log("Algo fallo", error); })
}
