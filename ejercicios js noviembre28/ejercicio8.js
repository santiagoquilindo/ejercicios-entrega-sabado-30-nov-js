function NumerosGrandes(lista) {
    let mayores10 = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > 10) {
            mayores10.push(lista[i]);
        }
    }
    return mayores10;
}
let arrayNumeros = [5, 12, 8, 15, 3, 20];
let resultado = NumerosGrandes(arrayNumeros);
console.log(resultado);
