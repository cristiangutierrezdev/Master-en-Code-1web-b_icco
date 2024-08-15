import pg from 'pg'
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER } from './config.js'

export const conexion = new pg.Pool({
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    port:DB_PORT
})
