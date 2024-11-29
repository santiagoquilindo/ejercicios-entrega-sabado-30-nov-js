function generarAleatorios(cantidad) {
    let numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numero);
    }
    return numerosAleatorios;
}
let cantidad = 10;
let resultado = generarAleatorios(cantidad);
console.log(resultado);
