function generarNumeros() {
    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        numeros.push(i);
    }
    return numeros;
}
let listaNumeros = generarNumeros();
console.log(listaNumeros);
