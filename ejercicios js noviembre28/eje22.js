let campo = document.getElementById("campoTexto");
let mostrar = document.getElementById("mostrarTexto");
campo.addEventListener("input", function() {
    mostrar.textContent = campo.value;
});
