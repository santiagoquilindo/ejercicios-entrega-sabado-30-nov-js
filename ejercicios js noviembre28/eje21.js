let boton = document.getElementById("cambio-texto");
let parrafo = document.getElementById("mi-parrafo");
boton.addEventListener("click", function() {
    parrafo.textContent = "cambie el texto.";
});
