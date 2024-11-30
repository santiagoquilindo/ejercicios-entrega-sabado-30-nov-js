let botonIniciar = document.getElementById("botonIniciar");
let entradaSegundos = document.getElementById("segundos");
let mostrarTiempo = document.getElementById("mostrarTiempo");
function iniciarTemporizador() {
    let tiempo = parseInt(entradaSegundos.value); 

    if (isNaN(tiempo) || tiempo <= 0) {
        mostrarTiempo.textContent = "Por favor, ingresa un número valido.";
        return;
    }

    clearInterval(intervalo);
    intervalo = setInterval(function() {
        mostrarTiempo.textContent = `Tiempo restante: ${tiempo} segundos`;

        if (tiempo <= 0) {
            clearInterval(intervalo); 
            mostrarTiempo.textContent = "¡Tiempo finalizado!";
        } else {
            tiempo--;
        }
    }, 1000);
}
botonIniciar.onclick = iniciarTemporizador;

