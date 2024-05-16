import axios from 'axios'
import actualizarUnicornio from './actualizarUnicornio.js'
import crearUnicornio from './crearUnicornio.js'
import eliminarUnicornio from './eliminarUnicornio.js'
import obtenerUnicornios from './obtenerUnicornios.js'

const urlBase = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1"

export default urlBase

const devf = {
    name: "Dev.f",
    power: "Programar",
    image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-unicornio-dibujado-mano_23-2150616510.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1715731200&semt=ais_user",
    age: 2
}
const newDevf = {
    age: 6
}

// actualizarUnicornio("66456459eeee79f99553bdc0", newDevf)
obtenerUnicornios()
// crearUnicornio(devf)
// eliminarUnicornio("66456459eeee79f99553bdc0")
