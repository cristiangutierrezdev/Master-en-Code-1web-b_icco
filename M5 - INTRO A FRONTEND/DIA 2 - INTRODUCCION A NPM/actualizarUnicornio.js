import axios from 'axios'
import urlBase from './index.js';

export default function actualizarUnicornio(id, newData) {
    axios.put(`${urlBase}/unicorns/${id}`, newData)
        .then(() => {
            console.log("unicornio actualizado con exito");
        })
        .catch((error) => { console.log("Algo fallo", error); })
}

