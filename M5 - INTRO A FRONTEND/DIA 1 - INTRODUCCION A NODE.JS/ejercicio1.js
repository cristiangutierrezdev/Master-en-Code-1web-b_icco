console.log("Inicio de la ejecucion");

const numero1 = 15;
const numero2 = 35;

setTimeout(()=>{
    function suma(a, b){
        return a + b
    }
    
    console.log(suma(numero1, numero2));
}, 3000)

console.log("Fin de la ejecucion");