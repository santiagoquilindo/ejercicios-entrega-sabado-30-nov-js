let boton = document.getElementById("aumentar");
let contador = document.getElementById("contador");

let valorContador = 0;
boton.addEventListener("click", function() {
    valorContador++;
    contador.textContent = valorContador;
});
