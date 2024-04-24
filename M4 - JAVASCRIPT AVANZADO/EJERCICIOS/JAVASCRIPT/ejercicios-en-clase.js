// Desafío: ¡Hora del Popcorn!
// Vas a escribir una función llamada popcornTime que recibe un número que representa el total de granos de maíz para hacer popcorn. La función debe simular hacer el popcorn hasta que todos los granos estén listos.

// Instrucciones:
// Escribe una función llamada popcornTime que tome un parámetro: totalKernels (total de granos de maíz).
// Dentro de la función, usa un bucle para simular hacer el popcorn. Por cada iteración del bucle, vamos hacer un grano de maíz.
// Imprime un mensaje en la consola por cada grano de maíz que sea como "¡Pop!" o algo similar.
// Después de que todos los granos estén listos, imprime un mensaje indicando que el popcorn está listo, como "¡El popcorn está listo!".

function popcornTime(totalKernels) {
  // Bucle para hacer el popcorn
  for (let i = 0; i < totalKernels; i++) {
    console.log("¡Pop!");
  }

  // Imprime un mensaje cuando todos los granos estén listos
  console.log("¡El popcorn está listo!");
}

// Llama a la función con el total de granos de maíz
popcornTime(20); // Ajusta el número de granos según sea necesario

// Desafío: Contar hasta Números Divertidos
// En este desafío, vas a escribir una función llamada countFunnyNumbers que tomará un número entero como entrada y contará desde 1 hasta ese número. Sin embargo, cada vez que encuentres un número que sea múltiplo de 3, en lugar de imprimir el número, imprimirás "¡Divertido!". Si el número es múltiplo de 5, imprimirás "¡Genial!" en su lugar. Y si el número es múltiplo de ambos, imprimirás "¡Divertido y Genial!".

// Instrucciones:
// Escribe una función llamada countFunnyNumbers que tome un parámetro: limit (límite superior para contar).
// Usa un bucle for para iterar desde 1 hasta el número limit.
// Dentro del bucle, usa condicionales if, else if y else para determinar si el número actual es múltiplo de 3, 5, ambos o ninguno. Imprime el mensaje correspondiente para cada caso.
// Ejecuta la función con diferentes valores de limit para ver los resultados.

function countFunnyNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("¡Divertido y Genial!");
    } else if (i % 3 === 0) {
      console.log("¡Divertido!");
    } else if (i % 5 === 0) {
      console.log("¡Genial!");
    } else {
      console.log(i);
    }
  }
}

// Ejecuta la función con diferentes valores de limit
console.log("Contando hasta 15:");
countFunnyNumbers(15);
console.log("\nContando hasta 30:");
countFunnyNumbers(30);
