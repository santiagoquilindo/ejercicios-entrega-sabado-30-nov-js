function cambiarArray(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] > numeros[j]) {
                let orden = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = orden;
            }
        }
    }
    return numeros;
}

let numeros = [8, 7, 5, 2, 9];
let resultado = cambiarArray(numeros);
console.log(resultado);
