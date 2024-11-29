function crearObjeto(claves, valores) {
    let objeto = {};
    for (let i = 0; i < claves.length; i++) {
        objeto[claves[i]] = valores[i];
    }
    return objeto;
}
let claves = ["nombre", "edad", "ciudad"];
let valores = ["luis", 25, "Popayan"];
let resultado = crearObjeto(claves, valores);
console.log(resultado);
