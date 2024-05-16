import axios from 'axios'
import urlBase from './index.js';

function eliminarUnicornio(id) {
    axios.delete(`${urlBase}/unicorns/${id}`)
        .then(() => {
            console.log("se elimino el unicornio con exito");
        })
        .catch((error) => { console.log("Algo fallo", error); })
}

export default eliminarUnicornio;