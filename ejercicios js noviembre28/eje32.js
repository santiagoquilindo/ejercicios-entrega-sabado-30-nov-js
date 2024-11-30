function hoyMap(arreglo, funcion) {
    let resultado = [];

    for (let elemento of arreglo) {
        resultado.push(funcion(elemento)); 
    }

    return resultado;
}
let numeros = [4, 8, 7, 1, 9];
let duplicados = hoyMap(numeros, function(x) {
    return x * 2;
});

console.log(duplicados); 
