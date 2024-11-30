// Lista de imágenes
let imagenes = ["auto1.jpeg", "auto2.jpeg", "auto3.jpeg"];
let indice = 0; // Índice actual

// Obtener elementos del DOM
let imagen = document.getElementById("imagen");
let botonAnterior = document.getElementById("anterior");
let botonSiguiente = document.getElementById("siguiente");

// Función para mostrar la imagen anterior
botonAnterior.onclick = function() {
    indice = (indice - 1 + imagenes.length) % imagenes.length; // Retroceder
    imagen.src = imagenes[indice]; // Cambiar la imagen
};

// Función para mostrar la imagen siguiente
botonSiguiente.onclick = function() {
    indice = (indice + 1) % imagenes.length; // Avanzar
    imagen.src = imagenes[indice]; // Cambiar la imagen
};


