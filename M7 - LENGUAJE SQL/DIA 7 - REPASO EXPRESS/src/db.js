import pg from 'pg'

export const conexion = new pg.Pool({
    database:"devf3",
    user:"postgres",
    password: "root",
    port: 5432
})

// conexion.query("SELECT NOW()").then((resultado)=>{
//     console.log(resultado);
// })