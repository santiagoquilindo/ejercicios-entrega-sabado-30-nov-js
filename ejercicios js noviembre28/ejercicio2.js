function calcularSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

let numeros = [1, 2, 3, 4, 5];
let resultado = calcularSuma(numeros);
console.log(resultado);
