function numMayor(array, empieza) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > empieza) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}
let numeros = [5, 12, 8, 15, 3, 20];
let empieza = 10;
let mayores = numMayor(numeros, empieza);
console.log(mayores);
