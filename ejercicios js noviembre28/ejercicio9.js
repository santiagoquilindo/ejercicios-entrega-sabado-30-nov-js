function sumarPares(listaNumeros) {
    let total = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            total += listaNumeros[i];
        }
    }
    return total;
}
let numeros = [3, 14, 16, 30, 33, 210];
let resultado = sumarPares(numeros);
console.log(resultado);
