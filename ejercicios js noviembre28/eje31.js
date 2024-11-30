function contarLetras(texto) {
    let frecuencia = {}; 

    for (let letra of texto) {
        if (frecuencia[letra]) {
            frecuencia[letra]++; 
        } else {
            frecuencia[letra] = 1; 
        }
    }

    return frecuencia; 
}

let resultado = contarLetras("estoy trabajando en javascript");
console.log(resultado);
