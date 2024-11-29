function eliminarDuplicados(array) {
    let sinDuplicados = [];
    for (let i = 0; i < array.length; i++) {
        if (!sinDuplicados.includes(array[i])) {
            sinDuplicados.push(array[i]);
        }
    }
    return sinDuplicados;
}
let numeros = [1, 2, 3, 2, 4, 5, 5, 6];
let resultado = eliminarDuplicados(numeros);
console.log(resultado);
