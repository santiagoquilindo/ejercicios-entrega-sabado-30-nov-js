function contarPalabra(array, palabra) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            contador++;
        }
    }
    return contador;
}
let palabras = ["manzana", "banana", "manzana", "pera", "manzana"];
let resultado = contarPalabra(palabras, "manzana");
console.log(resultado);
