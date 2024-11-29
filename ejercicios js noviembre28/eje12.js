function convertirMayusculas(listaDeFrases) {
    let resultado = [];
    for (let i = 0; i < listaDeFrases.length; i++) {
        let fraseMayusculas = listaDeFrases[i].toUpperCase();
        resultado.push(fraseMayusculas);
    }
    return resultado;
}
let frases = ["hola", "bienvenido", "popayán"];
let enMayusculas = convertirMayusculas(frases);
console.log(enMayusculas);
