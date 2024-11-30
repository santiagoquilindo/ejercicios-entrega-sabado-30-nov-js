let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function jugar() {
    let intentos = 0; 
    let adivinado = false;

    while (!adivinado) {
        let respuesta = parseInt(prompt("Adivina el numero entre 1 y 100:"));

        if (isNaN(respuesta) || respuesta < 1 || respuesta > 100) {
            alert("ingresa un numero valido entre 1 y 100.");
            continue;
        }

        intentos++; 

        if (respuesta === numeroSecreto) {
            alert(`Adivinaste el numero en ${intentos} intentos.`);
            adivinado = true; 
        } else if (respuesta < numeroSecreto) {
            alert("El numero secreto es mayor.");
        } else {
            alert("El numero secreto es menor.");
        }
    }
}
jugar();
