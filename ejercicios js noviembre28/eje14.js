function combinarArrays(array1, array2) {
    let arrayCombinado = [];
    for (let i = 0; i < array1.length; i++) {
        arrayCombinado.push(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        arrayCombinado.push(array2[i]);
    }
    return arrayCombinado;
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let resultado = combinarArrays(array1, array2);
console.log(resultado);
