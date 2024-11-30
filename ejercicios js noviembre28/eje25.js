// Obtener los elementos del DOM
let boton = document.getElementById("botonMostrarOcultar");
let contenido = document.getElementById("contenido");

// Función para alternar la visibilidad
boton.addEventListener("click", function() {
    if (contenido.style.display === "oculto") {
        contenido.style.display = "mostró"; // Muestra el contenido
    } else {
        contenido.style.display = "oculto"; // Oculta el contenido
    }
});
