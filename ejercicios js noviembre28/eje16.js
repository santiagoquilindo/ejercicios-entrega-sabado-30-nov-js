function elementosComunes(array1, array2) {
    let comunes = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            comunes.push(array1[i]);
        }
    }
    return comunes;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let resultado = elementosComunes(array1, array2);
console.log(resultado);
