import axios from 'axios'

const urlBase = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1"

function obtenerUnicornios() {
    axios.get(`${urlBase}/unicorns`)
        .then((respuesta) => {
            console.log(respuesta.data);
            console.log("obtube los datos");
        }).catch((err) => {
            console.log("Algo fallo", err);
        })
}

const sugar = {
    name: "Sugar",
    power: "confetti",
    image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-unicornio-dibujado-mano_23-2150616510.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1715731200&semt=ais_user",
    age: 5
}
function creacrUnicornio(nuevoUnicornio) {
    axios.post(`${urlBase}/unicorns`, nuevoUnicornio)
        .then((respuesta) => {
            console.log(`se creo su nuevo unicornio: ${nuevoUnicornio.name}, exitosamente`);
        })
        .catch((error) => { console.log("Algo fallo", error); })
}

obtenerUnicornios()
// creacrUnicornio(sugar)