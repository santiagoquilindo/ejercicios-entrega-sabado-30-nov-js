function esPar(numero) {
    if (numero % 2 === 0) {
        return "es par";
    } else {
        return "es impar";
    }
}
let numero = 3;
let resultado = esPar(numero);
console.log(resultado);
