function invertirPalabra(cadena) {
    let PalabraInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        PalabraInvertida += cadena[i];
    }
    return PalabraInvertida;
}
let texto = "hola";
let resultado = invertirPalabra(texto);
console.log(resultado);
