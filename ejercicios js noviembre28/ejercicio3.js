function encontrarMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}
let numeros = [2, 3, 4, 5, 6];
let resultado = encontrarMayor(numeros);
console.log(resultado);
