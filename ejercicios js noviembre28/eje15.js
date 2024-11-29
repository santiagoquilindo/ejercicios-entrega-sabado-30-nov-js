function encontrarDuplicados(array) {
    let duplicados = [];
    let vistos = [];
    for (let i = 0; i < array.length; i++) {
        if (vistos.includes(array[i]) && !duplicados.includes(array[i])) {
            duplicados.push(array[i]);
        } else {
            vistos.push(array[i]);
        }
    }
    return duplicados;
}
let numeros = [1, 2, 3, 2, 4, 5, 6, 3];
let resultado = encontrarDuplicados(numeros);
console.log(resultado);
